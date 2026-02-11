import { Link } from "wouter";
import { Skull } from "lucide-react";
import { SiDiscord, SiTwitch, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/servers", label: "Servers" },
    { href: "/rules", label: "Rules" },
    { href: "/community", label: "Community" },
  ],
  resources: [
    { href: "/join", label: "Join Us" },
    { href: "/contact", label: "Contact" },
    { href: "/rules", label: "Server Rules" },
  ],
};

const socialLinks = [
  { icon: SiDiscord, href: "#", label: "Discord" },
  { icon: SiTwitch, href: "#", label: "Twitch" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Skull className="h-6 w-6 text-primary" />
              <span className="text-base font-bold tracking-wider uppercase">COOKIEGANGARMY</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A multi-game community running dedicated servers for 7 Days to Die, Minecraft, Valheim, and Ark: Survival Ascended.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Navigation</h4>
            <ul className="space-y-1">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-muted-foreground text-sm font-normal"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Resources</h4>
            <ul className="space-y-1">
              {footerLinks.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-muted-foreground text-sm font-normal"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} CookieGang Army. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground" data-testid="text-trademark">
            Game trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
