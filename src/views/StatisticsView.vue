<template>
    <div class="settings">
      <h1>Statistics View</h1>
      <h2>{{ $store.state.search }}</h2>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SettingsView',
    components: {
    },
  });
</script>
  