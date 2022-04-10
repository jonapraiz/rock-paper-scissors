<template>
  <div class="rps-container">
    <div class="rps-emojis">
      <img
        src="@/assets/rock.png"
        alt="rock emoji">
      <img
        src="@/assets/paper.png"
        alt="paper emoji">
      <img
        src="@/assets/scissors.png"
        alt="scissors emoji">
    </div>
    <h1 class="rps-title">create a new player</h1>
    <div clasS="rps-signin">
      <label for="player">name</label>
      <input
        id="player"
        type="text"
        name="player"
        v-model="player"
        class="rps-input"
        placeholder="jon"
        autocomplete="off">
      <p
        v-show="validationError"
        class="rps-validation-error">Invalid player name</p>
    </div>
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
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rps-emojis {
    width: 40%;
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .rps-emojis img {
    width: 22px;
    height: 22px;
  }

  .rps-title {
    padding: 8px;
  }

  .rps-signin {
    max-width: 150px;
  }

  .rps-input {
    width: 100%;
    padding: 8px;
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
    margin-top: 8px;
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
