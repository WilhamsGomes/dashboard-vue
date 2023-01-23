<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <CardBalance/>
        <CardTotal/>
      </div>
      <GraphicBalance/>
    </div>
    <RecenteEmails/>
    <h2>{{ $store.state.search }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardBalance from "../components/CardBalance/CardBalance.vue";
import CardTotal from "../components/CardTotal/CardTotal.vue";
import GraphicBalance from '@/components/GraphicBalance/GraphicBalance.vue';
import RecenteEmails from "@/components/RecentEmails/RecenteEmails.vue";

export default defineComponent({
  name: 'HomeView',
  data (){
    return{
      // valueString: this.$store.state.search
    }
  },
  components: {
    CardBalance,
    CardTotal,
    GraphicBalance,
    RecenteEmails
  },
});
</script>

<style scoped>

.home{
  display: flex;
  gap: 20px;
}
.container{
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content{
  display: flex;
  align-items: center;
  gap: 20px;
}

</style>
