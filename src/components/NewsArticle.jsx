function NewsArticle({ article }) {
  return (
    <article className="card shadow-sm">
      <div className="card-header">{article.categoryTag}</div>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {article.postDateTime}
        </h6>
        <p className="card-text">{article.text}</p>
      </div>
    </article>
  );
}

export default NewsArticle;
