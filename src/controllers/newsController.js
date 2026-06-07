const { getNews } = require("../services/newsServices");
const fs = require("fs").promises

async function searchNews(req, res) {
  try {
    
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ error: "Query required" });
    }
    await fs.appendFile("/var/www/practice1/log.txt",`"${query}" - искал <${req.ip}> <${req.headers['user-agent']}> [${new Date().toISOString()}] \n`)
    const articles = await getNews(query);
    
    res.json(articles);
  } catch (error) {
    console.error("Детали ошибки от API:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}

module.exports = { searchNews };