import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { fallbackMessage, jobIdeas } from '@/data/siteContent';

export default function JobsPage() {
  return (
    <SiteLayout title="Jobs | WeimWisdom" description="Meaningful jobs and role ideas for Weimaraners who thrive with purpose.">
      <PageHero
        title="Meaningful jobs for a dog that wants purpose"
        description="Weimaraners often flourish when their daily routine includes a role that channels attention and drive into partnership."
      />
      <SectionBlock
        title="Purpose-driven work ideas"
        description="From running partnerships to search games, these jobs help satisfy instinct without overcomplicating the routine."
        hasContent={jobIdeas.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={jobIdeas} />
      </SectionBlock>
    </SiteLayout>
  );
}
