import React from "react";

const Button = ({ onClick }) => {
  return (
  
<button
onClick={onClick}
  class="inline-block cursor-pointer items-center justify-center rounded-xl w-50.5 border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl"
>
  Hello
  <span class="text-slate-300/85"> ─ simple button</span>
</button>

  );
};

export default Button;