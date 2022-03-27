using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class ModelBase
    {
        [Key]
        public int Id { get; set; }
    }
}
