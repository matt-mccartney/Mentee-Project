const axios = require("axios");
const cheerio = require("cheerio");


async function getNewsSiteSource(url, articleSection, titleSelector) {
  let resp = await axios.get(url);
  if (!(resp.status < 400 && resp.status >= 200)) {
    throw new Error(
      `Error fetching from website: HTTP ${resp.status} - ${resp.statusText}`
    );
  }
  const parser = cheerio.load(resp.data);
  let section = parser(articleSection);
  let articles = [];
  section.map((_, newsArticle) => {
    let title = parser(newsArticle).find(titleSelector).text();
    articles.push(title)
  });
  return articles
}

getNewsSiteSource(
  "https://theverge.com/tech",
  ".duet--content-cards--content-card",
  "h2"
).then(resp => console.log(resp.toString()));

getNewsSiteSource(
    "https://www.nytimes.com/section/technology",
    "article",
    "a"
  ).then(resp => console.log(resp.toString()));
