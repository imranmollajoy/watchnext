<script>
	import '../../styles/global.css';
	import Data from '../../stores/PersistantData';
	import { onMount } from 'svelte';
	import Navbar from '../Navbar.svelte';

	onMount(() => {
		if ($Data.favorites === undefined) $Data.favorites = [];
		if ($Data.watchlist === undefined) $Data.watchlist = [];
		if ($Data.watched === undefined) $Data.watched = [];
	});
</script>

<svelte:head>
	<title>Watch Next</title>
</svelte:head>
<div class="main">
	<slot />
	<div class="nav-fixer" />
	<Navbar />
</div>
