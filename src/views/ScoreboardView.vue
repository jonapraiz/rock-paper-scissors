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
    <h1 class="rps-title">scoreboard</h1>
    <a
      class="rps-link-button"
      @click="this.$router.push({ name: 'home' })">
      home
    </a>
    <p v-if="ranking.length === 0">No players registered yet</p>
    <table
      v-else
      class="rps-table"
      cellpadding="0"
      cellspacing="0"
      border="0">
      <thead>
        <tr>
          <th>name</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(player, index) in ranking"
          :key="index">
          <td>
            {{ player.name }}
          </td>
          <td>
            {{ player.score }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'ScoreboardView',
  data () {
    return {
    }
  },
  computed: {
    ranking() {
      let arr = []
      let keys = Object.keys(localStorage)
      if(keys !== null) {
        keys.forEach(key => {
          let aux = JSON.parse(localStorage.getItem(key))
          arr.push(aux)
        })
      }
      return arr
    }
  },
  created() {
  },
  methods: {
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
    padding: 8px 16px;
  }

  .rps-link-button {
    padding: 8px 16px;
    text-decoration: underline;
    cursor: pointer;
  }

  .rps-table {
    box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -moz-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    -webkit-box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .2);
    border-collapse: collapse;
    border: 1px solid #2c3e50;
  }

  .rps-table thead {
    background-color: cornsilk;
  }

  .rps-table thead tr {
    text-align: left;
  }

  .rps-table th {
    padding: 4px;
  }

  .rps-table tbody tr td:first-of-type {
    text-align: left;
  }

  .rps-table tbody tr td:last-of-type {
    text-align: right;
  }

  .rps-table th, td {
    padding: 4px;
    border: 1px solid #2c3e50;
  }

</style>
