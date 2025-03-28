using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission11.Data;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace mission11.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BookDbContext _bookContext;
        public BookController(BookDbContext temp) => _bookContext = temp;

        [HttpGet("AllBooks")]
        public IActionResult GetBooks(int pageSize = 5, int pageNum = 1, bool sort = false, [FromQuery] List<string>? bookCategories = null)
        {

            //IQueryable<Book> query = _bookContext.Books;
            var query = _bookContext.Books.AsQueryable();

            if (bookCategories != null && bookCategories.Any())  //check for if there is a category filter
            {
                query = query.Where(b => bookCategories.Contains(b.Category));
            }

            var totalNumBooks = query.Count();

            if (sort) // If sort is true, order by Title
            {
                query = query.OrderBy(b => b.Title);
            }

            


            var paginatedBooks = query
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








