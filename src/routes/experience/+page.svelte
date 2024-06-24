<script>
	import { onMount } from 'svelte';
	import experience from '$lib/test-data/experience.json';
	import Tabs from '$lib/Tabs.svelte';

	let filteredExperience = [];

	onMount(() => {
		filteredExperience = experience;
	});

	function handleTabChange(event) {
		const type = event.detail;
		filteredExperience = experience.filter(item => item.type === type);
	}
</script>

<h1 class="header">Experience & Education</h1>

<Tabs on:tabChange={handleTabChange}></Tabs>

<div class="custom-container">
	{#each filteredExperience as item}
		<div class="window">
			<div class="faux-buttons">
				<div class="faux-button" style="background-color: purple;"></div>
				<div class="faux-button" style="background-color: dodgerblue;"></div>
				<div class="faux-button" style="background-color: rebeccapurple;"></div>
		</div>
			<div id="terminal-container" >
				<h1>{item.company}</h1>
				<div class="title">{item.title} <div class="date">{item.datetime}</div></div>
				<p>{item.description}</p>
				<ul>
					{#each item.bullet_points as point}
					<li>{point}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>

<style>
	.header {
		font-family: var(--font-main);
		margin-bottom: 50px;
	}
	.custom-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
	}
	.window {
      position: relative;
      display: block;
      width: 90vw;
      background: linear-gradient(45deg, #202020, #1d0041);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      border: #676778 1px solid;
			margin: 20px auto;
      border-radius: 5px;
	}
	.faux-buttons {
			display: flex;
			background-color: #676778;
			height: 2rem;
      align-items: center;
	}
	.faux-button {
			width: 15px;
			height: 15px;
			border-radius: 50%;
			margin: 5px;
	}

  #terminal-container {
        color: var(--color-text-2);
        font-family: 'Courier New', Courier, monospace;
        padding: 40px;
    }

		li {
			font-size: 1em;
			padding: 10px 0;
		}
		p{
			font-size: 1.25em;
			padding: 20px 0;
		}
		.title{
				font-size: 1.5em;
				text-align: center;
		}
		.date {
				font-size: 1em !important;
				text-align: center;
		}

</style>
