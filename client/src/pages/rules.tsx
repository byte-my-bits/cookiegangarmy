import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Users, Swords, Building, MessageSquare } from "lucide-react";

const rulesSections = [
  {
    id: "general",
    icon: Shield,
    title: "General Conduct",
    badge: "Required",
    rules: [
      "Treat all community members with respect. Harassment, hate speech, and discrimination of any kind will not be tolerated.",
      "Follow instructions from admins and moderators at all times. Admin decisions are final.",
      "Do not exploit bugs or glitches. Report them to an admin immediately.",
      "Do not advertise other communities or servers without permission.",
      "English is the primary language in public channels. Use designated channels for other languages.",
    ],
  },
  {
    id: "pvp",
    icon: Swords,
    title: "PvP Rules",
    badge: "PvP Servers",
    rules: [
      "Raiding is allowed during designated raid hours only (check server-specific schedules).",
      "No offline raiding. At least one base owner must be online during a raid.",
      "Do not camp spawn points or trader areas.",
      "Alliances must be declared in the designated Discord channel.",
      "No using vehicles to clip through base walls or exploit terrain glitches.",
    ],
  },
  {
    id: "building",
    icon: Building,
    title: "Base Building",
    badge: "All Servers",
    rules: [
      "Claim blocks must be placed within 48 hours of joining. Unprotected builds may be removed.",
      "Maximum of 2 claim blocks per group on PvP servers, 3 on PvE servers.",
      "Do not build within 100 blocks of traders, POIs, or other players' bases without permission.",
      "Sky bases and floating structures are not allowed on any server.",
      "Clean up unused frames, workstations, and storage. Admins may remove abandoned structures after 14 days.",
    ],
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Communication",
    badge: "Discord & In-Game",
    rules: [
      "Keep global chat clean. No excessive spam, caps lock, or inappropriate content.",
      "Use the correct Discord channels for their intended purpose.",
      "Voice chat in Discord must be respectful. No screaming, ear-blasting sounds, or music bots without permission.",
      "Report issues through the support ticket system, not in public channels.",
      "Do not share personal information of other players.",
    ],
  },
  {
    id: "fairplay",
    icon: Users,
    title: "Fair Play",
    badge: "Critical",
    rules: [
      "Cheating, hacking, or using third-party software to gain unfair advantages is a permanent ban offense.",
      "Duplication exploits are strictly prohibited. Report any found to staff immediately.",
      "No using alt accounts to circumvent bans, claim limits, or gain extra resources.",
      "Teaming rules vary by server. Check server-specific guidelines for group size limits.",
      "Stream sniping is not allowed and will result in a temporary ban.",
    ],
  },
  {
    id: "punishments",
    icon: AlertTriangle,
    title: "Consequences",
    badge: "Enforcement",
    rules: [
      "First offense: Written warning via Discord DM.",
      "Second offense: 24-72 hour temporary ban depending on severity.",
      "Third offense: 7-30 day ban depending on severity and history.",
      "Severe violations (cheating, harassment, doxxing): Immediate permanent ban.",
      "Appeals can be submitted through the support ticket system after a minimum 7-day wait period.",
    ],
  },
];

export default function Rules() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2" data-testid="text-rules-title">Server Rules</h1>
        <p className="text-muted-foreground max-w-xl">
          Please read and understand all rules before joining any server. Ignorance is not an excuse. Rules are enforced consistently across all servers.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["general"]} className="space-y-3">
        {rulesSections.map((section) => (
          <AccordionItem key={section.id} value={section.id} className="border-0" data-testid={`accordion-rules-${section.id}`}>
            <Card>
              <AccordionTrigger className="px-5 py-4 hover:no-underline [&[data-state=open]]:border-b">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2 text-primary shrink-0">
                    <section.icon className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm tracking-wide">{section.title}</span>
                  <Badge variant="outline" className="text-xs uppercase tracking-wider">
                    {section.badge}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="pt-4 pb-2 px-5">
                  <ol className="space-y-3">
                    {section.rules.map((rule, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-primary font-bold shrink-0 font-mono text-xs mt-0.5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>

      <Card className="mt-8">
        <CardContent className="p-5 text-center">
          <AlertTriangle className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            Rules may be updated at any time. It is your responsibility to stay informed.
            Last updated: January 2026
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
