<template>
  <div class="rps-container">
    <div class="rps-navbar">
      <p class="rps-player">hi, {{ player }}</p>
      <a
        class="rps-link-button"
        @click="this.$router.push({ name: 'home' })">
        log out
      </a>
    </div>
    <p class="rps-score">Score: {{ score }}</p>
    <div class="rps-actions">
      <div class="rps-action-img">
        <img
          src="@/assets/rock.png"
          alt="rock emoji"
          @click="play('rock')">
      </div>
      <div class="rps-action-img">
        <img
          src="@/assets/paper.png"
          alt="paper emoji"
          @click="play('paper')">
      </div>
      <div class="rps-action-img">
        <img
          src="@/assets/scissors.png"
          alt="scissors emoji"
          @click="play('scissors')">
      </div>
    </div>
    <div class="rps-result">
      <p v-if="playerSelected !== null">
        You: {{ playerSelected }}
      </p>
      <div
        v-show="showLoader"
        class="rps-loader"></div>
      <p v-show="showBot">
        Bot: {{ botSelected }}
      </p>
      <p v-show="showWinner">
        {{ winner }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GameView',
  data() {
    return {
      gameOptions: ['rock', 'paper', 'scissors'],
      playerSelected: null,
      botSelected: null,
      score: null,
      winner: null,
      showLoader: false,
      showBot: false,
      showWinner: false,
      color: 'beige'
    }
  },
  computed: {
    player() {
      return this.$route.params.player
    }
  },
  created() {
    // el bot ecoge su primera jugada sobre 3 opciones
    this.botSelected = this.gameOptions[[Math.floor(Math.random() * 3)]]
    // recupero los datos del player
    let storagePlayer = localStorage.getItem(this.$route.params.player)
    // cuando es un nuevo jugador y no tiene score
    if(storagePlayer === null) {
      let storageScore = 0
      let aux = { name: this.player, score: storageScore }
      localStorage.setItem(this.$route.params.player, JSON.stringify(aux))
      this.score = storageScore
    } else {
      this.score = JSON.parse(storagePlayer).score
    }
  },
  methods: {
    play(selected) {
      this.showLoader = true
      this.playerSelected = selected
      // el bot escoge su jugada
      let aux = this.bot()
      // reset de los show flags
      this.reset()
      // resuelve la partida
      this.fight(this.playerSelected, aux)
        .then(response => {
          let { bot, result } = response
          this.botSelected = bot
          if(result === 'player') {
            this.color = 'green'
            this.score++
            let aux = { name: this.player, score: this.score }
            localStorage.setItem(this.player, JSON.stringify(aux))
            this.winner = 'You win'
          } else if(result === 'bot') {
            this.color = 'red'
            this.winner = 'Bot win'
          } else {
            this.color = 'orange'
            this.winner = 'Tie'
          }
          this.showLoader = false
          this.showBot = true
          this.showWinner = true
        })
        .catch(error => {
          console.error(error)
          alert('Error resolving game')
        })
    },

    // resuelve el ganador de la ronda
    fight(player, bot) {
      return new Promise((resolve, reject) => {
        try {
          // tiene un delay para simular el efecto de que el bot tarda en pensar
          setTimeout(() => {
            let result
            if(player === 'rock') {
              if (bot === 'paper') {
                result = 'bot'
              } else if(bot === 'scissors') {
                result = 'player'
              } else {
                result = 'tie'
              }
            } else if(player === 'paper') {
              if (bot === 'scissors') {
                result = 'bot'
              } else if(bot === 'rock') {
                result = 'player'
              } else {
                result = 'tie'
              }
            } else {
              if(bot === 'rock') {
                result = 'bot'
              } else if(bot === 'paper') {
                result = 'player'
              } else {
                result = 'tie'
              }
            }
            resolve({ bot: bot, result: result })
          }, 2000)
        } catch(error) {
          reject(error)
        }
        
      })
    },

    // el bot escoge su jugada descartando su eleccion anterior
    bot() {
      let aux = this.gameOptions.filter(option => option !== this.botSelected)
      return aux[Math.floor(Math.random() * 2)]
    },

    // resetea los show flags para la ronda siguiente
    reset() {
      this.showBot = false
      this.showWinner = false
    }
  }
}
</script>

<style scoped>
  .rps-container {
    max-width: 640px;
    height: 100vh;
    margin: 0 auto;
    /* background-color:beige; */
    background-color: v-bind('color');
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rps-navbar {
    width: 100%;
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:cornsilk;
  }

  .rps-player {
    padding: 0 16px;
  }

  .rps-link-button {
    padding: 0 16px;
    text-decoration: underline;
    cursor: pointer;
  }

  .rps-score {
    padding: 16px 0;
  }

  .rps-actions {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .rps-action-img {
    width: 60px;
    height: 60px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background-color:darkolivegreen;
    box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -moz-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -webkit-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);

    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .3s;
  }

  .rps-action-img:active {
    transform: scale(.9);
  }

  .rps-action-img img {
    width: 50px;
    height: 50px;
  }

  .rps-result {
    padding: 16px 0;
  }

  .rps-loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: auto;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>
