import { GalleryGrid } from '@/components/GalleryGrid';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { activityIdeas, fallbackMessage, jobIdeas } from '@/data/siteContent';

// Activities page specific gallery images
const activitiesGalleryImages = [
  { src: '/images/weim-antler.jpg', alt: 'Weimaraner with antler', caption: 'Activities in action', objectPosition: 'center top' },
  { src: '/images/weim-hunt.jpg', alt: 'Weimaraner hunting', caption: 'Keeping active and engaged' },
  { src: '/images/weim-snow.jpg', alt: 'Weimaraner in snow', caption: 'Purpose-driven exercise' },
];

export default function ActivitiesPage() {
  return (
    <SiteLayout title="Activities & Jobs | WeimWisdom" description="Fun activities, enrichment ideas, and meaningful jobs for active Weimaraners.">
      <PageHero
        title="Activities & Jobs for dogs who love momentum and purpose"
        description="Move beyond generic exercise with trail time, scent games, water fun, and structured roles that channel energy into partnership."
      />
      <SectionBlock
        title="Favorite ways to burn energy wisely"
        description={`Ever wondered how to describe the sheer, unbridled spirit of a Weimaraner? Imagine a silver-coated athlete who missed the memo on "slowing down." While most dogs settle into their golden years early, a Weim stays a vibrant, bouncy puppy until they're 7 or 8—and since they usually live to be 10 to 13, you're in for a long, joyful marathon!
In the dog world, Weims are the elite Olympians. They don't just want a stroll; they crave a mission. There's a secret handshake among Weim owners(think Jeep or Motorcycle riders): A good Weim is a tired Weim, but a Great Weim is an exhausted one.
To keep these beautiful whirlwinds happy, you'll need to work their brains just as hard as their legs. If you think a quick walk and a "high-five" will cut it, your Weim might have other (likely more chaotic) plans! To help you prepare for life with your tireless new shadow, here are a few ways to keep their minds sharp and their tails wagging.`}
        hasContent={activityIdeas.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={activityIdeas} />
      </SectionBlock>      <SectionBlock
        title="Purpose-driven work ideas"
        description={[
          `Listen, your Weimaraner is a gorgeous grey genius, but let's be real: the "freeloader" lifestyle isn't working. If their only daily "job" is supervising your bathroom trips, you're asking for trouble! Weims aren't just built to look like velvet statues; they are high-octane professional athletes trapped in your living room. To them, a "job" isn't a 9-to-5 grind—it's the difference between being a "Good Boy" and a "Lounge Room Excavator."`,
          `Why your Velveteen Land Shark needs a resume: The Brain Game: Without a task, their massive brain starts "redecorating" (read: eating your drywall). Mental stimulation is the only thing that actually tires them out. The On/Off Switch: A working Weim learns when it's "Go Time" and when it's "Sofa Time." Without a job, they stay permanently stuck in "Chaotic Zoomie Mode." Identity Crisis: They were bred to hunt and haul. Without a purpose, they'll find their own work—like professional squirrel stalking or counter-surfing for sourdough.`
        ]}
        hasContent={jobIdeas.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={jobIdeas} />
      </SectionBlock>      <SectionBlock
        title="See the action"
        description={`Imagine a silvery ghost gliding through the frost, a Weimaraner in its element is a master of the "gray matter" and grit. Whether they are sniffing out shed antlers hidden like ivory treasures in the brush or dashing through the field with the grace of a gazelle, these dogs don't just "work"—they perform a high-stakes ballet. Look closely at that third photo; that's not just a stare, it's a laser-focused intensity that says they were born for the thrill of the hunt, turning every outing into an epic quest.`}
        hasContent={activitiesGalleryImages.length > 0}
        fallback={fallbackMessage}
      >
        <GalleryGrid items={activitiesGalleryImages} />
      </SectionBlock>
    </SiteLayout>
  );
}
