<script>
	export let type = 'primary';
	export let flat = false;
</script>

<button on:click on:focus on:mouseover on:mouseenter on:mouseleave class={type}>
	<slot />
</button>

<style>
	button {
		border: none;
		background: none;
		padding: 0.7rem 1rem;
		transition: all 0.3s ease-in-out;
		border-radius: 0.5rem;
		margin-top: 4px;
	}
	button:hover {
		cursor: pointer;
	}
	.primary {
		background-color: hsl(26, 100%, 60%);
		color: #fff;
		box-shadow: 0px 0px 15px 0px hsla(26, 66%, 48%, 0.541);
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
