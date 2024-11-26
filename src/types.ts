export interface CatFact {
  fact: string;
  length: number;
}

export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

export interface CatFactsResponse {
  data: CatFact[];
  current_page: number;
  last_page: number;
}

export interface RandomUsersResponse {
  results: RandomUser[];
}
