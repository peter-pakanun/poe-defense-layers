<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Slider } from '$lib/components/ui/slider/index.js';

	let {
		value = $bindable(2000),
	}: {
		value?: number;
	} = $props();
</script>

<div class="grid w-full max-w-sm items-center gap-2">
	<Label for="armour">Armour</Label>
	<Input id="armour" type="number" bind:value min={0} max={30000} step={100} />
	<Slider type="single" bind:value min={0} max={30000} step={100} />
</div>
