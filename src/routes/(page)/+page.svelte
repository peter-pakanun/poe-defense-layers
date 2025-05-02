<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import MySlider from './MySlider.svelte';

	let armour = $state(3000);
	let regen = $state(200);
</script>

<div class="container h-full py-6">
	<div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
		<Card.Root class="order-1 aspect-video">
			<Card.Content>
				<div class="relative h-full w-full">
					<div class="absolute left-[10%] top-0 bg-red-500">A</div>
				</div>
			</Card.Content>
		</Card.Root>
		<div class="order-2 flex flex-col space-y-4">
			<MySlider label="Armour" id="armour" bind:value={armour} />
			<MySlider label="Regeneration" id="regen" bind:value={regen} min={0} max={3000} />
		</div>
	</div>
</div>
