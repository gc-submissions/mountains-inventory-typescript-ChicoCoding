import { mountains, findNameOfTallestMountain } from "./mountains";
import { products, calcAverageProductPrice } from "./products";
import { inventory, calcInventoryValue } from "./inventory";
let tallest: string = findNameOfTallestMountain(mountains);
console.log(tallest);

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);

let invValue: number = calcInventoryValue(inventory);
console.log(invValue);
