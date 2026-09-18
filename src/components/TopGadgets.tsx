"use client";

import { TrendingUp, TrendingDown, Sun, CloudRain, Wind, Cloud } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getLiveMarkets } from '@/app/actions/markets';

export default function TopGadgets() {
  const [mounted, setMounted] = useState(false);
  const [weather, setWeather] = useState<{city: string, temp: number, isDay: boolean} | null>(null);
  const [markets, setMarkets] = useState<{sensex: any, nifty: any} | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Fetch live weather
    const fetchWeather = async () => {
      try {
        const geoRes = await fetch('https://ipapi.co/json/');
        const geoData = await geoRes.json();
        const lat = geoData.latitude || 28.61; // Default to Delhi
        const lon = geoData.longitude || 77.23;
        const city = geoData.city || 'New Delhi';

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const weatherData = await weatherRes.json();
        
        setWeather({
          city: city,
          temp: Math.round(weatherData.current_weather.temperature),
          isDay: weatherData.current_weather.is_day === 1
        });
      } catch (e) {
        console.error("Failed to fetch weather");
      }
    };

    const fetchMarketsData = async () => {
      const data = await getLiveMarkets();
      if (data.success) {
        setMarkets({ sensex: data.sensex, nifty: data.nifty });
      }
    };

    fetchWeather();
    fetchMarketsData();
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white border-b border-gray-200 text-xs py-1.5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        
        <div className="flex flex-col md:flex-row w-full md:w-auto md:items-center md:divide-x md:divide-gray-300">
          {/* 1. Stock Market Gadget (LIVE) */}
          <div className="flex items-center justify-between md:justify-start gap-4 md:pr-4 py-1.5 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto px-2 md:px-0">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors notranslate">
              <span className="font-bold">SENSEX</span>
              <span>{markets ? markets.sensex.price.toLocaleString('en-IN') : '80,436.84'}</span>
              <span className={`flex items-center ${markets && markets.sensex.change < 0 ? 'text-red-600' : 'text-green-600'} font-bold`}>
                {markets && markets.sensex.change < 0 ? <TrendingDown className="w-3 h-3 mr-0.5" /> : <TrendingUp className="w-3 h-3 mr-0.5" />}
                {markets ? Math.abs(markets.sensex.change).toFixed(2) : '345.12'}
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors flex notranslate">
              <span className="font-bold">NIFTY</span>
              <span>{markets ? markets.nifty.price.toLocaleString('en-IN') : '24,531.05'}</span>
              <span className={`flex items-center ${markets && markets.nifty.change < 0 ? 'text-red-600' : 'text-green-600'} font-bold`}>
                {markets && markets.nifty.change < 0 ? <TrendingDown className="w-3 h-3 mr-0.5" /> : <TrendingUp className="w-3 h-3 mr-0.5" />}
                {markets ? Math.abs(markets.nifty.change).toFixed(2) : '102.50'}
              </span>
            </div>
          </div>

          {/* 2. Gold / Silver Gadget */}
          <div className="flex items-center justify-between md:justify-start gap-4 md:border-l lg:border-r border-gray-300 md:px-4 py-1.5 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto px-2 md:px-0">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors notranslate">
              <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-500 shadow-[0_0_4px_rgba(250,204,21,0.5)]"></div>
              <span className="font-bold">GOLD</span>
              <span>₹72,450 <span className="text-[10px] text-gray-400 font-normal">/10g</span></span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors flex notranslate">
              <div className="w-2 h-2 rounded-full bg-gray-300 border border-gray-400 shadow-[0_0_4px_rgba(156,163,175,0.5)]"></div>
              <span className="font-bold">SILVER</span>
              <span>₹84,200 <span className="text-[10px] text-gray-400 font-normal">/1kg</span></span>
            </div>
          </div>

        {/* 3. Weather Gadget */}
        <div className="flex items-center justify-center md:justify-start gap-3 md:pl-4 py-1.5 md:py-0 w-full md:w-auto">
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors">
            {weather ? (
              <>
                {weather.isDay ? <Sun className="w-4 h-4 text-orange-500" /> : <Cloud className="w-4 h-4 text-gray-500" />}
                <span className="font-bold truncate max-w-[100px]">{weather.city}</span>
                <span className="text-[#1A1A1A] font-black">{weather.temp}°C</span>
              </>
            ) : (
              <span className="text-gray-400 italic text-[10px]">Loading...</span>
            )}
            <span className="text-[10px] text-gray-500 uppercase tracking-wider ml-1">AQI: Live</span>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
