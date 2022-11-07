import { Link, Outlet } from "umi";
import { useState } from "react";
import classnames from "classnames";
import logo from "@/assets/images/logo.png";

import GradientLine from "@/components/GradientLine";
export default function Layout() {
  const [nav, setNav] = useState([
    {
      name: "Home",
      status: true,
      link: "/",
    },
    {
      name: "Docs",
      status: false,
      link: "/docs",
    },
    {
      name: "WhitePaperV1",
      status: false,
      link: "/whitePaper",
    },
    {
      name: "Demo",
      status: false,
      link: "/demo",
    },
  ]);
  const gotoPage = (index: any) => {
    nav.map((item) => {
      item.status = false;
    });
    nav[index].status = true;
    setNav([...nav]);
  };
  return (
    <div className=" bg-black w-screen text-white pb-[100px]">
      <div className="bg-mainImg bg-no-repeat bg-cover">
        <main className="w-[1200px] m-auto">
          <header className="h-[80px] flex items-center text-[20px]">
            <div className="mr-10">
              <img src={logo} className="h-[35px]" alt="" />
            </div>
            <ul className="flex list-none">
              {nav.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classnames(
                      "mx-10",
                      item.status
                        ? " font-IBMPlexMono-Bold"
                        : " font-IBMPlexMono-Light"
                    )}
                    onClick={() => gotoPage(index)}
                  >
                    <Link to={item.link}>{item.name}</Link>
                    {item.status ? (
                      <GradientLine height="lg"></GradientLine>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex-grow text-right">
              <a
                href="https://github.com/NonceGeek/MoveDID-Homepage"
                target={"_blank"}
                className=" font-IBMPlexMono-Light"
              >
                github
              </a>
            </div>
          </header>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
