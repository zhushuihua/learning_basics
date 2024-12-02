<script lang="ts">
	import type { PageData } from './$types';
	const { data } = $props<{ data: PageData }>();
	const list = data.data;
</script>

<div>
	<ul>
		{#each list as { slug, title }}
			<li><a href="blog/{slug}">{title}</a></li>
		{/each}
	</ul>
</div>
