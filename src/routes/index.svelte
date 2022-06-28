<script>
	import Layout from '../components/ui/Layout.svelte';
	import MovieList from '../components/ui/MovieList.svelte';
	export function getSession() {
		return {
			API_KEY: import.meta.env.VITE_API_KEY
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
	let popular = getMovieData('../popular.json');
	let topRated = getMovieData(`../top_rated.json`);
</script>

<Layout>
	<!-- Popular Section -->
	{#await popular}
		<p>...Loading Popular movies</p>
	{:then data}
		<MovieList {data} title="Popular Movies" />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	<!-- Top rated section -->
	{#await topRated}
		<p>...Loading Top rated movies</p>
	{:then data}
		<MovieList {data} title="Top Rated Movies" />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</Layout>
