namespace ChuckNorrisAPI.Models;

public class JokeResponse
{
    public string Id { get; set; } = "";
    public string Url { get; set; } = "";
    public string Value { get; set; } = "";
    public List<string> Categories { get; set; } = new();
}
