import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex h-screen flex-col px-5 py-3">
      <nav className="flex justify-between  text-2xl font-black">
        <Link className="hover:underline" to="/">
          home
        </Link>
        <Link className="hover:underline" to="/about">
          about
        </Link>
      </nav>
      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>
      <footer className="flex justify-between  text-2xl font-black">
        <a
          className="hover:underline"
          href="https://www.google.com"
          target="_blank"
        >
          e-mail
        </a>
        <a
          className="hover:underline"
          href="https://github.com/celozano"
          target="_blank"
        >
          github
        </a>
      </footer>
    </div>
  );
};
