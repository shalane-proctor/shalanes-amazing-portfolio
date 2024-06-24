<script>
	import { writable } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import leftQuote from '$lib/images/custom-quote-left.svg';
	import rightQuote from '$lib/images/custom-quote-right.svg';
	import recommendations from '$lib/test-data/recommendations.json';
	import Modal from '$lib/Modal.svelte';

	// Index store to keep track of the current item
	const currentIndex = writable(0);
	$: currentRecommendation = {
  title: recommendations[$currentIndex].name,
  description: recommendations[$currentIndex].quote,
};

	// State to control modal visibility
	let isModalOpen = false;

	// Interval timing
	const displayTime = 10000;
	const transitionTime = 3000;

	// Timer ID
	let displayInterval;

	function cycleNext() {
		currentIndex.update(index => (index + 1) % recommendations.length);
	}

	function startTimer() {
		displayInterval = setInterval(cycleNext, displayTime + transitionTime * 2);
	}

	function stopTimer() {
		clearInterval(displayInterval);
	}

	startTimer();

	onDestroy(() => {
		stopTimer();
	});

	function openModal() {
		stopTimer();
		isModalOpen = true;
	}

	function closeModal() {
		startTimer();
	}
</script>

<svelte:head>
	<title>Recommendations</title>
	<meta name="recommendations" content="Recommendations" />
</svelte:head>
<div class="container">
	<div class="title">
		<h1>Recommendations</h1>
		<h2>Here are some recommendations from my colleagues.</h2>
	</div>
	<div class="wrapper">
		<div class="background">
		{#each recommendations as recommendation, index (index)}
			{#if $currentIndex === index}
				<div class="card-container box" transition:fade={{ duration: transitionTime }}>
					<div class="content">
						<div>
							<h4 style="margin: 0;">{recommendation.name.split(' ')[0]}</h4>
							<h5>{recommendation.company}</h5>
						</div>
					</div>
					<div class="quotes">
						<img class="quote-icon left" src={leftQuote} alt="left quotation">
						<p>{recommendation.quote}</p>
						<img class="quote-icon right" src={rightQuote} alt="right quotation">
					</div>
					<button on:click={openModal}>See Full Review</button>
				</div>
			{/if}
		{/each}
		</div>
	</div>
</div>


<Modal bind:isOpen={isModalOpen} onClose={closeModal} {...currentRecommendation}/>

<style>
		* {
				font-family: var(--font-main);
		}
		.container{
				margin-bottom: 100px;
		}
		.card-container {
				display: flex;
				cursor: default;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
		}
    .title {
        text-align: center;
        margin: 40px 0;
				width: 100%;
				padding-left: 5px;
    }
		.quote-icon{
				color: white;
				width: 10px;
		}
		.left{
				position: relative;
		}
		.quotes{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;
		}
		.content {
				display: flex;
		}
    .wrapper {
				position: relative;
				width: 100%;
				height: 100%;
    }
    .box {
        display: flex;
        margin: 0;
        align-items: flex-end;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-content: space-between;
    }
		h1, h2, h4{
			color: var(--color-near-white);
		}
		h1{
        font-size: 1.5em;
		}
		h2{
			font-size: 1.35em;
		}
		h4{
			font-size: 1.25em;
		}
		h5{
			color: var(--color-text-3);
			font-size: 1em;
		}
    p{
        font-size: 1em;
				color: var(--color-near-white);
        width: 90%;
        padding-left: 5px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        word-wrap:break-word
    }
    button{
        font-size: 1em;
        background: none;
        color: #d1c3ff;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        cursor: help;
    }
    button:hover{
        background: #d1c3ff;
        color: #000;
    }
    @media (min-width: 768px) {
        h1{
            font-size: 2em;
        }
    }
</style>
