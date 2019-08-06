<template>
<div id="header">
    <div class="logo">
        <img src="../assets/logo.png" alt="">
    </div>
    <nav id="nav" class="nav">
        <router-link class="nav__menu-item" to='/hot-dogs/'>Hot Dogs</router-link>
        <router-link class="nav__menu-item" to='/stuff/'>Stuff</router-link>
        <router-link class="nav__menu-item" to='/spices/'>Spices</router-link>
    </nav>
</div>
</template>

<script>
import "../assets/scss/imports/header.scss"
export default {
    name: "Header",
    methods:{
    }
}
</script>

