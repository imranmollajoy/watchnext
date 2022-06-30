<script>
	import Layout from '../components/ui/Layout.svelte';
	import Container from '../components/ui/Container.svelte';
	import { API_KEY } from '$lib/env';
	import MovieList from '../components/ui/MovieList.svelte';
	let myApiKey;
	if (process.env.NODE_ENV === 'production') {
		// For production
		myApiKey = process.env.API_KEY;
	} else {
		// For development
		myApiKey = API_KEY;
	}
	/**
	 * @param {string} link
	 */
	async function getMovieData(link) {
		// const res = await fetch(
		// 	`https://api.themoviedb.org/3/movie/top_rated?api_key=${getSession().API_KEY}&language=en-US&page=1`
		// );
		const res = await fetch(`${link}`);
		const data = await res.json();
		if (res.ok) {
			return data.results;
		} else {
			throw new Error('Something went wrong');
		}
	}
	let promise;
	function getNewMovieData(e) {
		promise = getMovieData(
			`https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${e.target.value}&page=1`
		);
		promise.then((data) => {
			console.log(data);
		});
	}
</script>

<Layout>
	<Container>
		<form>
			<input type="text" placeholder="Enter your desired title" />
			<button type="submit" on:click|preventDefault={getNewMovieData}>Search</button>
		</form>

		{#if promise}
			{#await promise}
				<p>...Searching</p>
			{:then data}
				<MovieList {data} title="Results" />
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		{:else}
			<h3>Search result will be popped up here</h3>
		{/if}
	</Container>
</Layout>

<style>
	form {
		display: flex;
		align-items: center;
		justify-content: center;
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
	}
</style>
