<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { IMenuItem } from '$lib/types';
	import { page } from '$app/state';

	let { links }: { links: IMenuItem[] } = $props();
	console.log(page.url.pathname);
</script>

<nav>
	<ul class="flex w-full items-center justify-end gap-[50px]">
		{#each links as link}
			<li>
				<a
					href={link.url}
					class="hover:text-primary text-15px text-black"
					class:active-link={() => page.url.pathname === link.url}
					title={link.name}
					aria-label={link.name}
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.active-link {
		color: var(--color-primary);
	}
</style>
