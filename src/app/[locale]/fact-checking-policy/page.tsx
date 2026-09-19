import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fact-Checking Policy | Jagmarg News',
  description: 'Learn about Jagmarg News fact-checking process. Our commitment to accuracy, verification, and reliable journalism.',
};

export default function FactCheckingPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 bg-white mt-10 shadow-sm rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b pb-4">Fact-Checking Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
          At Jagmarg News, accuracy is the cornerstone of our journalism. We believe that providing 
          verified, accurate, and unbiased information is our fundamental duty to our readers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">1. Verification Process</h2>
        <p className="mb-4">
          Every story published on Jagmarg News goes through a rigorous multi-tier verification process:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Primary Sources:</strong> Reporters are required to gather information from primary sources, including official documents, eyewitnesses, and direct interviews.</li>
          <li><strong>Cross-Verification:</strong> All critical claims are cross-checked with at least two independent sources before publication.</li>
          <li><strong>Editorial Review:</strong> Before an article goes live, it is reviewed by a Desk Editor or Senior Editor for factual consistency, grammar, and adherence to our ethical guidelines.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">2. Dealing with Rumors and Misinformation</h2>
        <p className="mb-6">
          In an era of rapid information flow, fake news and rumors spread quickly on social media. 
          Jagmarg News actively debunks viral misinformation. We do not publish unverified viral claims 
          unless it is to explicitly clarify their falsehood using verified data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">3. Sourcing and Attribution</h2>
        <p className="mb-6">
          We clearly attribute information to its original source. If data or a quote is taken from 
          another publication, agency, or official handle, we state it explicitly. We prefer named 
          sources to anonymous ones, resorting to anonymity only when the source's safety is at risk 
          and the information is of high public interest.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">4. Continuous Training</h2>
        <p className="mb-6">
          Our editorial staff and stringers undergo regular training on digital verification techniques, 
          reverse image searching, and identifying deepfakes to maintain the highest standards of reporting.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mt-10 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Notice an error?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Despite our strict processes, errors can occasionally occur. If you find a factual inaccuracy, 
            please read our <a href="/corrections-policy" className="text-red-600 hover:underline">Corrections Policy</a> and 
            contact us at <strong>factcheck@jagmarg.com</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
