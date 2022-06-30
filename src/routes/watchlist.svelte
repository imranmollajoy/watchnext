<script>
	// @ts-nocheck

	import Tab from '../components/ui/Tab.svelte';
	import Favorites from '../components/sections/Favorites.svelte';
	import Watched from '../components/sections/Watched.svelte';
	import Watchlist from '../components/sections/Watchlist.svelte';
	import Icon from '../components/ui/Icon.svelte';

	let items = ['Watchlist', 'Watched', 'Favorites'];
	let selected = items[0];
	function tabChanged(e) {
		selected = e.detail;
	}
</script>

<Tab {items} {selected} on:tabChanged={tabChanged} />
{#if selected === 'Watchlist'}
	<Watchlist />
{:else if selected === 'Watched'}
	<Watched />
{:else if selected === 'Favorites'}
	<Favorites />
{/if}
