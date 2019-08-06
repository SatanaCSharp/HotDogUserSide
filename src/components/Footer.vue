<template>
<div id="footer">
   <footer class="footer">
    <nav id="nav" class="nav">
        <router-link class="nav__menu-item" to='/'>Hot Dogs</router-link>
        <router-link class="nav__menu-item" to='/stuff/'>Stuff</router-link>
        <router-link class="nav__menu-item" to='/spices/'>Spices</router-link>
    </nav>
    <section class="about">
        <h3>About me</h3>
        <p class="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur pariatur laboriosam minus deserunt id, nobis modi est ipsum praesentium dolorem, nemo tempora sint possimus alias enim totam qui maiores aperiam.
        </p>
    </section>
    <section class="copy">
        Copyright 2019 by Yurii Horchuk. All Rights Reserved.
   </section>
   </footer>
 
</div>
</template>

<script>
import "../assets/scss/imports/footer.scss";
export default {
name: "Footer"
}
</script>
