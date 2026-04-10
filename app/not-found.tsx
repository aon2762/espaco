import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Página não encontrada</p>
      <div className="space-x-4">
        <Link href="/" className="px-6 py-2 bg-blue-500 text-white rounded">
          Ir para Home
        </Link>
        <Link href="/blog" className="px-6 py-2 bg-gray-500 text-white rounded">
          Ir para Blog
        </Link>
      </div>
    </div>
  );
}