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
        public IEnumerable<Book> GetBooks(int pageSize = 5, int pageNum = 1)
        {
            var x = _bookContext.Books
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            

            return x;
        }





        //[HttpGet("AllBooks")]
        //public IEnumerable<Book> GetBooks()
        //{
        //    var x = _bookContext.Books
        //        .ToList();

        //    return (x);
        //}

    }
}








