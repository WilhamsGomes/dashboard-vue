<template>
    <div class="boxNotifications">
        <div class="titles">
            <p>Recente notifications</p>
            <button>See all</button>
        </div>
        <div class="notifications">
            <div class="notification">
                <span>E-mail recebido</span>
                <p>Título do email</p>
            </div>
            <div class="notification">
                <span>E-mail recebido</span>
                <p>Título do email</p>
            </div>
            <div class="notification">
                <span>E-mail recebido</span>
                <p>Título do email</p>
            </div>
            <div class="notification">
                <span>E-mail recebido</span>
                <p>Título do email</p>
            </div>
        </div>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
      name:"RecentNotifications",
      data (){
          return{
          }
      }
  })
</script>
  
<style scoped>

.boxNotifications{
    background-color: #1E1D26;
    border-radius: 6px;
    width: 90%;
    height: 30vh;
    padding: 10px;
    overflow-y: auto;
}

.titles{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.titles button{
    border: none;
    background-color: #F74C41;
    color: #fff;
    height: 22px;
    width: 100px;
    border-radius: 12px;
}

.notifications{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.notification{
    background-color: #363442;
    border-radius: 6px;
    height: 40px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 5px;
    padding: 5px;
}

.notification span{
    color: gray;
    font-size: 11px;
}

.notification p{
    color: #fff;
    margin-top: -4px;
    font-size: 14px;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #1E1D26;; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #363442; 
  border-radius: 10px;
}

</style>