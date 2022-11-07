import GradientText from "@/components/GradientText";
import GradientLine from "@/components/GradientLine";
import partner1 from "@/assets/images/partner1.png";
import partner2 from "@/assets/images/partner2.png";
import partner3 from "@/assets/images/partner3.png";
import partner4 from "@/assets/images/partner4.png";
import did from "@/assets/images/did.png";
import git from "@/assets/images/git.png";
import discord from "@/assets/images/discord.png";
import twitter from "@/assets/images/twitter.png";
import medium from "@/assets/images/medium.png";
import linkedin from "@/assets/images/linkedin.png";
export default function HomePage() {
  return (
    <div className="w-[1200px]">
      <main>
        <div className="flex justify-center flex-wrap">
          <div className="font-IBMPlexMono-Bold text-[36px] w-[640px] text-center mt-[180px] mb-[60px]">
            Introduction
          </div>
          <div className="font-IBMPlexMono-Regular text-[20px] w-[640px]">
            <div>
              MoveDID is a DID protocol that compatible with Move- based Chains,
              including Aptos, Sui, Starcoin.
            </div>
            <div className="my-[30px]">
              The vision of MoveDID is to be the foundation for the next
              generation of large-scale Web3 Finance and the next generation of
              large-scale Web3 Society.
            </div>
            <div>
              MoveDID will be using for 3 types of subjects: Human, Organization
              & Robot.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="font-IBMPlexMono-Bold text-[36px] w-[640px] text-center mt-[180px] mb-[60px] m-auto">
            Structure
          </div>
          <div className="text-[20px] flex w-full items-center mb-[60px]">
            <div className="font-IBMPlexMono-SemiBold w-[400px] text-[20px]">
              dApp
            </div>
            <div className="flex-grow flex justify-between ">
              <GradientText text={"Simple Demo"} width={"md"}></GradientText>
              <GradientText text={"SoulCard"} width={"md"}></GradientText>
            </div>
          </div>
          <div className="text-[20px] flex w-full items-center mb-[60px]">
            <div className="font-IBMPlexMono-SemiBold w-[400px] text-[20px]">
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
            <div className="font-IBMPlexMono-SemiBold w-[400px] text-[20px]">
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
            <div className="font-IBMPlexMono-SemiBold w-[400px] text-[20px]">
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
            <div className="font-IBMPlexMono-SemiBold w-[400px] pl-[72px] text-[20px]"></div>
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
            <div className="font-IBMPlexMono-SemiBold w-[400px] pl-[72px] text-[20px]"></div>
            <div className="flex-grow flex justify-between flex-wrap pl-[156px]">
              <GradientText
                text={"Addresses Verified"}
                width={"md"}
              ></GradientText>
              <GradientText
                text={"Addresses Verified"}
                width={"md"}
              ></GradientText>
              <div className="h-[10px] w-full"></div>
              <GradientText
                text={"Addresses Verified"}
                width={"md"}
              ></GradientText>
              <GradientText
                text={"Addresses Verified"}
                width={"md"}
              ></GradientText>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="font-IBMPlexMono-Bold text-[36px] w-[640px] text-center mt-[180px] mb-[60px]">
            Partners
          </div>
          <div className="font-IBMPlexMono-Regular text-[20px] w-[640px] flex justify-between">
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner4} alt="" />
          </div>
        </div>
      </main>
      <footer className="flex mt-[80px]">
        <div>
          <img src={did} className="w-[105px]" alt="" />
        </div>
        <div className="flex-grow text-center font-IBMPlexMono-Bold text-[16px]">
          If you have any questions, please contact us at <br></br>
          leeduckgo@gmail.com
        </div>
        <div className="flex justify-between items-baseline w-[200px] ">
          <img src={git} alt="" />
          <img src={twitter} alt="" />
          <img src={discord} alt="" />
          <img src={medium} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </footer>
    </div>
  );
}
