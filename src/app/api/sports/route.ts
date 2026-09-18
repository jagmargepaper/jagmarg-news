import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  const seconds = now.getSeconds();
  
  const overs = 15 + Math.floor(seconds / 10);
  const balls = seconds % 6;
  const runs = 120 + (seconds * 2);
  const wickets = Math.floor(seconds / 20);

  const data = {
    match: "India Tour of Australia - 1st T20",
    status: "LIVE",
    team1: { name: "IND", score: runs, wickets: wickets, overs: String(overs) + "." + String(balls), color: "bg-blue-600" },
    team2: { name: "AUS", score: null, wickets: null, overs: null, color: "bg-yellow-500" },
    batting: "IND",
    crr: (runs / (overs + balls/6)).toFixed(2),
    keyMoment: "Kohli " + (40 + seconds) + "* (" + Math.floor(seconds/1.5) + ") - Hardik 12* (6)"
  };

  return NextResponse.json(data);
}
