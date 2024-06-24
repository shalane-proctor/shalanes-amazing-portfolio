<script>
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';

	export let items = [];
</script>

<div class="accordion-container">
	<Accordion>
		{#each items as item}
			<Panel style="background-color: var(--nav-color)">
				<Header style="font-family: var(--font-main); color: var(--color-near-white); font-weight: 700">{item.label}</Header>
				<Content style="font-family: var(--font-main); color: var(--color-near-white)">{item.body}</Content>
				{#if item.link}
					<Content style="font-family: var(--font-main); color: var(--color-near-white)"><a href={item.link}>{item.linkLabel}</a></Content>
				{/if}
			</Panel>
		{/each}
	</Accordion>
</div>

<style>
    .accordion-container {
        margin: 0 auto;
        width: 100%;
				@media (min-width: 786px) {
					max-width: 90%;
				}
    }
		a {
			color: var(--color-text-3);
		}
</style>