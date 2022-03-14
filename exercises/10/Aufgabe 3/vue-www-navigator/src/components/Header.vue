<template>
<div class="header">
    <h1>{{text}}</h1>
</div>
</template>

<script>
export default {
    props: {
        text: {type: String, default: "WWW-Navigator"}
    }
}
</script>

<style>
    .header {
        text-align: center;
        background-color: rgb(160, 43, 43);
        padding-bottom: 60px;
        color: white;
    }
</style>