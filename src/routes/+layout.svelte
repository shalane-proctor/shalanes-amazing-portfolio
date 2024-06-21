<script>
	import Header from '$lib/Header.svelte';
	import Marquee from '$lib/Marquee.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<Marquee style={"color: var(--color-text-2); background: black; padding-top: 5px"} pauseOnHover gap={"50px"}>
		<h6>✨</h6>
		<h6>Looking for work</h6>
		<h6>✨</h6>
		<h6>💻</h6>
		<h6>✨</h6>
		<h6>Looking for work</h6>
		<h6>✨</h6>
		<h6>💻</h6>
		<h6>✨</h6>
		<h6>Looking for work</h6>
		<h6>✨</h6>
		<h6>💻</h6>
		<h6>✨</h6>
		<h6>Looking for work</h6>
		<h6>✨</h6>
		<h6>💻</h6>
	</Marquee>
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Built and designed by Shalane Proctor</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		max-width: 90%;
		margin: 50px auto 100px auto;
		box-sizing: border-box;
			@media (max-width: 786px) {
        margin: 10px auto 100px auto;
			}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color: var(--color-text);
		font-family: var(--font-main);
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
