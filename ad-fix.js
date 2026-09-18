const fs = require('fs');
let code = fs.readFileSync('src/app/[slug]/page.tsx', 'utf8');

// 1. Inject Inline Ads logic
const adLogic = `
  const inlineAdHtml = \`
    <div class="w-full my-8 bg-gray-100 flex flex-col items-center justify-center border border-gray-200 py-8 clear-both">
      <span class="text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
      <span class="text-xs font-black tracking-widest text-gray-400">Responsive In-Article Ad</span>
    </div>
  \`;

  let contentHtml = post.content.rendered;
  const paragraphs = contentHtml.split('</p>');
  
  if (paragraphs.length > 3) {
    paragraphs.splice(2, 0, inlineAdHtml);
  }
  if (paragraphs.length > 7) {
    paragraphs.splice(6, 0, inlineAdHtml);
  }
  if (paragraphs.length > 12) {
    paragraphs.splice(11, 0, inlineAdHtml);
  }
  
  contentHtml = paragraphs.join('</p>');
`;

code = code.replace(
  'const jsonLd = {',
  adLogic + '\n  const jsonLd = {'
);

code = code.replace(
  'dangerouslySetInnerHTML={{ __html: post.content.rendered }}',
  'dangerouslySetInnerHTML={{ __html: contentHtml }}'
);

// 2. Remove the 300x600 Ad and make Read Next sticky
const sidebarAd600 = `<div className="w-full h-[600px] bg-gray-200 flex flex-col items-center justify-center border border-gray-300 relative overflow-hidden sticky top-[100px]">
                <span className="relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
                <span className="relative z-10 text-xs font-black tracking-widest text-gray-500">300 x 600</span>
            </div>`;

code = code.replace(sidebarAd600, '');

// Make Read Next sticky
code = code.replace(
  '<div className="bg-white p-6 border border-gray-200 shadow-sm">',
  '<div className="bg-white p-6 border border-gray-200 shadow-sm sticky top-[100px]">'
);

fs.writeFileSync('src/app/[slug]/page.tsx', code);
console.log('Done!');
