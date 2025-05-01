<script lang="ts">
import type { Snippet } from 'svelte';

let { children }:{ children:Snippet } = $props();

</script>

<div class="rounded-lg py-2 px-4 flex justify-center items-center bg-accent-lightblue">
  {@render children()}
</div>
