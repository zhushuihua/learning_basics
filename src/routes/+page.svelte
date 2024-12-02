<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { parse } from 'cookie';
	const { data }: { data: PageData } = $props();
</script>

<div>
	<h1>Home</h1>
	<div>Hello {data.visited ? 'Friend' : 'Stranger'}</div>
</div>
