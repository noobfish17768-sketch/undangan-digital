import { prisma } from "@/lib/prisma";
import Hero from "@/components/invitation/Hero";
import Countdown from "@/components/invitation/Countdown";
import EventDetail from "@/components/invitation/EventDetail";
import Gallery from "@/components/invitation/Gallery";
import RSVP from "@/components/invitation/RSVP";
import Wishes from "@/components/invitation/Wishes";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const invitation = await prisma.invitation.findUnique({
    where: {
      slug,
    },
  });

  if (!invitation) {
    return <div>Undangan tidak ditemukan</div>;
  }

  return (
    <main className="bg-[#faf7f2]">
      <Hero
        groomName={invitation.groomName}
        brideName={invitation.brideName}
        eventDate={invitation.eventDate}
      />

      <Countdown
        targetDate={invitation.eventDate.toISOString()}
      />

      <EventDetail
        venue={invitation.venue}
        eventTime={invitation.eventTime}
        mapsUrl={invitation.mapsUrl}
      />

      <Gallery
        images={[
          "https://picsum.photos/600/600?1",
          "https://picsum.photos/600/600?2",
          "https://picsum.photos/600/600?3",
          "https://picsum.photos/600/600?4",
        ]}
      />

      <RSVP />

      <Wishes />
    </main>
  );
}