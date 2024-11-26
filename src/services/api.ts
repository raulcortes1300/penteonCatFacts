import type { CatFactsResponse, RandomUsersResponse } from "../types";

export const fetchPage = async ({ pageParam = 1 }) => {
  const [catResponse, userResponse] = await Promise.all([
    fetch(`https://catfact.ninja/facts?page=${pageParam}`),
    fetch("https://randomuser.me/api?results=10"),
  ]);

  if (!catResponse.ok || !userResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const catData: CatFactsResponse = await catResponse.json();
  const userData: RandomUsersResponse = await userResponse.json();

  return {
    facts: catData.data,
    users: userData.results,
    nextPage: pageParam < catData.last_page ? pageParam + 1 : undefined,
    currentPage: pageParam,
  };
};
