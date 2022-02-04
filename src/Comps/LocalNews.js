import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
const LocalNews = (props) => {
  const [{ articles, loading }, setArticles] = useState({
    articles: [],
    loading: true,
  });
  useEffect(() => {
    setArticles({ articles: [], loading: true });
    const response = axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${props.country.countryCode}&pageSize=5&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setArticles({ articles: data.articles, loading: false });
      });
  }, [props.country.countryCode]);

  return (
    <div className="local-news-container">
      <h1>Local News</h1>
      <div className="articles">
        {loading ? <div>loading...</div> : <></>}

        {articles.map((article) => (
          <div className="article-container">
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
