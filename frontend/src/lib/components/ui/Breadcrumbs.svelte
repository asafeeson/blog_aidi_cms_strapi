<script lang="ts">
	import type { ICrumbs } from '$lib/types';
	import type { Snippet } from 'svelte';

	let { crumbs }: { crumbs: ICrumbs[] } = $props();
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<nav>
		<ol class="flex items-center">
			{#each crumbs as crumb, i (crumb.url)}
				<li><a href={crumb.url} title={crumb.name}>{crumb.name}</a></li>
				{#if i < crumbs.length - 1}
					<span class="mx-2 text-gray-500">/</span>
				{/if}
			{/each}
		</ol>
	</nav>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>
