import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { text, language } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API Key missing in .env" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    // The prompt instructs Gemini to summarize the news into 3 precise bullet points in the target language.
    const prompt = `
      You are an expert news editor. Summarize the following news article into exactly 3 highly engaging bullet points.
      The output MUST be in the language code provided: '${language}'.
      Do not include any introductory or concluding text. Just return the 3 bullet points separated by newlines, each starting with '• '.
      
      Article Text:
      ${text}
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Parse the bullet points
    const bullets = responseText.split('\n')
      .map(line => line.replace(/^•\s*/, '').trim())
      .filter(line => line.length > 0);

    return NextResponse.json({ summary: bullets });

  } catch (error) {
    console.error("Gemini AI Error:", error);
    return NextResponse.json({ error: "Failed to generate AI summary." }, { status: 500 });
  }
}
