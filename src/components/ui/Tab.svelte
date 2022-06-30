<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let items = [];
	export let selected = items[0];
</script>

<div class="tab">
	<div class="tabbuttons">
		{#each items as item}
			<button
				sveltekit:noscroll
				class:active={selected === item}
				on:click={() => {
					dispatch('tabChanged', item);
				}}
			>
				{item}
			</button>
		{/each}
	</div>
</div>

<style>
	.tab {
		width: 100%;
		background-color: var(--clr-white);
	}
	.tabbuttons {
		max-width: 1024px;
		height: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 0.5rem;
		justify-content: stretch;
	}
	button {
		display: inline-block;
		width: auto;
		height: 100%;
		border: none;
		padding: 1rem;
		background-color: transparent;
		transition: all 0.2s ease-in-out;
	}
	button:hover {
		border-bottom: 1px solid var(--clr-text);
	}
	.active {
		color: var(--clr-text);
		border-radius: 0.2rem;
		border-bottom: 1px solid var(--clr-accent);
	}
</style>
