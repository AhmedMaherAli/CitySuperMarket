using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [ApiExplorerSettings(IgnoreApi =true)]
    [Route("errors")]
    public class ErrorController : ControllerBase
    {
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}
