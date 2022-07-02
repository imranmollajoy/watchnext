<script>
	export let data = {
		title: '',
		overview: '',
		poster_path: '',
		id: ''
	};
</script>

<div class="movie-card">
	<a href={`/movie/${data.id}`} sveltekit:noscroll>
		<img src={`https://image.tmdb.org/t/p/w500/` + data.poster_path} alt="" />
	</a>
</div>

<style>
	.movie-card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fafafa;
		border-radius: 1rem;
		box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
	}

	img {
		width: 156px;
		object-fit: cover;
		transition: all 0.3s linear;
		border-radius: 0.5rem;
		overflow: hidden;
	}
	img:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
</style>
