"use client";

import Link from "next/link";
import { categoryConfig } from "@/data/articles";
import styles from "./ProjectsSidebar.module.css";

interface ProjectsSidebarProps {
  activeCategory?: string;
}

const categoryRoutes: Record<string, string> = {
  fashion: "/fashion",
  culture: "/culture",
  art: "/art",
  design: "/design",
};

export default function ProjectsSidebar({ activeCategory }: ProjectsSidebarProps) {
  return (
    <nav className="page-sidebar">
      <p style={{ fontSize: "13px", fontWeight: 400, marginBottom: "24px", color: "#333" }}>
        Projects
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
        {Object.entries(categoryConfig).map(([key, config]) => (
          <li key={key} className={styles.navItem}>
            <Link
              href={categoryRoutes[key]}
              style={{
                fontSize: "12px",
                color: activeCategory === key ? config.color : "#333",
                letterSpacing: "0.5px",
              }}
            >
              {config.labelEN} {config.labelCN}
            </Link>
            {/* Hover subcategories */}
            <div className={styles.subcategories}>
              {config.subcategories.map((sub) => (
                <span key={sub.id} className={styles.subcategoryItem}>
                  {sub.labelEN} {sub.labelCN}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "24px" }}>
        <Link href="/" style={{ fontSize: "16px", color: "#333" }}>
          ←
        </Link>
      </div>
    </nav>
  );
}
