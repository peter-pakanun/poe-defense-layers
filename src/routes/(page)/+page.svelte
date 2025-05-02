<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Enemy from './Enemy.svelte';
	import MySlider from './MySlider.svelte';

	let health = $state(2500);
	let armour = $state(2000);
	let regen = $state(100);
</script>

<div class="container h-full py-6">
	<div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
		<Card.Root class="order-1 aspect-video">
			<Card.Content class="h-full">
				<div class="h-full bg-gray-500">
					<Enemy size={10} xPos={20} yPos={20} />
				</div>
			</Card.Content>
		</Card.Root>
		<div class="order-2 flex flex-col space-y-4">
			<MySlider label="eHP" id="health" bind:value={health} min={1000} max={15000} />
			<MySlider label="Armour" id="armour" bind:value={armour} />
			<MySlider label="Regeneration" id="regen" bind:value={regen} min={0} max={3000} />
		</div>
	</div>
</div>
