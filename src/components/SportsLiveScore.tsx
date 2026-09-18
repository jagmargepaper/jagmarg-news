"use client";

import { Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SportsLiveScore() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const res = await fetch('/api/sports');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch sports", err);
      }
    };
    
    fetchScore();
    const interval = setInterval(fetchScore, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <div className="w-full bg-[#1A1A1A] border-b-4 border-[#D32F2F] text-white py-3 overflow-hidden shadow-lg relative notranslate">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"%3E%3C/circle%3E%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Match Header */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#D32F2F] text-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest animate-pulse">
            <Activity className="w-3 h-3" />
            <span>{data.status}</span>
          </div>
          <span className="font-bold text-sm tracking-widest uppercase text-gray-300">{data.match}</span>
        </div>

        {/* Live Score Display */}
        <div className="flex items-center gap-6 md:gap-12 flex-1 justify-center">
          
          <div className="flex items-center gap-3">
            <div className={`w-6 h-4 ${data.team1.color} border border-white relative overflow-hidden rounded-sm`}>
              <div className="absolute inset-x-0 top-1/2 h-[2px] bg-white -translate-y-1/2"></div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-black text-lg md:text-xl">{data.team1.name}</span>
              <span className="text-xs text-gray-400 font-bold -mt-1">{data.batting === data.team1.name ? 'Batting' : 'Yet to bat'}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-black text-2xl md:text-3xl text-yellow-400 leading-none">
              {data.team1.score} / {data.team1.wickets}
            </span>
            <span className="text-sm font-bold text-gray-300">Overs: {data.team1.overs}</span>
            <span className="text-[10px] text-gray-400 tracking-wider uppercase mt-1">CRR: {data.crr}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start">
              <span className="font-black text-lg md:text-xl text-gray-500">{data.team2.name}</span>
              <span className="text-xs text-gray-500 font-bold -mt-1">{data.batting === data.team2.name ? 'Batting' : 'Yet to bat'}</span>
            </div>
            <div className={`w-6 h-4 ${data.team2.color} border border-white relative overflow-hidden rounded-sm`}>
               <div className="absolute top-0 left-0 w-2 h-2 bg-blue-900"></div>
            </div>
          </div>

        </div>

        {/* Key Moment / Match Status */}
        <div className="flex items-center bg-gray-800 border border-gray-700 px-4 py-1.5 rounded-sm">
          <span className="text-xs font-bold text-gray-300">
            {data.keyMoment}
          </span>
        </div>

      </div>
    </div>
  );
}
