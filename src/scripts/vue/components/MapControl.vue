<template>
  <div id="map-control">
    <p>Map navigator</p>
    <div class="block-buttons-controle">
      <div class="buttons-line">
        <button @click="goDown" class="big">
          <img src="../img/nav_top_i.png">
        </button>
      </div>

      <div class="buttons-line">
        <button @click="goRight" class="big">
          <img src="../img/nav_left_i.png">
        </button>
        <button @click="goCenter" class="little">
          <img src="../img/nav_center_i.png">
        </button>
        <button @click="goLeft" class="big">
          <img src="../img/nav_right_i.png">
        </button>
      </div>

      <div class="buttons-line-footer">
        <button @click="zoomOut" class="little">
          <img src="../img/nav_minus_i.png">
        </button>
        <button @click="goUp" class="big">
          <img src="../img/nav_down_i.png">
        </button>
        <button @click="zoomIn" class="little">
          <img src="../img/nav_plus_i.png">
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "map-control",
  props: {
    zoomIn: Function,
    zoomOut: Function,
    goRight: Function,
    goLeft: Function,
    goUp: Function,
    goDown: Function,
    goCenter: Function
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
#map-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
  p {
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  .block-buttons-controle {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 26px;
      background: #c8d92b;
      border: none;
      border-radius: 100%;
      cursor: pointer;
      box-shadow: 3px 3px 10px #00000060;
    }
    .big {
      width: 46px;
      height: 46px;
    }
    .little {
      width: 30px;
      height: 30px;
    }
    .buttons-line {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        margin: 0 5px;
      }
    }
    .buttons-line-footer {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      button {
        margin: 0 14px;
      }
    }
  }
}
</style>

