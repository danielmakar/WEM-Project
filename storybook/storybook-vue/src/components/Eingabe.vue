<template>
    <div class="eingabe">
        <input v-model="input">
        <p>Buchstaben: {{letters}}</p>
        <p>Leerzeichen: {{spaces}}</p>
        <p>Wörter: {{words}}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            input: "",
            letters: 0,
            spaces: 0,
            words: 0
        }
    },
    watch: {
        input: function() {
            let letterMatches = this.input.match(/([a-zA-ZäöüÄöü]{1})/g);
            let spaceMatches = this.input.match(/([\s]+)/g);
            let wordMatches = this.input.match(/([\w]+)/g);

            this.letters = letterMatches ? letterMatches.length : 0;
            this.spaces = spaceMatches ? spaceMatches.length: 0;
            this.words = wordMatches ? wordMatches.length: 0;
        }
    }
}
</script>

<style>

</style>