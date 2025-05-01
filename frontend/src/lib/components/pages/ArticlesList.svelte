<script lang="ts">
	import Header from '../ui/Header.svelte';
	import Breadcrumbs from '../ui/Breadcrumbs.svelte';
	import TagList from '../ui/TagList.svelte';
	import type { IMenuItem } from '$lib/types';
	import ArticleCard from '../ui/ArticleCard.svelte';

	const menuLinks: IMenuItem[] = [
		{ index: 1, url: '/', name: 'Статьи' },
		{ index: 2, url: '/', name: 'Кейсы' }
	];
</script>

<Header {menuLinks} urlLogo="" altLogo="" srcLogo="" titleLogo=""></Header>
<main>
	<Breadcrumbs
		crumbs={[
			{ name: 'Крошка 1', url: '/' },
			{ name: 'Крошка 2', url: '/' }
		]}
	/>
	<TagList tags={['тег1', 'тег2', 'тег3']} />
	{#each blogArticles as article}
		<ArticleCard cover="" title="" preview="" date="" duration="" url="" />
	{/each}
</main>
