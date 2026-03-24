import { Alert, Stack, Typography } from '@mui/material';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { fallbackMessage, rescueOrganizations } from '@/data/siteContent';

export default function RescuePage() {
  return (
    <SiteLayout title="Rescue | WeimWisdom" description="Weimaraner rescue contacts and preparation resources.">
      <PageHero
        title="Rescue resources built around patience and placement"
        description="Use rescue contacts, foster guidance, and readiness checklists to support safe, informed outcomes."
      />
      <SectionBlock
        title="Organizations and contacts"
        description="Always verify the rescue serving your region, but these examples show the kind of information visitors should expect."
        hasContent={rescueOrganizations.length > 0}
        fallback={fallbackMessage}
      >
        <Stack spacing={2.5}>
          {rescueOrganizations.map((rescue) => (
            <Alert key={rescue.organization} severity="info" icon={false}>
              <Typography variant="h6">{rescue.organization}</Typography>
              <Typography>{rescue.location}</Typography>
              <Typography color="text.secondary">{rescue.description}</Typography>
              <Typography sx={{ mt: 1 }}>Contact: {rescue.contact}</Typography>
            </Alert>
          ))}
        </Stack>
      </SectionBlock>
    </SiteLayout>
  );
}
