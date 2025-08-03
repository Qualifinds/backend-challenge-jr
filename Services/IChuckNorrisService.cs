using ChuckNorrisAPI.Models;

public interface IChuckNorrisService
{
    Task<List<string>> GetCategoriesAsync();
    Task<JokeResponse?> GetJokeByCategoryAsync(string category);
}
