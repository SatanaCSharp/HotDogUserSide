<template>
<div id="hot-dogs-list">
    <bread-crumbs></bread-crumbs>
    <router-link class="button__create" to='/create/hot-dogs/'>Create</router-link>
    <section class="hot-dogs-list">
        <div class="hot-dogs-list__item" v-for ="hotDog in hotDogs" :key = "hotDog._id">
            <h3 class="title">{{hotDog.name}}</h3>
            <div class="hot-dogs-list__item-info">
                <img src="../../assets/hot_dog.png" alt="hot-dog img">
                <div class="action-buttons">
                    <router-link class="button__update" :to = updateHotDogsRoute(hotDog._id)>Update</router-link>
                    <router-link class="button__show" :to = showHotDogsRoute(hotDog._id)>Show</router-link>
                    <div v-on:click="deleteHotDog(hotDog._id)" class="button__delete">Delete</div>
                </div>
            </div>
            <p class="description">
                {{hotDog.description}}
            </p>

        </div>
    </section>
</div>
</template>

<script>
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import "../../assets/scss/imports/hot_dogs_list.scss";
import axios from 'axios';
import {mapState} from 'vuex';
import store from '../store.js';
export default {
    name:"HotDogsList",
    components: {
        BreadCrumbs
    },
    data: function(){
        return {
            hotDogs:[]
        }
    },
    methods:{
        fetchHotDogs: async function() {
            const hotDogsRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}hot-dogs`);
            this.hotDogs = await hotDogsRequest.data;
            this.updateHotDogState(await hotDogsRequest.data);
        },
        updateHotDogState: function(hotDogsResponse) {
            store.dispatch('executeSetHotDogs', hotDogsResponse);
        },
        updateHotDogsRoute: function (id) {
            return "/update/hot-dogs/" + id;
        },
        showHotDogsRoute: function (id) {
            return "/show/hot-dogs/" + id;
        },
        deleteHotDog: async function(id) {
            const hotDogsRequest = await axios.delete(`${process.env.VUE_APP_API_BASE_URL}hot-dogs/${id}`);
            this.hotDogs = await hotDogsRequest.data;
        }
    },
    mounted: function() {
        this.fetchHotDogs();
        store.watch(
            (state) => state.hotDogsList,
            (newHotDogs) => {
                this.hotDogs = newHotDogs;
                return store.state.hotDogsList;
            }
        );
    },
    computed: {
        ...mapState(['hotDogsList']),
    },

}
</script>

