import NewsArticle from "../components/NewsArticle";
import { news } from "../data/news";

function News() {
  return (
    <>
      <h1>Development News</h1>
      <div className="container">
        <div className="row gy-4">
          {news.map((article) => (
            <div className="col-12" key={article.title}>
              <NewsArticle article={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
