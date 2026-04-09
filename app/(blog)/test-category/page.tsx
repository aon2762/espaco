import { getPostsByCategorySlug, getAllCategories } from "@/lib/blog-data";

export default function TestPage() {
  const categories = getAllCategories();
  const dicasPosts = getPostsByCategorySlug("dicas-e-truques");

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h1>🔍 Debug Category Page</h1>
      
      <h2>All Categories:</h2>
      <pre style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(categories, null, 2)}
      </pre>
      
      <h2>Posts in "dicas-e-truques":</h2>
      <pre style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(dicasPosts.map(p => ({ slug: p.slug, title: p.title })), null, 2)}
      </pre>

      <h2>Try visiting:</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.slug}>
            <a href={`/category/${cat.slug}`}>
              /category/{cat.slug} ({cat.name})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}