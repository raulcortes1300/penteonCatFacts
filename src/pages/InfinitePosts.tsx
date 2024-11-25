import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { fetchPosts } from "../services/api";
import { toast } from "react-toastify";

export default function InfinitePosts() {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery(["posts"], fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      const totalFetched = pages.reduce(
        (acc, page) => acc + page.data.length,
        0
      );
      return totalFetched < lastPage.totalCount ? lastPage.nextPage : undefined;
    },
    onError: (err: any) => {
      toast.error(`Error: ${err.message}`);
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map((post: { id: number; title: string }) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div ref={ref}>
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll to load more"
          : "No more posts"}
      </div>
    </div>
  );
}
