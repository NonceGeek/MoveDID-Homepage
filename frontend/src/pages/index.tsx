import { useState } from "react";
import GradientText from "@/components/GradientText";
import GradientLine from "@/components/GradientLine";
import partner1 from "@/assets/images/partner1.png";
import partner2 from "@/assets/images/partner2.png";
import partner3 from "@/assets/images/partner3.png";
import partner4 from "@/assets/images/partner4.png";
import did from "@/assets/images/did.png";
import git from "@/assets/images/git.png";
import twitter from "@/assets/images/twitter.png";
export default function HomePage() {
  const [partners, setPartners] = useState([
    {
      name: "Moonbeam",
      imgSrc: partner1,
      link: "https://moonbeam.network/",
    },
    {
      name: "Polygon",
      imgSrc: partner2,
      link: "https://polygon.technology/",
    },
    {
      name: "WanXiangBlockchain",
      imgSrc: partner3,
      link: "https://www.wxblockchain.com/",
    },
    {
      name: "Starcoin",
      imgSrc: partner4,
      link: "https://starcoin.org/",
    },
  ]);
  const [contact, setContact] = useState([
    {
      name: "git",
      imgSrc: git,
      link: "https://github.com/NonceGeek/Move_DID",
    },
    {
      name: "twitter",
      imgSrc: twitter,
      link: "https://twitter.com/Move_DID",
    },
  ]);
  return (
    <div className="w-[1200px]">
      <main>
        <div className="m-auto text-center w-[680px]">
          <div className="font-Inter-Bold text-[36px] text-center mt-[180px] mb-[60px]">
            Introduction
          </div>
          <div className="font-Inter-Regular text-[20px] text-left">
            <div>
              MoveDID is a DID protocol that compatible with Move-based
              blockchain networks, including Aptos, Sui, and Starcoin.
            </div>
            <div className="my-[30px]">
              The vision of MoveDID is to be the foundation for the next
              generation of large-scale Web3 finance and Web3 society.
            </div>
            <div>
              MoveDID could be used for 3 types of subjects: human,
              organization, and bot.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="font-Inter-Bold text-[36px] w-[640px] text-center mt-[180px] mb-[60px] m-auto">
            Structure
          </div>
          <div className="text-[20px] flex w-full items-center mb-[60px]">
            <div className="font-Inter-SemiBold w-[400px] text-[20px]">
              dApp
            </div>
            <div className="flex-grow flex justify-between ">
              <GradientText text={"Simple Demo"} width={"md"}></GradientText>
              <GradientText text={"SoulCard"} width={"md"}></GradientText>
            </div>
          </div>
          <div className="text-[20px] flex w-full items-center mb-[60px]">
            <div className="font-Inter-SemiBold w-[400px] text-[20px]">
              Verifiable Credential <br></br>based on SBT
            </div>
            <div className="flex-grow flex justify-between ">
              <GradientText
                text={"Verifiable Credential <br> (SBT)"}
                width={"lg"}
              ></GradientText>
            </div>
          </div>
          <div className="text-[20px] flex w-full items-center mb-[60px]">
            <div className="font-Inter-SemiBold w-[400px] text-[20px]">
              Data Model
              <br></br>focus on diffrent roles
            </div>
            <div className="flex-grow">
              <GradientText
                text={"Data Model Analyzer"}
                width={"lg"}
              ></GradientText>
              <div className="h-[10px]"></div>
              <GradientText
                text={"Meta Data Analyzer"}
                width={"lg"}
              ></GradientText>
            </div>
          </div>
          <div className="text-[20px] flex w-full items-center mb-[10px]">
            <div className="font-Inter-SemiBold w-[400px] text-[20px]">
              Universal DID Solution
            </div>
            <div className="flex-grow">
              <GradientText
                text={
                  "Off chain DID-SDK including DID Spec Formater <br>(Elixir & Javascript)"
                }
                width={"lg"}
              ></GradientText>
              <div className="h-[10px]"></div>
              <GradientText
                text={"MOVE-SDK<br>(Elixir & Javascript)"}
                width={"lg"}
              ></GradientText>
              <div className="h-[10px]"></div>
              <GradientText
                text={"Lmpl in Aptos/Sui/Starcoin"}
                width={"lg"}
              ></GradientText>
            </div>
          </div>
          <div className="text-[20px] flex w-full items-center mb-[10px] justify-between">
            <div className="font-Inter-SemiBold w-[400px] pl-[72px] text-[20px]"></div>
            <div className="flex-grow flex justify-between">
              <div className="text-center w-[380px]">
                Address Aggregator<br></br>
                (On Chain)
                <GradientLine height="sm"></GradientLine>
              </div>
              <div className="text-center w-[380px]">
                Endpoint Aggregator<br></br>
                (On Chain)
                <GradientLine height="sm"></GradientLine>
              </div>
            </div>
          </div>
          <div className="text-[20px] flex w-full items-center mb-[60px]">
            <div className="font-Inter-SemiBold w-[400px] pl-[72px] text-[20px]"></div>
            <div className="flex-grow flex justify-between flex-wrap pl-[156px]">
              <GradientText
                text={"Addresses Verified"}
                width={"md"}
              ></GradientText>
              <GradientText
                text={"Formal Endpoints"}
                width={"md"}
              ></GradientText>
              <div className="h-[10px] w-full"></div>
              <GradientText
                text={"Addresses Unverified"}
                width={"md"}
              ></GradientText>
              <GradientText
                text={"Informal Endpoints"}
                width={"md"}
              ></GradientText>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="font-Inter-Bold text-[36px] w-[640px] text-center mt-[180px] mb-[60px]">
            Partners
          </div>
          <div className="font-Inter-Regular text-[20px] w-[640px] flex justify-between">
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
      <footer className="flex mt-[80px]">
        <div>
          <img src={did} className="w-[105px]" alt="" />
        </div>
        <div className="flex-grow text-center font-Inter-Bold text-[16px]">
          If you have any questions, please contact us at <br></br>
          <a href="mailto:leeduckgo@gmail.com" className=" underline">
            leeduckgo@gmail.com
          </a>
        </div>
        <div className="flex items-baseline w-[200px] ">
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
