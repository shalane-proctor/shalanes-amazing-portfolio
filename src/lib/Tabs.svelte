<script>
	import { createEventDispatcher } from 'svelte';
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import tabsData from '$lib/test-data/tabs.json';

	let tabs = [...tabsData];
	let active = tabs[0];
	const dispatch = createEventDispatcher();

	$: dispatch('tabChange', active.subtype);
</script>

<div>
	<TabBar {tabs} let:tab bind:active >
		<Tab {tab}>
			<Icon class="material-icons">{tab.icon}</Icon>
			<Label style="font-family: var(--font-main);">{tab.label}</Label>
		</Tab>
	</TabBar>
</div>
