<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="container space-y-4">
	<h4 class="text-4xl">PoE Defense Layers Visualizer</h4>
	<Separator />
	{@render children()}
</div>
