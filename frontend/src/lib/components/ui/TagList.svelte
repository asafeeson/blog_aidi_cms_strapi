<script lang="ts">
	let { tags }: { tags: string[] } = $props();
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<section aria-labelledby="tag-list">
		<h2 id="tag-list" class="hidden">Популярные теги</h2>
		<nav>
			<ul class="flex">
				<ol>
					{#each tags as tag}
						<a
							href={'/?search=' + tag}
							class="bg-amber-200 flex items-center justify-center rounded-lg px-4 py-2"
							>#{tag}</a
						>
					{/each}
				</ol>
			</ul>
		</nav>
	</section>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>
