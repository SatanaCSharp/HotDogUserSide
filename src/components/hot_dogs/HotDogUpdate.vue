<template>
<div id="hot-dogs-update">
    <bread-crumbs></bread-crumbs>
    {{setHotDogId($route.params.id)}}
     <section class="hot-dogs-create-wrapper">
        <form id="create-form" class="form form-wrapper">

            <label class="form__label" for="name">Name of hot dog</label>
            <input  class="form__input" id="name" v-model="name" name="name" type="text">

            <label class="form__label" for="description">Description of hot dog</label>
            <textarea v-model="description"  id="description" name="description"  class="form__input form__input-text-area"></textarea>

            <label class="form__label">Spices</label>
            <div class="form__checkboxes">
                <div class="form__checkboxes-wrapper" v-for="spice in spices" :key="spice._id">
                    <div class="pretty p-svg p-curve">
                        <input type="checkbox" :id="spice.name" :name ="spice._id"  :value="{_id:spice._id, name: spice.name}" v-model="spicesSelected">
                            <div class="state p-warning">
                                <svg class="svg svg-icon" viewBox="0 0 20 20">
                                     <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                                 </svg>
                                <label :for="spice._id">{{spice.name}}</label>
                            </div>
                    </div>
                </div>
            </div>

            <label class="form__label">Stuff</label>
            <div class="form__radios">
                <div class="form__radios-wrapper" v-for="stuffItem in stuff" :key="stuffItem._id">
                    <div class="pretty p-default p-round">
                        <input type="radio" :id="stuffItem.name" :name ="stuffItem._id" :value="{_id: stuffItem._id, name: stuffItem.name}"  v-model="stuffSelected">
                        <div class="state">
                            <label :for="stuffItem._id">{{stuffItem.name}}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div v-on:click="sendForm()" class="send-form">
                <router-link class="button__create" to ="/" >Update</router-link>
            </div>
        </form>
    </section>
</div>
</template>

<script>
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import "../../assets/scss/imports/hot_dogs_list.scss";
import axios from 'axios';
export default {
    name: "HotDogUpdate",
    components: {
        BreadCrumbs,
    },
    data: function() {
        return {
            hotDogId: '',
            name: '',
            description: '',
            hotDog: {},
            spices: [],
            stuff: [],
            spicesSelected:[],
            stuffSelected:[],
        }
    },
    methods: {
        setHotDogId: function(id) {
            this.hotDogId = id;
        },
        fetchSpices: async function() {
            const spicesRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}spices`);
            this.spices = await spicesRequest.data;
        },
        fetchStuff: async function() {
            const stuffRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}stuff`);
            this.stuff = await stuffRequest.data;
        },
        fetchHotDog: async function() {
            const hotDogRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}hot-dogs/${this.hotDogId}`);
            this.hotDog = await hotDogRequest.data;
            this.initFormFields(await this.hotDog);
        },
        initFormFields: function(hotDog) {
            this.name = hotDog.name;
            this.description = hotDog.description;
            this.spicesSelected = hotDog.spices;
            this.stuffSelected = hotDog.stuff[0];

        },
        sendForm: function() {
            axios.put(`${process.env.VUE_APP_API_BASE_URL}hot-dogs/${this.hotDogId}`,{
                name: this.name,
                description: this.description,
                spices: this.spicesSelected,
                stuff: [this.stuffSelected]
            });
        }
    },
    mounted: function() {
        this.fetchStuff();
        this.fetchSpices();
        this.fetchHotDog();
    },

}
</script>