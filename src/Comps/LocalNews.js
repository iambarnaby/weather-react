import { useEffect, useState } from "react";
import axios from "axios";
const LocalNews = (prop) => {
  const [{ articles, loading }, setArticles] = useState({
    articles: [],
    loading: false,
  });
  useEffect(() => {
    setArticles({ articles: [], loading: true });
    const response = axios
      .get(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&country=${prop.country}`
      )
      .then((response) => {
        const data = response.data;
        let half_length = Math.ceil(data.results.length / 2);
        setArticles({
          articles: data.results.splice(0, half_length),
          loading: false,
        });
      });
  }, [prop.country]);

  console.log(articles);

  return (
    <div className="local-news-container">
      <h1>Local News</h1>
      <div className="articles">
        {loading ? <div>loading...</div> : <></>}

        {articles.map((article) => (
          <div key={article.title.toString()} className="article-container">
            <a target="_blank" rel="noreferrer" href={article.link}>
              <img
                className="article-image"
                src={article.image_url}
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
