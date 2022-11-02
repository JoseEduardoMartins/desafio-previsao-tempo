<template>
    <div class="container">
        <form class="container_item" @submit="findWeather">
            <input id="city_name" class="container_item_input" type="text" placeholder="Insira aqui o nome da cidade" v-model="name">
            <button class="container_item_button" type="submit">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="2x" color="#505050" />
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormVue',
    data() {
        return {
            name: "",
        };
    },
    methods: {
        findWeather (e) {
            if (this.name.length) this.$emit('findWeather', this.name);
            else alert("Nome invalido.");
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
    }
    .container_item{
        width: calc(100% - 50px);
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
    }
    .container_item_input{
        padding: 15px;
        width: 100%;
        box-shadow: 0 0 0 0;
        outline: 0;
        border: none;
        font-size: 16px;
    }
    .container_item_button{
        cursor: pointer;
        padding: 10px;
        border: none;
        background-color: #ffffff;
    }
    @media (min-width: 700px) {
        .container{
            width: 700px;
            margin: auto;
        }
    }
</style>