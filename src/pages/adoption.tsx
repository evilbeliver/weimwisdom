import { Box, Typography } from '@mui/material';
import Script from 'next/script';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { fallbackMessage } from '@/data/siteContent';

export default function AdoptionPage() {
  return (
    <SiteLayout title="Adoption | WeimWisdom" description="Adoption spotlights and preparation guidance for Weimaraner families.">
      <Script src="https://www.petfinder.com/pet-scroller.bundle.js" strategy="afterInteractive" />
      <PageHero
        title="Adoption and readiness guidance"
        description="Find your perfect Weimaraner companion through rescue organizations and learn how to prepare for this energetic breed."
      />
      <SectionBlock
        title="Are you ready for the Gray Ghost?"
        description={[
          `So, you've read the warnings, seen the "raptor" gaze, and you still want to invite a silver-coated chaos agent into your home? Consider yourself officially warned: once a Weimaraner glides into your world, there is no turning back. They won't just move into your house; they will stage a hostile takeover of your heart—and your favorite armchair.`,
          `It is a bittersweet reality that many of these "gray phantoms" find themselves in rescues across the country. Too often, humans are bewitched by their majestic beauty, only to realize they've actually adopted a high-octane velociraptor in a velvet suit. The "teenager" phase, occurring between 8 and 18 months, is when many owners wave the white flag of surrender, overwhelmed by a dog with the energy of a nuclear reactor and the demanding nature of a spoiled monarch.`,
          `By choosing adoption, you aren't just getting a pet; you're recruiting a brilliant, silver-clad sidekick. These rescues are simply waiting for a human brave enough to handle the hustle and loyal enough to weather the storm.`
        ]}
        hasContent
      />
      <Box sx={{ mt: { xs: -2, sm: -3, md: -6 } }}>
        <SectionBlock
          title="Adoptable Weimaraners"
          description=""
          hasContent
          fallback={fallbackMessage}
        >
        <Typography component="p" variant="body1" color="text.primary" sx={{ mb: 2 }}>
          While our live listings pull from many groups, we are proud to highlight these dedicated organizations. Beyond adoption, these rescues rely on the community for donations, event participation, and volunteering to keep their missions alive. If you don&apos;t see your perfect match in the feed, please visit our friends to see how you can help or get involved in your local area:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Box component="li" sx={{ mb: 2 }}>
            <Typography component="span" variant="body1" color="text.primary">
              <Typography component="a" href="https://weimfriends.com/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                Weim Friends Rescue
              </Typography>
              {' – Based in Cincinnati, Ohio, they are amazing at finding forever homes for &ldquo;grey ghosts&rdquo; in the Midwest.'}
            </Typography>
            <Box component="ul" sx={{ pl: 3, mt: 1 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.primary">
                  <strong>Get Involved:</strong> You can support them through Kroger Community Rewards, volunteering at the Cincinnati Flying Pig Marathon, or attending{' '}
                  <Typography component="a" href="https://weimfriends.com/events/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    local events
                  </Typography>
                  {' like the My Furry Valentine adoption event and their annual Reunion at WagsPark.'}
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2" color="text.primary">
                  <strong>How to Help:</strong> They are always in need of{' '}
                  <Typography component="a" href="https://weimfriends.com/volunteer/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    volunteers
                  </Typography>
                  {' for transport and home visits, as well as '}
                  <Typography component="a" href="https://weimfriends.com/support/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    donations
                  </Typography>
                  {' to cover medical care and rehabilitation.'}
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box component="li" sx={{ mb: 2 }}>
            <Typography component="span" variant="body1" color="text.primary">
              <Typography component="a" href="https://www.tarheelweimrescue.org/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                Tarheel Weimaraner Rescue
              </Typography>
              {' – Operating across North Carolina, South Carolina, and Virginia, this volunteer-run team specializes in giving Weims a fresh start through their dedicated foster network.'}
            </Typography>
            <Box component="ul" sx={{ pl: 3, mt: 1 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.primary">
                  <strong>Get Involved:</strong> Check their site and social media for regional activities like the nationwide Walk for Weims virtual event or how to{' '}
                  <Typography component="a" href="https://www.tarheelweimrescue.org/copy-of-donate-pp" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    donate
                  </Typography>
                  .
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2" color="text.primary">
                  <strong>How to Help:</strong> As a 501(c)(3) nonprofit, tax-deductible donations are critical for vet expenses and long-term care. They are actively seeking{' '}
                  <Typography component="a" href="https://www.tarheelweimrescue.org/volunteer" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    volunteers
                  </Typography>
                  {' for fostering, transport (&ldquo;dog taxis&rdquo;), and administrative support across the Southeast.'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography component="p" variant="body1" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
          Visit their websites to find specific opportunities near you and help these &ldquo;silver shadows&rdquo; find their way home!
        </Typography>

        <Typography component="p" variant="body1" color="text.primary" sx={{ mb: 2 }}>
          Imagine a spirited, long-legged explorer bounding into your life, ready to transform your world into a whirlwind of joy! To keep these energetic souls happy, a vast, securely fenced kingdom is ideal for their zoomies; however, they can adapt to a cozy apartment life as long as they get plenty of exhilarating, off-leash adventures to tire out those tireless paws. While they are incredibly tender-hearted with tiny humans, their &ldquo;bull-in-a-china-shop&rdquo; enthusiasm means they might accidentally tumble a toddler during play, and their keen eyes are always on the lookout for a &ldquo;chase,&rdquo; so smaller furry friends should be introduced with extra care.
        </Typography>

        <Typography component="p" variant="body1" color="text.primary" sx={{ mb: 3 }}>
          To help your new companion settle into this fairytale, follow the magical 3-3-3 rule: <strong>The First 3 Days:</strong> This is the &ldquo;hibernation&rdquo; phase. Your pup may feel overwhelmed or shy, so give them a quiet space to decompress and realize they are finally safe. <strong>The First 3 Weeks:</strong> The &ldquo;learning the ropes&rdquo; phase. As their true personality begins to peek through, they&apos;ll start to figure out your daily rhythm, from breakfast time to the best spot on the rug. <strong>The First 3 Months:</strong> The &ldquo;happily ever after&rdquo; phase. By now, the bond is sealed; they fully trust their environment, feel a true sense of belonging, and realize they aren&apos;t just visiting—they are finally home.
        </Typography>

        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 4, p: { xs: 2, md: 3 }, bgcolor: 'background.paper' }}>
          <pet-scroller
            s3Url="https://dbw3zep4prcju.cloudfront.net/"
            apiBase="https://psl.petfinder.com/graphql"
            organization='["AL48", "NC26", "GA544"]'
            status="adoptable"
            petfinderUrl="https://www.petfinder.com/"
            hideBreed="false"
            limit="24"
            petListTitle=""
          />
          <Typography component="p" variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            If listings do not load, please refresh or visit Petfinder directly to browse adoptable Weimaraners.
          </Typography>
        </Box>
      </SectionBlock>
      </Box>
    </SiteLayout>
  );
}
