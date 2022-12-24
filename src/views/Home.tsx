import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const onPageLoad = () => {
      const script = document.createElement("script");
      script.id = "liquid-script";
      script.src = "/demo.js";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }

    return () => {
      const script = document.getElementById("liquid-script");
      script?.parentNode?.removeChild(script);
      window.removeEventListener("load", onPageLoad);
    };
  }, []);

  return (
    <>
      <div className="content__text hidden lg:flex">
        <span className="content__text-inner text-black text-opacity-0">
          hello
        </span>
      </div>
      <div className="visible flex lg:hidden">
        <h1 className="text-9xl font-bold">hello</h1>
      </div>
    </>
  );
};
