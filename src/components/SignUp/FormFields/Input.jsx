import React from "react";

const MyInput = (params) => {
  return (
    <div>
      <div className="mt-4 text-sm border border-primaryblue rounded-md">
        {
          params.type === "textarea" ?
            <textarea
              {...params}
              className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
            >
              {params.value || params.placeholder}
            </textarea>
            :
            <input
              {...params}
              className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
            />

        }
      </div>
      {
        params.hint &&
        <p className="px-1 mb-2 text-textLightGray">
          {params.hint}
        </p>
      }
      {
        params.error &&
        <p className="px-1 mb-2 text-textLightGray">
          {params.error.map(e => e)}
        </p>
      }
    </div>
  )
}

export default MyInput;
