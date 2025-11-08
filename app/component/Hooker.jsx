import React from "react";
import useSystem from "../Hooks/mainHooks/useSystem";
import useChapters from "../Hooks/mainHooks/useChapters";
import useBooks from "../Hooks/mainHooks/useBooks";

const Hooker = () => {
  const { system } = useSystem();
  const { books} = useBooks();
  const { chapters} = useChapters();


  console.log("hooking 1",system)
  console.log("hooking 2",books)
  console.log("hooking 3",chapters)

  return <div>

    <p>I am a hooker</p>
  </div>;
};

export default Hooker;
