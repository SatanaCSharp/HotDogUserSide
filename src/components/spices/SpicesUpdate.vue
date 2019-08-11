<template>
    <div id="spice-update">
        <bread-crumbs></bread-crumbs>
        {{setSpiceId($route.params.id)}}
        <ul class="errors">
            <li class="errors__item" v-for="error in errors" :key="error.index">{{ error }}</li>
        </ul>
        <section class="spice-create-wrapper">
            <form id="create-form" class="form form-wrapper">
                <label class="form__label" for="name">Name of spice</label>
                <input class="form__input" v-model="name" id="name" name="name" type="text">
                <div v-on:click="sendForm()" class="send-form">
                    <router-link class="button__create" to="/spices">Update</router-link>
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
        name: "SpicesUpdate",
        components: {
            BreadCrumbs
        },
        data: () => {
            return {
                name,
                spiceId: '',
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
                    this.errors.push('The name of spice has to contain at least 6 symbols!');
                }
            },
            setSpiceId: function (id) {
                this.spiceId = id;
            },
            updateSpicesState: function (spicesResponse) {
                store.dispatch('executeSetSpices', spicesResponse.data);
            },
            fetchSpice: async function () {
                const spicesRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}spices/${this.spiceId}`);
                this.name = await spicesRequest.data.name;
            },
            sendForm: function () {
                if (this.errors.length === 0) {
                    axios.put(`${process.env.VUE_APP_API_BASE_URL}spices/${this.spiceId}`, {name: this.name})
                        .then((spicesResponse) => this.updateSpicesState(spicesResponse));
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
            this.fetchSpice();
            store.watch(
                (state) => state.spicesList,
                (newSpices) => {
                    store.state.spicesList = newSpices;
                    return store.state.spicesList;
                }
            );
        },
        computed: {
            ...mapState(['spicesList']),
        },
    }
</script>