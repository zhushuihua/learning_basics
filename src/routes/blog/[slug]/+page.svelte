<script lang="ts">
	import type { PageData } from '../$types';
	const { data } = $props<{ data: PageData }>();
	const {
		data: { slug, title, content }
	} = data;
</script>

<div>
	<h1>{title}</h1>
	<h2>{@html content}</h2>
</div>
