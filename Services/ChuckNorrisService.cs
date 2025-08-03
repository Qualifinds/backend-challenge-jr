using ChuckNorrisAPI.Models;
using System.Text.Json;

public class ChuckNorrisService : IChuckNorrisService
{
    private readonly HttpClient _http;

    public ChuckNorrisService(HttpClient http)
    {
        _http = http;
    }

    public async Task<List<string>> GetCategoriesAsync()
    {
        var response = await _http.GetFromJsonAsync<List<string>>("https://api.chucknorris.io/jokes/categories");
        return response ?? new List<string>();
    }

    public async Task<JokeResponse?> GetJokeByCategoryAsync(string category)
    {
        var url = $"https://api.chucknorris.io/jokes/random?category={category}";
        return await _http.GetFromJsonAsync<JokeResponse>(url);
    }
}
