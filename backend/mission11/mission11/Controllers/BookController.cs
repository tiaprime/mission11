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
        public IActionResult GetBooks(int pageSize = 5, int pageNum = 1, bool sort = false)
        {

            IQueryable<Book> x = _bookContext.Books;

            if (sort) // If sort is true, order by Title
            {
                x = x.OrderBy(b => b.Title);
            }

            var totalNumBooks = _bookContext.Books.Count();


            var paginatedBooks = x
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            

            var someObject = new
            {
                Books = paginatedBooks,
                TotalNumBooks = totalNumBooks  
            };

            return Ok(someObject);
        }


        [HttpGet("GetCategories")]
        public IActionResult GetBookCategories()
        {
            var BookCategories = _bookContext.Books
                .Select(p => p.Category)
                .Distinct()
                .ToList();
            return Ok(BookCategories);
        }







    }
}








