import React from "react";

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse mr-4" />
        <div className="h-6 w-32 bg-gray-200 animate-pulse rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
      </div>
    </div>
  );
};
