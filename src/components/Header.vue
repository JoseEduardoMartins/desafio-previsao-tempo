<template>
    <header>
        <h1 class="title">Previsão do tempo</h1>
    </header>
</template>

<script>
export default {
  name: 'HeaderVue',
  components: {
  }
}
</script>

<style scoped>
    header {
        width: 100%;
    }
    .title{
        margin: 30px;
        color: white;
        font-size: 50px;
    }
    @media (min-width: 700px) {
        .header{
            width: 700px;
        }
        .title{
            text-align: center;
        }
    }
</style>