<script>
	import { navigating, page } from '$app/stores';
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-auto mt-4 container text-zinc-500 font-semibold space-y-4 duration-1000">
	<nav>
		<div class="flex gap-8">
			<ul class="flex gap-2 text-xl">
				<li><a href="/" class:text-zinc-800={$page.url.pathname === '/'}>Home</a></li>
				<li><a href="/about" class:text-zinc-800={$page.url.pathname === '/about'}>About</a></li>
				<li><a href="/json" class:text-zinc-800={$page.url.pathname === '/json'}>Json</a></li>
				<li>
					<a href="/contact" class:text-zinc-800={$page.url.pathname === '/contact'}>Contact</a>
				</li>
				<li>
					<a href="/blog" class:text-zinc-800={$page.url.pathname === '/blog'}>Blogs</a>
				</li>
				<li>
					<a href="/form" class:text-zinc-800={$page.url.pathname === '/form'}>Form</a>
				</li>
			</ul>
			{#if $navigating}
				<p>Navigating to {$navigating.to?.url.pathname}</p>
			{/if}
		</div>
	</nav>
	{@render children()}
</div>

<style>
	li a {
		@apply duration-1000 transition-all;
	}
</style>
