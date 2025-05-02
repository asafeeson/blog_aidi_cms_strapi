<script lang="ts">
	let { pageData }: { pageData: any } = $props();
</script>

<footer class="w-full bg-black py-[55px] text-[15px] text-white">
	<div class="mx-auto max-w-[960px]">
		<p class="mb-[23px]">{@html pageData?.copyright}</p>
		<address class="flex flex-wrap items-end justify-between not-italic">
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
