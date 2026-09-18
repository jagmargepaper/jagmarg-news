const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');
content = content.replace('export default function Home() {', \import { fetchPosts } from '@/lib/api';\nimport Link from 'next/link';\n\nexport default async function Home() {\n  const posts = await fetchPosts(15);\n  const heroPost = posts[0] || null;\n  const sidebarPosts = posts.slice(1, 4);\n  const formatDate = (d) => new Date(d).toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' });\n\);
fs.writeFileSync('src/app/page.tsx', content);
