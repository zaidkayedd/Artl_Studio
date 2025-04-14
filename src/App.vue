<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import {  onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import LoadingPage from './components/LoadingPage.vue';
const isLoaded = ref(false);

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
      isLoaded.value = true;

  }, 5000);
});

router.beforeEach((to, from, next) => {
  isLoaded.value = false;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 2000);
});
</script>


<template>
  <div class="AllPage" v-if="isLoaded">
    <div class="header"><Navigation /></div>

    <div class="pages">
      <div class="page">
        <RouterView />
        
      </div>
    </div>
    <Footer />
  </div>
  <div class="flex items-center justify-center h-[100vh]" v-else>
   <LoadingPage></LoadingPage>
  </div>
</template>

<style scoped>
.AllPage {
  background-image: url(././assets/imgs/Home/background.svg);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 19.65rem;
  background-repeat: no-repeat;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
@media (max-width: 1280px) {
  .AllPage {
  background-image: url(././assets/imgs/Home/background.svg);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 9.65rem;
  background-repeat: no-repeat;
}
  
}
@media (max-width: 768px) {
  .AllPage {
  background-image: url(././assets/imgs/Home/background.svg);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5.65rem;
  background-repeat: no-repeat;
}
  
}
@media (max-width: 640px) {
  .AllPage {
  background-image: url(././assets/imgs/Home/background.svg);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 9.65rem;
  background-repeat: no-repeat;
}
  
}
</style>
