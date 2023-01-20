<template>
    <div class="total">
        <h1>Total</h1>
    </div>
</template>
  
<script>
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
    background-color: #1E1D26;
    width: 30%;
    height: 20vh;
    border-radius: 12px;
    padding: 20px;
}

</style>