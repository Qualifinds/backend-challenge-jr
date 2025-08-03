//namespace ChuckNorrisAPI.Controllers

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("")]
public class ChuckNorrisController : ControllerBase
{
    private readonly IChuckNorrisService _service;

    public ChuckNorrisController(IChuckNorrisService service)
    {
        _service = service;
    }

    [HttpGet("categories")]
    public async Task<IActionResult> GetCategories()
    {
        var categories = await _service.GetCategoriesAsync();
        return Ok(categories);
    }

    [HttpGet("joke/{category}")]
    public async Task<IActionResult> GetJoke(string category)
    {
        var categories = await _service.GetCategoriesAsync();
        if (!categories.Contains(category))
            return BadRequest($"Invalid category: '{category}'");

        var joke = await _service.GetJokeByCategoryAsync(category);
        if (joke == null) return NotFound();

        return Ok(new
        {
            id = joke.Id,
            url = joke.Url,
            category = category,
            value = joke.Value
        });
    }
}
