<script lang="ts">
	import type { IImage } from '$lib/types';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	interface Props {
		cover?: IImage;
		title?: string;
		preview?: string;
		date?: string;
		duration?: string;
		url?: string;
	}
	let { cover, title, preview, date, duration, url }: Props = $props();
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<article
		class="rounded-5px flex min-w-[304px] flex-col md:justify-between space-y-4 bg-white text-[12px] font-medium"
	>
		<div class="h-[175px] w-full overflow-hidden">
			<a href={url} {title} aria-label={title}>
				<img
					src={PUBLIC_BASE_URL + cover?.url}
					alt={cover?.alternativeText}
					width={cover?.width}
					height={cover?.height}
					aria-label={cover?.alternativeText}
					class="h-full rounded-t-[5px] object-cover"
				/>
			</a>
		</div>
		<div class="space-y-4 px-6 text-left">
			<h2 class="text-title text-[23px] font-medium leading-[1.10]">{title}</h2>
			<p class="line-clamp-3 overflow-hidden leading-[1.40]">{preview}</p>
		</div>
		<footer class="flex items-center justify-between px-6">
			<time datetime={date}>{date}</time>
			<div class="flex items-center justify-center gap-[3px]">
				<img src="/icons/icon-time.png" alt="Время чтения статьи" class="aspect-square" />
				<p>{duration}</p>
			</div>
		</footer>
		<a
			href={url}
			class="bg-primary m-auto mb-[30px] flex h-14 w-64 items-center justify-center rounded-md font-bold uppercase text-white shadow-[0px_3px_0px_0px_#01BC01]"
			>читать статью</a
		>
	</article>
	{#snippet failed(error, reset)}
		<span class="text-red-500">упс! попробуйте, обновить страницу</span>
	{/snippet}
</svelte:boundary>
