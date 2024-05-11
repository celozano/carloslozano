import { NavLink, Outlet } from "react-router-dom";

const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "underline" : "hover:underline "
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export const Layout = () => {
  return (
    <div className="flex h-screen flex-col justify-between px-5 py-3">
      <nav className="flex justify-between text-2xl font-black">
        <Link to="/">home</Link>
        <Link to="/work">work</Link>
        <Link to="/about">about</Link>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="flex flex-row-reverse text-2xl font-black">
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
