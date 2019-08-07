<template>
<div id="spice-update">
    <bread-crumbs></bread-crumbs>
    {{setSpiceId($route.params.id)}}
    <section class="spice-create-wrapper">
        <form id="create-form" class="form form-wrapper">
            <label class="form__label" for="name">Name of spice</label>
            <input  class="form__input" v-model="name" id="name" name="name" type="text" >
            <div v-on:click="sendForm()" class="send-form">
                <a href="/spices" class="button__create" >Update</a>
            </div>
        </form>
    </section>

</div>
</template>

<script>
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import axios from 'axios';
export default {
    name: "SpicesUpdate",
    components: {
        BreadCrumbs
    },
    data: () => {
        return {
            name,
            spiceId: '',
        }
    },
    methods: {
        setSpiceId: function(id) {
            this.spiceId = id;
        },
        fetchSpice: async function() {
            const spicesRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}spices/${this.spiceId}`);
            this.name = await spicesRequest.data.name;
        },
        sendForm: function() {
            axios.put(`${process.env.VUE_APP_API_BASE_URL}spices/${this.spiceId}`,{name: this.name});
        }
    },
    mounted: function() {
        this.fetchSpice();
    }
}
</script>