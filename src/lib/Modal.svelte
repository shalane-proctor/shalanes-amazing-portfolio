<script>
	export let title = ''
	export let description = ''
	export let isOpen = false;
	export let onClose = () => {};

	const toggle = () => {
		isOpen = !isOpen;
		if (!isOpen) {
			onClose();
		}
	};

</script>

{#if isOpen}
	<div class="modal-backdrop" on:click={toggle} on:keydown={toggle} role="button" tabindex="-1"></div>
	<div class="modal">
		<p>{title}</p>
		<p>{description}</p>
		<button class="close" on:click={toggle} aria-label="Close modal">Close</button>
	</div>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    .modal {
        display: flex;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--color-bg-1);
        padding: 2rem;
        z-index: 2000;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
				height: auto;
				min-height: 200px;
        max-height: 100%;
        flex-direction: column;
				color: var(--color-near-white);
    }
    .close {
        font-size: 1em;
        background: none;
        color: #d1c3ff;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }
    .close:hover{
        background: #d1c3ff;
        color: #000;
    }
</style>
