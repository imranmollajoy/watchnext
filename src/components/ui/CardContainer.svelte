<div class="row">
	<slot />
</div>

<style>
	.row {
		width: 100%;
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); */
		/* set grid clomun to 6 in pc, 4 in tablet, 2 in lower screen */
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem;
	}
</style>
