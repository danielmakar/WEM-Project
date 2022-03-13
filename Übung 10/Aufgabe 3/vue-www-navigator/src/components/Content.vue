<template>
<div class="content">
    <p>{{text}}</p>
</div>
</template>

<script>
export default {
    props: {
        text: {type: String, default: "Herzlich Wilkommen! Sie können ein Hauptthema auswählen und anschließend ein Unterthema, um sich eine passende Beschreibung anzuschauen."}
    }
}
</script>

<style>
    p {
        margin-left: 10px;
    }

    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: rgb(103, 189, 223);
    }
</style>