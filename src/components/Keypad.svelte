<script lang="ts">
	let { value = $bindable(''), submit } = $props();
	let select = (n: number) => () => (value += n);
</script>

<div class="w-72 grid grid-cols-3 gap-2">
	<button onclick={select(1)}>1</button>
	<button onclick={select(2)}>2</button>
	<button onclick={select(3)}>3</button>
	<button onclick={select(4)}>4</button>
	<button onclick={select(5)}>5</button>
	<button onclick={select(6)}>6</button>
	<button onclick={select(7)}>7</button>
	<button onclick={select(8)}>8</button>
	<button onclick={select(9)}>9</button>
	<button
		onclick={() => (value = '')}
		disabled={value === ''}
		class="disabled:bg-zinc-500 disabled:text-zinc-100">Clear</button
	>
	<button onclick={select(0)}>0</button>
	<button
		disabled={value === ''}
		class="disabled:bg-zinc-500 disabled:text-zinc-100"
		onclick={submit}>Submit</button
	>
</div>

<style>
	button {
		@apply bg-sky-700 text-white py-2 rounded-lg h-14 select-none hover:scale-105 duration-200 active:scale-90 disabled:scale-100;
	}
</style>
