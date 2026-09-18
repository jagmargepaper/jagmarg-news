import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethics Policy | Jagmarg News',
  description: 'Jagmarg News Ethics Policy outlining our core principles, sourcing rules, and conflicts of interest guidelines.',
};

export default function EthicsPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 bg-white mt-10 shadow-sm rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b pb-4">Editorial & Ethics Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">
          Jagmarg News adheres to the highest standards of journalistic integrity. Our readers' trust 
          is our most valuable asset, and we maintain it through strict ethical guidelines.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Independence and Impartiality</h2>
        <p className="mb-6">
          Our newsroom operates independently of any political party, corporate interest, or advertiser influence. 
          Editorial decisions are made solely based on news value and public interest.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Conflicts of Interest</h2>
        <p className="mb-6">
          Our journalists and editors are required to disclose any potential conflicts of interest, including 
          financial investments, political affiliations, or personal relationships that might affect their reporting. 
          If a conflict exists, the reporter will be recused from the story, or the conflict will be explicitly disclosed to the reader.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Anonymous Sourcing</h2>
        <p className="mb-4">
          We prefer all sources to be named on the record. However, we understand that revealing a source's 
          identity can sometimes put them in physical, legal, or professional danger. 
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>We grant anonymity only when the information is highly significant and cannot be obtained otherwise.</li>
          <li>The decision to use an anonymous source must be approved by a Senior Editor.</li>
          <li>We will always explain to our readers *why* the source was granted anonymity (e.g., "who requested anonymity because they were not authorized to speak to the media").</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Bribes, Gifts, and Freebies</h2>
        <p className="mb-6">
          Jagmarg News employees do not accept gifts, free travel, special treatment, or any form of compensation 
          from sources, politicians, or PR agencies that could compromise our objectivity. Reviews of products or 
          services are done independently.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Privacy and Sensitivity</h2>
        <p className="mb-6">
          We respect the privacy of individuals, especially victims of crimes, minors, and marginalized communities. 
          We do not publish names or identifying details of sexual assault survivors under any circumstances, 
          in compliance with Indian law and basic human decency.
        </p>
      </div>
    </main>
  );
}
