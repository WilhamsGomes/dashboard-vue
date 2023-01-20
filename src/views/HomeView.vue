<template>
  <div class="home">
    <div class="content">
      <CardBalance/>
      <CardTotal/>
    </div>
    <h2>{{ $store.state.search }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardBalance from "../components/CardBalance/CardBalance.vue";
import CardTotal from "../components/CardTotal/CardTotal.vue";

export default defineComponent({
  name: 'HomeView',
  data (){
    return{
      // valueString: this.$store.state.search
    }
  },
  components: {
    CardBalance,
    CardTotal
  },
});
</script>

<style scoped>

.content{
  display: flex;
  align-items: center;
  gap: 20px;
}

</style>
