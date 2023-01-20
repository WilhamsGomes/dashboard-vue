<template>
    <header class="header">
        <div class="titles">
            <span>Good Morning</span>, Analysis completed
        </div>
        <div class="infos">
            <form>
                <input type="text" placeholder="Search"/>
            </form>
            <div class="buttons">
                <button> </button>
                <button> </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
  
    export default defineComponent({
        name: 'SideBar'
    });
</script>

<style scoped>

.header{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.titles{
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(170, 165, 165);
}

.titles span{
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
}

.infos{
    display: flex;
    gap: 30px;
}

form input{
    width: 250px;
    height: 38px;
    border: none;
    border-radius: 12px;
    outline: none;
    background-color: #1E1D26;
} 

form input::placeholder{
    padding: 10px;
    color: #fff;
}

.buttons{
    display: flex;
    align-items: center;
    gap: 20px;
}

button{
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #F74C41;
    border: none;
}

</style>