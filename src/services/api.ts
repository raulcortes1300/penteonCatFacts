export const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);

    // Re-throw the error so React Query can handle it
    throw error;
  }
};

export const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=25`
  );
  if (!response.ok) {
    throw new Error(`Error fetching posts: ${response.status}`);
  }

  // Optionally parse total count from headers (if provided by API)
  const totalCount = parseInt(response.headers.get("X-Total-Count") || "0", 10);

  const data = await response.json();

  return { data, totalCount, nextPage: pageParam + 1 };
};

export const fetchCatFacts = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://catfact.ninja/facts?page=${pageParam}`);
  if (!response.ok) {
    throw new Error(`Error fetching cat facts: ${response.status}`);
  }

  const data = await response.json();
  const total = data.total;
  //   const result = data.data;

  return { total, data };
};
