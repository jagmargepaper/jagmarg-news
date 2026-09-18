'use server';

export async function getLiveMarkets() {
  try {
    const fetchMarket = async (symbol: string) => {
      const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`, { next: { revalidate: 300 } });
      const data = await res.json();
      const meta = data.chart.result[0].meta;
      const price = meta.regularMarketPrice;
      const prev = meta.chartPreviousClose;
      const change = price - prev;
      return { price, change };
    };

    const [sensex, nifty] = await Promise.all([
      fetchMarket('%5EBSESN'),
      fetchMarket('%5ENSEI')
    ]);

    return { success: true, sensex, nifty };
  } catch (error) {
    console.error('Failed to fetch markets:', error);
    return { success: false };
  }
}
