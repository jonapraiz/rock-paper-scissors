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
      placeholder="jon"
      autocomplete="off">
    <p
      v-show="validationError"
      class="rps-validation-error">Invalid player name</p>
    <button
      class="rps-button"
      @click="validate">
      sign in
    </button>
    <a
      class="rps-link-button"
      @click="this.$router.push({ name: 'scoreboard' })">scoreboard</a>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      player: '',
      validationError: false
    }
  },
  methods: {
    validate() {
      if (this.player === '' || this.player === null){
        this.validationError = true
      } else {
        this.$router.push({ name: 'game', params: { player: this.player } })
      }
    }
  }
}
</script>

<style scoped>
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

  .rps-validation-error {
    color: red;
    font-size: 14px;
    padding: 8px 0;
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

  .rps-link-button {
    padding: 0 16px;
    text-decoration: underline;
    cursor: pointer;
  }

</style>
