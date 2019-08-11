<template>
    <div id="stuff-update">
        <bread-crumbs></bread-crumbs>
        {{setStuffId($route.params.id)}}
        <ul class="errors">
            <li class="errors__item" v-for="error in errors" :key="error.index">{{ error }}</li>
        </ul>
        <section class="stuff-create-wrapper">
            <form id="create-form" class="form form-wrapper">
                <label class="form__label" for="name">Name of stuff</label>
                <input class="form__input" v-model="name" id="name" name="name" type="text">
                <div v-on:click="sendForm()" class="send-form">
                    <router-link class="button__create" to="/stuff">Update</router-link>
                </div>
            </form>
        </section>

    </div>
</template>

<script>
    import BreadCrumbs from "../mixins/BreadCrumbs.vue";
    import axios from 'axios';
    import {mapState} from 'vuex';
    import store from '../store.js';

    export default {
        name: "StuffUpdate",
        components: {
            BreadCrumbs
        },
        data: () => {
            return {
                name: '',
                stuffId: '',
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
            setStuffId: function (id) {
                this.stuffId = id;
            },
            fetchStuff: async function () {
                const spicesRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}stuff/${this.stuffId}`);
                this.name = await spicesRequest.data.name;
            },
            sendForm: function () {
                if (this.errors.length === 0) {
                    axios.put(`${process.env.VUE_APP_API_BASE_URL}stuff/${this.stuffId}`, {name: this.name})
                        .then((stuffResponse) => this.updateStuffState(stuffResponse));
                }
            }
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
            this.fetchStuff();
            store.watch(
                (state) => state.stuffList,
                (newStuff) => {
                    store.state.stuff = newStuff;
                    return store.state.stuffList;
                }
            );
        },
        computed: {
            ...mapState(['stuffList']),
        },
    }
</script>