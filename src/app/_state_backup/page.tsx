import Link from 'next/link';

export default async function StatePage({ params }: { params: { state: string } }) {
  // In Next.js 15, params is a promise or treated carefully. For now we use it directly or await it.
  const state = params.state;
  const formattedState = state.charAt(0).toUpperCase() + state.slice(1).replace('-', ' ');

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            {formattedState} News
          </h1>
          <p className="mt-4 text-gray-400 text-lg">Top stories, breaking news, and local updates from {formattedState}.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-2xl font-black uppercase border-b-2 border-[#1A1A1A] pb-2 mb-8">
          Select Your District
        </h2>

        {/* Dummy Districts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Rohtak', 'Hisar', 'Panipat', 'Karnal', 'Ambala', 'Gurugram', 'Faridabad', 'Sonipat'].map((district) => (
            <Link 
              key={district}
              href={`/${state.toLowerCase()}/${district.toLowerCase()}`}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 p-4 text-center hover:bg-[#D32F2F] hover:text-white transition-colors group"
            >
              <h3 className="font-bold text-sm uppercase tracking-wider">{district}</h3>
              <p className="text-[10px] text-gray-400 mt-1 group-hover:text-red-200 uppercase tracking-widest">View News</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
