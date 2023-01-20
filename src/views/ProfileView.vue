<template>
    <div class="profile">
      <h1>Profile View</h1>
      <h2>{{ $store.state.search }}</h2>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ProfileView',
    components: {
    },
  });
</script>
  