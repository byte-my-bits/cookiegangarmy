import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiDiscord, SiSteam } from "react-icons/si";
import { Link } from "wouter";
import { ArrowRight, Download, UserPlus, Server, Shield, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: SiDiscord,
    title: "Join Our Discord",
    description: "Click the Discord invite link below to join our community server. This is where all communication, announcements, and support happens.",
  },
  {
    step: 2,
    icon: UserPlus,
    title: "Introduce Yourself",
    description: "Head to the #introductions channel and tell us a bit about yourself. Include your Steam name and preferred playstyle (PvP, PvE, or both).",
  },
  {
    step: 3,
    icon: Shield,
    title: "Read the Rules",
    description: "Check the #rules channel or visit our Rules page. You must understand and agree to follow all community and server rules.",
  },
  {
    step: 4,
    icon: Download,
    title: "Get the Mods",
    description: "Some servers use custom mods. Check the #server-info channel for mod lists and installation instructions specific to each server.",
  },
  {
    step: 5,
    icon: Server,
    title: "Connect to a Server",
    description: "Browse our Servers page for connection addresses. Open 7 Days to Die, go to Connect to Server, and paste the address.",
  },
];

const requirements = [
  "A legitimate copy of 7 Days to Die on Steam",
  "Discord account (for communication and support)",
  "Microphone recommended but not required",
  "Willingness to follow community rules",
  "Minimum age: 16 years old",
];

export default function Join() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2" data-testid="text-join-title">Join the Community</h1>
        <p className="text-muted-foreground max-w-xl">
          Ready to survive the apocalypse with us? Follow the steps below to get started on our servers.
        </p>
      </div>

      <section className="mb-14" data-testid="section-discord-invite">
        <Card className="border-primary/30 bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-6 sm:p-8 text-center">
            <SiDiscord className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold tracking-tight mb-2">Dead Zone Survivors Discord</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Our Discord server is the central hub for everything. Join to get server addresses, find teammates, get support, and stay updated.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 font-semibold tracking-wide uppercase text-sm" data-testid="button-discord-invite">
                <SiDiscord className="h-4 w-4" />
                Join Discord Server
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-3">500+ members online</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-14" data-testid="section-how-to-join">
        <h2 className="text-xl font-bold tracking-tight mb-6">How to Join</h2>
        <div className="space-y-3">
          {steps.map((s, idx) => (
            <Card key={s.step} data-testid={`card-step-${s.step}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-primary/10 p-2.5 text-primary shrink-0">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Badge variant="outline" className="text-xs font-mono">
                        Step {s.step}
                      </Badge>
                      <h3 className="font-semibold text-sm tracking-wide">{s.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-14" data-testid="section-requirements">
        <h2 className="text-xl font-bold tracking-tight mb-6">Requirements</h2>
        <Card>
          <CardContent className="p-5">
            <ul className="space-y-2.5">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section data-testid="section-terms-reminder">
        <Card>
          <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm tracking-wide mb-1">Before You Play</h3>
              <p className="text-xs text-muted-foreground">
                By joining our servers, you agree to abide by all community rules and admin decisions.
              </p>
            </div>
            <Link href="/rules">
              <Button variant="outline" className="gap-2 shrink-0" data-testid="button-view-rules">
                View Rules
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
