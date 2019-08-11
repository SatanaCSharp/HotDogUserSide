<template>
    <div id="hot-dogs-show">
        <bread-crumbs></bread-crumbs>
        {{setHotDogId($route.params.id)}}
        <router-link class="button__back" to='/'> Back to hot dogs</router-link>
        <section class="hot-dog-show">
            <h3 class="title"> {{hotDog.name}}</h3>
            <p class="description">{{hotDog.description}}</p>
            <div class="spices">
                <label class="form__label">Spices: </label>
                <div class="spices-wrapper">
                    <div class="spices-wrapper__item" v-for="spice in hotDog.spices" :key="spice._id">
                        <h5> {{spice.name}}, </h5>
                    </div>
                </div>
            </div>
            <div class="stuff">
                <label class="form__label">Stuff: </label>
                <div class="stuff-wrapper">
                    <div class="stuff-wrapper__item" v-for="stuffItem in hotDog.stuff" :key="stuffItem._id">
                        <h5> {{stuffItem.name}}, </h5>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import BreadCrumbs from "../mixins/BreadCrumbs.vue";
    import "../../assets/scss/imports/hot_dogs_show.scss";
    import axios from 'axios';

    export default {
        name: "HotDogShow",
        components: {
            BreadCrumbs
        },
        data: () => {
            return {
                hotDogId: '',
                hotDog: {}

            }
        },
        methods: {
            setHotDogId: function (id) {
                this.hotDogId = id;
            },
        },
        mounted: async function () {
            const hotDogRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}hot-dogs/${this.hotDogId}`);
            this.hotDog = await hotDogRequest.data;
        }

    }
</script>