<template>
<div class="container">
  <Header id="header"></Header>
  <Menu id="mainnav" orientation="horizontal" :items="Object.keys(this.$store.state.data)"></Menu>
  <Menu id="subnav" orientation="vertical" :items="this.$store.state.subnav_items"></Menu>
  <Content id="content" :text="this.$store.state.content"></Content>
  <Source id="source" :text="this.$store.state.source"/>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Content from "./components/Content.vue";
import Source from "./components/Source.vue";

export default {
    components: {
        Header,
        Menu,
        Content,
        Source
    },
    data: function() {
      return {
        curr_main: ""
      }
    },

    mounted() {      
      let buttons_mainnav = document.getElementById("mainnav").children;

      for (let button of buttons_mainnav) {
        button.addEventListener("click", () => {
          this.$store.dispatch('loadSubNav', Object.keys(this.$store.state.data[button.innerText]).slice(1));
          this.curr_main = button.innerText;
          this.$store.dispatch('loadContent', this.$store.state.data[this.curr_main]["_doc"]);
        })
      }

      let backButton = document.createElement("button");
      backButton.innerText = "Zurück";
      backButton.addEventListener("click", () => this.$store.dispatch('undo'));
      document.getElementById("mainnav").appendChild(backButton);
    },
    updated() {
      let buttons_subnav = document.getElementById("subnav").children;

      for (let button of buttons_subnav) {
        button.addEventListener("click", () => {
          this.$store.dispatch('loadContent', this.$store.state.data[this.curr_main][button.innerText].content)
          this.$store.dispatch('loadSource', this.$store.state.data[this.curr_main][button.innerText].references)
          this.$store.dispatch('add', [this.curr_main, button.innerText])
        })
      }
    }
}
</script>

<style>
  body {
    margin: 0;
  }

  .container {
    margin: 0;
        display: grid;
        grid-template-areas:
            "header header header"
            "mainnav mainnav mainnav"
            "subnav content source";
        grid-template-rows: 15vh 15vh 70vh;
        grid-template-columns: 20% 60% 20%;
        font-size: larger;
  }

  #header {
    grid-area: header;
  }

  #mainnav {
    grid-area: mainnav;
  }

  #subnav {
    grid-area: subnav;
  }

  #content {
    grid-area: content;
  }

  #source {
    grid-area: source;
  }
</style>