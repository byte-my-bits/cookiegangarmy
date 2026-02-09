import { db } from "./db";
import { servers } from "@shared/schema";

const seedServers = [
  {
    name: "Dead Zone #1 - Wasteland PvP",
    map: "Navezgane",
    mode: "PvP",
    status: "online",
    players: 18,
    maxPlayers: 32,
    connectAddress: "play.deadzone-survivors.com:26900",
  },
  {
    name: "Dead Zone #2 - Frontier PvE",
    map: "Random Gen 12K",
    mode: "PvE",
    status: "online",
    players: 24,
    maxPlayers: 40,
    connectAddress: "play.deadzone-survivors.com:26910",
  },
  {
    name: "Dead Zone #3 - Outbreak PvPvE",
    map: "Darkness Falls",
    mode: "PvPvE",
    status: "online",
    players: 12,
    maxPlayers: 24,
    connectAddress: "play.deadzone-survivors.com:26920",
  },
  {
    name: "Dead Zone #4 - Hardcore Survival",
    map: "Random Gen 8K",
    mode: "PvE",
    status: "maintenance",
    players: 0,
    maxPlayers: 20,
    connectAddress: "play.deadzone-survivors.com:26930",
  },
];

export async function seedDatabase() {
  const existing = await db.select().from(servers);
  if (existing.length === 0) {
    await db.insert(servers).values(seedServers);
    console.log("Seeded database with server data");
  }
}
