<script>
	// @ts-nocheck

	import Container from '../ui/Container.svelte';
	import Layout from '../ui/Layout.svelte';

	import Data from '../../stores/PersistantData';
	import { onMount } from 'svelte';
	import Button from '../ui/Button.svelte';
	import '../../styles/preferred-list.css';
	import Icon from '../ui/Icon.svelte';

	let favorites = [];
	onMount(() => {
		favorites = $Data.favorites;
	});

	function removeFromFavorites(movie) {
		const newList = favorites.filter((item) => item.id !== movie.id);
		const newData = {
			...$Data,
			favorites: newList
		};
		$Data = newData;
		favorites = $Data.favorites;
	}
</script>

<Layout>
	<Container>
		<div class="list">
			{#each favorites as movie (movie.id)}
				{#if movie.title !== ''}
					<div class="card">
						<div class="img-container">
							<img
								src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
								alt={`Poster of ${movie.title}`}
							/>
						</div>
						<div class="details">
							<a href={`/movie/${movie.id}`}><h5>{movie.title}</h5></a>
							<Button
								icon="x"
								type="secondary"
								on:click={() => {
									removeFromFavorites(movie);
								}}>Remove</Button
							>
						</div>
					</div>
				{/if}
			{/each}
			{#if favorites.length === 0}
				<div class="empty-list">
					<h3>You have no favorites</h3>
				</div>
			{/if}
		</div>
	</Container>
</Layout>
