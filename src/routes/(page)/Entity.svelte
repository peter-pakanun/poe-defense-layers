<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { playerState } from './state.svelte';

	let {
		size = 10,
		xPos = 0,
		yPos = 0,

		isPlayer = false,

		name = 'Enemy',
		physicalDamage = 841,
		aspd = 1,
		useSlam = false,
		isMagic = false,
		isRare = false,
	}: {
		size?: number;
		xPos?: number;
		yPos?: number;

		isPlayer?: boolean;

		name?: string;
		physicalDamage?: number;
		aspd?: number;
		useSlam?: boolean;
		isMagic?: boolean;
		isRare?: boolean;
	} = $props();

	let damageReduction = $derived(playerState.armour / (playerState.armour + 10 * physicalDamage));
	let effectiveDR = $derived(Math.min(0.9, damageReduction));
	let physicalDamageAfterDR = $derived(physicalDamage * (1 - effectiveDR));
	let oneShot = $derived(physicalDamageAfterDR > playerState.health);

	// assuming monster have 1.0 aspd
	// we also move a lot so on average we do take half of the hits
	let dps = $derived(physicalDamageAfterDR / aspd / 2);
	let dpsAfterBlocks = $derived((dps * (100 - playerState.blocks)) / 100);
	let dpsAfterEvade = $derived((dpsAfterBlocks * (100 - playerState.evade)) / 100);
	let cantOutRegen = $derived(
		useSlam ? dps > playerState.regen : dpsAfterEvade > playerState.regen
	);
</script>

<div
	class="absolute rounded-full"
	class:bg-sky-500={isPlayer}
	class:bg-red-500={!isPlayer && oneShot}
	class:bg-orange-500={!isPlayer && !oneShot && cantOutRegen}
	class:bg-gray-500={!isPlayer && !oneShot && !cantOutRegen}
	class:opacity-50={!isPlayer && !oneShot && !cantOutRegen}
	class:z-10={!isPlayer}
	class:z-20={isPlayer}
	class:ring-2={isMagic || isRare}
	class:ring-blue-500={isMagic}
	class:ring-yellow-500={isRare}
	style="width: {size}px; height: {size}px; left: {xPos}%; top: {yPos}%; transform: translate(-50%, -50%);"
>
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<div class="">&nbsp;</div>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>{name}</p>
				{#if !isPlayer}
					<p>Physical Damage: {physicalDamage}</p>
				{/if}
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</div>
