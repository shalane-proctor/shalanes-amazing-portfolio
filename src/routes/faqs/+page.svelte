<script>
 import Accordion from '$lib/Accordian.svelte';
 import faqsData from '$lib/test-data/faqs.json';

 let faqs = faqsData;
</script>

<svelte:head>
 <title>About</title>
 <meta name="faqs" content="FAQS & questions" />
</svelte:head>

<h1>FAQS & Questions</h1>
<Accordion bind:items={faqs}/>

<style>
 h1 {
     font-family: var(--font-main);
     color: var(--color-near-white);
     text-align: center;
     margin-bottom: 30px;
 }
</style>
