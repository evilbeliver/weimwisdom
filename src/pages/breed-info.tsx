import { GalleryGrid } from '@/components/GalleryGrid';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { breedFacts, fallbackMessage, galleryImages, homeHighlights } from '@/data/siteContent';

export default function BreedInfoPage() {
  return (
    <SiteLayout title="Breed Info | WeimWisdom" description="History, temperament, and care guidance for Weimaraners.">
      <PageHero
        title="Breed info that balances beauty, history, and practical care"
        description="Start with the essentials: what the breed was built for, what daily life looks like, and how to support a happy, fulfilled Weimaraner."
      />
      <SectionBlock
        title="History and temperament"
        description="Weimaraners are elegant sporting dogs with serious brains, strong attachment to their people, and a playful streak that needs good outlets."
        hasContent={homeHighlights.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={homeHighlights} />
      </SectionBlock>
      <SectionBlock
        title="Care essentials"
        description="Healthy routines center on exercise, enrichment, calm downtime, and predictable structure."
        hasContent={breedFacts.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={breedFacts} />
      </SectionBlock>
      <SectionBlock
        title="Breed gallery"
        description="Photo-rich content helps visitors connect with the breed while descriptive alt text keeps the experience accessible."
        hasContent={galleryImages.length > 0}
        fallback={fallbackMessage}
      >
        <GalleryGrid items={galleryImages.slice(0, 3)} />
      </SectionBlock>
    </SiteLayout>
  );
}
