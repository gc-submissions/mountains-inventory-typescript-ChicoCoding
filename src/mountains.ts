import Mountain from "./Models/Mountain";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (
  arrayOfMountains: Mountain[]
): string => {
  let tallest: Mountain = arrayOfMountains[0];
  arrayOfMountains.forEach((mtn) => {
    if (mtn.height > tallest.height) {
      tallest = mtn;
    }
  });
  if (arrayOfMountains !== undefined) {
    return tallest.name;
  } else {
    return "Error: No Array of Mountains";
  }
};
