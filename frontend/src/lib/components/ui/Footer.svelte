<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<footer class="w-full bg-black py-[55px] text-[15px] text-white">
	<div class="mx-auto max-w-[960px]">
		<p class="mb-[23px]">AIDiBot © 2024<br />Все права защищены</p>
		<address class="flex flex-wrap items-end justify-between not-italic">
			<p>
				ИП Вячеслав Фёдорович<br />
				ИНН 743014066097<br /> ОГРН 321745600142200
			</p>
			<div>
				<a href="tel:+79226309546">+7 (922) 630-95-46</a><br />
				<a href="mailto:edfunnelss@mail.ru">edfunnelss@mail.ru</a>
			</div>
		</address>
	</div>
</footer>

<style>
</style>
