<script lang="ts">
	import type { ITag } from "$lib/types";

	let { tags }: { tags: ITag[] } = $props();
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<section aria-labelledby="tag-list" class="mb-[35px]">
		<h2 id="tag-list" class="hidden">Популярные теги</h2>
		<nav>
			<ul class="flex flex-row gap-2 flex-wrap">
				{#each tags as tag, i (tag.id)}
					<li>
						<a
							href={'/tag/' + tag.slug}
							class="bg-lightblue flex items-center justify-center rounded-lg px-4 py-2 text-[15px]"
							>#{tag.tag}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</section>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>
