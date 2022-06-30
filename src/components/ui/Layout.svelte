<script>
	import { fly, fade } from 'svelte/transition';
	import '../../styles/global.css';
	import Data from '../../stores/PersistantData';
	import { onMount } from 'svelte';
	import { previousPath } from '$lib/paths';
	import { page } from '$app/stores';
	import Navbar from '../Navbar.svelte';

	onMount(() => {
		if ($Data.favorites === undefined) $Data.favorites = [];
		if ($Data.watchlist === undefined) $Data.watchlist = [];
		if ($Data.watched === undefined) $Data.watched = [];
		if ($page.routeId !== 'movie/[id]') $previousPath = $page.url.pathname;
		console.log($previousPath);
	});
</script>

<svelte:head>
	<title>Watch Next</title>
</svelte:head>
<div
	class="main"
	in:fly={{
		x: -100,
		duration: 350,
		delay: 120 + 100
	}}
	out:fade={{
		duration: 120
	}}
>
	<slot />
	<div class="nav-fixer" />
</div>
<Navbar />
