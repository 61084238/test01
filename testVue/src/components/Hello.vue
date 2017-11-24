<template>
<div class="hello">
	<h1>{{ msg }}</h1>

	<div id="testJsLoad" v-on:click="testJsLoad">
		test.js is load... <b></b>
	</div>

	<div id="testGlobal" v-on:click="testGlobal">
		test Global... <b></b>
	</div>

</div>




</template>

<script>
//import '../assets/lib/test/test.css'   
import test from '../assets/lib/test/test.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'js插件载入测试'
    }
  },
  methods:{
    testJsLoad:function(){
      console.log($(this).find('b'));
      $('#testJsLoad b').html(test(2));
    },
    testGlobal:function(){
    $('#testGlobal b').html(this.tools.add(3));
      }
    }
}

</script>


<style scoped src="../assets/lib/test/test.css">

h1, h2 {
  font-weight: normal;
}

</style>
