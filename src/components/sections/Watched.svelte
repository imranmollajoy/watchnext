<script>
	// @ts-nocheck

	import Container from '../ui/Container.svelte';
	import Layout from '../ui/Layout.svelte';

	import Data from '../../stores/PersistantData';
	import { onMount } from 'svelte';
	import Button from '../ui/Button.svelte';
	import '../../styles/preferred-list.css';
	let watched = [];
	onMount(() => {
		watched = $Data.watched;
	});

	function removeFromWatched(movie) {
		const newList = watched.filter((item) => item.id !== movie.id);
		const newData = {
			...$Data,
			watched: newList
		};
		$Data = newData;
		watched = $Data.watched;
	}
</script>

<Layout>
	<Container>
		<div class="list">
			{#each watched as movie (movie.id)}
				{#if movie.title !== ''}
					<div class="card">
						<div class="img-container">
							<img
								src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
								alt={`Poster of ${movie.title}`}
							/>
						</div>
						<div class="details">
							<a href={`/movie/${movie.id}`}><h4>{movie.title}</h4></a>

							<Button
								icon="x"
								type="secondary"
								on:click={() => {
									removeFromWatched(movie);
								}}>Remove</Button
							>
						</div>
					</div>
				{/if}
			{/each}
			{#if watched.length === 0}
				<div class="empty-list">
					<h3>You have not watched anything yet.</h3>
				</div>
			{/if}
		</div>
	</Container>
</Layout>

<style>
</style>
