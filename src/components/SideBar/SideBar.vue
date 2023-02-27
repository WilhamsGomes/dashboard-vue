<template>
    <header class="header">
        <div class="titles">
            <button @click="handleNavBar">-</button>
            <span>Good Morning</span>, Analysis completed
        </div>
        <div class="infosActions">
            <div class="search">
                <button @click="handleSearch" type="button"> <img src="../../assets/svg/search-3-48.png" width="18"/> </button>
                <input type="text" placeholder="Search" v-model="inputSearch"/>
            </div>
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
        name: 'SideBar',
        data(){
            return{
                inputSearch: '',
            }
        },
        methods:{
            handleSearch(){
                this.$store.commit('changeSearch', this.inputSearch)
            },
            handleNavBar(){
                this.$store.commit('changeNavBar')
            }
        }
    }); 
</script>

<style scoped>

.header{
    width: 100%;
    max-width: 1020px;
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
    gap: 20px;
}

.titles span{
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
}

.titles button{
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background-color: #F74C41;
    color: #fff;
}

.infosActions{
    display: flex;
    gap: 30px;
}

.search input{
    width: 180px;
    height: 32px;
    border: none;
    border-radius: 12px;
    outline: none;
    background-color: #1E1D26;
    padding-left: 40px;
    color: rgb(170, 165, 165);
} 

.search input::placeholder{
    color: rgb(170, 165, 165);
}

.buttons{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
}

.buttons button{
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #F74C41;
    border: none;
}

.search{
    display: flex;
    align-items: center;
}

.search button{
    z-index: 9;
    margin-right: -30px;
    border: none;
    background: transparent;
}

</style>