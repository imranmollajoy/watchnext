<script context="module">
	import { API_KEY } from '$lib/env';
	import { fly } from 'svelte/transition';
	import Layout from '../components/ui/Layout.svelte';
	import MovieList from '../components/ui/MovieList.svelte';
	let myApiKey;
	let links = {
		trending: '',
		popular: ''
	};
	if (process.env.NODE_ENV === 'production') {
		// For production
		myApiKey = process.env.API_KEY;
		links = {
			trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${myApiKey}&language=en-US&page=1`,
			popular: `https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&page=1`
		};
	} else {
		// For development
		myApiKey = API_KEY;
		links = {
			trending: '../top_rated.json',
			popular: '../popular.json'
		};
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
	let popular = getMovieData(links.popular);
	let trending = getMovieData(links.trending);
</script>

<Layout>
	<section>
		<!-- Popular Section -->
		{#await popular}
			<p>...Loading Popular movies</p>
		{:then data}
			<MovieList {data} title="Popular Movies" />
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}

		<!-- Top rated section -->
		{#await trending}
			<p>...Loading Trending movies</p>
		{:then data}
			<MovieList {data} title="Trending Movies" />
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
		<footer>
			Made with <span class="red">♥</span> by
			<a href="https://imranmollajoy.github.io">Imran Molla Joy</a>
			<br />
			Data from
			<br />
			<a href="https://www.themoviedb.org">
				<img
					src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
					alt="The Movie Database"
				/>
			</a>
		</footer>
	</section>
</Layout>

<!-- test more -->
<style>
	footer {
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
	}
	footer a,
	.red {
		color: var(--clr-accent);
	}
	footer img {
		max-width: 60%;
	}
</style>
