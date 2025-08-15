const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// filter to create a new list with items matching the condition
let price = 200;
const filterProducts = products.filter((product) => product.price < 200);
console.log(`Items with a price below 200:`, filterProducts);

// map to create a new list with only the key name
const productsNames = products.map((product) => product.name);
console.log(productsNames);

// creates a new list with only electronics
const findProductCategory = products.filter(
  (product) => product.category === "electronics"
);

// map to create a new list with names from the electronics category
const productsElectronicsNames = findProductCategory.map(
  (product) => product.name
);
console.log(productsElectronicsNames);

// product returns true if its price is above 1000
const luxuryProducts = products.some((product) => product.price > 1000);
console.log(`There are item(s) with a price above $1000: ${luxuryProducts}`);

// finds the total price
const productsTotalPrice = products.reduce(
  (accumelate, currentValue) => accumelate + currentValue.price,
  0
);
console.log(`The total price of all the products is $${productsTotalPrice}`);
