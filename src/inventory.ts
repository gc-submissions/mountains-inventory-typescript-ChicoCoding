import InventoryItem from "./Models/Inventory";

export const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 },
];

export const calcInventoryValue = (inventory: InventoryItem[]): number => {
  let sum: number = 0;
  if (inventory.length <= 0) {
    return 0;
  } else {
    inventory.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    return sum;
  }
};
