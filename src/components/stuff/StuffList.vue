<template>
<div id="stuff-list">
    <bread-crumbs></bread-crumbs>
    <router-link class="button__create" to='/create/stuff'>Create</router-link>
    <section class="stuff-list" v-for ="stuffItem in stuff" :key = "stuffItem._id">
        <div class="stuff-list__item" :_id = "stuffItem._id" >
            <h2>{{stuffItem.name}}</h2>
            <div class="action-buttons">
                <router-link class="button__update" :to = updateStuffRoute(stuffItem._id)>Update</router-link>
                <div v-on:click="deleteStuff(stuffItem._id)" class="button__delete">Delete</div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
    import "../../assets/scss/imports/stuff_list.scss";
    import BreadCrumbs from "../mixins/BreadCrumbs.vue";
    import axios from 'axios';
export default {
    name:"StuffList",
    components: {
        BreadCrumbs,
    },
    data:() => {
        return {
            stuff:[],
        }
    },
    methods:{
        fetchStuff: async function() {
            const stuffRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}stuff`);
            this.stuff = await stuffRequest.data;
        },
        updateStuffRoute: function (id) {
            return "/update/stuff/" + id;
        },
        deleteStuff: async function(id) {
            const stuffRequest = await axios.delete(`${process.env.VUE_APP_API_BASE_URL}stuff/${id}`);
            this.stuff = await stuffRequest.data;
        }
    },
    beforeMount() {
        this.fetchStuff();
    },
    mounted: function() {
        this.fetchStuff();
    },
}
</script>
