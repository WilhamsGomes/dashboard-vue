<template>
  <main class="app">
    <NavBar/>
    <div class="content">
      <SideBar/>
      <router-view/>
    </div>
  </main>
</template>

<script>
  import { defineComponent } from 'vue'
  import NavBar from './components/NavBar/NavBar.vue';
  import SideBar from './components/SideBar/SideBar.vue';

  export default defineComponent({
    components:{
      NavBar,
      SideBar
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
