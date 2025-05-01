<script lang="ts">
	import ArticlesList from '$lib/components/pages/ArticlesList.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<ArticlesList></ArticlesList>
