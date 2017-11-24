<template>
<div class="header">
    top 【避免使用html5标签 - header,footer】<br>
    <img src="../assets/logo.png">
    <div class="Nav">
	<router-link to="/">index</router-link>
	<router-link to="/pageA">pageA</router-link>
	<router-link to="/pageB">pageB</router-link>
    </div>
    <hr>
</div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
.header{}
</style>
