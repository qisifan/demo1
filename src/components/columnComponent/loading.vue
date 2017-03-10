<template>
	<div class="loading">
	    <p>下拉加载更多</p>
		<div class="csshub-scale">
		  <div></div>
		  <div></div>
		  <div></div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'loading',
		data () {
			return {}
		}
	}
</script>
<style scoped lang="scss">
	.loading{
		width: 100%;
		height:100%;
		padding-top:.5rem;
		background-color:#fff ;
		display: flex;
		flex-flow: column nowrap;
		position: fixed;
		bottom: 0;
		p{
			width: 100%;
			font-size: .6rem;
			color:#EB135B;
			margin-bottom: .5rem;
			position: absolute;
			top: 85%;
		}
		.csshub-scale{
			position: relative;
			left: 50%;
			top: 94%;
		}
	}
	@-webkit-keyframes csshub-scale-multiple {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0; }
  5% {
    opacity: 1; }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

@keyframes csshub-scale-multiple {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0; }
  5% {
    opacity: 1; }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

.csshub-scale {
  position: relative;
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px); }
 
.csshub-scale > div:nth-child(2) {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s; }
 
.csshub-scale > div:nth-child(3) {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s; }
 
.csshub-scale > div {
    background-color: #ed135b;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    position: absolute;
    left: -30px;
    top: 0px;
    opacity: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    -webkit-animation: csshub-scale-multiple 1s 0s linear infinite;
            animation: csshub-scale-multiple 1s 0s linear infinite; }
</style>