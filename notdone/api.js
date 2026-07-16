const github = "https://api.github.com/users/";

async function developerFinder() {
  try {
    const response = await fetch(github);

    if (!response.ok) {
      throw new Error("Failed to find developer");
    }

    const data = await response.json();

    users = data;
  } catch (error) {
    console.error(error);
  }
}