<template>
    <div id="app" class="container">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import "./assets/scss/imports/global.scss";
    import './components/store';

    export default {
        name: 'app',
        components: {
            Header,
            Footer

        }
    }
</script>