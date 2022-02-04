import { useEffect, useState } from "react";
import axios from "axios";
import newsExample from "./newsExample.png";
const LocalNews = (prop) => {
  const [{ articles, loading }, setArticles] = useState({
    articles: [],
    loading: false,
  });
  useEffect(() => {
    setArticles({ articles: [], loading: true });
    const response = axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${prop.country}&pageSize=5&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((response) => {
        const data = response.data;
        //console.log(data);
        setArticles({ articles: data.articles, loading: false });
      });
  }, [prop.country]);

  return (
    <div className="local-news-container">
      <h1>Local News</h1>
      <div className="articles">
        {loading ? (
          <div>
            loading... newsapi.org now only allows free API calls locally I'll
            be replacing the api soon. this is how it looks locally:
            <img src={newsExample} alt="news"></img>
          </div>
        ) : (
          <></>
        )}

        {articles.map((article) => (
          <div key={article.title.toString()} className="article-container">
            <a target="_blank" rel="noreferrer" href={article.url}>
              <img
                className="article-image"
                src={article.urlToImage}
                alt="artlce"
              ></img>
              <div className="article-title">{article.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalNews;
