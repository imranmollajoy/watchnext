<script>
	import Container from './Container.svelte';
</script>

<div class="row">
	<slot />
</div>

<style>
	.row {
		margin: 0 auto;
		max-width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
	}
</style>
