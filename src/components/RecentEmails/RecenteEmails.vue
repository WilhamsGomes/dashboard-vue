<template>
    <div class="emails">
      <div class="titles">
        <p>Recente emails</p>
        <button>See all</button>
      </div>
      <ul class="messages">
        <li class="email" v-for="email, index in recentEmails" :key="index">
            <span> </span>
            <h4>{{ email.email }}</h4>
            <p :class="email.status">{{ email.status }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
      name:"RecenteEmails",
      data (){
          return{
            recentEmails: [
                {icon: "", email: "wil@gmail.com", status: "active"},
                {icon: "", email: "wil@gmail.com", status: "inactive"},
                {icon: "", email: "wil@gmail.com", status: "active"},
                {icon: "", email: "wil@gmail.com", status: "inactive"},
                {icon: "", email: "wil@gmail.com", status: "active"},
                {icon: "", email: "wil@gmail.com", status: "inactive"},
                {icon: "", email: "wil@gmail.com", status: "inactive"},
            ]
          }
      }
  })
  </script>
  
<style scoped>

.emails{
    width: 80%;
    height: 50vh;
    overflow-y: auto;
    padding: 10px;
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
    width: 120px;
    border-radius: 6px;
}

.messages{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.email{
    width: 110%;
    margin-left: -40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1E1D26;
}

.email span{
    background-color: #1E1D26;
    width: 32px;
    height: 32px;
    border-radius: 6px;
}

.email h4{
    font-size: 0.8rem;
    font-weight: 400;
}

.email p{
    font-size: 0.7rem;
    color: rgb(170, 165, 165);
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
  background: #F74C41; 
  border-radius: 10px;
}

.active{
    color: green !important;
}

.inactive{
    color: red !important;
}
</style>