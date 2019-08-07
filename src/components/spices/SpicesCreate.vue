<template>
<div id="spice-create">
    <bread-crumbs></bread-crumbs>
    <section class="spice-create-wrapper">
        <form id="create-form" class="form form-wrapper">
            <label class="form__label" for="name">Name of spice</label>
            <input  class="form__input" id="name" v-model="name" name="name" type="text">
            <div v-on:click="sendForm()" class="send-form">
                <a href="#/spices" class="button__create" >Create</a>
            </div>
        </form>
    </section>
</div>
</template>

<script>
import "../../assets/scss/imports/spices_create.scss";
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import axios from 'axios';
export default {
    name:"SpicesCreate",
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
            axios.post(`${process.env.VUE_APP_API_BASE_URL}spices`,{name: this.name});
        },
    }

}
</script>
