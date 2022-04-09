<template>
  <div class="rps-container">
    <h1>Scoreboard</h1>
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
          <th>Name</th>
          <th>Score</th>
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
      if (keys !== null) {
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
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    border: 1px solid #ffffff;
  }

  .rps-table thead {
    background-color: beige;
  }

  .rps-table thead tr {
    text-align: left;
  }

  .rps-table th {
    padding: 4px;
  }

  .rps-table tbody tr {
    text-align: left;
  }

  .rps-table td {
    padding: 4px;
    border: 1px solid #ffffff;
  }

</style>
