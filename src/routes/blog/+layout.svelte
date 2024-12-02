<script lang="ts">
	import type { PageData } from '../$types';
	let { data, children } = $props<{ data: PageData }>();
</script>

<p>Total posts: {data.data.length}</p>
{@render children()}
