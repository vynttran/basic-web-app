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

  let query = "Which of the following numbers is the largest: 64, 79, 4?"; // Example query

  if (query.toLowerCase().includes("largest")) {
    let numbers = query.match(/\d+/g).map(Number); // Extract numbers from the query and convert them to Number type
    let largest = Math.max(...numbers); // Use Math.max to find the largest number
    return largest.toString(); // Convert the largest number to string and return it
  }

  if (query.toLowerCase().includes("plus")) {
    return (
      
    );
  }

  return "";
}
