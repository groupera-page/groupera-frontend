import React from "react";

export default function PageContainer({ children }) {
  return (
    <div className="bg-BG_PRIMARY lg:bg-BG_GRAY min-h-[100vh] pb-10">
      <div className="px-5 lg:pt-16 lg:pl-48 md:px-20 ">
        <div className={`flex flex-col`}>{children}</div>
      </div>
    </div>
  );
}
