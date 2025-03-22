using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission11.Data;

namespace mission11.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BookDbContext _bookContext;
        public BookController(BookDbContext temp) => _bookContext = temp;

        [HttpGet("AllBooks")]
        public IActionResult GetBooks(int pageSize = 5, int pageNum = 1)
        {
            var x = _bookContext.Books
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();
            var totalNumBooks = _bookContext.Books.Count();

            var someObject = new
            {
                Books = x,
                TotalNumBooks = totalNumBooks  
            };

            return Ok(someObject);
        }

    }
}








