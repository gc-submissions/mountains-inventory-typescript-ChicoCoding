import Product from "./Models/Product";

export const products: Product[] = [
  { name: "Faygo", price: 1 },
  { name: "Gummy Bears", price: 2.5 },
  { name: "Gold Bar", price: 100 },
  { name: "A Comically Large Penny", price: 0.01 },
];

export const calcAverageProductPrice = (productArray: Product[]): number => {
  let sum: number = 0;
  if (productArray.length <= 0) {
    return 0;
  } else {
    productArray.forEach((product) => {
      sum += product.price;
    });
    let average: number = sum / productArray.length;
    return average;
  }
};
