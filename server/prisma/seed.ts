import { PrismaClient, Country } from "./generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding restaurants and menu items...');

  // ─── INDIA RESTAURANTS ──────────────────────────────────────────────────────

  const spiceGarden = await prisma.restaurant.create({
    data: {
      name: 'Spice Garden',
      country: Country.INDIA,
      menuItems: {
        create: [
          { name: 'Butter Chicken', price: 280 },
          { name: 'Paneer Tikka', price: 220 },
          { name: 'Dal Makhani', price: 180 },
          { name: 'Garlic Naan', price: 60 },
          { name: 'Mango Lassi', price: 80 },
        ],
      },
    },
  });

  const bombayBites = await prisma.restaurant.create({
    data: {
      name: 'Bombay Bites',
      country: Country.INDIA,
      menuItems: {
        create: [
          { name: 'Vada Pav', price: 40 },
          { name: 'Pav Bhaji', price: 120 },
          { name: 'Chicken Biryani', price: 300 },
          { name: 'Masala Chai', price: 30 },
          { name: 'Gulab Jamun', price: 80 },
        ],
      },
    },
  });

  const thaliwala = await prisma.restaurant.create({
    data: {
      name: 'Thaliwala Express',
      country: Country.INDIA,
      menuItems: {
        create: [
          { name: 'Rajasthani Thali', price: 350 },
          { name: 'Chole Bhature', price: 150 },
          { name: 'Aloo Paratha', price: 90 },
          { name: 'Raita', price: 50 },
          { name: 'Kheer', price: 100 },
        ],
      },
    },
  });

  // ─── AMERICA RESTAURANTS ────────────────────────────────────────────────────

  const libertyBurgers = await prisma.restaurant.create({
    data: {
      name: 'Liberty Burgers',
      country: Country.AMERICA,
      menuItems: {
        create: [
          { name: 'Classic Cheeseburger', price: 12 },
          { name: 'BBQ Bacon Burger', price: 15 },
          { name: 'Veggie Burger', price: 11 },
          { name: 'Loaded Fries', price: 7 },
          { name: 'Chocolate Milkshake', price: 6 },
        ],
      },
    },
  });

  const manhattanPizza = await prisma.restaurant.create({
    data: {
      name: 'Manhattan Pizza Co.',
      country: Country.AMERICA,
      menuItems: {
        create: [
          { name: 'Pepperoni Pizza', price: 18 },
          { name: 'BBQ Chicken Pizza', price: 20 },
          { name: 'Margherita Pizza', price: 15 },
          { name: 'Caesar Salad', price: 9 },
          { name: 'Garlic Bread', price: 5 },
        ],
      },
    },
  });

  const starSpangled = await prisma.restaurant.create({
    data: {
      name: 'Star Spangled Diner',
      country: Country.AMERICA,
      menuItems: {
        create: [
          { name: 'Pancake Stack', price: 10 },
          { name: 'Club Sandwich', price: 13 },
          { name: 'Mac and Cheese', price: 11 },
          { name: 'Chicken Wings', price: 14 },
          { name: 'Apple Pie', price: 7 },
        ],
      },
    },
  });

  console.log('✅ Seeded:');
  console.log(`   🇮🇳 India:   ${spiceGarden.name}, ${bombayBites.name}, ${thaliwala.name}`);
  console.log(`   🇺🇸 America: ${libertyBurgers.name}, ${manhattanPizza.name}, ${starSpangled.name}`);
  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
