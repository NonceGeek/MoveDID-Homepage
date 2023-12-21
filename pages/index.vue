<template>
  <div class="flex flex-col w-content mx-auto pt-9">
    <div class="header h-16 flex justify-between items-center">
      <img src="/img/logo.png" alt="logo" class="h-12" />
      <div class="links flex items-center space-x-5 text-black-1 font-['Poppins'] text-[17px]">
        <a v-for="link in links" :key="link" href="/" class="flex items-center">
          <span>{{ link }}</span>
          <img class="w-6 h-6" src="~/assets/svg/down-select.svg" alt="select">
        </a>
      </div>
    </div>
    <div class="slogon mt-12 flex justify-between items-center">
      <div class="flex flex-col space-y-12">
        <div class="texts flex flex-col space-y-6">
          <div class="titles flex flex-col space-y-9">
            <div class="flex flex-col space-y-4 text-black-1">
              <span class="w-[450px] text-[72px] leading-none font-['Poppins'] font-medium tracking-[0.6px]">AI-Powered
                Datahouse</span>
              <span class="w-[510px] text-[36px] leading-tight font-['Poppins'] capitalize">for on-chain
                data labeling &
                data
                marketplace</span>
            </div>
            <LinearLine classText="w-[615px]" />
          </div>
          <div class="text-third-gray text-[21px]">Powered by BNB Greenfield</div>
        </div>
        <div class="buttons flex items-center space-x-8">
          <template v-for="button in buttons" :key="button">
            <TheButton :text="button.text" :uppercase="true" :high="true" :coloredBorder="button.coloredBorder" />
          </template>
        </div>
      </div>
      <img class="w-[568px]" src="/img/dataism.png" alt="dataism">
    </div>
    <div class="mt-[72px]">
      <img class="mx-auto h-[30px]" src="/img/clients.png" alt="clients">
    </div>
    <div class="mt-8 text-center text-third-gray text-[20px] font-['Poppins']">
      Trusted by and integrated with the world’s most ambitious teams
    </div>
    <div class="mt-40 mxau w-[1160px] flex flex-col items-center space-y-[142px]">
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full text-[20px] text-second-gray font-['Poppins']">
            <span>datAI is a DataHouse powered by AI technology providing real time, </span>
            <span class="text-blue-1 font-['Poppins'] font-bold">data-driven insights</span>
            <span> on your business and audience. The mission of DOML is to create the best experiences for companies
              through intelligent insights, powerful analytics and </span>
            <span class="text-blue-1 font-['Poppins'] font-bold">strategic execution</span>
            <span>.</span>
          </div>
          <div class="w-[575px] p-2.5">
            <LinearLine />
          </div>
          <TheButton text="Learn more" :coloredBorder="true" />
        </div>
        <div class="title text-black-2 text-[40px] font-['Poppins'] font-semibold">ABOUT US</div>
      </div>
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="title text-black-2 text-[40px] font-['Poppins'] font-semibold">INFRASTRUCTURE</div>
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full text-[20px] text-second-gray font-['Poppins']">
            <span>datAI is a DataHouse powered by AI technology providing real time, </span>
            <span class="text-blue-1 font-['Poppins'] font-bold">data-driven insights</span>
            <span> on your business and audience. The mission of DOML is to create the best experiences for companies
              through intelligent insights, powerful analytics and </span>
            <span class="text-blue-1 font-['Poppins'] font-bold">strategic execution</span>
            <span>.</span>
          </div>
          <div class="w-[575px] p-2.5">
            <LinearLine />
          </div>
          <TheButton text="Learn more" :coloredBorder="true" />
        </div>
      </div>
    </div>
    <div class="footer mt-60 pb-24 flex flex-col space-y-3">
      <LinearLine />
      <div class="flex justify-between items-center text-third-gray font-['Montserrat']">
        <span v-for="text in footerTexts" :key="text">{{ text }}</span>
      </div>
    </div>
    <!-- <p class="p-4 pb-2">
      <select v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>-->
  </div>
</template>

<script setup>
// const colorMode = useColorMode()

const links = [
  'AI Dashboard',
  'Scaffold Aptos Copilot',
  'MoveDID',
  'Docs',
]

const buttons = [
  {
    text: 'testnet',
    coloredBorder: true,
  },
  {
    text: 'read docs',
    coloredBorder: false,
  },
]

const footerTexts = [
  'Copyright © 2023 datAI. All rights reserved.',
  'Terms of Use & Privacy Policy',
]
</script>
