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
		useSlam = false,
	}: {
		size?: number;
		xPos?: number;
		yPos?: number;

		isPlayer?: boolean;

		name?: string;
		physicalDamage?: number;
		useSlam?: boolean;
	} = $props();

	let damageReduction = $derived(playerState.armour / (playerState.armour + 10 * physicalDamage));
	let effectiveDR = $derived(Math.min(0.9, damageReduction));
	let physicalDamageAfterDR = $derived(physicalDamage * (1 - effectiveDR));
	let oneShot = $derived(physicalDamageAfterDR > playerState.health);
</script>

<div
	class="absolute rounded-full"
	class:bg-green-500={isPlayer}
	class:bg-red-500={oneShot}
	class:bg-gray-500={!oneShot}
	class:z-10={!isPlayer}
	class:z-20={isPlayer}
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
