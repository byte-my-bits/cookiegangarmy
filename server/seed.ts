import { db } from "./db";
import { servers } from "@shared/schema";

const seedServers = [
  // 7 Days to Die
  {
    name: "Cookie Gang #1 - Wasteland PvP",
    game: "7 Days to Die",
    map: "Navezgane",
    mode: "PvP",
    status: "online",
    players: 18,
    maxPlayers: 32,
    connectAddress: "play.cookiegangarmy.com:26900",
  },
  {
    name: "Cookie Gang #2 - Frontier PvE",
    game: "7 Days to Die",
    map: "Random Gen 12K",
    mode: "PvE",
    status: "online",
    players: 24,
    maxPlayers: 40,
    connectAddress: "play.cookiegangarmy.com:26910",
  },
  // Minecraft
  {
    name: "Cookie Gang - Survival SMP",
    game: "Minecraft",
    map: "Overworld",
    mode: "Survival",
    status: "online",
    players: 31,
    maxPlayers: 50,
    connectAddress: "mc.cookiegangarmy.com",
  },
  {
    name: "Cookie Gang - Creative Build",
    game: "Minecraft",
    map: "Flatworld",
    mode: "Creative",
    status: "online",
    players: 8,
    maxPlayers: 30,
    connectAddress: "mc.cookiegangarmy.com:25566",
  },
  // Valheim
  {
    name: "Cookie Gang - Vikings Unite",
    game: "Valheim",
    map: "Meadows Seed",
    mode: "Co-op",
    status: "online",
    players: 6,
    maxPlayers: 10,
    connectAddress: "valheim.cookiegangarmy.com:2456",
  },
  // Ark: Survival Ascended
  {
    name: "Cookie Gang - The Island",
    game: "Ark: Survival Ascended",
    map: "The Island",
    mode: "PvPvE",
    status: "online",
    players: 22,
    maxPlayers: 40,
    connectAddress: "ark.cookiegangarmy.com:7777",
  },
  {
    name: "Cookie Gang - Scorched Earth",
    game: "Ark: Survival Ascended",
    map: "Scorched Earth",
    mode: "PvE",
    status: "maintenance",
    players: 0,
    maxPlayers: 40,
    connectAddress: "ark.cookiegangarmy.com:7778",
  },
];

export async function seedDatabase() {
  const existing = await db.select().from(servers);
  if (existing.length === 0) {
    await db.insert(servers).values(seedServers);
    console.log("Seeded database with server data");
  }
}
