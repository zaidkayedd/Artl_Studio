<template>
    <div class="flex items-center justify-center flex-col gap-[5rem] ">
      <div
        class="gridContainer w-full h-full max-w-[1500px] flex items-center justify-center flex-col gap-[20rem]"
      >
      <div
      class="letsTalkBox w-full max-w-[350px] sm:max-w-[600px] 2xl:max-w-[1418px] xl:max-w-[1150px] lg:max-w-[1000px] md:max-w-[700px] h-[305px] sm:h-[550px] xl:h-[642px] lg:h-[550px] md:h-[630px] hidden md:flex items-center justify-center flex-col lg:flex-row px-[3rem] gap-[1rem] 2xl:gap-[7rem] lg:gap-[5rem]"
    >
      <div
        class="flex flex-col item-start justify-center w-[200px] sm:w-[405px] lg:w-[1500px] md:w-[485px] z-50"
      >
        <span class="font-Onset font-[800] text-white text-[20px] sm:text-[35px] lg:text-[64px] md:text-[45px]"
          >Let’s Talk</span
        >
        <span class="font-Onset font-[500] text-white text-[6px] sm:text-[12px] lg:text-[20px] md:text-[16px]"
          >Have some big idea or brand to develop and need help?<br />
          Then reach out we'd love to hear about your project<br />
          and provide help</span
        >
      </div>
      <div
        class="flex flex-col items-center lg:items-start justify-center gap-2 sm:gap-5 lg:gap-10 w-[80%] lg:w-full z-50"
      >
        <div class="flex flex-col items-start justify-center w-full">
          <span class="font-Onset font-[500] text-[14px] text-white">Name</span>
          <input
            v-model="name"
            class="input font-Onset font-[500] text-[14px] text-white w-full max-w-[563px] h-[20px] sm:h-[46px] border-[0.5px] rounded-[4px] border-[#FFFFFF80] bg-transparent px-[1rem] outline-none"
            placeholder="Type your name..."
          />
          <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
        </div>
        <div class="flex flex-col items-start justify-center w-full">
          <span class="font-Onset font-[500] text-[14px] text-white">Email</span>
          <input
            v-model="email"
            class="input font-Onset font-[500] text-[14px] text-white w-full max-w-[563px] h-[20px] sm:h-[46px] border-[0.5px] rounded-[4px] border-[#FFFFFF80] bg-transparent px-[1rem] outline-none"
            placeholder="Type your email..."
          />
          <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col w-full">
          <span class="font-Onset font-[500] text-[14px] text-white">Message</span>
          <textarea
            v-model="message"
            class="input font-Onset font-[500] text-[14px] text-white bg-transparent border-[0.5px] rounded-[4px] border-[#FFFFFF80] w-full max-w-[563px] h-[60px] sm:h-[125px] md:h-[165px] px-[1rem] py-[1rem] outline-none"
            placeholder="Type your Request / Message..."
          ></textarea>
          <span v-if="errors.message" class="text-red-500">{{ errors.message }}</span>
        </div>
        <button
          @click="handleSubmit"
          class="flex items-center justify-center w-full max-w-[563px] h-[20px] sm:h-[46px] rounded-[4px] bg-[#7177EC] font-Onset font-[600] text-white text-[14px] sm:text-[20px]"
        >
          Submit
        </button>
      </div>
    </div>
    <div class="letsTalkBox1 w-[384px] h-[862px] flex md:hidden items-center justify-center flex-col gap-[5rem]">
      <div class="flex items-center justify-center flex-col">
        <span class=" font-Onset text-[50px] text-white font-[800]">Let’s Talk</span>
        <div class="flex items-center justify-center flex-col font-Onset text-[14px] text-white font-500">
          <span>Have some big idea or brand to develop and</span>
          <span>need help? Then reach out we'd love to hear</span>
          <span>about your project  and provide help</span>
        </div>
      </div>
      <div
        class="flex flex-col items-center lg:items-start justify-center gap-5 lg:gap-10 w-[80%] lg:w-full z-50"
      >
        <div class="flex flex-col items-start justify-center w-full">
          <span class="font-Onset font-[500] text-[14px] text-white">Name</span>
          <input
            v-model="name"
            class="input font-Onset font-[500] text-[14px] text-white w-full max-w-[563px] h-[46px] border-[0.5px] rounded-[4px] border-[#FFFFFF80] bg-transparent px-[1rem] outline-none"
            placeholder="Type your name..."
          />
          <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
        </div>
        <div class="flex flex-col items-start justify-center w-full">
          <span class="font-Onset font-[500] text-[14px] text-white">Email</span>
          <input
            v-model="email"
            class="input font-Onset font-[500] text-[14px] text-white w-full max-w-[563px] h-[46px] border-[0.5px] rounded-[4px] border-[#FFFFFF80] bg-transparent px-[1rem] outline-none"
            placeholder="Type your email..."
          />
          <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col w-full">
          <span class="font-Onset font-[500] text-[14px] text-white">Message</span>
          <textarea
            v-model="message"
            class="input font-Onset font-[500] text-[14px] text-white bg-transparent border-[0.5px] rounded-[4px] border-[#FFFFFF80] w-full max-w-[563px] h-[316px] px-[1rem] py-[1rem] outline-none"
            placeholder="Type your Request / Message..."
          ></textarea>
          <span v-if="errors.message" class="text-red-500">{{ errors.message }}</span>
        </div>
        <button
          @click="handleSubmit"
          class="flex items-center justify-center w-full max-w-[563px] h-[46px] rounded-[4px] bg-[#7177EC] font-Onset font-[600] text-white text-[14px] sm:text-[20px]"
        >
          Submit
        </button>
      </div>
    </div>
      </div>
<div class="flex items-center justify-center flex-col gap-[2rem] lg:gap-[10rem] mt-[5rem]">
    <span class="font-[700] text-[20px] sm:text-[30px] lg:text-[50px] text-white">We are always happy to assist you</span>
    <div class="flex items-center justify-between flex-col gap-[10rem] xl:gap-0 xl:flex-row w-[400px] sm:w-[600px] 2xl:w-[1418px] xl:w-[1150px] lg:w-[1000px] md:w-[700px]">
        <div class="w-[300px] sm:w-[550px] flex items-start justify-center flex-col gap-2"> 
        <span class="text-[26px] text-white font-[700] ">Email Address</span>
        <hr class="w-full opacity-50"/>
        <span class="text-[22px] text-white font-[600] ">info@artlstudio.com</span>
<span class="text-[20px] text-white font-[500] opacity-50 mt-4">Assistant ours:</span>
<span class="text-[20px] text-white font-[500] opacity-50">Saturday - Thursday 8 am to 10 pm GMT+03:00  </span>
    </div>
    <div class="w-[300px] sm:w-[550px] flex items-start justify-center flex-col gap-2"> 
        <span class="text-[26px] text-white font-[700] ">Number</span>
        <hr class="w-full opacity-50"/>
        <span class="text-[22px] text-white font-[600] ">(+962) 79 00 91 911</span>
<span class="text-[20px] text-white font-[500] opacity-50 mt-4">Assistant ours:</span>
<span class="text-[20px] text-white font-[500] opacity-50">Saturday - Thursday 8 am to 10 pm GMT+03:00  </span>
    </div>
    </div>

</div>
  
  
  
      <!-- <Footer />> -->
    </div>
  </template>
  <script>
  import Footer from '@/components/Footer.vue'
  // import $ from 'jquery'
  // import 'typed.js'
  import Typed from 'typed.js'
  export default {
    components: { Footer },
    data() {
      return {
        name: '',
        email: '',
        message: '',
        errors: {
          name: '',
          email: '',
          message: '',
        },
 
      }
    },

  
    methods: {
      handleSubmit() {
        // Reset errors
        this.errors.name = ''
        this.errors.email = ''
        this.errors.message = ''
  
        // Validate inputs
        let isValid = true
  
        if (!this.name) {
          this.errors.name = 'This input is required'
          isValid = false
        }
  
        if (!this.email) {
          this.errors.email = 'This input is required'
          isValid = false
        }
  
        if (!this.message) {
          this.errors.message = 'This input is required'
          isValid = false
        }
  
        if (isValid) {
          // Handle successful submission (e.g., send data to server)
          console.log('Form submitted:', {
            name: this.name,
            email: this.email,
            message: this.message,
          })
        }
      },
    },
  }
  </script>
  
  <style scoped>

  
  .letsTalkBox {
    position: relative;
    background-image: url(../assets/imgs/Home/Vector.svg);
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
  }
  .letsTalkBox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  
    border: 1px solid #fff;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      rgba(21, 243, 175, 0.2) 0%,
      rgba(104, 110, 218, 0.4) 44.5%,
      rgba(104, 110, 218, 0.4) 100%
    );
    opacity: 40%;
  }
 
  .text-red-500 {
    color: red;
  }
  .letsTalkBox1 {
  position: relative;
  background-image: url(../assets/imgs/Home/Vector1.png);
  background-repeat: no-repeat;
  background-size: contain;
background-position-y:100% ;
  z-index: 1;
}
.letsTalkBox1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border: 1px solid #fff;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    rgba(21, 243, 175, 0.2) 0%,
    rgba(104, 110, 218, 0.4) 44.5%,
    rgba(104, 110, 218, 0.4) 100%
  );
  opacity: 40%;
}
  </style>
  