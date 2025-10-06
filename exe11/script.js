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