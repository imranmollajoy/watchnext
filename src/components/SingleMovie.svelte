<script>
	import MovieCard from './MovieCard.svelte';
	import CardContainer from './ui/CardContainer.svelte';
	async function getMovieData() {
		// const res = await fetch(
		// 	`https://api.themoviedb.org/3/movie/top_rated?api_key=${getSession().API_KEY}&language=en-US&page=1`
		// );
		const res = await fetch(`../dummydata.json`);
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			throw new Error('Something went wrong');
		}
	}

	let promise = getMovieData();

	function handleClick() {
		promise = getMovieData();
	}
</script>

<!-- <button on:click={handleClick}> generate random number </button> -->

{#await promise}
	<p>...waiting</p>
{:then data}
	<CardContainer>
		<MovieCard {data} />
	</CardContainer>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
