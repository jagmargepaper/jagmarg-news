import { Metadata } from 'next';
import StoryViewer from '@/components/StoryViewer';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Story: ${resolvedParams.slug} | Jagmarg News`,
    description: 'Tap to view the full Web Story on Jagmarg News.',
  };
}

export default async function WebStoryPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const resolvedParams = await params;
  
  // In production, we fetch slides by slug from the WP API.
  // Using dummy slides for demonstration.
  const dummySlides = [
    {
      title: "Major Political Shift in Haryana",
      text: "The state assembly saw intense debates today as the opposition raised crucial questions regarding the new agricultural policies.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Farmers Protest Updates",
      text: "Thousands of farmers have gathered at the borders demanding immediate resolution. Traffic has been diverted across major highways.",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Government's Response",
      text: "The Chief Minister assured that a committee will be formed within 48 hours to address all demands raised by the unions.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return <StoryViewer slides={dummySlides} locale={resolvedParams.locale || 'hi'} />;
}
