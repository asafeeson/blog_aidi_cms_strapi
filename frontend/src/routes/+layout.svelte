<script lang="ts">
	import Footer from '$lib/components/ui/Footer.svelte';
	import Header from '$lib/components/ui/Header.svelte';
	import type { IMenuItem } from '$lib/types';
	import '../app.css';

	let { children } = $props();
	const menuLinks: IMenuItem[] = [
		{ index: 1, url: '/', name: 'Статьи' },
		{ index: 2, url: '/second', name: 'Кейсы' }
	];
</script>

<Header {menuLinks} urlLogo="" altLogo="" srcLogo="" titleLogo=""></Header>
<div class="mx-auto max-w-[960px]">
	{@render children()}
</div>
<Footer></Footer>
