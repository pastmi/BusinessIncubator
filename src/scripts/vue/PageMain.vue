<template>
  <div id="page-main">
    <canvas ref="canvas" width="760" height="637"></canvas>>
    <Header/>
    <Menu
      :zoomIn="zoomIn"
      :zoomOut="zoomOut"
      :goRight="goRight"
      :goLeft="goLeft"
      :goUp="goUp"
      :goDown="goDown"
      :goCenter ="goCenter"
    />
    <img class="test" v-if="getMenu === 0" src="../img/pin_grey_screen.png">
    <img
      class="test"
      @click="openMyProject"
      v-if="getMenu === 1"
      src="../img/projects_g_screen.png"
    >
    <img class="test" @click="openNews" v-if="getMenu === 2" src="../img/projects_r_screen.png">
    <modal-my-projects v-on:openNewProject="openNewProject" ref="modal-my-projects"/>
    <modal-new-projects v-on:openNewProjectSecond="openNewProjectSecond" ref="modal-new-projects"/>
    <modal-new-projects-second ref="modal-new-projects-second"/>
    <modal-news ref="modal-news"/>
  </div>
</template>
<script>
import { actions } from "../store";
import { fabric } from "fabric";
export default {
  name: "page-main",
  date() {
    return {
      map: null
    };
  },
  computed: {
    getMenu() {
      return this.$store.getters.getMenu;
    }
  },
  mounted() {
    this.map = new fabric.Canvas(this.$refs.canvas);

    fabric.Image.fromURL(
      "../img/map.jpg",
      oImg => {
        this.map.add(oImg);
        this.map.sendToBack(oImg);
        this.map.setZoom(0.4);
        this.map.renderAll();
      },
      {
        evented: false,
        selectable: false,
        hasBorders: false,
        hasControls: false,
        hasRotatingPoint: false
      }
    );
  },
  methods: {
    zoomIn() {
       this.map.zoomToPoint(new fabric.Point(this.map.width / 2, this.map.height / 2),this.map.getZoom() * 1.1);
    },

    zoomOut() {
      this.map.zoomToPoint(new fabric.Point(this.map.width / 2, this.map.height / 2),this.map.getZoom() / 1.1);
    },

    goRight() {
      var units = 10;
      var delta = new fabric.Point(units, 0);
      this.map.relativePan(delta);
    },
    goCenter(){
    this.map.zoomToPoint(new fabric.Point(this.map.width / 2, this.map.height / 2), 0.4);
    },
    goLeft() {
      var units = 10;
      var delta = new fabric.Point(-units, 0);
      this.map.relativePan(delta);
    },
    goUp() {
      var units = 10;
      var delta = new fabric.Point(0, -units);
      this.map.relativePan(delta);
    },

    goDown() {
      var units = 10;
      var delta = new fabric.Point(0, units);
      this.map.relativePan(delta);
    },
    openNews() {
      this.$refs["modal-news"].open();
    },
    openMyProject() {
      this.$refs["modal-my-projects"].open();
    },
    openNewProject() {
      this.$refs["modal-new-projects"].open();
    },
    openNewProjectSecond() {
      this.$refs["modal-new-projects-second"].open();
    }
  }
};
</script>

<style lang="scss" scoped>
#page-main {
  width: 760px !important;
  height: 637px !important;
  position: relative;
  overflow: hidden;
}
.map {
  height: 100%;
}
.test {
  cursor: pointer;
  position: absolute;
  top: 200px;
  left: 300px;
}
</style>
