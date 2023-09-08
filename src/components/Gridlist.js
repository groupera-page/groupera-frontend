import React from "react";

export default function Gridlist() {
  return (
    <div>
      <div class="grid grid-cols-3">
        <div class="col-span-1">Column 1</div>
        <div class="col-span-1">Column 2</div>
        <div class="col-span-1">Column 3</div>

        <div class="col-span-1">Column 4</div>
        <div class="col-span-1">Column 5</div>
        <div class="col-span-1">Column 6</div>
      </div>
    </div>
  );
}
