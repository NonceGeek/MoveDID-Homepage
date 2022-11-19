import { Link, Outlet } from "umi";
import { useState } from "react";
import classnames from "classnames";
import logo from "@/assets/images/logo.png";
import git_logo from "@/assets/images/git_logo.png";
import nav_img from "@/assets/images/nav.png";
import GradientLine from "@/components/GradientLine";
export default function Layout() {
  const [nav, setNav] = useState([
    {
      name: "Home",
      status: true,
      link: "/",
    },
    {
      name: "DID Manager",
      status: false,
      link: "/didManager",
      outlink: "https://manager.movedid.build",
    },
    {
      name: "Docs",
      status: false,
      link: "/docs",
      outlink: "https://docs.movedid.build",
    },
  ]);

  const [visible, setVisible] = useState(false);
  const gotoPage = (index: any) => {
    nav.map((item) => {
      item.status = false;
    });
    nav[index].status = true;
    setNav([...nav]);
  };

  return (
    <div className=" bg-globalBg w-screen text-white ">
      <div className="bg-mainImg1 bg-no-repeat bg-cover">
        <main className="container m-auto px-5">
          <header className="lg:h-[80px] lg:text-[20px] flex items-center h-[60px]">
            <div className="lg:mr-10">
              <img src={logo} className="h-[35px]" alt="" />
            </div>
            <ul className="lg:flex lg:list-none lg:visible invisible">
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
            <div className="flex-grow ">
              <a
                href="https://github.com/NonceGeek/MoveDID"
                target={"_blank"}
                className="flex flex-row-reverse"
              >
                <img src={git_logo} alt="" className="w-[24px]" />
              </a>
            </div>
            <div className="lg:invisible visible relative">
              <img
                src={nav_img}
                className="w-[24px] ml-[20px]"
                alt=""
                onClick={() => setVisible(!visible)}
              />
              {visible ? (
                <ul className="list-none absolute top-8 right-0 border border-white border-solid">
                  {nav.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={classnames("m-2 font-Inter-Regular")}
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
              ) : (
                <></>
              )}
            </div>
          </header>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
