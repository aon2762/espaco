import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.svg" // or "/logo.webp"
              alt="Espaço Invisível – gerador de espaço invisível para Free Fire, Discord, WhatsApp e Instagram"
              width={160}
              height={40}
            />
          </Link>
          <p className="text-gray-400 text-sm">
            Gerador de espaços e caracteres invisíveis para Free Fire, Discord, WhatsApp e mais.
          </p>
        </div>
        
        {/* Pages */}
        <div>
          <h4 className="font-semibold mb-3">Páginas</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/sobre-nos" className="hover:text-white">Sobre Nós</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/termos-e-condicoes" className="hover:text-white">Termos</Link></li>
            <li><Link href="/politica-de-privacidade" className="hover:text-white">Privacidade</Link></li>
            <li><Link href="/isencao-de-responsabilidade" className="hover:text-white">Isenção</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 flex items-end">
          © 2026 Espaço Invisível. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}