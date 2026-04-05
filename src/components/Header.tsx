import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="page-header">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Yujing Jia Logo"
          width={600}
          height={69}
          priority
          unoptimized
          style={{ display: "block", width: "200px", height: "auto" }}
        />
      </Link>
    </header>
  );
}
