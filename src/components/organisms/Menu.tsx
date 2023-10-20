import React from "react";
import Link from "next/link";

const Menu = () => {
  const [isCollapse, setIsCollapse] = React.useState<boolean>(false);

  return (
    <div
      className={`fixed top-1/2 right-5 md:right-10 z-20 animate-pulse flex flex-col items-center justify-center ${
        isCollapse ? "h-auto -mt-24 hover:scale-100" : "h-auto hover:scale-95"
      } transition ease-in-out duration-200 transform flex flex-col items-center w-auto space-y-5 rounded-md p-3 backdrop-blur-xl bg-white bg-opacity-10`}
    >
      <button
        type="button"
        aria-label="Menu"
        className="outline-none"
        onClick={() =>
          isCollapse ? setIsCollapse(false) : setIsCollapse(true)
        }
      >
        {!isCollapse ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 md:w-10 h-8 md:h-10 cursor-pointer text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-white transition ease-in-out duration-200 transform hover:scale-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      {isCollapse && (
        <>
          <Link
            title="Home"
            className={`${isCollapse ? "block" : "hide"}`}
            href="/"
            onClick={() => setIsCollapse(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 md:w-10 h-8 md:h-10 text-white transition ease-in-out duration-200 transform hover:scale-90"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
          <Link
            title="Portfolio"
            className={`${isCollapse ? "block" : "hide"}`}
            href="/portfolio"
            onClick={() => setIsCollapse(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 md:w-10 h-8 md:h-10 text-white transition ease-in-out duration-200 transform hover:scale-90"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </Link>
          <Link
            title="Blog"
            className={`${isCollapse ? "block" : "hide"}`}
            href="/blog"
            onClick={() => setIsCollapse(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 md:w-10 h-8 md:h-10 text-white transition ease-in-out duration-200 transform hover:scale-90"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </Link>
          <Link
            title="Admin Panel"
            className={`${isCollapse ? "block" : "hide"}`}
            href="https://veoportal-admin.vercel.app/"
            target="_blank"
            onClick={() => setIsCollapse(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 md:w-10 h-8 md:h-10 text-white transition ease-in-out duration-200 transform hover:scale-90"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </Link>
        </>
      )}
    </div>
  );
};

export default Menu;
