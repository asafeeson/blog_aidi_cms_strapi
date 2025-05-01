<script lang="ts">
	import type { IImage } from '$lib/types';

	interface Props {
		cover: IImage;
		title: string;
		preview: string;
		date: string;
		duration: string;
		url: string;
	}
	let { cover, title, preview, date, duration, url }: Props = $props();
</script>

<article class="rounded-5px space-y-4 px-6">
	<a href={url} {title} aria-label={title}>
		<img
			src={cover.src}
			alt={cover.alt}
			width={cover.width}
			height={cover.height}
			aria-label={cover.alt}
			class="rounded-t-5px"
		/>
	</a>
	<div class="space-y-4 text-left">
		<h2>{title}</h2>
		<p>{preview}</p>
	</div>
	<footer class="flex items-center justify-between">
		<time datetime={date}>{date}</time>
		<div>
			<img src="/static/icons/icon-time.png" alt="Время чтения статьи" />
			<span>{duration}</span>
		</div>
	</footer>
	<a href="/" class="bg-primary w-256px h-56px flex items-center justify-center uppercase"
		>читать статью</a
	>
</article>

<style>
</style>
