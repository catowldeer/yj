import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categoryConfig, CategoryKey } from "@/data/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return { title: article.titleEN };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const config = categoryConfig[article.category as CategoryKey];

  // Determine back link based on category
  const categoryRoutes: Record<string, string> = {
    fashion: "/fashion",
    culture: "/culture",
    design: "/design",
    art: "/art",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main
        className="article-detail-main"
        style={{
          flex: 1,
          padding: "40px 60px 60px",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Link
          href={categoryRoutes[article.category] || "/"}
          style={{
            fontSize: "14px",
            color: "#666",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          &lt; Back
        </Link>

        <h1
          style={{
            fontSize: "24px",
            fontWeight: 400,
            marginBottom: "12px",
            color: "#333",
            lineHeight: 1.4,
          }}
        >
          {article.titleEN}
        </h1>

        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "20px",
            color: "#333",
            lineHeight: 1.4,
          }}
        >
          {article.titleCN}
        </h2>

        {(article.date || article.publication) && (
          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: "14px",
              color: "#999",
              marginBottom: "40px",
            }}
          >
            {article.publication && <span>{article.publication}</span>}
            {article.date && <span>{article.date}</span>}
          </div>
        )}

        {article.enSummary && (
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              marginBottom: "24px",
              color: "#333",
            }}
          >
            {article.enSummary}
          </p>
        )}

        {article.cnSummary && (
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              marginBottom: "40px",
              color: "#333",
            }}
          >
            {article.cnSummary}
          </p>
        )}

        {article.externalLink && (
          <a
            href={article.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "15px",
              color: "#333",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Read Full Text 阅读全文{" "}
            <span style={{ fontSize: "18px" }}>›</span>
          </a>
        )}
      </main>
      <Footer />
    </div>
  );
}
