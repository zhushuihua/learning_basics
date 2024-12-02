<script lang="ts">
	let items = ['One', 'Two', 'Three', 'Four', 'Five'];
	let { show } = $props();
</script>

<div class="border border-zinc-500 p-4 rounded-lg">
	{@render show(items)}
</div>
