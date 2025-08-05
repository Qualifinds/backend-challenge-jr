const express = require('express');
const https = require('https');

const app = express();
const PORT = 5000;
const BASE_URL = 'https://api.chucknorris.io/jokes';


function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject('Error parsing JSON');
        }
      });
    }).on('error', (err) => {
      reject('Request failed: ' + err.message);
    });
  });
}

app.get('/categories', async (req, res) => {
  try {
    const categories = await fetchJson(`${BASE_URL}/categories`);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed categories.' });
  }
});

app.get('/joke/:category', async (req, res) => {
  const category = req.params.category;

  try {
    const categories = await fetchJson(`${BASE_URL}/categories`);

    if (!categories.includes(category)) {
      return res.status(400).json({ error: 'Invalid category.' });
    }

    const joke = await fetchJson(`${BASE_URL}/random?category=${category}`);
    res.status(200).json({
      id: joke.id,
      url: joke.url,
      category,
      value: joke.value,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get joke.' });
  }
});


app.get('/search', async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: 'Query is required.' });
  }

  try {
    const results = await fetchJson(`${BASE_URL}/search?query=${query}`);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Search failed.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
