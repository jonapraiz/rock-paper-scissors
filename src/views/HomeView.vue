<template>
  <div class="rps-container">
    <h1 class="rps-title">rock - paper - scissors</h1>
    <p class="rps-subtitle">Create a new player</p>
    <label
      class="rps-label"
      for="player">
      Name:
    </label>
    <input
      id="player"
      type="text"
      v-model="player"
      class="rps-input"
      placeholder="jon">
    <button
      class="rps-button"
      @click="validate">
      sign in
    </button>
    <a @click="this.$router.push({ name: 'scoreboard' })">scoreboard</a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data () {
    return {
      player: ''
    }
  },
  methods: {
    validate() {
      if (this.player === '' || this.player === null){
        console.log('Validation error')
      } else {
        this.$router.push({ name: 'game', params: { player: this.player } })
      }
    }
  }
}
</script>

<style>
  .rps-container {
    max-width: 640px;
    height: 100vh;
    margin: 0 auto;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rps-title {
    padding: 8px 16px;
  }

  .rps-subtitle {
    padding: 8px 16px;
  }

  .rps-label {
    padding: 8px 16px;
  }

  .rps-input {
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #ffffff;
    border: none;
    box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -moz-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -webkit-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
  }

  .rps-input:focus-visible {
    outline: none;
  }

  .rps-button {
    margin: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #ffffff;
    border: none;
    box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -moz-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -webkit-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
  }

</style>
