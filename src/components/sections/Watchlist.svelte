<script>
	// @ts-nocheck

	import Container from '../ui/Container.svelte';
	import Layout from '../ui/Layout.svelte';

	import Data from '../../stores/PersistantData';
	import { onMount } from 'svelte';
	import Button from '../ui/Button.svelte';
	import '../../styles/preferred-list.css';

	let watchlist = [];
	onMount(() => {
		watchlist = $Data.watchlist;
	});

	function removeFromWatchlist(movie) {
		const newList = watchlist.filter((item) => item.id !== movie.id);
		const newData = {
			...$Data,
			watchlist: newList
		};
		$Data = newData;
		watchlist = $Data.watchlist;
	}
	function addToWatchedList(movie) {
		const toAdd = {
			id: movie.id,
			title: movie.title,
			poster_path: movie.poster_path
		};
		const newList = [...$Data.watched, toAdd];
		const newData = {
			...$Data,
			watched: newList
		};
		$Data = newData;
		removeFromWatchlist(movie);
	}
</script>

<Layout>
	<Container>
		<div class="list">
			{#each watchlist as movie (movie.id)}
				{#if movie.title !== ''}
					<div class="card">
						<div class="img-container">
							<img
								src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
								alt={`Poster of ${movie.title}`}
							/>
						</div>
						<div class="details">
							<h3>{movie.title}</h3>
							<Button
								on:click={() => {
									addToWatchedList(movie);
								}}>Seen</Button
							>
							<Button
								type="secondary"
								on:click={() => {
									removeFromWatchlist(movie);
								}}>Remove from watchlist</Button
							>
						</div>
					</div>
				{/if}
			{/each}
			{#if watchlist.length === 0}
				<div class="empty-list">
					<h3>You have not added anything to watch</h3>
				</div>
			{/if}
		</div>
	</Container>
</Layout>
