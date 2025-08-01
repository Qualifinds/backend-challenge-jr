const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Return categories
app.get('/categories', async (req, res) => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).json({ error: 'Failed to fetch data' });
    }
})

// Return joke from specified category
app.get('/joke/:categoryName', async (req, res) => {
    try {

        const { categoryName } = req.params;

        if (!categoryName)
            return res.status(400).send({ error: "Didn't send the required params" });

        const responseCat = await fetch('https://api.chucknorris.io/jokes/categories'); // Replace with your API endpoint
        if (!responseCat.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const categories = await responseCat.json();

        if(!categories.includes(categoryName))
            return res.status(400).send({error: 'No category matches'});

        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`); // Replace with your API endpoint

        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

        const joke = await response.json();

        const payload = {
            id: joke.id,
            url: joke.url,
            category: categoryName,
            value: joke.value
        };

        // const data = await payload.json();

        return res.json(payload);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})