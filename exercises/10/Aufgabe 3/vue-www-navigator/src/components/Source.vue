<template>
<div class="source">
    <p v-for="(ref, index) in text" :key="index">
            {{ref}}
    </p>
</div>
</template>

<script>
export default {
    props: {
        text: {type: Array, default: () => ["https://www.w3schools.com/"]}
    }
}
</script>

<style>
    p {
        margin-left: 10px;
        margin-right: 10px;
        overflow: auto;
    }

    .source {
        background-color: rgb(126, 55, 55);
        color: white;
        word-wrap: break-word;
    }
</style>