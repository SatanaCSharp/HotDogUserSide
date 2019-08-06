<template>
<div id="spices-list">
    <bread-crumbs></bread-crumbs>
    <router-link class="button__create" to='/create/spices'>Create</router-link>
    <section class="spices-list" v-for ="spice in spices" :key = "spice._id">
        <div class="spice-list__item" :_id = "spice._id" >
            <h2>{{spice.name}}</h2>
            <div class="action-buttons">
                <router-link class="button__update" to="/update/spices/">Update</router-link>
                <a href="/spices" class="button__delete">Delete</a>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import "../../assets/scss/imports/spices_list.scss";
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import SpiceUpdate from "./SpiceUpdate.vue"
export default {
    name:"SpicesList",
    components: {
        BreadCrumbs
    },
    data:() => {
        return {
            spices:[]
        }
    },
    methods:{
        fetchSpices: async function() {
            const spicesRequest = await fetch(`https://api-hot-dogs.herokuapp.com/v1/spices`);
            const spices = await spicesRequest.json();
            this.spices = await spices;
        }
    },
    mounted: function() {
        this.fetchSpices();
    }
}
</script>
