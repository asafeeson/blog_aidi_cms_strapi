<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MenuItem } from '$lib/types';

	let { links }: { links: MenuItem[] } = $props();
</script>

<nav class="gap-50px flex items-center justify-end">
	<ul>
		{#each links as link}
			<li>
				<a
					href={link.url}
					class="hover:text-primary text-15px text-black"
					title={link.name}
					aria-label={link.name}
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
