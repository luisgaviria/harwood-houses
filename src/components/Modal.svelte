<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<!-- Close button with SVG icon -->
		<button class="close-button" on:click={() => dialog.close()} aria-label="Close modal">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</button>
	</div>
</dialog>

<style>
    dialog {
        position: fixed;
        max-width: 90em;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
        position: fixed; /* Ensure the backdrop covers the entire screen */
    }
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Style for close button */
	.close-button {
		position: absolute;
		top: 0.5em;
		right: 0.5em;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.2em;
		width: 2em;
		height: 2em;
	}

	.close-button svg {
		width: 100%;
		height: 100%;
		stroke: #333;
	}

	.close-button:hover svg {
		stroke: white;
	}

	button {
		display: block;
	}
</style>