using Core.Models.Identity;

namespace Core.Interfaces
{
    public interface ITokenService
    {
        string GetToken(AppUser user);
    }
}
