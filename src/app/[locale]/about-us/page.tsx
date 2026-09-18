import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Jagmarg News',
  description: 'Learn about Jagmarg News, our team, ownership, and our mission to deliver fast, accurate, and fearless journalism.',
};

export default function AboutUs() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 bg-white mt-10 shadow-sm rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b pb-4">About Jagmarg News</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8 font-medium">
          "Har Khabar Ka Seedha Rasta"
        </p>

        <p className="mb-6">
          Founded with a vision to revolutionize regional and national digital journalism in India, 
          <strong> Jagmarg News</strong> is your premier destination for fearless, accurate, and hyper-local news. 
          We believe that every district, every state, and every citizen deserves access to verified information 
          that impacts their daily lives.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Our Mission</h2>
        <p className="mb-6">
          To empower the public with the truth. From breaking political developments to local 
          crime reports, entertainment, and sports, we bring the news to you instantly without 
          compromising on accuracy or ethical standards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Ownership & Funding</h2>
        <p className="mb-6">
          Jagmarg News is an independent digital media organization. We are privately owned and 
          funded through a mix of private investments, digital advertising, and future subscription models. 
          Our ownership structure does not dictate our editorial policy, ensuring our newsroom remains 
          unbiased and free from corporate or political pressures.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Our Editorial Standards</h2>
        <p className="mb-6">
          We operate under strict journalistic guidelines aligned with global E-E-A-T (Experience, Expertise, 
          Authoritativeness, and Trustworthiness) principles. Please review our core policies to understand 
          how we operate:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><a href="/fact-checking-policy" className="text-blue-600 hover:underline">Fact-Checking Policy</a></li>
          <li><a href="/corrections-policy" className="text-blue-600 hover:underline">Corrections Policy</a></li>
          <li><a href="/ethics-policy" className="text-blue-600 hover:underline">Editorial & Ethics Policy</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Contact Us</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="mb-2"><strong>Headquarters:</strong> [Insert Full Physical Address Here]</p>
          <p className="mb-2"><strong>General Inquiries:</strong> info@jagmarg.com</p>
          <p className="mb-2"><strong>News Tips:</strong> tips@jagmarg.com</p>
          <p className="mb-2"><strong>Corrections:</strong> corrections@jagmarg.com</p>
          <p className="mb-0"><strong>Phone:</strong> +91-[Insert Phone Number]</p>
        </div>
      </div>
    </main>
  );
}
