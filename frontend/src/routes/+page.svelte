<script lang="ts">
	import { page } from '$app/state';
	import ArticlesList from '$lib/components/pages/ArticlesList.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	const { data }: { data: PageData } = $props();

	onMount(() => {
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.textContent = JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: data.globalSeoData?.siteTitle,
			description: data.globalSeoData?.metaDescription,
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
	<title>{data.globalSeoData.siteTitle}</title>
	<meta name="title" content={data.globalSeoData.siteTitle} />
	<meta name="description" content={data.globalSeoData.siteDescription} />
	{#if data.globalSeoData.defaultKeywords}
		<meta name="keywords" content={data.globalSeoData.defaultKeywords} />
	{/if}
	{#if data.globalSeoData.defaultCanonicalURL}
		<link rel="canonical" href={data.globalSeoData.defaultCanonicalURL} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={data.globalSeoData.ogTitle} />
	<meta property="og:description" content={data.globalSeoData.ogDescription} />
	{#if data.globalSeoData.ogImage}
		<meta property="og:image" content={data.globalSeoData.ogImage} />
	{/if}

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={page.url.href} />
	<meta property="twitter:title" content={data.globalSeoData.ogTitle} />
	<meta property="twitter:description" content={data.globalSeoData.ogDescription} />
	{#if data.globalSeoData.ogImage}
		<meta property="twitter:image" content={data.globalSeoData.ogImage} />
	{/if}
</svelte:head>

<ArticlesList blogArticles={data.articles} tags={data.tags}></ArticlesList>
