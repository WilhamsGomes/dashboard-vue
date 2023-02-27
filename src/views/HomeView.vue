<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <CardBalance/>
        <CardTotal/>
      </div>
      <GraphicBalance/>
    </div>
    <div class="recents">
      <RecenteEmails/>
      <RecentNotifications/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardBalance from "../components/CardBalance/CardBalance.vue";
import CardTotal from "../components/CardTotal/CardTotal.vue";
import GraphicBalance from '@/components/GraphicBalance/GraphicBalance.vue';
import RecenteEmails from "@/components/RecentEmails/RecenteEmails.vue";
import RecentNotifications from '@/components/RecentNotifications/RecentNotifications.vue';

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
    RecenteEmails,
    RecentNotifications
  },
});
</script>

<style scoped>

.home{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  width: 100%;
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

.recents{
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
}

</style>
