<template>
    <div class="total">
        <span class="percentage">54%</span>
        <div class="texts">
            <p>Total emails</p>
            <h3>424.210</h3>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
export default defineComponent({
    name:"CardTotal",
    data (){
        return{
        }
    },
    components:{
    }
})
</script>
  
<style scoped>

.total{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #1E1D26;
    width: 50%;
    height: 20vh;
    border-radius: 12px;
    padding: 20px;
}

.percentage{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
    background-color: #F74C41;
    /* border: 5px solid #F74C41; */
    border-radius: 50%;
}

.texts{
    display: flex;
    flex-direction: column;
}

.texts p{
    color: rgb(170, 165, 165);
}

.texts h3{
    font-size: 2rem;
    margin-top: -10px;
}

</style>