<template>
<div id="header">
    <div class="logo">
        <img src="../assets/logo.png" alt="">
    </div>
    <nav class="nav">
        <router-link class="nav__menu-item" to='/show/hot-dog/asdasdasd'>Show</router-link>
        <router-link class="nav__menu-item" to='/create/hot-dog/'>Create</router-link>
        <router-link class="nav__menu-item" to='/'>Hot-Dogs</router-link>
    </nav>
</div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style lang="scss" scoped>
#header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo{
        img{
            width: 50px;
            height: 50px;
        }
    }
    .nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        &__menu-item {
            text-decoration: none;
            color: #202020;
            &:hover {
                color: #706666;
            }
        }
    }
}

</style>

