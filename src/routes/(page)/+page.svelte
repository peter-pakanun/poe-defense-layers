<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Entity from './Entity.svelte';
	import { generateMonsters } from './monsters.svelte';
	import MySlider from './MySlider.svelte';

	let health = $state(2500);
	let armour = $state(2000);
	let regen = $state(100);

	let monsters = generateMonsters();
</script>

<div class="container h-full py-6">
	<div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
		<Card.Root class="order-1 aspect-video">
			<Card.Content class="h-full bg-black p-12">
				<div class="relative h-full bg-black">
					<Entity size={20} xPos={50} yPos={50} isPlayer name="Player Character" />
					{#each monsters as { name, physicalDamage, size, useSlam }}
						{@const xPos = Math.random() * 100}
						{@const yPos = Math.random() * 100}
						<Entity {name} {physicalDamage} {size} {useSlam} {xPos} {yPos} />
					{/each}
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
