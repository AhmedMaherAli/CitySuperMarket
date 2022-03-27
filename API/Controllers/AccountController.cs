using API.DTOs;
using API.Errors;
using API.Extentions;
using AutoMapper;
using Core.Interfaces;
using Core.Models.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController: ControllerBase
    {

        private readonly UserManager<AppUser> _userManage;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;

        public AccountController(UserManager<AppUser> userManage, SignInManager<AppUser> signInManager, ITokenService tokenService, IMapper mapper)
        {
            _userManage = userManage;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _mapper = mapper;
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDTO> > GetCurrentUser()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var user = await _userManage.FindByEmailAsync(email);
            return new UserDTO
            {
                Email = user.Email,
                Token = _tokenService.GetToken(user),
                DisplayName = user.DisplayName
            };

        }
        //U have to be authorize to be able to get the mail from the claims.
        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDTO>> GetAddress()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var user = await _userManage.FindUserByEmailWithAddress(email);
            return _mapper.Map<Address,AddressDTO>( user.Address);
        }
        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDTO>> UpdateAddress([FromBody]AddressDTO addressDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var email = User.FindFirstValue(ClaimTypes.Email);
            var user = await _userManage.FindUserByEmailWithAddress(email);
            user.Address = _mapper.Map<AddressDTO, Address>(addressDTO);
            var result = await _userManage.UpdateAsync(user);
            return (result.Succeeded) ? Ok(addressDTO) : BadRequest(new ApiResponse(400, "Problem updatig the address."));
        }
        [HttpPost("Login")]
        public async Task<ActionResult<UserDTO> > Login([FromBody]LoginDTO loginDTO)
        {
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var user = await _userManage.FindByEmailAsync(loginDTO.Email);
            if (user == null) return Unauthorized(new ApiResponse(401));
            var result = await _signInManager.CheckPasswordSignInAsync(user,loginDTO.Password,false);
            
            if(!result.Succeeded) return Unauthorized(new ApiResponse(401));
            
            UserDTO userToReturn = _mapper.Map<AppUser, UserDTO>(user);
            userToReturn.Token = _tokenService.GetToken(user);
            return userToReturn;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserDTO> > Register([FromBody] RegisterDTO registerDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var recievedUser = _mapper.Map<RegisterDTO,AppUser>(registerDTO);
            var result = await _userManage.CreateAsync(recievedUser,registerDTO.Password);
            
            StringBuilder message=new StringBuilder("");
            foreach (var error in result.Errors)
            {
                message.Append(error.Description);
            }
            
            if(!result.Succeeded) return BadRequest(new ApiResponse(400, message.ToString()));
            
            UserDTO userToReturn = _mapper.Map<AppUser, UserDTO>(recievedUser);
            userToReturn.Token = _tokenService.GetToken(recievedUser);
            return userToReturn;
        }
    }
}
