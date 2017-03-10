<template>
  <div id="app">
    <headers></headers>
    <bodys></bodys>
  </div>
</template>

<script>
import Headers from './components/Headers.vue'
import Bodys from './components/Bodys.vue'

export default {
  name: 'app',
  data () {
    return {
      pics:'1'
    }
  },
  components: {
    Headers,
    Bodys
  }
}
</script>

<style lang="scss">
@import './common/public.scss';
@media (-webkit-min-device-pixel-ratio: 2){
      .border:after {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        right: -100%;
        bottom: -100%;
        left: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        pointer-events: none;
        -webkit-transform: scale(.5);
        transform: scale(.5);
        width: 200%;
       }
    }
#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color:black;
	  /* padding-top: 40px; */
	  width: 100%;
    height: 100%;
	  position: relative;
	}
.startPic{
  background: url(images/homePage/picks.gif) no-repeat;
  background-size: cover;
}
</style>
