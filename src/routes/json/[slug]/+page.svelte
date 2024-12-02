<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const {
		json: { userId, id, title }
	} = data;
</script>

<div>
	<h1>Post id:{id}</h1>
	<p>{title}</p>
</div>
