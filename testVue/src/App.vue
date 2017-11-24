<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from './components/top'
import Bottom from './components/bottom'

export default {
  name: 'app',
  components: {Top,Bottom},
  data () {
    return {
      content: '全局变量'
    }
  }
}
</script>

<style>
*{margin:0;padding:0;font-family:"Microsoft YaHei",SimHei;color:green;
	box-sizing:border-box;
	-moz-box-sizing:border-box;
	-webkit-box-sizing:border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
