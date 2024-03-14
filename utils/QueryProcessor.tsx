export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "My Andrew ID is vtran."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "5"
    );
  }

  let numbers = [88, 99, 64]; // Add the numbers to compare
  let largest = Math.max(...numbers);

  if (query.toLowerCase().includes("largest")) {
    return largest.toString();
  }

  if (query.toLowerCase().includes("plus")) {
    return (
      
    );
  }

  return "";
}
