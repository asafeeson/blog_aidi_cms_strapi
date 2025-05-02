<script lang="ts">
	import Breadcrumbs from '../ui/Breadcrumbs.svelte';
	import TagList from '../ui/TagList.svelte';
	import type { IArticleCard, IMenuItem } from '$lib/types';
	import ArticleCard from '../ui/ArticleCard.svelte';

	interface Props {
		blogArticles: IArticleCard[];
		tags: any[];
	}

	let { blogArticles, tags }: Props = $props();
</script>

<main class="mb-20">
	<Breadcrumbs
		crumbs={[
			{ name: 'Блог', url: '/' },
			{ name: 'Все статьи', url: '' }
		]}
	/>
	<TagList {tags} />
	<svelte:boundary onerror={(e) => console.log(e)}>
		<div class="grid grid-cols-3">
			{#each blogArticles as article, i (article.slug)}
				<ArticleCard
					cover={article.cover}
					title={article.title}
					preview={article.preview}
					date={article.publish_date}
					duration={article.duration}
					url={'/article/' + article.slug}
				/>
			{/each}
		</div>
		{#snippet failed(error, reset)}
			<span class="text-red-500">упс! попробуйте, обновить страницу</span>
		{/snippet}
	</svelte:boundary>
</main>
