<template>
  <div class="pageA">
    <h1 v-bind:class="{ tc: true,ta:false }">{{ reversedMessage }}</h1>
    <h2 v-on:click="doSomething">【TEST】jquery</h2>
	
    <a target="_blank" href="https://segmentfault.com/a/1190000007020623">vue-cli webpack全局引入jquery</a>
    <br>
    <a target="_blank" href="https://github.com/webpack-contrib/script-loader">script-loader</a>

  </div>
</template>

<script>
export default {
  name: 'pageA',
  data:function(){
    return {
      msg: '上海自来水来自海上',
      msg2:'clicked'
    }
  },
  methods:{
    doSomething:function(){
	$('.pageA h2').css('color','red'); 
	this.msg2='【TEST】watch!';
    }
  },
  watch: {
    msg2: {
      handler: function (val, oldVal) {
	$('.pageA h2').append('<b>'+this.msg2+'</b>'); 
      },
      deep: true
    }
  },
  computed: { //算属性默认只有 getter ，不过在需要时你也可以提供一个 setter 
    reversedMessage: function () {
      console.log(Date.now());
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
h1{color:black}
.tc{font-size:14px;}
.ta{color:red}
h2{cursor:pointer;color:purple}


</style>
