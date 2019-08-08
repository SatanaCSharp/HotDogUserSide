<template>
<div id="spices-list">
    <bread-crumbs></bread-crumbs>
    <router-link class="button__create" to='/create/spices'>Create</router-link>
    <section class="spices-list" v-for ="spice in spices" :key = "spice._id">
        <div class="spice-list__item" :_id = "spice._id" >
            <h2>{{spice.name}}</h2>
            <div class="action-buttons">
                <router-link class="button__update" :to = updateSpiceRoute(spice._id)>Update</router-link>
                <div v-on:click="deleteSpice(spice._id)" class="button__delete">Delete</div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import "../../assets/scss/imports/spices_list.scss";
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import axios from 'axios';
export default {
    name:"SpicesList",
    components: {
        BreadCrumbs,
    },
    data:() => {
        return {
            spices:[],
        }
    },
    methods:{
        fetchSpices: async function() {
            const spicesRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}spices`);
            this.spices = await spicesRequest.data;
        },
        updateSpiceRoute: function (id) {
            return "/update/spices/" + id;
        },
        deleteSpice: async function(id) {
            const spicesRequest = await axios.delete(`${process.env.VUE_APP_API_BASE_URL}spices/${id}`);
            this.spices = await spicesRequest.data;
        }
    },
    beforeMount: function() {
        this.fetchSpices();
    },
    mounted: function() {
        this.fetchSpices();
    },

}
</script>
