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
	<header class="br-b-2 mb-[35px] h-[100px] border-b border-b-[#BEBEBE]">
		<div class="mx-auto flex h-full max-w-[960px] items-center justify-between">
			<HeaderLogo
				url="/"
				src={'/logo_aidi.png'}
				alt={altLogo}
				title={titleLogo}
				width="120"
				height="auto"
			/>
			<HeaderMenu links={menuLinks} />
		</div>
	</header>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>
