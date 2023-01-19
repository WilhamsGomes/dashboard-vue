<template>
    <nav class="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png" alt="logo" width="128" class="logo"/>
        <div class="title">
            <h1>Gmail</h1>
        </div>
        <div class="links">
            <div class="link active">
                <i> </i>
                <router-link to="/">Home</router-link> 
            </div>
            <div class="link">
                <i> </i>
                <router-link to="/profile">Profile</router-link> 
            </div>
            <div class="link">
                <i> </i>
                <router-link to="/settings">Settings</router-link> 
            </div>
            <div class="link">
                <i> </i>
                <router-link to="/about">About</router-link> 
            </div>
        </div>
        <div class="subInfos">
            <h1>Try to new update</h1>
            <p>Version 13.9</p>
            <div class="buttons">
                <button>Update</button>
                <button>More</button>
            </div>
        </div>
        <div class="logouf">
            <h4>Log out</h4>
            <button>Exit</button>
        </div>
    </nav>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NavBar'
  });
</script>

<style scoped>
  
.navbar{
    background: #1E1D26;
    height: 100vh;
    width: 25%;
    /* border-radius: 16px; */
    /* margin-left: 5%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.title{
    background-color: #F74C41;
    width: 80%;
    height: 50px;
    border-radius: 12px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title img{
    width: 10%;
}

.links{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
}

.link{
    width: 80%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 30px;
}

.link i{
    width: 48px;
    height: 32px;
    margin-left: 32px;
    background-color: #F74C41;
    
}
.links a{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    color: #393743;
    font-weight: 600;
}

.active{
    background-color: #2C2A36;
    
}

.active a{
    color: #fff !important;
}

.subInfos{
    background-color: #101014;
    width: 80%;
    border-radius: 6px;
    margin-top: 20px;
}

.logouf{
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border-radius: 6px;
    margin-top: 20px;
    background-color: #101014;
}


.logouf button{
    background-color: #F74C41;
    color: #fff;
    border: none;
    height: 25px;
    width: 30%;
    border-radius: 6px;
}

.subInfos p{
    opacity: 0.5;
    margin-top: -15px;
    font-size: 12px;
}

.subInfos h1{
    font-size: 18px;
}

.buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
}

.buttons button{
    width: 30%;
    border: none;
    height: 25px;
    border-radius: 6px;
    background-color: #F74C41;
    color: #fff;
}
</style>
  