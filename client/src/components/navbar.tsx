import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Skull, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servers", label: "Servers" },
  { href: "/rules", label: "Rules" },
  { href: "/community", label: "Community" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999] border-b bg-background/80 backdrop-blur-md" data-testid="navbar">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <Skull className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold tracking-wider uppercase">COOKIEGANGARMY</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={location === link.href ? "secondary" : "ghost"}
                size="sm"
                className="font-medium tracking-wide uppercase text-xs"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <div className="flex items-center gap-2 mb-8 mt-4">
                <Skull className="h-6 w-6 text-primary" />
                <span className="text-base font-bold tracking-wider uppercase">COOKIEGANGARMY</span>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                    <Button
                      variant={location === link.href ? "secondary" : "ghost"}
                      className="w-full justify-start font-medium tracking-wide uppercase text-sm"
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
