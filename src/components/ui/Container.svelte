<script>
	export let nopadding = false;
</script>

<div class:zeropadding={nopadding}>
	<slot />
</div>

<style>
	div {
		max-width: 1026px;
		margin: 0 auto;
		padding: 0.6rem;
	}
	.zeropadding {
		padding: 0;
	}
	/* media q for mobile */
</style>
