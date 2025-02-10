<template>
  <div class="flex items-center justify-center">
    <div
      class="flex items-center justify-between w-full gap-[10rem] h-[120px] max-w-[1000px] sm:max-w-[1500px] xl:gap-[25.5rem] lg:gap-[55rem] md:gap-[35rem] sm:gap-[10rem]"
    >
      <div class="left">
        <RouterLink to="/"> <img src="../assets/imgs/nav/Logo.png" /></RouterLink>
      </div>
      <div
        class="toggle flex xl:hidden items-center justify-center relative w-[2.5rem] h-[2.5rem] rounded-[5px] overflow-hidden cursor-pointer z-10"
        @click="showMenu = !showMenu"
        :class="{ active: showMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition name="fade-slide">
        <div
          v-if="showMenu"
          class="flex xl:hidden flex-col items-center justify-center w-full max-w-[400px] bg-[#686EDA] absolute top-[7.3rem] right-0 rounded-[20px] p-2"
        >
          <div class="flex flex-col items-start justify-start">
            <router-link
              v-for="link in links"
              :key="link.name"
              :to="link.path"
              @click="setActiveLink(link.name)"
              class="font-inter font-[600] text-[20px] text-[#ffffff] cursor-pointer relative p-2 hover:bg-[#163654] rounded-[10px] px-4"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </transition>
      <div
        class="right hidden xl:flex items-center 2xl:justify-center justify-end gap-[1rem] 2xl:gap-[2rem] w-[800px] 1300:w-[900px]"
      >
        <RouterLink to="/" class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white w-[70px] 2xl:w-[100px]"
          >About Us</RouterLink
        >
        <RouterLink
          to="/services"
          class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white"
          >Services</RouterLink
        >
        <RouterLink
          to="/technologies"
          class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white"
          >Technologies</RouterLink
        >
        <RouterLink
          to="/process"
          class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white"
          >Process</RouterLink
        >
        <RouterLink to="/faq" class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white"
          >FAQ</RouterLink
        >
        <RouterLink
          to="/pricing"
          class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white"
          >Pricing</RouterLink
        >
        <RouterLink to="/contact-us">
          <button
            class="font-Onset text-[16px] 2xl:text-[20px] font-[400] text-white w-[100px] 2xl:w-[130px] bg-[#686EDA] h-[22px] 2xl:h-[32px] flex items-center justify-center rounded-[4px] border-none"
          >
            Contact Us
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      showMenu: false,

      UserName: 'ZaidKayedd',
      UserPic: 'https://pngimg.com/d/github_PNG67.png',
      activeLink: 'Dashboard',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About US', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Process', path: '/process' },
        { name: 'Contact US', path: '/contact-us' },
      ],
    }
  },
  methods: {
    setActiveLink(name) {
      this.activeLink = name
    },
  },
}
</script>
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.toggle span {
  position: absolute;
  height: 3px;
  background: white;
  width: 60%;
  transition: 250ms;
}
.toggle span:nth-child(1) {
  transform: translateY(-0.5rem);
  max-width: 45%;
  right: 0.5rem;
}
.toggle span:nth-child(2) {
  transform: translateY(0.5rem);
  max-width: 30%;
  right: 0.5rem;
}
.toggle.active span:nth-child(3) {
  transform: translateX(2.2rem);
}
.toggle.active span:nth-child(1) {
  transform: translateY(0) rotate(45deg);
  max-width: 60%;
  transition-delay: 0.05s;
}
.toggle.active span:nth-child(2) {
  transform: translateY(0) rotate(-45deg);
  max-width: 60%;
  transition-delay: 0.05s;
}
.toggle {
  position: relative;
}
.toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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
