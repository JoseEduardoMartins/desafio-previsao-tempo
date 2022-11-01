<template>
    <div class="container">
        <input type="text" placeholder="Insira aqui o nome da cidade" v-model="name">
        <button @click="this.$emit('findWeather', this.name)">buscar</button>
    </div>
</template>

<script>
export default {
    name: 'FormVue',
    data() {
        return {
            name: "",
        };
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        text-align: center;
    }
    input{
        width: calc(100% - 50px);
        padding: 15px 20px;
        margin: 50px 0;
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-size: 15px;
    }
    input:focus {
        box-shadow: 0 0 0 0;
        border: 1px solid #ccc;
        outline: 0;
    }
</style>