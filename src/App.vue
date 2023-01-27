<template>
  <main class="app">
    <transition name="slide-fade">
      <NavBar v-show="$store.state.openNavBar"/>
    </transition>
    <div class="content">
      <SideBar/>
      <router-view/>
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
}

.content{
  width: 100%;
  max-height: 100vh;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

</style>
