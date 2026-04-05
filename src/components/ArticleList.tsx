import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article, i) => (
        <div key={article.slug}>
          {i > 0 && (
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #333",
                margin: "30px 0",
                maxWidth: "85%",
              }}
            />
          )}
          <div style={{ padding: "10px 0" }}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 400,
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {article.titleEN}
            </h3>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 400,
                marginBottom: "16px",
                color: "#333",
                lineHeight: 1.4,
              }}
            >
              {article.titleCN}
            </h4>
            <Link
              href={`/article/${article.slug}`}
              style={{
                fontSize: "11px",
                color: "#666",
              }}
            >
              Read More 阅读更多
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
