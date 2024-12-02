<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	const { data } = $props<{ data: PageData }>();
	console.log('last data', data);
	const {
		data: { slug, title, content }
	} = data;
	console.log($page);
</script>

<div>
	<h1>{title}</h1>
	<h2>{@html content}</h2>
</div>
