<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { parse } from 'cookie';
	import { goto } from '$app/navigation';
	import { updated } from '$app/stores';
	const { data }: { data: PageData } = $props();
	function moveto() {
		goto('/about');
	}
	function update() {
		location.reload();
	}
</script>

<div>
	<h1>Home Page</h1>
	<div>Hello {data.visited ? 'Friend' : 'Stranger'}</div>
	<button onclick={moveto}>Go to About</button>
	{#if $updated}
		<p>New Version is detected</p>
		<button onclick={update}>Update</button>
	{/if}
</div>
