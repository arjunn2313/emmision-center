 import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-teal-600"></div>
    </div>
  );
};

export default Loading;
