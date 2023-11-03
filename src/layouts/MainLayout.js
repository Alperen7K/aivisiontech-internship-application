/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Helmet>
        <html className="m-0 p-0" />
        <body className="min-h-full  box-border  antialiased" />
      </Helmet>
      <Outlet />
    </>
  )
};
// bg-gradient-to-r from-[#000033] from-3%  via-[#0099ff] to-[#000033] to-97%
