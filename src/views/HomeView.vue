<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button @click="irBook" class="btn btn-primary">Primary</button>
    <button @click="irBook" class="btn btn-secondary">Secondary</button>
    <button @click="irBook" class="btn btn-success">Tercer</button>

  </div>
</template>

<script>

export default {
  methods: {
    irBook() {
      this.$router.push( { name:'no-entry' } )
    }
  }
}
</script>


