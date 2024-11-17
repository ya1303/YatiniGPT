import { useRef } from "react";
import "./newPrompt.css";
import { useEffect } from "react";
import Upload from "../upload/Upload";

const NewPrompt = () => {
    const endRef = useRef(null);

    useEffect(() => {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
  return (
    <>
      <div className="endChat" ref={endRef}></div>
      <form action="" className="newForm">
        <Upload/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask Anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
