<script lang="ts">
	import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
	import type { PageData } from './$types';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { marked } from 'marked';

	const { data }: { data: PageData } = $props();
	console.log(data.article.cover);

	async function parseMarkdown(text: string): Promise<string> {
		const parsed = await marked.parse(text);
		return parsed;
	}
</script>

<article class="mb-20">
	<section id="article-content" class="mb-[54px]">
		<div class="hero-image mb-[47px] h-[319px] overflow-hidden rounded-[10px]">
			<img
				src={PUBLIC_BASE_URL + data.article.cover?.url}
				alt={data.article.cover?.alternativeText}
				class="w-full object-cover"
			/>
		</div>
		<h1 class="text-title mb-[37px] text-[40px] font-medium leading-[1.10]">
			{data.article.title}
		</h1>
		<div class="mb-[37px] text-lg text-black">
			{#await parseMarkdown(data?.article?.content)}
				Загрузка...
			{:then value}
				{@html value}
			{:catch error}
				<span>Ой-ой, случилась непредвиденная ошибка...</span>
			{/await}
		</div>
	</section>
	<footer id="related-articles">
		<h2 class="text-title mb-[37px] text-[35px] font-medium leading-[1.10]">
			Читать другие статьи
		</h2>
		<svelte:boundary onerror={(e) => console.log(e)}>
			<div class="grid grid-cols-3">
				{#each data.previewArticles as article, i (article.slug)}
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
	</footer>
</article>
