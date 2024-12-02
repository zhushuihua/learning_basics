<div>
	<h1>Json Page</h1>
	<nav>
		<ul class="grid grid-cols-3 gap-2">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as index}
				<li class="bg-sky-200 h-8 flex justify-center items-center">
					<a href="/json/{index}">{index}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
