<script lang="ts">
	import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
	import type { PageData } from './$types';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { marked } from 'marked';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const { data }: { data: PageData } = $props();

	async function parseMarkdown(text: string): Promise<string> {
		const parsed = await marked.parse(text);
		return parsed;
	}

	onMount(() => {
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.textContent = JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: data.article?.seodata?.metaTitle,
			description: data.article?.seodata?.metaDescription,
			url: page.url.href
		});
		const viewportMeta = document.querySelector('meta[name="viewport"]');
		if (viewportMeta) {
			viewportMeta.insertAdjacentElement('afterend', script);
		} else {
			document.head.prepend(script);
		}
	});
</script>

<svelte:head>
	<title>{data.article?.title}</title>
	<meta name="title" content={data.article?.seodata?.metaTitle} />
	<meta name="description" content={data.article?.seodata?.metaDescription} />
	{#if data.article?.seodata?.defaultKeywords}
		<meta name="keywords" content={data.article?.seodata?.keywords} />
	{/if}
	{#if data.article?.seodata?.defaultCanonicalURL}
		<link rel="canonical" href={data.article?.seodata?.defaultCanonicalURL} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={data.article?.seodata?.ogTitle} />
	<meta property="og:description" content={data.article?.seodata?.ogDescription} />
	{#if data.article?.seodata?.ogImage}
		<meta property="og:image" content={data.article?.seodata?.ogImage.url} />
	{/if}

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={page.url.href} />
	<meta property="twitter:title" content={data.article?.seodata?.ogTitle} />
	<meta property="twitter:description" content={data.article?.seodata?.ogDescription} />
	{#if data.article?.seodata?.ogImage}
		<meta property="twitter:image" content={data.article?.seodata?.ogImage} />
	{/if}
</svelte:head>

<article class="mb-20 lg:px-0 px-3">
	<section id="article-content" class="mb-[54px]">
		<div class="hero-image mb-5 lg:mb-[47px] sm:h-[319px] h-auto overflow-hidden rounded-[10px]">
			<img
				src={PUBLIC_BASE_URL + data.article?.cover?.url}
				alt={data.article?.cover?.alternativeText}
				class="w-full object-cover"
			/>
		</div>
		<h1 class="text-title lg:mb-[37px] mb-4 font-medium leading-[1.10]">
			{data.article?.title}
		</h1>
		<div class="mb-[37px] text-lg text-black ">
			{#await parseMarkdown(data?.article?.content)}
				Загрузка...
			{:then value}
				<div class="space-y-4">
					{@html value}
				</div>
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
			<div class="grid lg:grid-cols-3 gap-6">
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
