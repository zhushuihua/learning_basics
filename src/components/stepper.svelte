<script lang="ts">
    const {increase, decrease} = $props<{increase:VoidFunction, decrease:VoidFunction}>()
</script>
<div class='flex justify-center gap-4'>
    <button class="bg-blue-700 text-white px-3 py-1 rounded" onclick={increase}>+1</button>
    <button class="bg-blue-700 text-white px-3 py-1 rounded" onclick={decrease}>-1</button>
</div>