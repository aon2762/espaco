import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Espaço Invisível – ferramenta de espaço invisível para Free Fire, Instagram e WhatsApp"
              width={200}
              height={80}
              className="w-50 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Ferramenta</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/sobre-nos" className="hover:text-blue-600">Sobre Nós</Link>
          <Link href="/contacto" className="hover:text-blue-600">Contacto</Link>
        </nav>

      </div>
    </header>
  );
}