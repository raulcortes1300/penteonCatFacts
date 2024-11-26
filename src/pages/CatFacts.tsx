import React, { useEffect } from "react";
import Card from "../components/Card";
import { useInfiniteQuery } from "react-query";
import { fetchPage } from "../services/api";
import { useInView } from "react-intersection-observer";
import { SkeletonCard } from "../components/SkeletonCard";
import { toast } from "react-toastify";
import ErrorMessage from "../components/ErrorMessage";

const CatFacts = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["catFacts"],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    onError: (err: any) => {
      toast.error(`Error: ${err.message}`);
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {[...Array(5)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Here we are using index as the key for the list elements and it is not a good practice but we do not have an id from the api */}
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.facts.map((fact, index) => (
              <Card
                key={`${i}-${index}`}
                fact={fact}
                user={page.users[index]}
              />
            ))}
          </React.Fragment>
        ))}

        <div ref={ref} className="h-10 flex justify-center">
          {isFetchingNextPage && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatFacts;
