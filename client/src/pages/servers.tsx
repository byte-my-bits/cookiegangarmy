import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { Search, Copy, Users, MapPin, Gamepad2, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import type { Server } from "@shared/schema";

function StatusDot({ status }: { status: string }) {
  const color =
    status === "online"
      ? "bg-green-500"
      : status === "maintenance"
        ? "bg-yellow-500"
        : "bg-red-500";
  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === "online" && (
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-75`} />
      )}
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${color}`} />
    </span>
  );
}

const gameImages: Record<string, string> = {
  "7 Days to Die": "/images/game-7dtd.png",
  "Minecraft": "/images/game-minecraft.png",
  "Valheim": "/images/game-valheim.png",
  "Ark: Survival Ascended": "/images/game-ark.png",
};

export default function Servers() {
  const [search, setSearch] = useState("");
  const [modeFilter, setModeFilter] = useState("all");
  const [gameFilter, setGameFilter] = useState("all");
  const { toast } = useToast();

  const { data: servers = [], isLoading } = useQuery<Server[]>({
    queryKey: ["/api/servers"],
  });

  const filteredServers = useMemo(() => {
    return servers.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.map.toLowerCase().includes(search.toLowerCase()) ||
        s.game.toLowerCase().includes(search.toLowerCase());
      const matchesMode = modeFilter === "all" || s.mode.toLowerCase() === modeFilter.toLowerCase();
      const matchesGame = gameFilter === "all" || s.game === gameFilter;
      return matchesSearch && matchesMode && matchesGame;
    });
  }, [servers, search, modeFilter, gameFilter]);

  const games = useMemo(() => {
    const unique = [...new Set(servers.map((s) => s.game))];
    return unique.sort();
  }, [servers]);

  const copyConnect = (address: string) => {
    navigator.clipboard.writeText(address);
    toast({ title: "Copied!", description: `Server address copied to clipboard.` });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2" data-testid="text-servers-title">Our Servers</h1>
        <p className="text-muted-foreground max-w-xl">
          Browse our active game servers across 7 Days to Die, Minecraft, Valheim, and Ark: Survival Ascended. Check status, view maps, and connect instantly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search servers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            data-testid="input-server-search"
          />
        </div>
        <Select value={modeFilter} onValueChange={setModeFilter}>
          <SelectTrigger className="w-full sm:w-44" data-testid="select-mode-filter">
            <SelectValue placeholder="Filter by mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Modes</SelectItem>
            <SelectItem value="pvp">PvP</SelectItem>
            <SelectItem value="pve">PvE</SelectItem>
            <SelectItem value="pvpve">PvPvE</SelectItem>
            <SelectItem value="survival">Survival</SelectItem>
            <SelectItem value="creative">Creative</SelectItem>
            <SelectItem value="co-op">Co-op</SelectItem>
          </SelectContent>
        </Select>
        <Select value={gameFilter} onValueChange={setGameFilter}>
          <SelectTrigger className="w-full sm:w-52" data-testid="select-game-filter">
            <SelectValue placeholder="Filter by game" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Games</SelectItem>
            {games.map((game) => (
              <SelectItem key={game} value={game}>{game}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="animate-pulse space-y-3">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredServers.length === 0 ? (
        <div className="text-center py-16">
          <Wifi className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No servers match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredServers.map((server) => (
            <Card key={server.id} className="hover-elevate overflow-hidden relative" data-testid={`card-server-${server.id}`}>
              <CardContent className="p-5 relative">
                {gameImages[server.game] && (
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${gameImages[server.game]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/70 to-card/60" />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <StatusDot status={server.status} />
                      <h3 className="font-semibold text-sm tracking-wide truncate" data-testid={`text-server-name-${server.id}`}>
                        {server.name}
                      </h3>
                    </div>
                    <Badge variant="outline" className="shrink-0 text-xs uppercase tracking-wider" data-testid={`badge-server-status-${server.id}`}>
                      {server.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Gamepad2 className="h-3.5 w-3.5 shrink-0" />
                      <span>{server.game}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>Map: {server.map}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Gamepad2 className="h-3.5 w-3.5 shrink-0" />
                      <span>Mode: {server.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3.5 w-3.5 shrink-0" />
                      <span>{server.players}/{server.maxPlayers} Players</span>
                    </div>
                  </div>

                  {server.connectAddress && (
                    <div className="flex items-center gap-2">
                      <code className="flex-1 rounded-md bg-muted px-3 py-1.5 text-xs font-mono truncate" data-testid={`text-server-address-${server.id}`}>
                        {server.connectAddress}
                      </code>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => copyConnect(server.connectAddress!)}
                        data-testid={`button-copy-address-${server.id}`}
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
