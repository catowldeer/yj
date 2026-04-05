import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "contact 联系 | YUJING JIA",
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main className="page-main">
        {/* Left Side */}
        <div className="page-sidebar">
          <h1 style={{ fontSize: "15px", fontWeight: 400, marginBottom: "24px" }}>Contact</h1>
          <Link href="/" style={{ fontSize: "18px", color: "#333" }}>
            ←
          </Link>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <div style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            <p>For inquiries regarding collaborations, interviews and event attendance</p>
            <p>
              Please contact me via E-mail:{" "}
              <a
                href="mailto:esther.yujing@gmail.com"
                style={{ textDecoration: "underline" }}
              >
                esther.yujing@gmail.com
              </a>
            </p>
          </div>

          <div style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            <p>关于合作、采访和活动出席</p>
            <p>
              请发送电子邮件垂询：
              <a
                href="mailto:esther.yujing@gmail.com"
                style={{ textDecoration: "underline" }}
              >
                esther.yujing@gmail.com
              </a>
            </p>
          </div>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/catowldeer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ display: "inline-block" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
