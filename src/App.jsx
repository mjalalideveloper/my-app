import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomeBackground from "./assets/HomeBackground.jpg";

function App() {
  return (
    <>
      <div>
        <nav className="inline-block fixed top-3 left-3 p-3 rounded-2xl bg-background/50">
          <ul className="flex flex-col gap-0.5">
            <li>
              <a href="#">
                <span className="text-secondary">user@codeterminal</span>
                <span className="text-primary">:</span>
                <span className="text-text">~</span>
                <span className="text-primary">$ </span>
                <span className="text-primary">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-secondary">user@codeterminal</span>
                <span className="text-primary">:</span>
                <span className="text-text">~</span>
                <span className="text-primary">$ </span>
                <span className="text-primary">About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-secondary">user@codeterminal</span>
                <span className="text-primary">:</span>
                <span className="text-text">~</span>
                <span className="text-primary">$ </span>
                <span className="text-primary">Skills</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-secondary">user@codeterminal</span>
                <span className="text-primary">:</span>
                <span className="text-text">~</span>
                <span className="text-primary">$ </span>
                <span className="text-primary">Experience</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-secondary">user@codeterminal</span>
                <span className="text-primary">:</span>
                <span className="text-text">~</span>
                <span className="text-primary">$ </span>
                <span className="text-primary">Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-secondary">user@codeterminal</span>
                <span className="text-primary">:</span>
                <span className="text-text">~</span>
                <span className="text-primary">$ </span>
                <span className="text-primary">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        <div
          style={{
            background:
              "url(/src/assets/homeBackground.jpg) , var(--color-background)",
          }}
          className=" flex flex-col justify-center items-center w-full h-[100vh] bg-cover"
        >
          <h1>fvgvgv</h1>
          <h3>dfvfvgv</h3>
        </div>
      </div>
    </>
  );
}

export default App;
