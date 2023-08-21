import { useState } from "react";
import GradientText from "@/components/GradientText";
import GradientLine from "@/components/GradientLine";
import did from "@/assets/images/did.png";
import platform from "@/assets/images/platform.png";
import move_space_db from "@/assets/images/move_space_db.png";
import gpt_sandbox from "@/assets/images/gpt_sandbox.png";
import zk_movedid from "@/assets/images/zk_movedid.png";

import git from "@/assets/images/git.png";
import twitter from "@/assets/images/twitter.png";
import aptos from "@/assets/images/aptos.png";
import movebit from "@/assets/images/movebit.png";
import townesquare from "@/assets/images/townesquare.png";
export default function HomePage() {
  const [partners, setPartners] = useState([
    {
      name: "aptos",
      imgSrc: aptos,
      link: "https://aptos.dev/",
    },
    {
      name: "townesquare",
      imgSrc: townesquare,
      link: "https://www.townesquare.xyz/",
    },
    {
      name: "movebit",
      imgSrc: movebit,
      link: "https://movebit.xyz/",
    }
  ]);
  const [contact, setContact] = useState([
    {
      name: "git",
      imgSrc: git,
      link: "https://github.com/NonceGeek", 
      // TODO: update to new
    },
    {
      name: "twitter",
      imgSrc: twitter,
      link: "https://twitter.com/noncegeek",
      // TODO: update to new
    },
  ]);
  return (
    <div className="container">
      <main>
        <div className="lg:w-[1100px] m-auto">
          <div className="font-Inter-Bold text-[40px] text-center lg:mt-[100px] lg:mb-[60px] my-[20px]">
            MoveSpace
          </div>
          <div className="font-Inter-Regular text-[20px] text-center">
            <div>
              An AI-powered ZKML Decentralized Datahouse.
            </div>
            <div className="lg:my-[30px] my-[10px]">
              We power LLMs with verifiable tamperproof datasets and developers with tamperproof zk outputs and data.
            </div>
            <div className="lg:my-[30px] my-[10px]">
              Build new dapps with our database backend and AI-powered developer copilots today.
            </div>
          </div>
        </div>
        {/* Platform */}
        <div className="flex flex-wrap lg:mt-[100px] mt-[30px]">
          <div className="font-Inter-Bold text-[30px] text-center mb-[60px] m-auto">
            Our Platform
          </div>
          <img src={platform} className="w-full" alt="" />
        </div>

        {/* MoveSpaceDB */}
        <div className="flex flex-wrap lg:mt-[100px] mt-[30px]">
          <div className="font-Inter-Bold text-[30px] text-center mb-[60px] m-auto">
            MoveSpace DB: Next-Gen Data Backend.
          </div>
          <img src={move_space_db} className="w-full" alt="" />
        </div>

        {/* GPTSandBox */}
        <div className="flex flex-wrap lg:mt-[100px] mt-[30px]">
          <div className="font-Inter-Bold text-[30px] text-center mb-[60px] m-auto">
            GPT Sandbox: An AI middleware built on OpenAI, Open-Source LLM and vectorDB.
          </div>
          <img src={gpt_sandbox} className="w-full" alt="" />
        </div>

        {/* Move zkDID */}
        <div className="flex flex-wrap lg:mt-[100px] mt-[30px]">
          <div className="font-Inter-Bold text-[30px] text-center mb-[60px] m-auto">
          Move zkDID: A composable DID with zk privacy protection built on MoveSpaceDB and W3C standard.
          </div>
          <img src={zk_movedid} className="w-full" alt="" />
        </div>
        
        <div className="flex flex-wrap justify-center">
          <div className="font-Inter-Bold text-[36px] w-full text-center mt-[100px] mb-[60px]">
            Partners
          </div>
          <div className="font-Inter-Regular text-[20px] lg:w-[640px] w-full flex justify-between">
            {partners.map((item, index) => {
              return (
                <a href={item.link} key={index} target={"_blank"}>
                  <img src={item.imgSrc} alt={item.name} className="w-[50px]" />
                </a>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="flex mt-[80px] lg:flex-row flex-col items-center pb-10">
        <div>
          <img src={did} className="w-[105px]" alt="" />
        </div>
        <div className="flex-grow text-center font-Inter-Bold text-[16px] lg:my-0 my-5">
          If you have any questions, please contact us at <br></br>
          <a href="mailto:lee.aohua@movespace.xyz" className=" underline">
            lee.aohua@movespace.xyz
          </a>
        </div>
        <div className="flex items-baseline lg:w-[200px] w-[40%] lg:justify-start justify-between">
          {contact.map((item, index) => {
            return (
              <a
                href={item.link}
                key={index}
                className="mr-[20px]"
                target={"_blank"}
              >
                <img src={item.imgSrc} alt={item.name} className="w-[20px]" />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
