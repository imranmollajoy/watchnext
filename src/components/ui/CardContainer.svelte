<script>
	//@ts-nocheck

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	//get the .row and put as item var
	let item;
	let widthOfItem;
	onMount(() => {
		widthOfItem = item.offsetWidth - 20;
	});
	function scroll(el) {
		if (el.deltaY > 0) item.scrollLeft += widthOfItem;
		else item.scrollLeft -= widthOfItem;
	}
</script>

<div class="row" on:mousewheel|preventDefault={scroll} bind:this={item}>
	<slot />
</div>

<style>
	.row {
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		height: calc(156 * 500 / 700) px;
		gap: 0.6rem;
		scroll-behavior: smooth;
	}
	.row::-webkit-scrollbar {
		display: none;
	}
</style>
