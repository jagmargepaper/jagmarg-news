import { NextResponse } from 'next/server';
import * as googleTTS from 'google-tts-api';

export async function POST(req: Request) {
  try {
    const { text, language } = await req.json();

    // Map googtrans language codes to standard speech codes
    let langCode = 'en'; // default
    if (language === 'hi') langCode = 'hi';
    else if (language === 'pa') langCode = 'pa';
    else if (language === 'gu') langCode = 'gu';
    else if (language === 'bn') langCode = 'bn';
    else if (language === 'mr') langCode = 'mr';
    else if (language === 'ta') langCode = 'ta';
    else if (language === 'te') langCode = 'te';

    // google-tts-api has a 200 character limit per request.
    // For a free/unlimited news reader, we split the text and get a single long base64 string.
    const results = await googleTTS.getAllAudioBase64(text, {
      lang: langCode,
      slow: false,
      host: 'https://translate.google.com',
      splitPunct: ',.?'
    });

    // Combine base64 buffers into a single binary buffer
    const buffers = results.map(res => Buffer.from(res.base64, 'base64'));
    const finalBuffer = Buffer.concat(buffers);
    
    // Return the raw audio MP3 file buffer to the frontend
    return new NextResponse(finalBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': finalBuffer.length.toString()
      },
    });

  } catch (error) {
    console.error("Free TTS Error:", error);
    return NextResponse.json({ error: "Failed to generate free audio" }, { status: 500 });
  }
}
