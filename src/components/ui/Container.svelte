<script>
	export let nopadding = false;
</script>

<div class:zeropadding={nopadding}>
	<slot />
</div>

<style>
	div {
		max-width: 1076px;
		margin: 0 auto;
		padding: 1rem;
	}
	.zeropadding {
		padding: 0;
	}
	/* media q for mobile */
	@media (max-width: 425px) {
		div {
			padding: 0.2rem;
		}
	}
</style>
