import { useState } from "react";
import GradientText from "@/components/GradientText";
import GradientLine from "@/components/GradientLine";
import did from "@/assets/images/did.png";
import git from "@/assets/images/git.png";
import twitter from "@/assets/images/twitter.png";
import aptos from "@/assets/images/aptos.png";
import movebit from "@/assets/images/movebit.png";
import movefuns from "@/assets/images/movefuns.png";
export default function HomePage() {
  const [partners, setPartners] = useState([
    {
      name: "aptos",
      imgSrc: aptos,
      link: "https://aptos.dev/",
    },
    {
      name: "movebit",
      imgSrc: movebit,
      link: "https://movebit.xyz/",
    },
    {
      name: "movefuns",
      imgSrc: movefuns,
      link: "https://movefuns.atlassian.net/wiki/spaces/MOVEFUNS/overview",
    },
  ]);
  const [contact, setContact] = useState([
    {
      name: "git",
      imgSrc: git,
      link: "https://github.com/NonceGeek/MoveDID",
    },
    {
      name: "twitter",
      imgSrc: twitter,
      link: "https://x.com/intent/follow?screen_name=root_mud",
    },
  ]);
  return (
    <div className="container">
      <main>
        <div className="lg:w-[900px] m-auto">
          <div className="font-Inter-Bold text-[36px] text-center lg:mt-[180px] lg:mb-[60px] my-[20px]">
            MoveDID
          </div>
          <div className="font-Inter-Regular text-[20px] text-center">
            <div>
              MoveDID is a DID protocol that follows the <a href="https://www.w3.org/TR/did-core/" target="_blank" className="text-blue-500 underline">w3c specification</a> & implemented on Movement.
            </div>
            <br></br>
            <div>
              It could represent various entity types as on-chain objects, especially the AI Agent🤖.
            </div>
            <div className="lg:my-[30px] my-[10px]">
              The vision of MoveDID is to be the foundation for the next generation of large-scale Web3 finance and Web3 society.
            </div>
            <div className="lg:my-[30px] my-[10px] underline">
              <a  href="https://explorer.aptoslabs.com/account/61b96051f553d767d7e6dfcc04b04c28d793c8af3d07d3a43b4e2f8f4ca04c9f/resources" target="_blank">
                Smart Contract on Aptos Network
              </a>
            </div>
            <div className="lg:my-[30px] my-[10px] underline">
              <a  href="https://did.rootmud.xyz" target="_blank">
                launch MoveDID Manager to manage your MoveDID!
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:mt-[180px] mt-[60px]">
          <div className="font-Inter-Bold text-[36px] text-center mb-[60px] m-auto">
            Structure
          </div>
          <div className="flex lg:flex-nowrap flex-wrap text-[20px] w-full items-center mb-[60px] lg:flex-row flex-col">
            <div className="w-[350px] font-Inter-SemiBold text-[20px] lg:text-left text-center lg:mb-0 mb-4">
              dApp
            </div>
            <div className="flex-grow flex lg:justify-between lg:w-auto w-full  lg:flex-row flex-col items-center">
              <div className="lg:w-[45%] w-full lg:mb-0 mb-4">
                <GradientText text={"AI Agent Manager"}></GradientText>
              </div>
              <div className="lg:w-[45%] w-full">
                <GradientText text={"More..."}></GradientText>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap text-[20px] w-full items-center mb-[60px] lg:flex-row flex-col">
            <div className="w-[350px] font-Inter-SemiBold text-[20px] lg:text-left text-center lg:mb-0 mb-4">
              Verifiable Credential <br></br>based on SBT
            </div>
            <div className="flex-grow flex lg:justify-between lg:w-auto w-full lg:flex-row flex-col items-center">
              <GradientText
                text={`Verifiable Credential <br> (<a href="https://www.coinbase.com/zh-cn/learn/crypto-glossary/what-are-soulbound-tokens-sbt" target="_blank" class="text-blue-500 underline"> SBT </a>)`}
              ></GradientText>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap text-[20px] w-full items-center mb-[60px] lg:flex-row flex-col">
            <div className="w-[350px] font-Inter-SemiBold text-[20px] lg:text-left text-center lg:mb-0 mb-4">
              Data Model
              <br></br>for diff roles
            </div>
            <div className="flex-grow  flex lg:justify-between lg:w-auto w-full  lg:flex-row flex-col items-center">
              <div className="lg:w-[45%] w-full lg:mb-0 mb-4">
                <GradientText text={"Data Model for AI Agent"}></GradientText>
              </div>
              <div className="lg:w-[45%] w-full">
                <GradientText text={"More..."}></GradientText>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap text-[20px] w-full items-center lg:flex-row flex-col">
            <div className="w-[350px] font-Inter-SemiBold text-[20px] lg:text-left text-center lg:mb-0 mb-4">
              Universal DID Solution
            </div>
            <div className="flex-grow  flex lg:justify-between lg:w-auto w-full flex-col items-center">
              <div className="w-full mb-4">
                <GradientText
                  text={
                    "DID-SDK including DID Spec Formater <br>(Multiple Language)"
                  }
                ></GradientText>
              </div>
              <div className="w-full mb-4">
                <GradientText
                  text={"MOVE-SDK<br>(Multiple Language)"}
                ></GradientText>
              </div>
              <div className="w-full mb-4">
                <GradientText
                  text={"DID Protocol that implemented in Multiple Move Framework"}
                ></GradientText>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap text-[20px] w-full items-center lg:flex-row flex-col">
            <div className="w-[350px] font-Inter-SemiBold text-[20px] lg:text-left text-center lg:mb-0 mb-4"></div>
            <div className="flex-grow  flex lg:justify-between lg:w-auto w-full  lg:flex-row flex-col items-center">
              <div className="lg:w-[45%] w-full lg:mb-0 mb-4 text-center">
                <h6 className="mb-2">
                  Address Aggregator<br></br>
                  (On Chain)
                </h6>
                <div className="mb-2">
                  <GradientLine height="sm"></GradientLine>
                </div>
                <div className="mb-2">
                  <GradientText text={"Addresses Verified"}></GradientText>
                </div>
                <div>
                  <GradientText text={"Addresses Unverified"}></GradientText>
                </div>
              </div>
              <div className="lg:w-[45%] w-full lg:mb-0 mb-4 text-center">
                <h6 className="mb-2">
                  Service Aggregator<br></br>
                  (On Chain)
                </h6>
                <div className="mb-2">
                  <GradientLine height="sm"></GradientLine>
                </div>
                <div className="mb-2">
                  <GradientText text={"Services Verified"}></GradientText>
                </div>
                <div>
                  <GradientText text={"Services Unverified"}></GradientText>
                </div>
              </div>
            </div>
          </div>
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
          <a href="mailto:leeduckgo@gmail.com" className=" underline">
            leeduckgo@gmail.com
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
