import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home | YUJING JIA | 贾雨婧",
};

const navItems = [
  { href: "/about", label: "about 关于" },
  { href: "/fashion", label: "fashion 时装" },
  { href: "/culture", label: "culture 文化" },
  { href: "/design", label: "design 设计" },
  { href: "/art", label: "art 艺术" },
  { href: "/contact", label: "contact 联系" },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main className="page-main">
        {/* Left Navigation */}
        <nav className="page-sidebar">
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontSize: "12px",
                    color: "#333",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <div className="page-content">
          <p style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "4px" }}>
            <span style={{ color: "#E06F2B" }}>Yu</span>
            <span style={{ color: "#ED00AC" }}>jing</span>
            {" "}
            <span style={{ color: "#0500C3" }}>Jia</span>
            {" "}is a Chinese fashion/culture writer based in Rotterdam, NL.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            <span style={{ color: "#0500C3" }}>贾</span>
            <span style={{ color: "#E06F2B" }}>雨</span>
            <span style={{ color: "#ED00AC" }}>婧</span>
            是一名生活在荷兰鹿特丹的时尚/文化写作者。
          </p>
          <Image
            src="/images/portrait.png"
            alt="Yujing Jia Photo"
            width={400}
            height={600}
            style={{
              display: "block",
              maxWidth: "400px",
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
