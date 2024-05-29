using Microsoft.AspNetCore.Mvc;
using System;

namespace WebSearchMovies.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private static readonly HttpClient client = new HttpClient();
        private const string BaseUrl = "https://api.themoviedb.org/3/search/person";
        private const string AuthToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODMwYzdhN2ZmOTk2M2NmMTg3Njk5YjUxODVmMGUyNiIsInN1YiI6IjY2NTU5NGVhYzhjYTRmYmM4ZTk3ZDMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IaZYwwqR_BGdOdzpaZhF1t4u1oIFNnGwn-WEvp3HcHI";

        [HttpGet("SearchPerson")]
        public async Task<object> SearchMovie(string Value)
        {
            string url = $"{BaseUrl}?query={Value}";
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    var response = await client.GetAsync(url + Value);

                }
                catch (Exception ex)
                {

                }
            }
            return "ok";
        }
    }
}
