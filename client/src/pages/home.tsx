import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiDiscord } from "react-icons/si";
import { Server, Shield, Users, Swords, Map, MessageSquare } from "lucide-react";

const quickNavItems = [
  {
    icon: Server,
    title: "Our Servers",
    description: "Browse active game servers with live status and connection details.",
    href: "/servers",
  },
  {
    icon: Shield,
    title: "Server Rules",
    description: "Read our community guidelines and server rules before playing.",
    href: "/rules",
  },
  {
    icon: Users,
    title: "Community",
    description: "Meet our team, learn about our mission, and connect with fellow players.",
    href: "/community",
  },
  {
    icon: Swords,
    title: "Join the Fight",
    description: "Get started with our Discord and learn how to join any of our game servers.",
    href: "/join",
  },
  {
    icon: Map,
    title: "Server Maps",
    description: "View maps and worlds across all our game servers.",
    href: "/servers",
  },
  {
    icon: MessageSquare,
    title: "Contact Us",
    description: "Reach out to our admins for support, appeals, or questions.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-lg"
            data-testid="text-hero-title"
          >
            Welcome to <span className="text-primary">CookieGang Army</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            A multi-game community running dedicated servers for 7 Days to Die, Minecraft, Valheim, and Ark: Survival Ascended. Join us and play together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 font-semibold tracking-wide uppercase text-sm" data-testid="button-hero-discord">
                <SiDiscord className="h-4 w-4" />
                Join Discord
              </Button>
            </a>
            <Link href="/servers">
              <Button size="lg" variant="outline" className="gap-2 font-semibold tracking-wide uppercase text-sm bg-white/10 backdrop-blur-sm" data-testid="button-hero-servers">
                <Server className="h-4 w-4" />
                Browse Servers
              </Button>
            </Link>
            <Link href="/rules">
              <Button size="lg" variant="outline" className="gap-2 font-semibold tracking-wide uppercase text-sm bg-white/10 backdrop-blur-sm" data-testid="button-hero-rules">
                <Shield className="h-4 w-4" />
                Read Rules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16" data-testid="section-intro">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" data-testid="text-intro-title">
            Welcome to CookieGang Army
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a tight-knit gaming community running dedicated servers across multiple games with custom configurations, active admins, and a welcoming atmosphere. Whether you are a veteran player or just getting started, there is a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickNavItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="h-full hover-elevate cursor-pointer transition-colors" data-testid={`card-nav-${item.title.toLowerCase().replace(/\s/g, "-")}`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2.5 text-primary shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm tracking-wide mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t bg-card" data-testid="section-stats">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "7", label: "Active Servers" },
              { value: "4", label: "Games" },
              { value: "500+", label: "Community Members" },
              { value: "24/7", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
