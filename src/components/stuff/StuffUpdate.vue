<template>
<div id="stuff-update">
    <bread-crumbs></bread-crumbs>
    {{setStuffId($route.params.id)}}
    <section class="stuff-create-wrapper">
        <form id="create-form" class="form form-wrapper">
            <label class="form__label" for="name">Name of stuff</label>
            <input  class="form__input" v-model="name" id="name" name="name" type="text" :placeholder = "oldName" >
            <div v-on:click="sendForm()" class="send-form">
                <a href="/stuff" class="button__create" >Update</a>
            </div>
        </form>
    </section>

</div>
</template>

<script>
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
import axios from 'axios';
export default {
    name: "StuffUpdate",
    components: {
        BreadCrumbs
    },
    data: () => {
        return {
            name,
            stuffId: '',
            oldName: ''
        }
    },
    methods: {
        setStuffId: function(id) {
            this.stuffId = id;
        },
        sendForm: function() {
            axios.put(`${process.env.VUE_APP_API_BASE_URL}stuff/${this.stuffId}`,{name: this.name});
        }
    },
    mounted: async function() {
        const spicesRequest = await axios.get(`${process.env.VUE_APP_API_BASE_URL}stuff/${this.spiceId}`);
        this.oldName = await spicesRequest.data.name;
    }
}
</script>