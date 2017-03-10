<template>
	<div class="cnBodys">
	<transition enter-active-class="animated fadeIn" >
		<router-view></router-view>
	</transition>
	</div>
</template>
<script>
	export default {
		name:'cnBodys',
		data () {
			return{}
		}
	}
</script>
<style lang="scss" scoped>
	.cnBodys{
		width: 100%;
		background-color: #fff;
		position: relative;
		top: 1.8rem;
	}
</style>
		