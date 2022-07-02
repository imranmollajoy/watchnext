<script>
	import MovieCard from '../MovieCard.svelte';
	import CardContainer from '../ui/CardContainer.svelte';
	import Container from './Container.svelte';
	export /**
	 * @type {any[]}
	 */
	let data = [];

	export let title = 'Put tile';
</script>

<div>
	<Container>
		<h3>
			{title}
		</h3>
		<CardContainer>
			{#each data as data, i}
				<MovieCard {data} />
			{/each}
		</CardContainer>
	</Container>
</div>

<style>
	div {
		margin-bottom: 1rem;
	}
</style>
