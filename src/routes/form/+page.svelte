<script lang="ts">
	import { enhance } from '$app/forms';
	import { error } from '@sveltejs/kit';
	import { flip } from 'svelte/animate';
	import { fade, slide } from 'svelte/transition';
	let creating = $state(false);
	let { data, form } = $props();
</script>

<div class="flex flex-col justify-center items-center mx-4 gap-2">
	<form
		method="post"
		action="?/create"
		use:enhance={() => {
			creating = true;
			return async ({ update }) => {
				await update();
				creating = false;
			};
		}}
	>
		{#if form?.error}
			<p class="text-red-500">Error happened</p>
			<p class="text-sm text-yellow-700">{form.description} - {form.error}</p>
			<!-- {:else}
			<div>{form?.message}</div> -->
		{/if}
		<input class="p-1 border rounded" name="task" required class:animate-spin={creating} />
	</form>
	<div class="space-y-2">
		{#each data.items as item (item.id)}
			<form
				method="POST"
				action="?/delete"
				use:enhance
				class="space-y-2"
				transition:fade
				animate:flip
			>
				<div class="flex justify-between w-56 bg-zinc-100 rounded p-2">
					<p>{item.content}</p>
					<input value={item.id} type="hidden" name="id" />
					<button class="text-red-400">Del</button>
				</div>
			</form>
		{/each}
	</div>
</div>
