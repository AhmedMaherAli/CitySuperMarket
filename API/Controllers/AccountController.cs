using API.DTOs;
using API.Errors;
using Core.Interfaces;
using Core.Models.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class AccountController: ControllerBase
    {

        private readonly UserManager<AppUser> _userManage;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;

        public AccountController(UserManager<AppUser> userManage, SignInManager<AppUser> signInManager, ITokenService tokenService )
        {
            _userManage = userManage;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }
        [Authorize]
        [HttpGet("Secret")]
        public ActionResult Test()
        {
            return Ok("Secet Message");
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserDTO> > Login(LoginDTO loginDTO)
        {
            var user = await _userManage.FindByEmailAsync(loginDTO.Email);
            if (user == null) return Unauthorized(new ApiResponse(401));
            var result = await _signInManager.CheckPasswordSignInAsync(user,loginDTO.Password,false);
            if(!result.Succeeded) return Unauthorized(new ApiResponse(401));
            return new UserDTO
            {
                Email = user.Email,
                Token = _tokenService.GetToken(user),
                DisplayName = user.DisplayName
            };
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserDTO> > Register(RegisterDTO registerDTO)
        {
            var recievedUser = new AppUser
            {
                DisplayName = registerDTO.DisplayName,
                Email = registerDTO.Email,
                UserName = registerDTO.Email,
            };
            var result = await _userManage.CreateAsync(recievedUser,registerDTO.Password);
            StringBuilder message=new StringBuilder("");
            foreach (var error in result.Errors)
            {
                message.Append(error.Description);
            }
            if(!result.Succeeded) return BadRequest(new ApiResponse(400, message.ToString()));
            return new UserDTO
            {
                Email = recievedUser.Email,
                Token = _tokenService.GetToken(recievedUser),
                DisplayName = recievedUser.DisplayName
            };
        }
    }
}
