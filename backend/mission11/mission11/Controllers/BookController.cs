using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission11.Data;

namespace mission11.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BookDbContext _bookContext;
        public BookController(BookDbContext temp) => _bookContext = temp;

        [HttpGet("AllBooks")]
        public IEnumerable<Book> GetBooks()
        {
            var x = _bookContext.Books
                .ToList();

            return (x);
        }

    }
}








