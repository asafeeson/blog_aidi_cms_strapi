<script lang="ts">
	interface Props {
		url: string;
		src: string;
		alt?: string;
		title?: string;
		width?: string;
		height?: string;
	}
	let { url, src, alt, title, width, height }: Props = $props();
</script>

<a href={url} {title} aria-label={title}>
	<img {src} {alt} {title} {width} {height} decoding="auto" />
</a>
