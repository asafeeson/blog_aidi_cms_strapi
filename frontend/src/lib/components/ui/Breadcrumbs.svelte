<script lang="ts">
	import { page } from '$app/state';
	import type { ICrumbs } from '$lib/types';

	let { crumbs }: { crumbs: ICrumbs[] } = $props();
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<nav class="mb-[22px]">
		<ol class="flex items-center text-[15px] text-[#7B7B7B]">
			{#each crumbs as crumb, i (crumb.url)}
				<li>
					<a
						href={crumb.url}
						title={crumb.name}
						class:active-link={() => page.url.pathname == crumb.url}>{crumb.name}</a
					>
				</li>
				{#if i < crumbs.length - 1}
					<span class="mx-2">/</span>
				{/if}
			{/each}
		</ol>
	</nav>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>

<style>
	.active-link {
		color: black;
	}
</style>
