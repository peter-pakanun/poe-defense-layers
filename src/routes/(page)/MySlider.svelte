<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Slider } from '$lib/components/ui/slider/index.js';

	let {
		value = $bindable(2000),
		label = 'Label',
		id = 'id',
		min = 0,
		max = 30000,
		step = 100,
	}: {
		value?: number;
		label?: string;
		id?: string;
		min?: number;
		max?: number;
		step?: number;
	} = $props();
</script>

<div class="grid w-full max-w-sm items-center gap-2">
	<Label for={id}>{label}</Label>
	<Input {id} type="number" bind:value {min} {max} {step} />
	<Slider type="single" bind:value {min} {max} {step} />
</div>
