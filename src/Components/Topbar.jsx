import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <nav className="flex lg:flex justify-around pt-5 mx-44">
      <img src="logo.png" alt="Company Logo" className="w-32 pt-0" />
      <div className="hidden lg:flex justify-normal mt-10 gap-7 text-sm text-gray-400">
        <Link to="/">
          <h1 className="underline-animation hover:text-white">Home</h1>
        </Link>
        <Link to="/about">
          <h1 className="underline-animation hover:text-white">About</h1>
        </Link>
        <Link to="/services">
          <h1 className="underline-animation hover:text-white">Service</h1>
        </Link>
        <Link to="/portfolio">
          <h1 className="underline-animation hover:text-white">Portfolio</h1>
        </Link>
        <Link to="/jobs">
          <h1 className="underline-animation hover:text-white">Jobs</h1>
        </Link>
        <Link to="/blog">
          <h1 className="underline-animation hover:text-white">Blog</h1>
        </Link>
        <Link to="/contact">
          <h1 className="underline-animation hover:text-white">Contact</h1>
        </Link>
      </div>
      <div className="flex justify-normal mt-10 gap-7 lg:hidden">
        <button aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
