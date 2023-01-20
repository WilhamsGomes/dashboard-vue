<template>
    <div class="balance">
        <button>+</button>
        <div class="textos">
            <p>Your balance</p>
            <h1>20,194<span>.06</span></h1>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
  
export default defineComponent({
    name:"CardBalance",
    data (){
        return{

        }
    },
    components:{
    }
})
</script>
  
<style scoped>

.balance{
    width: 15%;
    background-color: #1E1D26;
    height: 20vh;
    border-radius: 12px;
    padding: 20px;
}

.balance button{
    background-color: #F74C41;
    border: none;
    width: 50%;
    height: 50px;
    border-radius: 12px;
    color: #fff;
}

.textos{
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.textos p{
    color: rgb(170, 165, 165);
    margin-bottom: -30px;
}

.textos span{
    color: rgb(170, 165, 165);
}

.textos h1{
    font-weight: 600;
}

</style>
  