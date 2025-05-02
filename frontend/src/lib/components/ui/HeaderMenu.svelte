<script lang="ts">
	import type { IMenuItem } from '$lib/types';
	import { page } from '$app/state';

	let { links }: { links: IMenuItem[] } = $props();
	console.log(links);
	function comparePathname(url: string): boolean {
		return page.url.pathname == url;
	}
</script>

<nav>
	<ul class="flex w-full items-center justify-end gap-[50px]">
		{#each links as link, i (link.id)}
			<li>
				<a
					href={link.slug}
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

<style>
	.active-link {
		color: var(--color-primary);
	}
</style>
