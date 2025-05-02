<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Entity from './Entity.svelte';
	import { generateMonsters } from './monsters.svelte';
	import MySlider from './MySlider.svelte';
	import { playerState } from './state.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let monsters = $state(generateMonsters());

	let trash = $state(30);
	let magic = $state(12);
	let rare = $state(2);
	let dangerous = $state(1);
</script>

<div class="container h-full py-6">
	<div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
		<Card.Root class="order-1 aspect-video">
			<Card.Content class="h-full bg-black p-12">
				<div class="relative h-full bg-black">
					<Entity size={20} xPos={50} yPos={50} isPlayer name="Player Character" />
					{#each monsters as { name, physicalDamage, size, useSlam, isMagic, isRare }}
						{@const xPos = Math.random() * 100}
						{@const yPos = Math.random() * 100}
						<Entity {name} {physicalDamage} {size} {useSlam} {isMagic} {isRare} {xPos} {yPos} />
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
		<div class="order-2 flex flex-col space-y-4">
			<h4 class="text-xl">Player Stats</h4>
			<MySlider label="eHP" id="health" bind:value={playerState.health} min={1000} max={15000} />
			<MySlider label="Armour" id="armour" bind:value={playerState.armour} min={0} max={30000} />
			<MySlider
				label="Regeneration"
				id="regen"
				bind:value={playerState.regen}
				min={0}
				max={3000}
				step={10}
			/>
			<Separator />
			<h4 class="text-xl">Monsters</h4>
			<MySlider label="Trash" id="monsters" bind:value={trash} min={0} max={100} step={1} />
			<MySlider label="Magic" id="magic" bind:value={magic} min={0} max={50} step={1} />
			<MySlider label="Rare" id="rare" bind:value={rare} min={0} max={10} step={1} />
			<MySlider label="Dangerous" id="dangerous" bind:value={dangerous} min={0} max={5} step={1} />
			<Button
				onclick={() => {
					monsters = generateMonsters(trash, magic, rare, dangerous);
				}}>Generate</Button
			>
		</div>
	</div>
</div>
