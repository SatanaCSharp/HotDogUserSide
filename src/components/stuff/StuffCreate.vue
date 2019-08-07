<template>
<div id="stuff-create">
    <bread-crumbs></bread-crumbs>
    <section class="stuff-create-wrapper">
        <form id="create-form" class="form form-wrapper">
            <label class="form__label" for="name">Name of stuff</label>
            <input  class="form__input" id="name" v-model="name" name="name" type="text">
            <div v-on:click="sendForm()" class="send-form">
                <router-link class="button__create" to ="/stuff" >Create</router-link>
            </div>
        </form>
    </section>
</div>
</template>

<script>
import "../../assets/scss/imports/stuff_create.scss";
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import axios from 'axios';
export default {
    components: {
        BreadCrumbs
    },
    data:() => {
        return {
            name
        }
    },
    methods: {
        sendForm: function() {
            axios.post(`${process.env.VUE_APP_API_BASE_URL}stuff`,{name: this.name});
        },
    }
}
</script>
