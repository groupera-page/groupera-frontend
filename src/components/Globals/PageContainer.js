import React from "react";

export default function PageContainer({ children }) {
  return (
    <div className="bg-BG_PRIMARY lg:bg-BG_GRAY h-screen">
      <div className="px-5 lg:pt-16 lg:pl-48 lg:px-20 pb-20">
        <div className={`flex flex-col`}>{children}</div>
      </div>
    </div>
  );
}
