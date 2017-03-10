<template>
	<div class="bodys">
	<transition enter-active-class="animated fadeIn" leave-active-class="animated zoomOut">
		<router-view></router-view>
	</transition>
	</div>
</template>
<script>
	export default {
		name: 'bodys',
		data () {
			return {
			}
		}
	}
</script>
<style scoped>
	.bodys{
		width: 100%;
		position: relative;
		top: 2rem;
		font-size: .75rem;
	}
</style>