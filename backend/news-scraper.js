const axios = require("axios");
const cheerio = require("cheerio");


async function getNewsSiteSource(url, articleSection, titleSelector, descriptionSelector, imageSelector) {
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
    if (title !== null || title !== "") {
      articles.push({
        "title": title,
        "description": parser(newsArticle).find(descriptionSelector).text(),
        "image_url": parser(newsArticle).find(imageSelector).attr().src
      })
    }
  });
  return articles
}

/* getNewsSiteSource(
  "https://theverge.com/tech",
  ".duet--content-cards--content-card",
  "h2"
).then(resp => console.log(resp.toString())); */

getNewsSiteSource(
    "https://www.nytimes.com/section/technology",
    "article",
    "a",
    "p",
    "img"
  ).then(resp => resp.map(x => console.log(x.title, "-", x.description, "-", x.image_url)));
