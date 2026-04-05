import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "about 关于 | YUJING JIA",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main className="page-main">
        {/* Left Side */}
        <div className="page-sidebar">
          <h1 style={{ fontSize: "15px", fontWeight: 400, marginBottom: "24px" }}>About</h1>
          <Link href="/" style={{ fontSize: "18px", color: "#333" }}>
            ←
          </Link>
        </div>

        {/* Main Content */}
        <div className="page-content">
          {/* Education - English */}
          <div style={{ marginBottom: "24px", fontSize: "15px", lineHeight: 1.8 }}>
            <p>2016-2020 China Central Academy of Fine Arts</p>
            <p>BFA, Fashion and Apparel Design</p>
            <p>2021-2023 Erasmus University Rotterdam</p>
            <p>MA, Cultural Economics and Entrepreneurship</p>
          </div>

          {/* Bio - English */}
          <div style={{ marginBottom: "24px", fontSize: "15px", lineHeight: 1.8 }}>
            <p>Yujing Jia was born in 1998 in Taiyuan, China.</p>
            <p>
              <span style={{ color: "#0500C3" }}>writer</span>,{" "}
              <span style={{ color: "#E06F2B" }}>art lover</span>,{" "}
              <span style={{ color: "#ED00AC" }}>former fashion designer</span>.
            </p>
            <p>
              Creating content for fashion magazines, luxury brands and
              cultural institutions since 2018.
            </p>
          </div>

          {/* Education - Chinese */}
          <div style={{ marginBottom: "24px", fontSize: "15px", lineHeight: 1.8 }}>
            <p>2016-2020 中央美术学院</p>
            <p>BFA 时装设计</p>
            <p>2021-2023 鹿特丹依拉姆斯大学</p>
            <p>MA 文化经济学与创业</p>
          </div>

          {/* Bio - Chinese */}
          <div style={{ marginBottom: "40px", fontSize: "15px", lineHeight: 1.8 }}>
            <p>贾雨婧，1998 年出生于中国太原。</p>
            <p>
              <span style={{ color: "#0500C3" }}>写作者</span>，
              <span style={{ color: "#E06F2B" }}>艺术爱好者</span>，
              <span style={{ color: "#ED00AC" }}>前时装设计师</span>。
            </p>
            <p>自 2018 年起为时尚杂志、奢侈品牌和文化机构创作内容。</p>
          </div>

          {/* Magazine */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>
              Magazine 杂志
            </h2>
            <div style={{ fontSize: "15px", lineHeight: 2 }}>
              <p>T: The New York Times Style Magazine</p>
              <p>Wallpaper</p>
              <p>Harper&apos;s Bazaar</p>
              <p>Marie Claire</p>
              <p>W Magazine</p>
              <p>Modern Weekly</p>
            </div>
          </div>

          {/* Brand */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>
              Brand 品牌
            </h2>
            <div style={{ fontSize: "15px", lineHeight: 2 }}>
              <p>Arc&apos;teryx</p>
              <p>Ami</p>
              <p>Bottega Veneta</p>
              <p>Chanel</p>
              <p>COS</p>
              <p>Dior</p>
              <p>Giorgio Armani</p>
              <p>Hugo Boss</p>
              <p>Iris van Herpen</p>
              <p>La Prairie</p>
              <p>Louis Vuitton</p>
              <p>LOTUS</p>
              <p>Miu Miu</p>
              <p>Maison Margiela</p>
              <p>Mercedes-Benz</p>
              <p>New Balance</p>
              <p>NEIWAI 内外</p>
              <p>Pomellato</p>
              <p>Rosewood</p>
              <p>Rami AI Ali</p>
              <p>Rituals</p>
              <p>Saint Laurent</p>
              <p>Uniqlo</p>
              <p>Valentino</p>
              <p>Zadig &amp; Voltaire</p>
            </div>
          </div>

          {/* Cultural Institution */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>
              Cultural Institution 文化机构
            </h2>
            <div style={{ fontSize: "15px", lineHeight: 2 }}>
              <p>Boros Collection (Berlin, Germany)</p>
              <p>Fondation Beyeler (Basel, Switzerland)</p>
              <p>Hammer Museum (Los Angeles, USA)</p>
              <p>Hauser &amp; Wirth (Hong Kong, China)</p>
              <p>Perrotin Gallery (Hong Kong, China)</p>
              <p>木木美术馆 (Beijing, China)</p>
              <p>松美术馆 (Beijing, China)</p>
              <p>上海当代艺术博物馆 (Shanghai, China)</p>
              <p>设计上海 (Shanghai, China)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
