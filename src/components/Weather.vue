<template>
  <div class="container">
    <div class="container_item">
      <div class="header">
        <h2 class="header_title">{{city.name}}</h2>
        <font-awesome-icon icon="fa-solid fa-xmark" size="lg" color="green" @click="this.$emit('cleanCity')" style="cursor: pointer" />
      </div>
      <div class="body">
        <h1 class="body_item">{{city.temp}}ºC {{city.description}}</h1>
        <div class="body_item info">
            <div class="item_info">
                <div class="item_info_temp">
                  <div><font-awesome-icon icon="fa-solid fa-arrow-down" color="green" /> <strong>{{city.temp_min}}º</strong></div>
                  <div><font-awesome-icon icon="fa-solid fa-arrow-up" color="green" /> <strong>{{city.temp_max}}º</strong></div>
                </div>
                <div class="item_info_temp">
                  <div>Vento <strong>{{city.wind}}km/h</strong></div>
                </div>
            </div>
            <div class="item_info">
                <div class="item_info_temp">
                  <div>Sensação <strong>{{city.feels_like}}º</strong></div>
                </div>
                <div class="item_info_temp">
                  <div>Humidade <strong>{{city.humidity}}%</strong></div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherVue',
  props: {
    city: Object,
  },
}
</script>

<style scoped>
  .container{
      width: 100%;
      margin-bottom: 20px;
      color: #505050;
  }
    .container_item{
      width: calc(100% - 50px);
      margin: auto;
    }
    .container_item{
      background-color: white;
    }
    .header{
      padding: 20px 15px;
      display: flex;
      justify-content: space-between;
    }
      .header_title{
        margin-left: 10px;
      }
    .body{
      padding: 0px 15px;
    }
      .body_item{
        display: flex;
        justify-content: flex-start;
        margin: 10px;
      }
      .item_info{
        padding: 5px;
      }
      .item_info_temp{
        padding: 5px;
        display: flex;
        justify-content: space-between;
      }
  
  @media (min-width: 700px) {
    .container{
        width: 700px;
        margin: 20px auto;
    }
  }

</style>