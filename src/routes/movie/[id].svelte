<script>
	// @ts-nocheck

	import Container from '../../components/ui/Container.svelte';
	import Button from '../../components/ui/Button.svelte';
	import Layout from '../../components/ui/Layout.svelte';
	import Data from '../../stores/PersistantData';
	import { onMount } from 'svelte';

	export let movie;
	let favoriteButtonText = 'Add to favorites';
	let watchlistButtonText = 'Add to watchlist';
	function addToWatchList() {
		const toAdd = {
			id: movie.id,
			title: movie.title,
			poster_path: movie.poster_path
		};
		const newList = [...$Data.watchlist, toAdd];
		const newData = {
			...$Data,
			watchlist: newList
		};
		$Data = newData;
		watchlistButtonText = 'Remove from watchlist';
	}

	function addToFavorite() {
		const toAdd = {
			id: movie.id,
			title: movie.title,
			poster_path: movie.poster_path
		};
		const newList = [...$Data.favorites, toAdd];
		const newData = {
			...$Data,
			favorites: newList
		};
		$Data = newData;
		favoriteButtonText = 'Remove from favorite';
	}
	function removeFromWatchList() {
		const newList = $Data.watchlist.filter((item) => item.id !== movie.id);
		const newData = {
			...$Data,
			watchlist: newList
		};
		$Data = newData;
		watchlistButtonText = 'Add to watchlist';
	}
	function removeFromFavorites() {
		const newList = $Data.favorites.filter((item) => item.id !== movie.id);
		const newData = {
			...$Data,
			favorites: newList
		};
		$Data = newData;
		favoriteButtonText = 'Add to favorites';
	}

	function watchlistPressed() {
		//check if is in watchlist
		if ($Data?.watchlist?.find((item) => item.id === movie.id)) {
			removeFromWatchList();
		} else {
			addToWatchList();
		}
	}

	function favoritePressed() {
		//check if is in favorites
		if ($Data.favorites.find((item) => item.id === movie.id)) {
			removeFromFavorites();
		} else {
			addToFavorite();
		}
	}
	onMount(() => {
		if ($Data?.watchlist?.find((item) => item.id === movie.id)) {
			watchlistButtonText = 'Remove from watchlist';
		}
		if ($Data.favorites.find((item) => item.id === movie.id)) {
			favoriteButtonText = 'Remove from favorite';
		}
	});
	function getSession() {
		return {
			API_KEY: import.meta.env.VITE_API_KEY
		};
	}
	// @ts-ignore
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${getSession().API_KEY}`
		);
		// const res = await fetch(`./dummy_data.json`);
		const movie = await res.json();
		if (res.ok) {
			return {
				props: {
					movie
				}
			};
		} else {
			throw new Error('Something went wrong');
		}
	}
</script>

<Layout>
	<Container>
		<div class="movie">
			<div class="banner">
				<img
					src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path}
					alt={`Poster of ${movie.title}`}
				/>
			</div>
			<div class="info">
				<div class="poster-container">
					<div class="poster">
						<img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
					</div>
				</div>
				<div>
					<h1>{movie.title}</h1>
					<p>Duration {movie.runtime} minutes</p>
					<p>Popularity {movie.popularity.toFixed()}</p>
				</div>
			</div>
			<Button
				on:click={() => {
					watchlistPressed();
				}}>{watchlistButtonText}</Button
			>
			<Button
				type="secondary"
				on:click={() => {
					favoritePressed();
				}}>{favoriteButtonText}</Button
			>
			<div class="body">
				<p>{movie.overview}</p>
			</div>
		</div>
	</Container>
</Layout>

<style>
	p,
	h1 {
		margin: 0;
	}
	img {
		width: 100%;
	}
	.movie {
		position: relative;
	}
	.banner {
		width: 100%;
		height: 256px;
		border-radius: 1rem;
		overflow: hidden;
	}
	.banner img {
		height: 100%;
		object-fit: cover;
	}
	.info {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		gap: 2rem;
		align-items: center;
	}

	.poster {
		width: 156px;
		height: 100%;
		border-radius: 1rem;
		margin-top: -32px;
		overflow: hidden;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
	}
	.poster img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.body {
		margin-top: 2rem;
	}
	/* media q for mobile */
	@media (max-width: 425px) {
		.info {
			flex-direction: column;
			align-items: flex-start;
			margin: 0 auto;
		}
		.poster-container {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
