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
		<h2>
			{title}
		</h2>
		<CardContainer>
			{#each data as data, i}
				<MovieCard {data} />
			{/each}
		</CardContainer>
	</Container>
</div>

<style>
	div {
		margin-bottom: 8rem;
	}
</style>
