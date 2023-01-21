<template>
    <nav class="navbar">
        <h1>Side bar right</h1>
    </nav>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SideBarRight',
    data() {
        return{
        }
    },
    methods: {
    }
  });
</script>

<style scoped>
  
.navbar{
    background: #1E1D26;
    height: 100vh;
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
</style>
  