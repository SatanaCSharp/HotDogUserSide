<template>
    <div id="stuff-create">
        <bread-crumbs></bread-crumbs>
        <ul class="errors">
            <li class="errors__item" v-for="error in errors" :key="error.index">{{ error }}</li>
        </ul>
        <section class="stuff-create-wrapper">
            <form id="create-form" class="form form-wrapper">
                <label class="form__label" for="name">Name of stuff</label>
                <input class="form__input" id="name" v-model="name" name="name" type="text">
                <div v-on:click="sendForm()" class="send-form">
                    <router-link class="button__create" to="/stuff">Create</router-link>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
    import "../../assets/scss/imports/stuff_create.scss";
    import BreadCrumbs from "../mixins/BreadCrumbs.vue";
    import axios from 'axios';
    import {mapState} from 'vuex';
    import store from '../store.js';

    export default {
        components: {
            BreadCrumbs
        },
        data: () => {
            return {
                name,
                errors: []
            }
        },
        methods: {
            clearErrors: function () {
                this.errors.length = 0;
            },
            validateForm: function () {
                this.clearErrors();
                if (this.name.length <= 5) {
                    this.errors.push('The name of stuff has to contain at least 6 symbols!');
                }
            },
            updateStuffState: function (stuffResponse) {
                store.dispatch('executeSetStuff', stuffResponse.data);
            },
            sendForm: function () {
                if (this.errors.length === 0) {
                    axios.post(`${process.env.VUE_APP_API_BASE_URL}stuff`, {name: this.name})
                        .then((stuffResponse) => this.updateStuffState(stuffResponse));
                }
            },
        },
        beforeRouteLeave: function (to, from, next) {
            this.validateForm();
            if (this.errors.length === 0) {
                next(true);
            } else {
                next(false);
            }
        },
        mounted: function () {
            store.watch(
                (state) => state.stuffList,
                (newStuff) => {
                    store.state.stuffList = newStuff;
                    return store.state.stuffList;
                }
            );
        },
        computed: {
            ...mapState(['stuffList']),
        },
    }
</script>
