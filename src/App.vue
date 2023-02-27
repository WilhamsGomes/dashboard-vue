<template>
  <main class="app">
    <transition name="slide-fade">
      <NavBar v-show="$store.state.openNavBar"/>
    </transition>
    <div class="container">
      <SideBar/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import NavBar from './components/NavBar/NavBar.vue';
  import SideBar from './components/SideBar/SideBar.vue';
  // import SideBarRight from './components/SideBarRight/SideBarRight.vue';

  export default defineComponent({
    components:{
      NavBar,
      SideBar,
      // SideBarRight
    }
  })
</script>

<style scoped>

.app{
  display: flex;
  width: 100%;
}

.container{
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content{
  width: 100%;
  max-width: 1020px;
}

</style>
