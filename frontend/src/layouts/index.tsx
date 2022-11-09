import { Link, Outlet } from "umi";
import { useState } from "react";
import classnames from "classnames";
import logo from "@/assets/images/logo.png";
import git_logo from "@/assets/images/git_logo.png";
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
      outlink: "https://docs.movedid.build",
    },
    {
      name: "WhitePaperV1",
      status: false,
      link: "/whitePaper",
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
                    className={classnames("mx-10 font-Inter-Regular")}
                    onClick={() => gotoPage(index)}
                  >
                    {item.outlink ? (
                      <a href={item.outlink} target={"_blank"}>
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.link}>{item.name}</Link>
                    )}
                    {item.status ? (
                      <GradientLine height="lg"></GradientLine>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex-grow">
              <a
                href="https://github.com/NonceGeek/MoveDID"
                target={"_blank"}
                className="flex flex-row-reverse"
              >
                <img src={git_logo} alt="" className="w-[24px]" />
              </a>
            </div>
          </header>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
