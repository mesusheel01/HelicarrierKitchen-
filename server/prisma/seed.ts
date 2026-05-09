import { PrismaClient, Country } from "./generated/client";



const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding restaurants and menu items...');

  // ─── INDIA RESTAURANTS ──────────────────────────────────────────────────────

  const spiceGarden = await prisma.restaurant.create({
    data: {
      name: 'Spice Garden',
      country: Country.INDIA,
      menuItems: {
        create: [
          { name: 'Butter Chicken', price: 280, description: 'Creamy tomato based chicken curry' },
          { name: 'Paneer Tikka', price: 220, description: 'Grilled cottage cheese with spices' },
          { name: 'Dal Makhani', price: 180, description: 'Slow cooked black lentils' },
          { name: 'Garlic Naan', price: 60, description: 'Soft bread with garlic butter' },
          { name: 'Mango Lassi', price: 80, description: 'Chilled mango yogurt drink' },
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
          { name: 'Vada Pav', price: 40, description: 'Mumbai street style potato burger' },
          { name: 'Pav Bhaji', price: 120, description: 'Spiced vegetable mash with bread' },
          { name: 'Chicken Biryani', price: 300, description: 'Aromatic basmati rice with chicken' },
          { name: 'Masala Chai', price: 30, description: 'Spiced Indian tea' },
          { name: 'Gulab Jamun', price: 80, description: 'Soft milk dumplings in sugar syrup' },
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
          { name: 'Rajasthani Thali', price: 350, description: 'Full meal with dal baati churma' },
          { name: 'Chole Bhature', price: 150, description: 'Spiced chickpeas with fried bread' },
          { name: 'Aloo Paratha', price: 90, description: 'Stuffed potato flatbread with butter' },
          { name: 'Raita', price: 50, description: 'Yogurt with cucumber and spices' },
          { name: 'Kheer', price: 100, description: 'Rice pudding with cardamom' },
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
          { name: 'Classic Cheeseburger', price: 12, description: 'Beef patty with cheddar and pickles' },
          { name: 'BBQ Bacon Burger', price: 15, description: 'Smoky BBQ sauce with crispy bacon' },
          { name: 'Veggie Burger', price: 11, description: 'Plant based patty with fresh veggies' },
          { name: 'Loaded Fries', price: 7, description: 'Fries with cheese sauce and jalapenos' },
          { name: 'Chocolate Milkshake', price: 6, description: 'Thick creamy chocolate shake' },
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
          { name: 'Pepperoni Pizza', price: 18, description: 'Classic NY style pepperoni pizza' },
          { name: 'BBQ Chicken Pizza', price: 20, description: 'Tangy BBQ chicken with red onions' },
          { name: 'Margherita Pizza', price: 15, description: 'Fresh basil and mozzarella' },
          { name: 'Caesar Salad', price: 9, description: 'Romaine lettuce with caesar dressing' },
          { name: 'Garlic Bread', price: 5, description: 'Toasted bread with garlic butter' },
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
          { name: 'Pancake Stack', price: 10, description: 'Fluffy pancakes with maple syrup' },
          { name: 'Club Sandwich', price: 13, description: 'Triple decker with turkey and bacon' },
          { name: 'Mac and Cheese', price: 11, description: 'Creamy baked macaroni with cheese' },
          { name: 'Chicken Wings', price: 14, description: 'Crispy wings with buffalo sauce' },
          { name: 'Apple Pie', price: 7, description: 'Classic american apple pie with cream' },
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
