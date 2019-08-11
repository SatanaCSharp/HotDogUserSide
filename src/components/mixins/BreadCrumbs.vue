<template>
    <div id="bread-crumbs">
        <aside class="bread-crumbs">{{breadCrumbs}}</aside>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs",
        data: () => {
            return {
                breadCrumbs: ''
            }
        },
        created() {
            this.breadCrumbs = window.location.pathname;
        }
    }
</script>