import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SiDiscord, SiTwitch, SiYoutube } from "react-icons/si";
import { Heart, Target, Handshake, Crown, Shield, Wrench, Megaphone } from "lucide-react";

const missionValues = [
  {
    icon: Heart,
    title: "Community First",
    description: "We build a welcoming space where every player matters. Our focus is always on the community experience.",
  },
  {
    icon: Target,
    title: "Fair Play",
    description: "Our servers run with balanced settings and active moderation to ensure fair gameplay across all titles.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description: "Whether you are a solo player or part of a group, we encourage cooperation, mentoring, and shared victories.",
  },
];

const staffMembers = [
  {
    name: "LtCook62",
    role: "Founder & Lead Admin",
    games: ["7 Days to Die", "Minecraft", "Valheim", "Ark: Survival Ascended"],
    image: "/images/founder.jpg",
    bio: "Built CookieGang Army from scratch. Loves cookies, hates zombies. If you see him online, say hi!",
  },
  {
    name: "Eikthyr",
    role: "Co-Owner & Server Admin",
    games: ["7 Days to Die", "Ark: Survival Ascended"],
    image: "/images/partner1.png",
    bio: "Can heal your wounds and ban your trolls. Famous for epic Discord roasts and PvP pep talks.",
  },
  {
    name: "TheKhamsi",
    role: "Website Admin",
    games: [],
    image: "/images/partner2.png",
    bio: "If it breaks, he fixes it. If it works, he mods it. Secretly a bluestone assassin.",
  },
  {
    name: "NightHowl",
    role: "Moderator",
    games: ["7 Days to Die", "Valheim"],
    image: "/images/nighthowl.png",
    bio: "Welcomes new players with a howl. Keeps the peace and the memes flowing.",
  },
  {
    name: "BlazeCraft",
    role: "Moderator",
    games: ["Minecraft", "Ark: Survival Ascended"],
    image: "/images/blazecraft.png",
    bio: "PvP master, alliance broker, and raid scheduler. If you need backup, call Blaze.",
  },
  {
    name: "PixelDoc",
    role: "Community Manager",
    games: ["All Games"],
    image: "/images/pixeldoc.png",
    bio: "Runs our socials, hosts giveaways, and makes sure everyone feels at home. Loves pixel art and cookies.",
  },
];

const socialBlocks = [
  {
    icon: SiDiscord,
    label: "Discord",
    description: "Our main hub for communication, support, and community events.",
    href: "#",
    members: "500+",
  },
  {
    icon: SiTwitch,
    label: "Twitch",
    description: "Watch live streams, highlights, and community events on our Twitch channel.",
    href: "#",
    members: "350+",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    description: "Server highlights, tutorials, and community spotlight videos.",
    href: "#",
    members: "1.2K",
  },
];

export default function Community() {
  // Group staff by role for structure
  const founder = staffMembers.find((m) => m.role.includes("Founder"));
  const partners = staffMembers.filter((m) => m.role.includes("Admin") && !m.role.includes("Founder"));
  const moderators = staffMembers.filter((m) => m.role.includes("Moderator") || m.role.includes("Community Manager"));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Founder/Owner Section - paint-brush accent, large image, bold name/role, highlighted quote */}
      {founder && (
        <section className="mb-14" data-testid="section-founder">
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 bg-primary/10 rounded-xl p-8 shadow-lg overflow-hidden">
            {/* Paint-brush accent background */}
            <div className="absolute left-0 top-0 w-48 h-48 bg-primary rounded-full blur-2xl opacity-30 -z-10" />
            {/* Founder image */}
            <div className="flex-shrink-0">
              <img src={founder.image} alt={founder.name} className="rounded-xl w-48 h-48 object-cover border-4 border-primary shadow-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2 text-primary">{founder.name}</h2>
              <div className="mb-2">
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold mr-2">{founder.role}</span>
                <span className="inline-block bg-card/20 text-muted-foreground px-3 py-1 rounded-full text-xs">{founder.games.join(", ")}</span>
              </div>
              <blockquote className="italic text-lg text-primary mb-4">"Teamwork divides the tasks and multiplies the success."</blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">{founder.bio}</p>
              <p className="text-xs text-muted-foreground">Founded CookieGang Army in 2023. Loves cookies, hates zombies.</p>
            </div>
          </div>
        </section>
      )}

      {/* Partners Section - bold header, accent backgrounds */}
      <section className="mb-14" data-testid="section-partners">
        <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-primary uppercase">Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((member) => (
            <Card key={member.name} className="bg-primary/10 border-primary/30 border-2 rounded-xl shadow-md" data-testid={`card-partner-${member.name.toLowerCase()}`}> 
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <img src={member.image} alt={member.name} className="rounded-full w-16 h-16 object-cover border-2 border-primary" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg tracking-wide truncate text-primary">{member.name}</h3>
                    <div className="mb-1">
                      <span className="inline-block bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs font-semibold mr-2">{member.role}</span>
                      <span className="inline-block bg-card/20 text-muted-foreground px-2 py-0.5 rounded-full text-xs">{member.games.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Discord Server Button */}
      <div className="flex justify-center mt-6 mb-14">
        <a
          href="https://discord.gg/wk766UmZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-card font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary/80 transition text-lg"
        >
          Join Discord Server
        </a>
      </div>

      {/* Admins & Moderators Section - hidden for now */}
      {/*
      <section className="mb-14" data-testid="section-admins">
        <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-primary uppercase">Admins & Moderators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moderators.map((member) => (
            <Card key={member.name} className="bg-primary/5 border-primary/20 border rounded-xl shadow-md" data-testid={`card-moderator-${member.name.toLowerCase()}`}> 
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <img src={member.image} alt={member.name} className="rounded-full w-16 h-16 object-cover border-2 border-primary" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg tracking-wide truncate text-primary">{member.name}</h3>
                    <div className="mb-1">
                      <span className="inline-block bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs font-semibold mr-2">{member.role}</span>
                      <span className="inline-block bg-card/20 text-muted-foreground px-2 py-0.5 rounded-full text-xs">{member.games.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      */}

      {/* About the Team Section - paint-brush accent, bold card, geometric overlay, left-aligned large title/text, highlight key phrases */}
      <section className="mb-14 relative" data-testid="section-about">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,90,31,0.08)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        <div className="relative flex flex-col md:flex-row items-stretch md:items-center gap-10 p-8 rounded-xl bg-primary/5 shadow-xl overflow-hidden z-10">
          {/* Paint-brush accent background */}
          <div className="absolute left-0 top-0 w-72 h-72 bg-primary rounded-full blur-3xl opacity-25 -z-10" />
          {/* Image card with bold border and shadow */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="bg-primary/20 rounded-2xl p-2 shadow-lg border-4 border-primary">
              <img src="/images/about_team.png" alt="CookieGang Army Team" className="rounded-xl w-[340px] h-[340px] object-cover" />
            </div>
          </div>
          {/* Text content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-primary">About the Team</h2>
            <div className="text-base text-muted-foreground leading-relaxed">
              <p className="mb-3">
                <span className="font-semibold text-primary">CookieGang Army</span> is powered by a crew of passionate gamers, modders, and community leaders. We play, build, and laugh together—sometimes at each other, but always for the fun of it. Our founder sets the vision, partners keep the servers running, and our admins & mods make sure every player feels welcome.
              </p>
              <p>
                <span className="font-semibold text-primary">Need help?</span> Want to join a raid? Just want to chat? Our team is here for you. <span className="font-semibold text-primary">Teamwork divides the tasks and multiplies the success.</span> Cookies optional, fun required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section data-testid="section-social">
        <h2 className="text-xl font-bold tracking-tight mb-6">Connect With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialBlocks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover-elevate cursor-pointer" data-testid={`card-social-${social.label.toLowerCase()}`}> 
                <CardContent className="p-5">
                  <social.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-sm tracking-wide mb-1">{social.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{social.description}</p>
                  <span className="text-xs font-semibold text-primary">{social.members} members</span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
      {/* Footer with game/shop links */}
      <footer className="mt-16 border-t pt-8 text-center text-xs text-muted-foreground">
        <div className="mb-2">
          <span className="font-semibold">Our Games:</span> 7 Days to Die | Minecraft | Valheim | Ark: Survival Ascended
        </div>
        <div className="mb-2">
          <span className="font-semibold">Shop Links:</span> <a href="#" className="text-primary hover:underline">7D2D Shop</a> | <a href="#" className="text-primary hover:underline">Minecraft Shop</a> | <a href="#" className="text-primary hover:underline">Valheim Shop</a> | <a href="#" className="text-primary hover:underline">Ark Shop</a>
        </div>
        <div>
          &copy; CookieGang Army. All Rights Reserved. Since 2023
        </div>
      </footer>
    </div>
  );
}
