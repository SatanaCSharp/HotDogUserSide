<template>
<div id="spice-update">
    <bread-crumbs></bread-crumbs>
    spice-update
</div>
</template>

<script>
import BreadCrumbs from "../mixins/BreadCrumbs.vue";
export default {
    name: "SpiceUpdate",
    components: {
        BreadCrumbs
    },
    data: () => {
        return {
            params:''
        }
    }
}
</script>