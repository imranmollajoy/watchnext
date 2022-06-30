<script>
	//@ts-nocheck
	import Layout from '../../components/ui/Layout.svelte';
	import Container from '../../components/ui/Container.svelte';
	import { goto } from '$app/navigation';

	function getNewMovieData(e) {
		goto('/search/' + e.target[0].value);
	}
</script>

<Layout>
	<Container>
		<div class="forms">
			<h3>Search</h3>
			<form on:submit|preventDefault={getNewMovieData}>
				<input type="text" placeholder="Enter your desired title" />
				<button type="submit">Search</button>
			</form>
		</div>
	</Container>
</Layout>

<style>
	.forms {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
	form {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	form:nth-child(1) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
		outline: none;
		transition: all 0.1s ease-in-out;
	}
	input:focus {
		border: 1px solid var(--clr-accent);
	}

	button {
		background-color: var(--clr-accent);
		color: var(--clr-white);
		padding: 10px;
		border: none;
		border-radius: 4px;
		font-size: 16px;
		outline: none;
		transition: all 0.1s ease-in-out;
		cursor: pointer;
		width: 30%;
	}

	/* media for movile */
	@media (max-width: 425px) {
		form {
			flex-direction: column;
			align-items: flex-start;
			margin: 0 auto;
			gap: 0.6rem;
		}
		input,
		button {
			width: 100%;
		}
	}
</style>
