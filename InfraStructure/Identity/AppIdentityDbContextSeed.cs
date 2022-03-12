using Core.Models.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                AppUser user1 = new AppUser {
                    DisplayName = "Ahmed Maher",
                    Email = "AhmedMaher@yahoo.com",
                    UserName = "AhmedMaher@yahoo.com",
                    Address = new Address
                    {
                        Street = "9 st Mashtal Elward",
                        City = "Omrania",
                        State = "Giza",
                        ZipCode = "12095"
                    }
                };
                await userManager.CreateAsync(user1,"12345Cm??");
            }
        }
    }
}
