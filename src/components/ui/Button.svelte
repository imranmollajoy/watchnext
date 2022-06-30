<script>
	//@ts-nocheck
	import Icon from './Icon.svelte';
	export let type = 'primary';
	export let flat = false;
	export let icon = '';
</script>

<button on:click on:focus on:mouseover on:mouseenter on:mouseleave class={type}>
	<div class="div content">
		{#if icon}
			<Icon name={icon} />
		{/if}
		<slot />
	</div>
</button>

<style>
	button {
		border: none;
		background: none;
		padding: 0.7rem 1rem;
		transition: all 0.3s ease-in-out;
		border-radius: 0.5rem;
		margin: 0.3rem 0;
	}
	button:hover {
		cursor: pointer;
	}
	.content {
		display: flex;
		align-items: center;
		flex-direction: row;
		cursor: pointer;
		gap: 0.5rem;
	}
	.primary {
		background-color: var(--clr-accent);
		color: var(--clr-white);
		box-shadow: 0px 0px 5px 0px hsla(26, 64%, 13%, 0.38);
	}
	.primary:hover {
		background-color: hsl(0, 93%, 68%);
		color: #fff;
		box-shadow: none;
	}
	.secondary {
		background-color: hsl(174, 100%, 93%);
		color: hsl(186, 70%, 8%);
	}
	.secondary:hover {
		background-color: hsl(173, 100%, 83%);
		color: hsl(186, 70%, 8%);
	}
	.danger {
		color: red;
	}
</style>
