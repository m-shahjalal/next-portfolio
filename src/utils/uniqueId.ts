export const uuid = (length: number = 4): number => {
  if (length <= 0) {
    throw new Error("Length must be greater than zero");
  }

  let id = "";

  // Define the characters that can be used in the ID
  const characters = "0123456789";

  for (let i = 0; i < length; i++) {
    // Generate a random index to pick a character from the set of allowed characters
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Append the selected character to the ID
    id += characters.charAt(randomIndex);
  }

  // Convert the generated ID to a number
  const numericId = parseInt(id, 10);

  return numericId;
};
