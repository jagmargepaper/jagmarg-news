import Link from 'next/link';

export default async function DistrictPage({ params }: { params: { state: string, district: string } }) {
  const state = params.state;
  const district = params.district;
  const formattedState = state.charAt(0).toUpperCase() + state.slice(1).replace('-', ' ');
  const formattedDistrict = district.charAt(0).toUpperCase() + district.slice(1).replace('-', ' ');

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="bg-[#D32F2F] text-white py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-red-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${state}`} className="hover:text-white transition-colors">{formattedState}</Link>
            <span>/</span>
            <span className="text-white">{formattedDistrict}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            {formattedDistrict} News
          </h1>
          <p className="mt-4 text-red-100 text-lg">Hyperlocal coverage, mandi prices, weather, and daily updates for {formattedDistrict}.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Feed */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black uppercase border-b-2 border-[#1A1A1A] pb-2 mb-8">
              Latest from {formattedDistrict}
            </h2>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex gap-4 group cursor-pointer border-b border-gray-100 pb-6">
                  <div className="w-[120px] h-[90px] bg-gray-200 flex-shrink-0"></div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#D32F2F]">Crime</span>
                    <h3 className="font-bold text-lg leading-tight mt-1 group-hover:text-[#D32F2F] transition-colors">
                      Dummy news headline for {formattedDistrict} goes here to show the layout
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* District Dashboard (Weather, Mandi, AQI) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#1A1A1A] text-white p-6">
              <h3 className="font-black uppercase tracking-widest text-sm mb-4">District Dashboard</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Weather</span>
                  <span className="font-bold">34°C (Sunny)</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">AQI</span>
                  <span className="font-bold text-yellow-500">142 (Moderate)</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Mandi (Wheat)</span>
                  <span className="font-bold">₹2,275 / Qtl</span>
                </div>
              </div>
            </div>

            {/* Sidebar Ad (300x250) */}
            <div className="w-full flex justify-center bg-gray-100 p-4 border border-gray-200">
               <div className="w-[300px] h-[250px] bg-gray-200 flex flex-col items-center justify-center">
                 <span className="text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Google AdSense</span>
                 <span className="text-xs font-black tracking-widest text-gray-500">300 x 250</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
