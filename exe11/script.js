// ============================================
// ARRAY METHODS PRACTICE - E-COMMERCE DATA
// ============================================

const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true, rating: 4.5 },
    { id: 2, name: 'Phone', price: 699, category: 'Electronics', inStock: true, rating: 4.8 },
    { id: 3, name: 'Headphones', price: 199, category: 'Electronics', inStock: false, rating: 4.2 },
    { id: 4, name: 'Keyboard', price: 89, category: 'Accessories', inStock: true, rating: 4.0 },
    { id: 5, name: 'Mouse', price: 49, category: 'Accessories', inStock: true, rating: 4.3 },
    { id: 6, name: 'Monitor', price: 299, category: 'Electronics', inStock: true, rating: 4.6 },
    { id: 7, name: 'Webcam', price: 79, category: 'Accessories', inStock: false, rating: 3.9 },
    { id: 8, name: 'Desk Lamp', price: 39, category: 'Furniture', inStock: true, rating: 4.1 }
];

// ============================================
// EXERCISES - Try to solve without looking at solutions
// ============================================

// 1. MAP - Get array of product names only
// Expected: ['Laptop', 'Phone', 'Headphones', ...]
const productNames = products.map(product => product.name); // YOUR CODE HERE
console.log([productNames]);


// 2. FILTER - Get products that are in stock
// Expected: [{ id: 1, name: 'Laptop', ... }, ...]
const inStockProducts = products.filter(product => product.inStock)
console.log(inStockProducts);



// 3. FILTER - Get Electronics under $500
// Expected: [{ id: 4, name: 'Keyboard', ... }, ...]
const affordableElectronics = products.filter(product => product.price < 500) // YOUR CODE HERE
console.log(affordableElectronics);


// 4. MAP - Apply 20% discount to all prices (return new array with discounted prices)
// Expected: [{ ...product, price: 799.2 }, ...]
const discountedProducts = products.map(product => ({
    ...product,
    price: +(product.price * 0.8).toFixed(2)
}))
console.log(discountedProducts);



// 5. REDUCE - Calculate total value of all products
// Expected: 2452
const totalValue = products.reduce((acc, item) => {
    return acc + item.price;
}, 0)
console.log(totalValue);


// 6. REDUCE - Count products by category
// Expected: { Electronics: 4, Accessories: 3, Furniture: 1 }
const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
}, {});


// 7. CHAINING - Get names of in-stock Electronics with rating > 4.5
// Expected: ['Phone', 'Monitor']
const topElectronics = products.filter(product => product.inStock).filter(product => product.rating > 4.5 )
console.log(topElectronics);



// 8. REDUCE - Find the most expensive product
// Expected: { id: 1, name: 'Laptop', price: 999, ... }
const mostExpensive = products.reduce((max, product) =>
    product.price > max.price ? product : max
);
console.log(mostExpensive);




// 9. MAP + FILTER - Get prices of in-stock Accessories
// Expected: [89, 49]
const accessoryPrices = products.filter(product => product.inStock).map(product => product.price)
console.log(accessoryPrices);



// 10. REDUCE - Calculate average rating of all products
// Expected: 4.3 (approximately)
const averageRating = products.reduce((sum, p, i, arr) => {
    sum += p.rating;
    return i === arr.length - 1 ? sum / arr.length : sum;
}, 0);
console.log(averageRating);



// ============================================
// BONUS CHALLENGES
// ============================================

// 11. Group products by price range (0-100, 101-500, 501+)
const priceRanges = null; // YOUR CODE HERE


// 12. Find product with highest rating that's in stock
const bestInStock = null; // YOUR CODE HERE


// ============================================
// TEST YOUR SOLUTIONS
// ============================================

console.log('1. Product Names:', productNames);
console.log('2. In Stock:', inStockProducts);
console.log('3. Affordable Electronics:', affordableElectronics);
console.log('4. Discounted Products:', discountedProducts);
console.log('5. Total Value:', totalValue);
console.log('6. Products by Category:', productsByCategory);
console.log('7. Top Electronics:', topElectronics);
console.log('8. Most Expensive:', mostExpensive);
console.log('9. Accessory Prices:', accessoryPrices);
console.log('10. Average Rating:', averageRating);
console.log('11. Price Ranges:', priceRanges);
console.log('12. Best In Stock:', bestInStock);


// ============================================
// SOLUTIONS (Don't peek until you try!)
// ============================================

/*

// 1. MAP
const productNames = products.map(product => product.name);

// 2. FILTER
const inStockProducts = products.filter(product => product.inStock);

// 3. FILTER (chained conditions)
const affordableElectronics = products.filter(p => p.category === 'Electronics' && p.price < 500);

// 4. MAP (transform data)
const discountedProducts = products.map(p => ({
  ...p,
  price: p.price * 0.8
}));

// 5. REDUCE (sum)
const totalValue = products.reduce((sum, product) => sum + product.price, 0);

// 6. REDUCE (grouping/counting)
const productsByCategory = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

// 7. CHAINING
const topElectronics = products
  .filter(p => p.inStock && p.category === 'Electronics' && p.rating > 4.5)
  .map(p => p.name);

// 8. REDUCE (find max)
const mostExpensive = products.reduce((max, product) => 
  product.price > max.price ? product : max
);

// 9. MAP + FILTER
const accessoryPrices = products
  .filter(p => p.inStock && p.category === 'Accessories')
  .map(p => p.price);

// 10. REDUCE (average)
const averageRating = products.reduce((sum, p, i, arr) => {
  sum += p.rating;
  return i === arr.length - 1 ? sum / arr.length : sum;
}, 0);

// 11. REDUCE (complex grouping)
const priceRanges = products.reduce((ranges, p) => {
  const range = p.price <= 100 ? '0-100' : p.price <= 500 ? '101-500' : '501+';
  ranges[range] = [...(ranges[range] || []), p];
  return ranges;
}, {});

// 12. FILTER + REDUCE
const bestInStock = products
  .filter(p => p.inStock)
  .reduce((best, p) => p.rating > best.rating ? p : best);

*/


// ============================================
// UNDERSTANDING REDUCE - STEP BY STEP
// ============================================

// REDUCE SYNTAX:
// array.reduce((accumulator, currentItem) => {
//   // do something
//   return accumulator;
// }, initialValue);

// accumulator = the value that "accumulates" (builds up) as you loop
// currentItem = the current item in the array
// initialValue = what accumulator starts with


// ============================================
// EXAMPLE 1: SUM OF NUMBERS (Simplest)
// ============================================

const numbers = [1, 2, 3, 4, 5];

// WITHOUT REDUCE (traditional loop)
let sum = 0; // starting value
for (let num of numbers) {
    sum = sum + num; // accumulate
}
console.log('Sum (loop):', sum); // 15

// WITH REDUCE
const sumWithReduce = numbers.reduce((accumulator, currentNumber) => {
    console.log(`Accumulator: ${accumulator}, Current: ${currentNumber}`);
    return accumulator + currentNumber;
}, 0); // 0 is the starting value

console.log('Sum (reduce):', sumWithReduce); // 15

// STEP BY STEP VISUALIZATION:
// Loop 1: accumulator = 0,  current = 1  → return 0 + 1 = 1
// Loop 2: accumulator = 1,  current = 2  → return 1 + 2 = 3
// Loop 3: accumulator = 3,  current = 3  → return 3 + 3 = 6
// Loop 4: accumulator = 6,  current = 4  → return 6 + 4 = 10
// Loop 5: accumulator = 10, current = 5  → return 10 + 5 = 15
// Final Result: 15


// ============================================
// EXAMPLE 2: COUNT ITEMS
// ============================================

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Count how many times each fruit appears
const fruitCount = fruits.reduce((acc, fruit) => {
    // If fruit exists in acc, add 1, otherwise set to 1
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // Start with empty object

console.log('Fruit Count:', fruitCount);
// { apple: 3, banana: 2, orange: 1 }

// STEP BY STEP:
// Loop 1: acc = {},                        fruit = 'apple'  → acc = { apple: 1 }
// Loop 2: acc = { apple: 1 },              fruit = 'banana' → acc = { apple: 1, banana: 1 }
// Loop 3: acc = { apple: 1, banana: 1 },   fruit = 'apple'  → acc = { apple: 2, banana: 1 }
// Loop 4: acc = { apple: 2, banana: 1 },   fruit = 'orange' → acc = { apple: 2, banana: 1, orange: 1 }
// Loop 5: acc = { apple: 2, banana: 1, orange: 1 }, fruit = 'banana' → acc = { apple: 2, banana: 2, orange: 1 }
// Loop 6: acc = { apple: 2, banana: 2, orange: 1 }, fruit = 'apple'  → acc = { apple: 3, banana: 2, orange: 1 }


// ============================================
// EXAMPLE 3: FIND MAX NUMBER
// ============================================

const prices = [10, 50, 30, 90, 20];

const maxPrice = prices.reduce((max, current) => {
    return current > max ? current : max;
}, 0); // Start with 0

console.log('Max Price:', maxPrice); // 90

// STEP BY STEP:
// Loop 1: max = 0,  current = 10 → return 10 (10 > 0)
// Loop 2: max = 10, current = 50 → return 50 (50 > 10)
// Loop 3: max = 50, current = 30 → return 50 (30 not > 50)
// Loop 4: max = 50, current = 90 → return 90 (90 > 50)
// Loop 5: max = 90, current = 20 → return 90 (20 not > 90)
// Final: 90


// ============================================
// EXAMPLE 4: FLATTEN ARRAY
// ============================================

const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, current) => {
    return acc.concat(current);
}, []); // Start with empty array

console.log('Flattened:', flat); // [1, 2, 3, 4, 5, 6]

// STEP BY STEP:
// Loop 1: acc = [],           current = [1, 2] → acc = [1, 2]
// Loop 2: acc = [1, 2],       current = [3, 4] → acc = [1, 2, 3, 4]
// Loop 3: acc = [1, 2, 3, 4], current = [5, 6] → acc = [1, 2, 3, 4, 5, 6]


// ============================================
// EXAMPLE 5: REAL-WORLD - SHOPPING CART TOTAL
// ============================================

const cart = [
    { name: 'Laptop', price: 999, quantity: 1 },
    { name: 'Mouse', price: 49, quantity: 2 },
    { name: 'Keyboard', price: 89, quantity: 1 }
];

const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log('Cart Total:', cartTotal); // 1186

// STEP BY STEP:
// Loop 1: total = 0,    item = Laptop   → return 0 + (999 * 1) = 999
// Loop 2: total = 999,  item = Mouse    → return 999 + (49 * 2) = 1097
// Loop 3: total = 1097, item = Keyboard → return 1097 + (89 * 1) = 1186


// ============================================
// PRACTICE EXERCISES (Start Simple!)
// ============================================

// Exercise 1: Multiply all numbers
const nums = [2, 3, 4];
const product = null; // YOUR CODE - Expected: 24

// Exercise 2: Find minimum number
const values = [45, 12, 88, 23, 67];
const min = null; // YOUR CODE - Expected: 12

// Exercise 3: Count words by length
const words = ['hi', 'hello', 'hey', 'goodbye'];
const wordLengths = null; // YOUR CODE - Expected: { 2: 2, 5: 2, 7: 1 }

// Exercise 4: Sum of product prices
const products2 = [
    { name: 'Book', price: 15 },
    { name: 'Pen', price: 3 },
    { name: 'Notebook', price: 8 }
];
const totalPrice = null; // YOUR CODE - Expected: 26


// ============================================
// SOLUTIONS
// ============================================

/*

// Exercise 1
const product = nums.reduce((acc, num) => acc * num, 1);

// Exercise 2
const min = values.reduce((min, val) => val < min ? val : min, values[0]);

// Exercise 3
const wordLengths = words.reduce((acc, word) => {
  const len = word.length;
  acc[len] = (acc[len] || 0) + 1;
  return acc;
}, {});

// Exercise 4
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

*/


// ============================================
// KEY TAKEAWAYS
// ============================================

console.log(`
KEY POINTS:
1. Accumulator = the value that builds up
2. Initial value = what accumulator starts with
3. ALWAYS return the accumulator
4. Common initial values:
   - 0 for sums
   - {} for objects
   - [] for arrays
   - array[0] for finding min/max
`);