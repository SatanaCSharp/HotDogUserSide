<template>
<div id="spice-create">
    <bread-crumbs></bread-crumbs>
    <ul class="errors">
        <li class="errors__item" v-for="error in errors" :key="error.index">{{ error }} </li>
    </ul>
    <section class="spice-create-wrapper">
        <form id="create-form" class="form form-wrapper">
            <label class="form__label" for="name">Name of spice</label>
            <input  class="form__input" id="name" v-model="name" name="name" type="text">
            <div v-on:click="sendForm()" class="send-form">
                <router-link class="button__create" to ="/spices" >Create</router-link>
            </div>
        </form>
    </section>
</div>
</template>

<script>
import "../../assets/scss/imports/spices_create.scss";
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import axios from 'axios';
import {mapState} from 'vuex';
import store from '../store.js';

export default {
    name:"SpicesCreate",
    components: {
        BreadCrumbs
    },
    data:() => {
        return {
            name: '',
            errors: []
        }
    },
    methods: {
        validateForm: function() {
            if(this.name.length <= 5) {
                this.errors.push('The name of hot-dog has to contain at least 6 symbols!');
            }
        },
        updateSpicesState: function(spicesResponse) {
            store.dispatch('executeSetSpices', spicesResponse.data);
        },
        sendForm: function() {
            if(this.errors.length === 0){
                axios.post(`${process.env.VUE_APP_API_BASE_URL}spices`,{name: this.name})
                    .then((spicesResponse)=> this.updateSpicesState(spicesResponse));
            }
        },
    },
    beforeRouteLeave: function(to, from, next) {
        this.validateForm();
        if(this.errors.length === 0){
            next(true);
        } else {
            next(false);
        }
    },
    mounted: function() {
        store.watch(
            (state) => state.spices,
            (newSpices) => {
                store.state.spices = newSpices;
                return store.state.spices;
            }
        );
    },
    computed: {
        ...mapState(['spices']),
    },

}
</script>
