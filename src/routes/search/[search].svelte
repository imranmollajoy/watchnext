<script context="module">
	import Layout from '../../components/ui/Layout.svelte';
	import Container from '../../components/ui/Container.svelte';
	import { API_KEY } from '$lib/env';
	import MovieList from '../../components/ui/MovieList.svelte';
	import { onMount } from 'svelte';
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
	export async function load({ fetch, params }) {
		// const res = await fetch(
		// 	`https://api.themoviedb.org/3/movie/top_rated?api_key=${getSession().API_KEY}&language=en-US&page=1`
		// );
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${params.search}&page=1`
		);

		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					movie: data.results
				}
			};
		} else {
			throw new Error('Something went wrong');
		}
	}
</script>

<script>
	//@ts-nocheck

	export let movie;
	$: console.log(movie);
</script>

<Layout>
	<Container>
		{#await movie}
			<MovieList {movie} title="Search Results" />
		{:then data}
			<MovieList {data} title="Search Results" />
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</Container>
</Layout>

<style>
</style>
