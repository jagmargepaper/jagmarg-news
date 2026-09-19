import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corrections Policy | Jagmarg News',
  description: 'Our policy on handling errors, corrections, and retractions transparently.',
};

export default function CorrectionsPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 bg-white mt-10 shadow-sm rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b pb-4">Corrections Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
          Jagmarg News is committed to transparent, accurate, and ethical journalism. While we 
          strive for perfection, we acknowledge that errors can happen. When they do, we believe in 
          correcting them quickly, clearly, and transparently.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">How We Handle Corrections</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li>
            <strong>Immediate Action:</strong> Upon realizing a factual error has been published, 
            our editorial team will correct the article as swiftly as possible.
          </li>
          <li>
            <strong>Transparency:</strong> We will append a "Correction" note at the bottom (or top, for major errors) 
            of the article. The note will explain what was wrong, what the correct information is, and the date of the correction.
          </li>
          <li>
            <strong>Social Media Updates:</strong> If the incorrect information was shared on our social media platforms, 
            we will publish a corrected post and, if necessary, delete the incorrect post with a clarification.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Retractions</h2>
        <p className="mb-6">
          In extreme cases where the premise of an entire article is found to be deeply flawed, fabricated, 
          or fundamentally incorrect, we will issue a formal retraction. The article will remain online 
          (for transparency) but will be heavily modified to show an Editor's Note explaining the retraction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Updating Stories</h2>
        <p className="mb-6">
          News is dynamic. When a developing story is updated with new facts, we do not issue a "correction" 
          unless previously reported facts were wrong. Instead, we use timestamps like "Updated on [Date]" 
          to reflect the latest information.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mt-10 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Request a Correction</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We value feedback from our readers. If you believe you have found an error in our reporting, 
            please email us at <strong>corrections@jagmarg.com</strong> with the article link and the specific details of the error.
          </p>
        </div>
      </div>
    </main>
  );
}
