// components/semantic/Article.tsx
import React, { HTMLAttributes } from "react";

interface ArticleProps extends HTMLAttributes<HTMLElement> {
  articleTitle?: string;
}
const Article = ({ children, articleTitle, ...props }: ArticleProps) => (
  <article
    aria-labelledby={articleTitle ? "article-title" : undefined}
    {...props}
  >
    {articleTitle && <h1 id="article-title">{articleTitle}</h1>}
    {children}
  </article>
);
export default Article;
