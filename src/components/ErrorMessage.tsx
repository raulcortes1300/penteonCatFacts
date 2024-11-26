import React from "react";

interface ErrorMessageProps {
  error: Error;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg mb-4">
          Something went wrong:
          <span className="font-semibold block mt-2 text-red-500">
            {error.message}
          </span>
        </p>
        <button
          className="px-6 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
