<script>
	import { page } from '$app/stores';
	const nav = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Watchlist',
			path: '/watchlist'
		}
	];
</script>

<div class="navbar">
	<div class="flex">
		{#each nav as link}
			<a href={link.path} class:active={$page.url.pathname === link.path}>{link.title}</a>
		{/each}
	</div>
</div>

<style>
	.navbar {
		overflow: hidden;
		background-color: #333;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 3;
	}
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		max-width: 1076px;
		margin: 0 auto;
	}
	.navbar a {
		display: block;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 8px;
		text-decoration: none;
		font-size: 17px;
	}

	.navbar a:hover {
		background: #f1f1f1;
		color: black;
	}

	.navbar a.active {
		background-color: var(--clr-white);
		color: var(--clr-text);
	}
	/* mobile query */
	@media (max-width: 425px) {
		.flex {
			max-width: 100%;
		}
	}
</style>
