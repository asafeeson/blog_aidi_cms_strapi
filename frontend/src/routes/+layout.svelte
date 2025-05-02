<script lang="ts">
	import Footer from '$lib/components/ui/Footer.svelte';
	import Header from '$lib/components/ui/Header.svelte';
	import type { IMenuItem } from '$lib/types';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import type { LayoutServerData } from './$types';
	import { page } from '$app/state';

	let { children, data }: { children: Snippet; data: LayoutServerData } = $props();
	const menuLinks: IMenuItem[] = [
		{ index: 1, url: '/', name: 'Статьи' },
		{ index: 2, url: '/second', name: 'Кейсы' }
	];
</script>

<svelte:head>
	<title>{data.globalSeoData.siteTitle}</title>
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

<Header {menuLinks} urlLogo="" altLogo="" srcLogo="" titleLogo=""></Header>
<div class="mx-auto max-w-[960px]">
	{@render children()}
</div>
<Footer></Footer>
