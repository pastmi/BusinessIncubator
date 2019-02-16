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
  data() {
    return {
      map: null,
      zoomMax: 1,
      zoomMin: 0.4
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
    zoomIn(){
      const newZoom = this.map.getZoom() * 1.1;
      if(newZoom >= this.zoomMax){
        return;
      }

       this.map.zoomToPoint(new fabric.Point(this.map.width / 2, this.map.height / 2), newZoom);
    },

    zoomOut() {
      const newZoom = this.map.getZoom() / 1.1;   
      if(newZoom <= this.zoomMin){
        return;
      }

      this.map.zoomToPoint(new fabric.Point(this.map.width / 2, this.map.height / 2), newZoom);
    },

    goRight() {
      let units = 10;
      let delta = new fabric.Point(units, 0);
      if(this.map.vptCoords.tl.x<10) {
        return;
      }
      this.map.relativePan(delta);
    },

    goCenter(){
    this.map.zoomToPoint(new fabric.Point(this.map.width / 2, this.map.height / 2), 0.4);
    },

    goLeft() {
      let units = 10;
      let delta = new fabric.Point(-units, 0);
      if(this.map.vptCoords.tl.x > 1425+((this.map.getZoom()-0.4)*2130)) {
        return;
      }
      this.map.relativePan(delta);
    },
    goUp() {
      let units = 10;
      let delta = new fabric.Point(0, -units);
      if(this.map.vptCoords.tl.y > 320+((this.map.getZoom()-0.4)*1800)) {
        return;
      }
      this.map.relativePan(delta);
    },

    goDown() {
      let units = 10;
      let delta = new fabric.Point(0, units);
      if(this.map.vptCoords.tl.y < 10) {
        return;
      }
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
