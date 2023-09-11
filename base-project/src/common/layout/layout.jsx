import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useProductData from '../../hooks/useProductData';

const Layout = () => {
  const { state } = useLocation()
  const { data } = useProductData('products/categories')
  return (
    <div className="h-[100svh] grid grid-rows-[4rem_1fr] overflow-hidden">
      <header className="shadow-md flex items-center justify-between px-5">
        <h1 className="font-bold text-xl text-[#380C65]">BEND DOWN SELECT</h1>
        <div className="flex items-center gap-3">
          {state && (
            <>
              <h3>{state.username?.toUpperCase()}</h3>
              <img
                src={state.image}
                className="rounded-full w-10 h-10 outline outline-black"
                alt=""
              />
            </>
          )}
        </div>
      </header>
      <main className="h-full grid grid-cols-[13rem_1fr] overflow-auto">
        <aside className="shadow-md overflow-auto">
          <div className="p-5">
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? "bg-purple-300 p-5 rounded-md w-full"
                    : "text-purple-600"
                }`;
              }}
              to={"/home/dashboard"}
            >
              DASHBOARD
            </NavLink>
          </div>
          {data &&
            data.map((item) => (
              <div className="p-5">
                <NavLink
                  className={({ isActive }) => {
                    return `${
                      isActive
                        ? "bg-purple-300 p-5 rounded-md w-full"
                        : "text-purple-600"
                    }`;
                  }}
                  to={item}
                  state={item}
                >
                  {item?.toUpperCase()}
                </NavLink>
              </div>
            ))}
        </aside>
        <section className="bg-[#f5eefc] p-5">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout