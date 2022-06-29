<script>
	import { fly, fade } from 'svelte/transition';
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
<div
	class="main"
	in:fly={{
		y: 100,
		duration: 350,
		delay: 350 + 100
	}}
	out:fade={{
		duration: 350
	}}
>
	<slot />
	<div class="nav-fixer" />
</div>
<Navbar />
