<template>
  <div
    class="footer w-full  hidden sm:flex items-center justify-center flex-col h-[300px] gap-[4rem] pt-[5rem]"
  >
    <div
      class="w-[500px] sm:w-[600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[700px] flex items-center justify-center gap-[1rem] sm:gap-[3rem] lg:gap-[5rem] z-10"
    >
      <div>
        <img class="w-[50px] h-[50px] sm:w-full sm:h-full" src="../assets/imgs/Footer/Artl.png" />
      </div>
      <div class="flex items-center justify-center flex-col w-full gap-[1rem]">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center justify-center gap-[10px] sm:gap-[2rem]">
            <RouterLink
              to="/"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >Home</RouterLink
            >
            <RouterLink
              to="/about"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >About</RouterLink
            >
            <RouterLink
              to="/services"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >Services</RouterLink
            >
            <RouterLink
              to="/technologies"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >Technologies</RouterLink
            >
            <RouterLink
              to="/process"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >Process</RouterLink
            >
            <RouterLink
              to="/pricing"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >Pricing</RouterLink
            >
            <RouterLink
              to="/faq"
              class="font-Roboto font-[400] text-[7px] sm:text-[10px] lg:text-[16px] md:text-[13px] text-white"
              >FAQs</RouterLink
            >
          </div>
          <RouterLink
          to="/contact-us"
            class="translate-x-[-3rem] sm:translate-x-[-3rem] lg:translate-x-0 md:translate-x-[1rem]"
          >
            <button
              class="w-[80px] lg:w-[199px] md:w-[100px] h-[32px] flex items-center justify-center bg-[#686EDA] font-Onset font-[500] text-[10px] lg:text-[16px] md:text-[12px] text-white rounded-[4px]"
            >
              Request a call
            </button>
          </RouterLink>
        </div>
        <hr class="hr w-[400px] sm:w-full translate-x-[-1.3rem] sm:translate-x-0" />
        <div class="flex items-center justify-start lg:justify-between w-full gap-[1rem] lg:gap-0">
          <div class="font-Onset text-[7px] sm:text-[9px] lg:text-[14px] md:text-[12px] font-[400]">
            9450 SW Gemini Dr PMB 50945 Beaverton Oregon USA\Amman-Jordan Wasfi Altal St 233
          </div>
          <div class="flex items-center justify-center gap-[0.8rem] lg:gap-[1.4]">
            <img src="../assets/imgs/Footer/Facebook.png" class="w-[5px] lg:w-full lg:h-full" />
            <img
              src="../assets/imgs/Footer/Twitter.png"
              class="w-[10px] h-[10px] lg:w-full lg:h-full"
            />
            <img
              src="../assets/imgs/Footer/Telegram.png"
              class="w-[10px] h-[10px] lg:w-full lg:h-full"
            />
            <img
              src="../assets/imgs/Footer/Insta.png"
              class="w-[10px] h-[10px] lg:w-full lg:h-full"
            />
  
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[400px] sm:w-[600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[700px] flex items-center justify-center flex-col gap-[1rem] z-10"
    >
      <hr class="w-full bg-[#FFFFFF] opacity-[35%]" />
      <span class="font-Onset text-[14px] font-[400] opacity-[35%] text-[white]"
        >2024 Artl Studio LLC, All rights reserved</span
      >
    </div>
  </div>
  <div
    class="footer w-full flex sm:hidden items-center justify-center flex-col h-[735px] gap-[2rem] pt-[5rem]"
  >
    <div
      class="w-[369px]  flex items-center justify-center flex-col gap-[1rem] sm:gap-[3rem] lg:gap-[5rem] z-10"
    >
      <div>
        <img  src="../assets/imgs/Footer/Logo.png" />
      </div>
      <hr class="hr w-[366px] " />
      <div class="flex items-start justify-center flex-col w-[369px] gap-[1rem] py-4">
<div class="flex items-start justify-center gap-4 flex-col ">
  <RouterLink to="/" class="text-[20px] text-[white] font-[400]">Home</RouterLink>
  <RouterLink to="/about" class="text-[20px] text-[white] font-[400]">About Us</RouterLink>
  <RouterLink to="/services" class="text-[20px] text-[white] font-[400]">Services</RouterLink>
  <RouterLink to="/technologies" class="text-[20px] text-[white] font-[400]">Technologies</RouterLink>
  <RouterLink to="/process" class="text-[20px] text-[white] font-[400]">Process</RouterLink>
  <RouterLink to="/faq" class="text-[20px] text-[white] font-[400]">FAQ</RouterLink>
  <RouterLink to="/pricing" class="text-[20px] text-[white] font-[400]">Pricing</RouterLink>
  <RouterLink to="/contact-us">
    <button   class="w-[366px]  h-[38px] flex items-center justify-center bg-[#686EDA] font-Onset font-[500] text-[20px]  text-white rounded-[4px]">Request a call</button>
  </RouterLink>

</div>

      </div>
      <div class="flex items-center justify-center gap-6 mt-4">
            <img src="../assets/imgs/Footer/Facebook.png" />
            <img
              src="../assets/imgs/Footer/Twitter.png"
            
            />
            <img
              src="../assets/imgs/Footer/Telegram.png"
              
            />
            <img
              src="../assets/imgs/Footer/Insta.png"
         
            />
  
          </div>    
        <div class="flex items-center justify-center flex-col mt-4">
         
          <span class="text-[12px] text-white font-[300] opacity-50">
            9450 SW Gemini Dr PMB 50945 Beaverton Oregon USA
          </span>
          <span class="text-[12px] text-white font-[300] opacity-50">\Amman-Jordan Wasfi Altal St 233</span>
        </div>
    </div>
    <div
      class="w-[400px] sm:w-[600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[700px] flex items-center justify-center flex-col gap-[1rem] z-10 pb-6"
    >
      <hr class="w-full bg-[#FFFFFF] opacity-[35%]" />
      <span class="font-Onset text-[14px] font-[400] opacity-[35%] text-[white]"
        >2024 Artl Studio LLC, All rights reserved</span
      >
    </div>
  </div>
</template>
<style scoped>
.footer {
  position: relative;
  /* opacity: 35%; */
  /* z-index: 1; */
}
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(360deg, #070e19 0%, #15f3af 1502%);

  opacity: 35%;
}
.hr {
  border: 0;
  height: 1.5px;
  background: linear-gradient(90deg, #686eda 0%, #ffffff 50.5%, #15f3af 99.99%);
}
</style>
