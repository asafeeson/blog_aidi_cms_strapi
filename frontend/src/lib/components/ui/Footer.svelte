<script lang="ts">
	let { pageData }: { pageData: any } = $props();
</script>

<footer class="w-full bg-black py-[55px] text-[15px] text-white">
	<div class="mx-auto max-w-[960px] flex flex-col flex-wrap">
		<p class="mb-[23px]">{@html pageData?.copyright}</p>
		<address class="flex flex-row flex-wrap items-end justify-between not-italic gap-2 md:gap-0">
			<p>
				{@html pageData?.lawdata}
			</p>
			<div>
				<a href="tel:{pageData?.phone}">{pageData?.phone}</a><br />
				<a href="mailto:{pageData.email}">{pageData.email}</a>
			</div>
		</address>
	</div>
</footer>

<style>
</style>
