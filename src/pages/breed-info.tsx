import { GalleryGrid } from '@/components/GalleryGrid';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { breedInfoCare, breedInfoGallery, breedInfoHistory, fallbackMessage } from '@/data/siteContent';

export default function BreedInfoPage() {
  return (
    <SiteLayout title="Breed Info | WeimWisdom" description="History, temperament, and care guidance for Weimaraners.">
      <PageHero
        title="Breed info that balances beauty, history, and practical care"
        description="The Weim Life: what the breed was built for, what daily life looks like, and how to support a happy, fulfilled Weimaraner."
      />
      <SectionBlock
        title="History and temperament"
        description={[
          "The Gray Ghost: A Noble History",
          "The Weimaraner began as the ultimate \"VIP-only\" hunting partner in the early 19th-century court of Grand Duke Karl August of Weimar. Originally engineered to tackle heavyweights like wolves and bears, these silver-coated hunters were kept under strict lock and key by the German aristocracy. For decades, the breed was so exclusive that you couldn't even own one unless you were a member of the elite German Weimaraner Club. It wasn't until the late 1920s that the breed \"broke\" into the U.S. market, eventually gaining official recognition by the AKC in 1943.",
          "The \"Human Brain\" & DNA",
          "While their exact genetic recipe remains a well-guarded secret, the Weimaraner is a masterclass in canine engineering. It's believed that noblemen blended the Bloodhound's legendary nose with the German Shorthaired Pointer's athleticism and the refined traits of the now-extinct French Grey Saint Louis Hound. This sophisticated mix created a dog so intelligent it earned the nickname \"the dog with the human brain.\" They are born with striking blue eyes and temporary \"tiger stripes,\" eventually maturing into the sleek, amber-eyed athletes we recognize today.",
          "Living with a \"Velcro Dog\"",
          "Owning a Weimaraner is a full-time lifestyle choice. Known as \"Velcro Dogs,\" they don't just follow you—they shadow your every move. Their extreme loyalty is matched only by their massive energy levels; without 1–2 hours of vigorous daily exercise, these dogs will happily \"redecorate\" your home out of boredom. They are the muses of pop culture, famously captured in William Wegman's photography and even haunting the halls of the White House during the Eisenhower administration (until a rug-related incident led to a presidential eviction)."
        ]}
        hasContent={breedInfoHistory.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={breedInfoHistory} />
      </SectionBlock>
      <SectionBlock
        title="Care essentials"
        description={[
          "Health & Care Essentials",
          "With a lifespan of 10–13 years, the Weimaraner is a sturdy companion but does come with specific \"maintenance\" requirements. Their deep chests make them highly susceptible to bloat (gastric torsion), a life-threatening condition that requires immediate attention. Potential owners should also be mindful of hip dysplasia and heart issues. Also due to their athleticism ACL tears are another common injury regarding this breed. While their short, silver-gray coats are low-maintenance, their hearts are high-maintenance—requiring constant companionship to ward off their trademark separation anxiety."
        ]}
        hasContent={breedInfoCare.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={breedInfoCare} />
      </SectionBlock>
      <SectionBlock
        title="Breed gallery"
        description={[
          `Our gallery begins with a glimpse into the Weimaraner's softer side—a silvery shadow enjoying a moment of pure, slightly mischievous bliss. These are true German dogs with sophisticated palates, and as you'll see, their love for their owner often extends to eyeing a cold beer! It seems even ghosts can't resist a good brew.`,
          `Next, the phantom truly comes alive. In this stunning shot, a masterful "Gray Ghost" glides through frosty stalks, showcasing a beautiful pheasant retrieve with effortless grace. We finish with the pinnacle of poise: a perfectly stacked Weimaraner. With its impeccable posture and timeless elegance, this breed is truly a living, breathing work of art.`
        ]}
        hasContent={breedInfoGallery.length > 0}
        fallback={fallbackMessage}
      >
        <GalleryGrid items={breedInfoGallery} />
      </SectionBlock>
    </SiteLayout>
  );
}
