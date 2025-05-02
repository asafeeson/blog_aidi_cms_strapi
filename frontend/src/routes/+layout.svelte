<script lang="ts">
	import Footer from '$lib/components/ui/Footer.svelte';
	import Header from '$lib/components/ui/Header.svelte';
	import type { IMenuItem } from '$lib/types';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import type { LayoutServerData } from './$types';
	import { page } from '$app/state';

	let { children, data }: { children: Snippet; data: LayoutServerData } = $props();
</script>

<Header menuLinks={data.globalPageData.menu} urlLogo="" altLogo="" srcLogo="" titleLogo=""></Header>
<div class="mx-auto max-w-[960px]">
	{@render children()}
</div>
<Footer pageData={data.globalPageData}></Footer>
