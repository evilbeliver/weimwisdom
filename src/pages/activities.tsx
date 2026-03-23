import { GalleryGrid } from '@/components/GalleryGrid';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { activityIdeas, fallbackMessage, galleryImages, jobIdeas } from '@/data/siteContent';

export default function ActivitiesPage() {
  return (
    <SiteLayout title="Activities & Jobs | WeimWisdom" description="Fun activities, enrichment ideas, and meaningful jobs for active Weimaraners.">
      <PageHero
        title="Activities & Jobs for dogs who love momentum and purpose"
        description="Move beyond generic exercise with trail time, scent games, water fun, and structured roles that channel energy into partnership."
      />
      <SectionBlock
        title="Favorite ways to burn energy wisely"
        description="These ideas match the breed’s athleticism while keeping recovery, focus, and enjoyment in the mix."
        hasContent={activityIdeas.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={activityIdeas} />
      </SectionBlock>      <SectionBlock
        title="Purpose-driven work ideas"
        description="From running partnerships to search games, these jobs help satisfy instinct and give your Weimaraner a sense of purpose."
        hasContent={jobIdeas.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={jobIdeas} />
      </SectionBlock>      <SectionBlock
        title="See the action"
        description="Visual examples help visitors imagine a routine that suits both dog and human."
        hasContent={galleryImages.length > 0}
        fallback={fallbackMessage}
      >
        <GalleryGrid items={galleryImages.slice(2, 5)} />
      </SectionBlock>
    </SiteLayout>
  );
}
