<template>
  <div class="flex items-center justify-center flex-col gap-[5rem]">
    <div
      class="gridContainer w-full h-full max-w-[1500px] flex items-center justify-center flex-col gap-[10rem] sm:gap-[20rem] translate-y-[-7rem] sm:translate-y-0"
    >
      <div class="flex items-center justify-center flex-col gap-[4.3rem]">
        <span
          class="flex items-center justify-center gap-[1rem] font-Onset font-[700] text-[22px] sm:text-[40px] lg:text-[60px] md:text-[50px] text-white"
        >
          We

          <span
            ref="typedElement"
            class="typed font-Onset font-[700] text-[22px] sm:text-[40px] lg:text-[60px] md:text-[50px] text-white bg-[#686EDA80]"
          ></span>

          Project Success
        </span>
        <div class="flex items-center justify-center flex-col">
          <span
            class="font-Onset font-[700] text-[14px] sm:text-[20px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-white"
            >Innovative Software Consulting and Development</span
          >

          <div
            class="hidden sm:flex flex-col items-center justify-center font-Onset font-[500] text-[9px] xl:text-[22px] lg:text-[18px] md:text-[13px] text-white"
          >
            <span
              >Welcome to Artl Studio, your trusted partner for IT solutions! We specialize in
              delivering high-quality, tailored services</span
            >
            <span>
              to meet your unique needs. Whether it's development, design, consulting, or beyond,
              we’re here to</span
            >
            <span>provide exceptional solutions for your success.</span>
          </div>
          <div
            class="flex sm:hidden flex-col items-center justify-center font-Onset font-[500] text-[9px] xl:text-[22px] lg:text-[18px] md:text-[13px] text-white"
          >
            <span
              >Welcome to Artl Studio, your trusted partner for IT solutions! We specialize in
              delivering
            </span>
            <span>
              high-quality, tailored services to meet your unique needs. Whether it's development,
            </span>
            <span> design, consulting, or beyond, we’re here to provide exceptional </span>
            <span>solutions for your success.</span>
          </div>
        </div>
      </div>

      <div
        class="box flex flex-col items-center justify-center w-[350px] sm:w-[600px] 2xl:w-[1418px] xl:w-[1150px] lg:w-[1000px] md:w-[700px] h-[200px] sm:h-[280px] lg:h-[375px] md:h-[308px] gap-[2rem]"
      >
        <span
          class="font-Onset font-[700] text-[20px] sm:text-[30px] lg:text-[50px] md:text-[40px] text-white"
          >How we enable success</span
        >
        <div
          class="hidden sm:flex flex-col items-center justify-center font-[500] font-Onset text-white text-[11px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
        >
          <span
            >Our top priority is to exceed client expectations by combining exceptional technical
            expertise, professionalism,
          </span>
          <span
            >and transparency. We are dedicated to consistently delivering innovative, high-quality
            technology solutions
          </span>
          <span> that drives satisfaction and success to our clients.</span>
        </div>
        <div
          class="flex sm:hidden flex-col items-center justify-center font-[500] font-Onset text-white text-[9px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
        >
          <span>Our top priority is to exceed client expectations by combining exceptional </span>
          <span> technical expertise, professionalism, and transparency. We are dedicated </span>
          <span> to consistently delivering innovative, high-quality technology solutions </span>
          <span> that drives satisfaction and success to our clients.</span>
        </div>
        <button
          class="z-10 flex items-center justify-center w-full max-w-[150px] lg:max-w-[400px] md:max-w-[270px] h-[40px] rounded-[4px] bg-[#7177EC] font-[600] font-Onset text-[12px] lg:text-[25px] md:text-[20px] text-white"
        >
          Get you FREE quote now
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-[1rem] 2xl:grid-cols-3 lg:grid-cols-2">
      <div
        class="smallBox flex flex-col items-center justify-center w-[350px] sm:w-[600px] lg:w-[460px] md:w-[700px] h-[200px] sm:h-[270px] lg:h-[350px] md:h-[308px] rounded-[4px] gap-[2rem] px-[1rem]"
      >
        <span class="font-Onset font-[700] text-white text-[16px] sm:text-[25px]"
          >Exceptional Performance:</span
        >
        <span class="hidden lg:flex font-Onset font-[400] text-[16px] text-white"
          >Experience outstanding performance, robust structure, and expertly crafted website code
          with our services. Our websites are designed for lightning-fast loading speeds and provide
          seamless user experiences on all devices, powered by advanced performance optimization
          techniques.</span
        >
        <div
          class="hidden sm:flex lg:hidden items-center justify-center lg:items-start flex-col font-Onset font-[400] text-[12px] md:text-[15px] text-white w-[700px] lg:w-full"
        >
          <span
            >Experience outstanding performance, robust structure, and expertly crafted website code
            with our</span
          >
          <span>
            services. Our websites are designed for lightning-fast loading speeds and provide
            seamless user</span
          >
          <span
            >experiences on all devices, powered by advanced performance optimization
            techniques.</span
          >
        </div>
        <div
          class="flex sm:hidden items-center justify-center lg:items-start flex-col font-Onset font-[400] text-[9px] md:text-[15px] text-white w-[700px] lg:w-full"
        >
          <span>Experience outstanding performance, robust structure, and expertly crafted </span>
          <span>
            website code with our services. Our websites are designed for lightning-fast
          </span>
          <span> loading speeds and provide seamless user experiences on all devices, </span>
          <span>powered by advanced performance optimization techniques.</span>
        </div>
        <button
          class="z-10 max-w-[150px] sm:max-w-[210px] lg:max-w-[410px] h-[36px] w-full flex items-center justify-center rounded-[4px] bg-[#7177EC] font-Onset font-[600] text-[16px] sm:text-[20px] text-white"
        >
          Contact Us
        </button>
      </div>
      <div
        class="smallBox flex flex-col items-center justify-center w-[350px] sm:w-[600px] lg:w-[460px] md:w-[700px] h-[200px] sm:h-[270px] lg:h-[350px] md:h-[308px] rounded-[4px] gap-[2rem] px-[1rem]"
      >
        <span class="font-Onset font-[700] text-white text-[16px] sm:text-[25px]"
          >Clean and Contemporary Design:</span
        >
        <span class="hidden lg:flex font-Onset font-[400] text-[16px] text-white"
          >Make a lasting impression with our sleek and contemporary website designs. We focus on
          simplicity and sophistication, crafting visually stunning interfaces that showcase your
          brand and content while delivering an intuitive user experience that engages and
          captivates your audience.</span
        >
        <div
          class="hidden sm:flex lg:hidden items-center justify-center lg:items-start flex-col font-Onset font-[400] text-[12px] md:text-[15px] text-white w-[700px] lg:w-full"
        >
          <span
            >Make a lasting impression with our sleek and contemporary website designs. We focus
            on</span
          >
          <span>
            simplicity and sophistication, crafting visually stunning interfaces that showcase
            your</span
          >
          <span
            >experiences on all devices, powered by advanced performance optimization brand and
            content while delivering an intuitive user experience that engages and</span
          >
          <span> captivates your audience.</span>
        </div>
        <div
          class="flex sm:hidden items-center justify-center lg:items-start flex-col font-Onset font-[400] text-[9px] md:text-[15px] text-white w-[700px] lg:w-full"
        >
          <span>Experience outstanding performance, robust structure, and expertly crafted </span>
          <span>
            website code with our services. Our websites are designed for lightning-fast
          </span>
          <span> loading speeds and provide seamless user experiences on all devices, </span>
          <span>powered by advanced performance optimization techniques.</span>
        </div>
        <button
          class="z-10 max-w-[150px] sm:max-w-[210px] lg:max-w-[410px] h-[36px] w-full flex items-center justify-center rounded-[4px] bg-[#7177EC] font-Onset font-[600] text-[16px] sm:text-[20px] text-white"
        >
          Contact Us
        </button>
      </div>
      <div
        class="smallBox flex flex-col items-center justify-center w-[350px] sm:w-[600px] lg:w-[460px] md:w-[700px] h-[200px] sm:h-[270px] lg:h-[350px] md:h-[308px] rounded-[4px] gap-[2rem] px-[1rem]"
      >
        <span class="font-Onset font-[700] text-white text-[16px] sm:text-[25px]"
          >SEO Optimization:</span
        >
        <span class="hidden lg:flex font-Onset font-[400] text-[16px] text-white"
          >Enhance your online visibility and drive more organic traffic with our expert SEO
          services. We focus on strategic keyword integration, metadata optimization, and refining
          site structure to achieve a high SEO score, helping your website stand out and boosting
          your online presence.</span
        >
        <div
          class="hidden sm:flex lg:hidden items-center justify-center lg:items-start flex-col font-Onset font-[400] text-[12px] md:text-[15px] text-white w-[700px] lg:w-full"
        >
          <span
            >Enhance your online visibility and drive more organic traffic with our expert SEO</span
          >
          <span>
            services. We focus on strategic keyword integration, metadata optimization, and
            refining</span
          >
          <span>
            site structure to achieve a high SEO score, helping your website stand out and
            boosting</span
          >
          <span> your online presence.</span>
        </div>
        <div
          class="flex sm:hidden items-center justify-center lg:items-start flex-col font-Onset font-[400] text-[9px] md:text-[15px] text-white w-[700px] lg:w-full"
        >
          <span>Experience outstanding performance, robust structure, and expertly crafted </span>
          <span>
            website code with our services. Our websites are designed for lightning-fast
          </span>
          <span> loading speeds and provide seamless user experiences on all devices, </span>
          <span>powered by advanced performance optimization techniques.</span>
        </div>
        <button
          class="z-10 max-w-[150px] sm:max-w-[210px] lg:max-w-[410px] h-[36px] w-full flex items-center justify-center rounded-[4px] bg-[#7177EC] font-Onset font-[600] text-[16px] sm:text-[20px] text-white"
        >
          Contact Us
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="relative">
        <img src="../assets/imgs/Home/Laptop.svg" class="" />
        <img
          class="Arrow w-[5%] h-[5%] sm:w-[5%] sm:h-[5%] absolute right-[47.7%] top-[67%]"
          src="../assets/imgs/Home/Arrow.svg"
        />
      </div>
      <div
        class="hidden sm:flex flex-col items-center justify-center font-Onset font-[500] text-[16px] 2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[20px] text-white pb-[2rem]"
      >
        <span>Transform your business with expert IT consultations designed for your needs.</span>
        <span
          >Improve efficiency, streamline operations, and drive innovation with our support.</span
        >
      </div>
      <div
        class="flex sm:hidden flex-col items-center justify-center font-Onset font-[500] text-[11px] 2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[20px] text-white pb-[2rem]"
      >
        <span>Transform your business with expert IT consultations designed </span>
        <span>for your needs. Improve efficiency, streamline operations, </span>
        <span>and drive innovation with our support.</span>
      </div>
      <button
        class="w-full max-w-[250px] lg:max-w-[400px] md:max-w-[300px] h-[40px] md:h-[60px] flex items-center justify-center bg-[#7177EC] rounded-[4px] font-Onset font-[600] text-[16px] lg:text-[25px] md:text-[20px] text-white"
      >
        Get Your Free Consultation
      </button>
    </div>
    <div class="hidden lg:flex flex-col items-center justify-center gap-[4rem] h-[300px]">
      <!-- First Row -->
      <div class="flex items-center justify-center gap-[3rem] xl:gap-[5rem]">
        <div
          v-for="(icon, index) in firstRowIcons"
          :key="index"
          :class="['circle', isFirstRowOpen(index) ? 'open' : 'closed']"
        >
          <img
            :src="icon.src"
            alt="icon"
            class="circle-image"
            :class="{ hidden: !isFirstRowOpen(index) }"
          />
        </div>
      </div>
      <!-- Second Row -->
      <div class="flex items-center justify-center gap-[3rem] xl:gap-[5rem]">
        <div
          v-for="(icon, index) in secondRowIcons"
          :key="index"
          :class="['circle', isSecondRowOpen(index) ? 'open' : 'closed']"
        >
          <img
            :src="icon.src"
            alt="icon"
            class="circle-image"
            :class="{ hidden: !isSecondRowOpen(index) }"
          />
        </div>
      </div>
    </div>
    <div class="hidden sm:flex lg:hidden flex-col items-center justify-center gap-[4rem] h-[300px]">
      <!-- First Row -->
      <div class="flex items-center justify-center gap-[3rem] xl:gap-[5rem]">
        <div
          v-for="(icon, index) in firstRowIconsMobile"
          :key="index"
          :class="['circle', isFirstRowOpenMobile(index) ? 'open' : 'closed']"
        >
          <img
            :src="icon.src"
            alt="icon"
            class="circle-image"
            :class="{ hidden: !isFirstRowOpenMobile(index) }"
          />
        </div>
      </div>
      <!-- Second Row -->
      <div class="flex items-center justify-center gap-[3rem] xl:gap-[5rem]">
        <div
          v-for="(icon, index) in secondRowIconsMobile"
          :key="index"
          :class="['circle', isSecondRowOpenMobile(index) ? 'open' : 'closed']"
        >
          <img
            :src="icon.src"
            alt="icon"
            class="circle-image"
            :class="{ hidden: !isSecondRowOpenMobile(index) }"
          />
        </div>
      </div>
    </div>
    <div class="flex sm:hidden flex-col items-center justify-center gap-[4rem] h-[300px]">
      <!-- First Row -->
      <div class="flex items-center justify-center gap-[2rem] xl:gap-[5rem]">
        <div
          v-for="(icon, index) in firstRowIconsMobile2"
          :key="index"
          :class="['circlee', isFirstRowOpenMobile2(index) ? 'open' : 'closed']"
        >
          <img
            :src="icon.src"
            alt="icon"
            class="circlee-image"
            :class="{ hidden: !isFirstRowOpenMobile2(index) }"
          />
        </div>
      </div>
      <!-- Second Row -->
      <div class="flex items-center justify-center gap-[2rem] xl:gap-[5rem]">
        <div
          v-for="(icon, index) in secondRowIconsMobile2"
          :key="index"
          :class="['circlee', isSecondRowOpenMobile2(index) ? 'open' : 'closed']"
        >
          <img
            :src="icon.src"
            alt="icon"
            class="circlee-image"
            :class="{ hidden: !isSecondRowOpenMobile2(index) }"
          />
        </div>
      </div>
    </div>
    <div
      class="letsTalkBox w-full max-w-[350px] sm:max-w-[600px] 2xl:max-w-[1418px] xl:max-w-[1150px] lg:max-w-[1000px] md:max-w-[700px] h-[305px] sm:h-[550px] xl:h-[642px] lg:h-[550px] md:h-[630px] hidden md:flex items-center justify-center flex-col lg:flex-row px-[3rem] gap-[1rem] 2xl:gap-[7rem] lg:gap-[5rem]"
    >
      <div
        class="flex flex-col item-start justify-center w-[200px] sm:w-[405px] lg:w-[1500px] md:w-[485px] z-50"
      >
        <span
          class="font-Onset font-[800] text-white text-[20px] sm:text-[35px] lg:text-[64px] md:text-[45px]"
          >Let’s Talk</span
        >
        <span
          class="font-Onset font-[500] text-white text-[6px] sm:text-[12px] lg:text-[20px] md:text-[16px]"
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
    <div
      class="letsTalkBox1 w-[384px] h-[862px] flex md:hidden items-center justify-center flex-col gap-[5rem]"
    >
      <div class="flex items-center justify-center flex-col">
        <span class="font-Onset text-[50px] text-white font-[800]">Let’s Talk</span>
        <div
          class="flex items-center justify-center flex-col font-Onset text-[14px] text-white font-500"
        >
          <span>Have some big idea or brand to develop and</span>
          <span>need help? Then reach out we'd love to hear</span>
          <span>about your project and provide help</span>
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
      icons: [
        {
          src: 'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg',
          alt: 'HTML Icon',
        },
        {
          src: 'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
          alt: 'CSS Icon',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsXyz8eDobC4MvaRkM3zmOZ9ETdrS0ozGCQ&s',
          alt: 'JavaScript Icon',
        },
        { src: 'https://files.svgcdn.io/skill-icons/nextjs-light.png', alt: 'Next.js Icon' },
        { src: 'https://files.svgcdn.io/skill-icons/nextjs-light.png', alt: 'Next.js Icon' },
        { src: 'https://files.svgcdn.io/skill-icons/nextjs-light.png', alt: 'Next.js Icon' },
        { src: 'https://files.svgcdn.io/skill-icons/nextjs-light.png', alt: 'Next.js Icon' },
        {
          src: 'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
          alt: 'CSS Icon',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsXyz8eDobC4MvaRkM3zmOZ9ETdrS0ozGCQ&s',
          alt: 'JavaScript Icon',
        },
        { src: 'https://files.svgcdn.io/skill-icons/nextjs-light.png', alt: 'Next.js Icon' },
        { src: 'https://files.svgcdn.io/skill-icons/nextjs-light.png', alt: 'Next.js Icon' },
      ],

      firstRowIcons: [
        {
          src: 'data:image/png;base64,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',
          alt: 'Image 1',
        },
        {
          src: 'data:image/png;base64,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',
          alt: 'Image 2',
        },
        {
          src: 'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
          alt: 'Image 3',
        },
        {
          src: 'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg',
          alt: 'Image 4',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
          alt: 'Image 5',
        },
        {
          src: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/m/mongodb-icon-2.svg',
          alt: 'Image 6',
        },
        { src: 'https://cdn-icons-png.flaticon.com/512/5968/5968371.png', alt: 'Image 7' },
        {
          src: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
          alt: 'Image 8',
        },
        { src: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', alt: 'Image 9' },
      ],
      secondRowIcons: [
        {
          src: 'https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png',
          alt: 'Image 12',
        },
        {
          src: 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-rouge.png',
          alt: 'Image 13',
        },
        { src: 'https://logowik.com/content/uploads/images/figma.jpg', alt: 'Image 14' },
        {
          src: 'https://static-00.iconduck.com/assets.00/adobe-xd-icon-1024x1024-njjmrpui.png',
          alt: 'Image 15',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
          alt: 'Image 16',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
          alt: 'Image 17',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png',
          alt: 'Image 18',
        },
        { src: 'https://img.icons8.com/?size=512&id=40670&format=png', alt: 'Image 19' },
        {
          src: 'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png',
          alt: 'Image 20',
        },
      ],
      firstRowIconsMobile: [
        {
          src: 'data:image/png;base64,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',
          alt: 'Image 1',
        },
        {
          src: 'data:image/png;base64,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',
          alt: 'Image 2',
        },
        {
          src: 'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
          alt: 'Image 3',
        },
        {
          src: 'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg',
          alt: 'Image 4',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
          alt: 'Image 5',
        },
      ],
      secondRowIconsMobile: [
        {
          src: 'https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png',
          alt: 'Image 12',
        },
        {
          src: 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-rouge.png',
          alt: 'Image 13',
        },
        { src: 'https://logowik.com/content/uploads/images/figma.jpg', alt: 'Image 14' },
        {
          src: 'https://static-00.iconduck.com/assets.00/adobe-xd-icon-1024x1024-njjmrpui.png',
          alt: 'Image 15',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
          alt: 'Image 16',
        },
      ],
      firstRowIconsMobile2: [
        {
          src: 'data:image/png;base64,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',
          alt: 'Image 1',
        },
        {
          src: 'data:image/png;base64,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',
          alt: 'Image 2',
        },
        {
          src: 'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
          alt: 'Image 3',
        },
        {
          src: 'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg',
          alt: 'Image 4',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
          alt: 'Image 5',
        },
      ],
      secondRowIconsMobile2: [
        {
          src: 'https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png',
          alt: 'Image 12',
        },
        {
          src: 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-rouge.png',
          alt: 'Image 13',
        },
        { src: 'https://logowik.com/content/uploads/images/figma.jpg', alt: 'Image 14' },
        {
          src: 'https://static-00.iconduck.com/assets.00/adobe-xd-icon-1024x1024-njjmrpui.png',
          alt: 'Image 15',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
          alt: 'Image 16',
        },
      ],
      activeFirstRow: [],
      activeSecondRow: [],
    }
  },
  mounted() {
    this.initTypedAnimation()
  },
  created() {
    this.startAnimation()
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
    initTypedAnimation() {
      const options = {
        strings: ['power', 'create', 'build', 'streamline'],
        typeSpeed: 125,
        backSpeed: 75,
        loop: true,
        showCursor: false, // This disables the cursor
      }

      // Initialize Typed.js
      this.typed = new Typed(this.$refs.typedElement, options)
    },

    startAnimation() {
      setInterval(() => {
        this.activeFirstRow = []
        this.activeSecondRow = []

        // First Row: Odd indices open, even indices close
        for (let i = 0; i < 9; i++) {
          if (i % 2 === 0) this.activeFirstRow.push(i)
        }

        // Second Row: Even indices open, odd indices close
        for (let i = -1; i < 9; i++) {
          if (i % 2 !== 0) this.activeSecondRow.push(i)
        }

        setTimeout(() => {
          // Reverse the states
          this.activeFirstRow = this.activeFirstRow.map((i) => (i + 1) % 11)
          this.activeSecondRow = this.activeSecondRow.map((i) => (i + 1) % 11)
        }, 1000) // Switch state every second
      }, 2600) // Complete animation cycle every 2 seconds
    },
    startAnimationMobile() {
      setInterval(() => {
        this.activeFirstRow = []
        this.activeSecondRow = []

        // First Row: Odd indices open, even indices close
        for (let i = 0; i < 5; i++) {
          if (i % 2 === 0) this.activeFirstRow.push(i)
        }

        // Second Row: Even indices open, odd indices close
        for (let i = -1; i < 5; i++) {
          if (i % 2 !== 0) this.activeSecondRow.push(i)
        }

        setTimeout(() => {
          // Reverse the states
          this.activeFirstRow = this.activeFirstRow.map((i) => (i + 1) % 11)
          this.activeSecondRow = this.activeSecondRow.map((i) => (i + 1) % 11)
        }, 1000) // Switch state every second
      }, 2600) // Complete animation cycle every 2 seconds
    },
    isFirstRowOpen(index) {
      return this.activeFirstRow.includes(index)
    },
    isSecondRowOpen(index) {
      return this.activeSecondRow.includes(index)
    },
    isFirstRowOpenMobile(index) {
      return this.activeFirstRow.includes(index)
    },
    isSecondRowOpenMobile(index) {
      return this.activeSecondRow.includes(index)
    },
    startAnimationMobile2() {
      setInterval(() => {
        this.activeFirstRow = []
        this.activeSecondRow = []

        // First Row: Odd indices open, even indices close
        for (let i = 0; i < 5; i++) {
          if (i % 2 === 0) this.activeFirstRow.push(i)
        }

        // Second Row: Even indices open, odd indices close
        for (let i = -1; i < 5; i++) {
          if (i % 2 !== 0) this.activeSecondRow.push(i)
        }

        setTimeout(() => {
          // Reverse the states
          this.activeFirstRow = this.activeFirstRow.map((i) => (i + 1) % 11)
          this.activeSecondRow = this.activeSecondRow.map((i) => (i + 1) % 11)
        }, 1000) // Switch state every second
      }, 2600) // Complete animation cycle every 2 seconds
    },
    isFirstRowOpen2(index) {
      return this.activeFirstRow.includes(index)
    },
    isSecondRowOpen2(index) {
      return this.activeSecondRow.includes(index)
    },
    isFirstRowOpenMobile2(index) {
      return this.activeFirstRow.includes(index)
    },
    isSecondRowOpenMobile2(index) {
      return this.activeSecondRow.includes(index)
    },
    isOpen(index) {
      return this.activeCircles.includes(index)
    },
    beforeDestroy() {
      // Destroy Typed.js instance when component is destroyed
      if (this.typed) {
        this.typed.destroy()
      }
    },
  },
}
</script>

<style scoped>
.box {
  position: relative;
}
.box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(21, 243, 175, 0.2) 0%,
    rgba(104, 110, 218, 0.4) 44.5%,
    rgba(104, 110, 218, 0.4) 100%
  );
  opacity: 40%;
  border: 1px solid #fff;
  border-radius: 4px;
}
.smallBox {
  position: relative;
}
.smallBox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(21, 243, 175, 0.14) 0%, rgba(104, 110, 218, 0.4) 100%);

  opacity: 40%;
  border: 1px solid #fff;
  border-radius: 4px;
}
.Arrow {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Ensures the image stays within the circle */
  transition: all 0.5s ease; /* Smooth transition for the circle */
}

.circle.closed {
  background: linear-gradient(360deg, #686eda -9.8%, #15f3af 99.02%);
}

.circle.open {
  width: 80px;
  height: 80px;
  background: white; /* You can set a different background for the open state if needed */
}

.circle-image {
  width: 60px;
  height: 60px;
  object-fit: cover; /* Ensures the image is properly scaled */
  border-radius: 50%; /* Optional, to make the image circular */
  opacity: 1; /* Fully visible by default */
  transition: opacity 0.5s ease; /* Smooth fading effect */
}

.circle-image.hidden {
  opacity: 0; /* Makes the image gradually disappear */
}

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
.letsTalkBox1 {
  position: relative;
  background-image: url(../assets/imgs/Home/Vector1.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 100%;
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
.typed::after {
  content: '|';
  display: inline;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.text-red-500 {
  color: red;
}
.circlee {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Ensures the image stays within the circle */
  transition: all 0.5s ease; /* Smooth transition for the circle */
}

.circlee.closed {
  background: linear-gradient(360deg, #686eda -9.8%, #15f3af 99.02%);
}

.circlee.open {
  width: 50px;
  height: 50px;
  background: white; /* You can set a different background for the open state if needed */
}

.circlee-image {
  width: 30px;
  height: 30px;
  object-fit: cover; /* Ensures the image is properly scaled */
  border-radius: 50%; /* Optional, to make the image circular */
  opacity: 1; /* Fully visible by default */
  transition: opacity 0.5s ease; /* Smooth fading effect */
}

.circlee-image.hidden {
  opacity: 0; /* Makes the image gradually disappear */
}
</style>
