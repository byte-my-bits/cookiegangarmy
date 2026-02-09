import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SiDiscord, SiSteam, SiYoutube, SiX } from "react-icons/si";
import { Heart, Target, Handshake, Crown, Shield, Wrench, Megaphone } from "lucide-react";

const missionValues = [
  {
    icon: Heart,
    title: "Community First",
    description: "We build a welcoming space where every survivor matters. Our focus is always on the player experience.",
  },
  {
    icon: Target,
    title: "Fair Play",
    description: "Our servers run with balanced settings and active moderation to ensure everyone gets a fair shot at survival.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description: "Whether you are a solo player or part of a group, we encourage cooperation, mentoring, and shared victories.",
  },
];

const staffMembers = [
  {
    name: "Ironclad",
    role: "Founder & Lead Admin",
    icon: Crown,
    initials: "IC",
    bio: "Community founder with 5,000+ hours in 7D2D. Manages server infrastructure and overall community direction.",
  },
  {
    name: "ShadowMedic",
    role: "Senior Admin",
    icon: Shield,
    initials: "SM",
    bio: "Handles player disputes, ban appeals, and community events. Known for organizing the monthly Horde Night tournaments.",
  },
  {
    name: "WrenchMonkey",
    role: "Technical Admin",
    icon: Wrench,
    initials: "WM",
    bio: "Server configuration specialist. Maintains mods, manages performance, and keeps our servers running at peak efficiency.",
  },
  {
    name: "NightHowl",
    role: "Moderator",
    icon: Shield,
    initials: "NH",
    bio: "Active moderator across all servers. Focuses on new player onboarding and enforcing community guidelines.",
  },
  {
    name: "BlazeCraft",
    role: "Moderator",
    icon: Shield,
    initials: "BC",
    bio: "PvP server specialist moderator. Manages raid schedules, alliance declarations, and PvP-specific disputes.",
  },
  {
    name: "PixelDoc",
    role: "Community Manager",
    icon: Megaphone,
    initials: "PD",
    bio: "Runs our social media, creates content, and organizes community events, giveaways, and collaborations.",
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
    icon: SiSteam,
    label: "Steam Group",
    description: "Join our Steam community group for game updates and discussions.",
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
  {
    icon: SiX,
    label: "X (Twitter)",
    description: "Follow us for server announcements, maintenance alerts, and news.",
    href: "#",
    members: "200+",
  },
];

export default function Community() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2" data-testid="text-community-title">Our Community</h1>
        <p className="text-muted-foreground max-w-xl">
          Dead Zone Survivors was founded in 2023 with a simple goal: create the best 7 Days to Die experience for dedicated players. Here is who we are and what we stand for.
        </p>
      </div>

      <section className="mb-14" data-testid="section-mission">
        <h2 className="text-xl font-bold tracking-tight mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {missionValues.map((value) => (
            <Card key={value.title} data-testid={`card-mission-${value.title.toLowerCase().replace(/\s/g, "-")}`}>
              <CardContent className="p-5">
                <div className="rounded-md bg-primary/10 p-2.5 text-primary inline-flex mb-3">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm tracking-wide mb-2">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-14" data-testid="section-staff">
        <h2 className="text-xl font-bold tracking-tight mb-6">Admin & Staff</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {staffMembers.map((member) => (
            <Card key={member.name} data-testid={`card-staff-${member.name.toLowerCase()}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm tracking-wide truncate">{member.name}</h3>
                    <Badge variant="outline" className="text-xs mt-0.5">{member.role}</Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
    </div>
  );
}
