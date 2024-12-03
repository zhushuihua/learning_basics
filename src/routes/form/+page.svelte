<script lang="ts">
	let { data } = $props();
</script>

<div class="flex flex-col justify-center items-center mx-4 gap-2">
	<form method="post" action="?/create">
		<input class="p-1 border rounded" name="task" />
	</form>
	<div class="space-y-2">
		{#each data.items as item, index}
			<form method="POST" action="?/delete">
				<div class="flex justify-between w-56 bg-zinc-100 rounded p-2">
					<p>{item.content}</p>
					<input value={index} type="hidden" name="id" />
					<button class="text-red-400">Del</button>
				</div>
			</form>
		{/each}
	</div>
</div>
