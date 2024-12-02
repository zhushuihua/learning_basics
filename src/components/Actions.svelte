<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import trapFocus from './trapFocus.svelte';
	function fadex(node: Element, { delay = 0, duration = 400 }) {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
			css: (t: number) => {
				return `opacity: ${t * o}`;
			}
		};
	}
	import { flip } from 'svelte/animate';
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selectedColor = $state(colors[0]);
	let showMenu = $state(false);
</script>

<button class="border-zinc-600 border p-2 rounded-lg" onclick={() => (showMenu = !showMenu)}
	>Menu</button
>
{#if showMenu}
	<div
		in:fly={{ x: 10, duration: 2000 }}
		out:fadex={{ delay: 2000, duration: 500 }}
		class="flex gap-2 shadow-2xl p-8 rounded-lg"
		use:trapFocus={colors.indexOf(selectedColor)}
	>
		{#each colors as color (color)}
			<button
				style:background-color={color}
				class="size-12 rounded-full shadow-xl text-transparent btn focus:border-2 focus:border-black"
				class:shadow={color == selectedColor}
				onclick={() => (selectedColor = color)}>A</button
			>
		{/each}
	</div>
{/if}
