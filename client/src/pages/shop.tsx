import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Gem, Sword, Shield, Zap, Package, Star, Check } from "lucide-react";

const vipTiers = [
  {
    id: "supporter",
    name: "Supporter",
    price: "$4.99/mo",
    icon: Shield,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    featured: false,
    perks: [
      "Colored name in chat",
      "Access to supporter-only Discord channels",
      "Priority queue on full servers",
      "1 extra claim block on all servers",
      "Supporter badge on Discord",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    price: "$9.99/mo",
    icon: Star,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    featured: true,
    perks: [
      "All Supporter perks",
      "VIP starter kit every wipe (game-specific)",
      "2 extra claim blocks on all servers",
      "Reserved server slot",
      "/sethome command (2 homes)",
      "Custom title in Discord",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$19.99/mo",
    icon: Crown,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    featured: false,
    perks: [
      "All VIP perks",
      "Elite starter kit every wipe (game-specific advanced gear)",
      "3 extra claim blocks on all servers",
      "/sethome command (5 homes)",
      "Exclusive cosmetic items",
      "Priority support tickets",
      "Vote on upcoming server settings",
    ],
  },
];

const shopItems = [
  {
    id: "starter-kit",
    name: "Starter Kit",
    description: "Basic tools, food, and supplies to get you started after a fresh wipe. Available for all supported games.",
    price: "$1.99",
    icon: Package,
    category: "Kits",
  },
  {
    id: "warrior-kit",
    name: "Warrior Kit",
    description: "Mid-tier weapons, ammo, and armor to give you an edge. Contents vary by game.",
    price: "$3.99",
    icon: Sword,
    category: "Kits",
  },
  {
    id: "base-bundle",
    name: "Base Builder Bundle",
    description: "Building materials and crafting stations to jumpstart your base. Available across all games.",
    price: "$2.99",
    icon: Gem,
    category: "Bundles",
  },
  {
    id: "extra-claim",
    name: "Extra Protection",
    description: "Additional land protection (claim blocks, protection stones, or ward). Permanent for the current wipe.",
    price: "$1.49",
    icon: Shield,
    category: "Upgrades",
  },
  {
    id: "vehicle-pack",
    name: "Transport Pack",
    description: "A vehicle, mount, or transport item delivered to your location. Contents vary by game.",
    price: "$2.49",
    icon: Zap,
    category: "Bundles",
  },
  {
    id: "cosmetic-pack",
    name: "Cosmetic Pack",
    description: "Exclusive skins and cosmetic items. Purely visual, no gameplay advantage.",
    price: "$1.99",
    icon: Star,
    category: "Cosmetics",
  },
];

export default function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2" data-testid="text-shop-title">Shop</h1>
        <p className="text-muted-foreground max-w-xl">
          Support the community and enhance your experience. All purchases help keep our servers running 24/7.
        </p>
      </div>

      <Tabs defaultValue="vip" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="vip" className="gap-2" data-testid="tab-vip">
            <Crown className="h-4 w-4" />
            VIP Ranks
          </TabsTrigger>
          <TabsTrigger value="items" className="gap-2" data-testid="tab-items">
            <Package className="h-4 w-4" />
            Items & Kits
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vip" className="space-y-6">
          <div className="mb-6">
            <div className="bg-primary/20 border border-primary rounded-lg p-4 text-center">
              <span className="text-lg font-bold text-primary block mb-1">Important!</span>
              <span className="text-base font-semibold text-primary">When making your PayPal payment, you must add your Discord username or in-game name in the payment description so we can verify and deliver your perks.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {vipTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`relative hover-elevate transition-colors ${tier.featured ? `border-2 ${tier.borderColor}` : ""}`}
                data-testid={`card-vip-${tier.id}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white text-xs tracking-wider uppercase px-3">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-5">
                    <div className={`inline-flex rounded-full ${tier.bgColor} p-3 mb-3`}>
                      <tier.icon className={`h-6 w-6 ${tier.color}`} />
                    </div>
                    <h3 className="text-lg font-bold tracking-wide">{tier.name}</h3>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.color}`} />
                        <span className="text-muted-foreground">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <span className="text-2xl font-bold text-primary block mb-2 text-center">{tier.price}</span>
                    <a
                      href={
                        tier.id === "supporter"
                          ? "https://www.paypal.com/paypalme/todormitsov/4.99"
                          : tier.id === "vip"
                          ? "https://www.paypal.com/paypalme/todormitsov/9.99"
                          : tier.id === "elite"
                          ? "https://www.paypal.com/paypalme/todormitsov/19.99"
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        className="w-full font-semibold tracking-wide uppercase text-xs"
                        variant={tier.featured ? "default" : "outline"}
                        data-testid={`button-buy-${tier.id}`}
                      >
                        Subscribe
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                All VIP subscriptions are managed through our Discord server. Click Subscribe and follow the instructions in our #shop channel.
                Subscriptions renew monthly and can be cancelled at any time.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="items" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopItems.map((item) => (
              <Card key={item.id} className="hover-elevate" data-testid={`card-item-${item.id}`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2.5 text-primary shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-sm tracking-wide">{item.name}</h3>
                        <Badge variant="outline" className="text-xs shrink-0">{item.category}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                        <Button size="sm" variant="outline" className="text-xs font-semibold uppercase tracking-wide" data-testid={`button-buy-${item.id}`}>
                          Purchase
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">
                Item purchases are one-time and delivered in-game within minutes. Items are per-wipe unless stated otherwise.
                All purchases are processed through our Discord bot. None of the items provide unfair gameplay advantages.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
