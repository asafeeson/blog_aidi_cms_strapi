<script lang="ts">
	import HeaderLogo from './HeaderLogo.svelte';
	import HeaderMenu from './HeaderMenu.svelte';
	import type { IMenuItem } from '$lib/types';

	interface Props {
		menuLinks: IMenuItem[];
		urlLogo: string;
		srcLogo: string;
		altLogo: string;
		titleLogo: string;
	}

	let { menuLinks, srcLogo, altLogo, titleLogo, urlLogo }: Props = $props();
</script>

<svelte:boundary onerror={(e) => console.log(e)}>
	<header class="h-100px br-b-1 flex items-center justify-between border-b-gray-300">
		<HeaderLogo
			url={urlLogo}
			src={srcLogo}
			alt={altLogo}
			title={titleLogo}
			width="120"
			height="auto"
		/>
		<HeaderMenu links={menuLinks} />
	</header>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>
