export default async function LivePage({ params }: { params: Promise<{ slug: string }> }) { const res = await params; return <div className='pt-32 px-4'><h1>Live: {res.slug}</h1></div>; }
