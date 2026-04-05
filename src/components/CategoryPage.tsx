"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSidebar from "@/components/ProjectsSidebar";
import ArticleList from "@/components/ArticleList";
import { articles, categoryConfig, CategoryKey } from "@/data/articles";

interface CategoryPageProps {
  category: CategoryKey;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const config = categoryConfig[category];
  const [activeSubcategory, setActiveSubcategory] = useState<string>(config.subcategories[0].id);

  const filteredArticles = articles.filter(
    (a) => a.category === category && a.subcategory === activeSubcategory
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main className="page-main">
        <ProjectsSidebar activeCategory={category} />

        <div className="page-content">
          <h1
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: config.color,
              marginBottom: "30px",
            }}
          >
            {config.labelEN} {config.labelCN}
          </h1>

          {/* Subcategory Tabs */}
          <div style={{ display: "flex", gap: "40px", marginBottom: "24px", flexWrap: "wrap" }}>
            {config.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id)}
                style={{
                  fontSize: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeSubcategory === sub.id ? "#333" : "#999",
                  textDecoration: activeSubcategory === sub.id ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  padding: 0,
                  fontFamily: "inherit",
                }}
              >
                {sub.labelEN} {sub.labelCN}
              </button>
            ))}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #333",
              marginBottom: "10px",
              maxWidth: "85%",
            }}
          />

          <ArticleList articles={filteredArticles} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
