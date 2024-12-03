<script lang="ts">
	async function getInfo() {
		const data = await fetch('/api', { method: 'post', body: '{"x":true}' });
		console.log(data);
		console.log(await data.json());
	}
</script>

<button onclick={getInfo}>Get Info</button>
