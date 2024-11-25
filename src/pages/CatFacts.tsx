import React from "react";
import Card from "../components/Card";
import { useInfiniteQuery } from "react-query";
import { fetchCatFacts } from "../services/api";

const CatFacts = () => {
  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey: "catFacts",
    queryFn: fetchCatFacts,
  });

  console.log(data);
  return (
    <div className="margin-auto w-2/4">
      <Card
        image="https://randomuser.me/api/portraits/med/women/60.jpg"
        name="test"
        description="test"
      />
      {data?.pages[0].data.data.map((fact: any) => (
        <Card
          image="https://randomuser.me/api/portraits/med/women/60.jpg"
          name="test"
          description={fact.fact}
        />
      ))}
    </div>
  );
};

export default CatFacts;
