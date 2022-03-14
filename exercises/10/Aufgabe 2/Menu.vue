<template>
    <div class="navigation" :class="orientation">
        <button v-for="(item, index) in items" :key="index">
            {{item}}
        </button>
    </div >
</template>

<script>
export default {
    props: {
        orientation: {type: String, default: "horizontal"},
        items: {type: Array, default: () => ["Item1", "Item2"]}
    }
}
</script>

<style>
    .navigation {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .navigation button {
        width: 150px;
        margin: 10px;
        border: rgb(103, 189, 223) solid 3px;
        border-radius: 8px;
        background-color: blanchedalmond;
    }
    .navigation button:hover {
        background-color: #C9B899;
    }
    .horizontal {
        flex-flow: no wrap;
    }
    .vertical {
        flex-flow: column wrap;
        padding: 0;
    }
</style>