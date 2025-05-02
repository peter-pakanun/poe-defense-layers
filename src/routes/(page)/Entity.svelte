<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let {
		size = 10,
		xPos = 0,
		yPos = 0,

		isPlayer = false,

		name = 'Enemy',
		physicalDamage = 841,
	}: {
		size?: number;
		xPos?: number;
		yPos?: number;

		isPlayer?: boolean;

		name?: string;
		physicalDamage?: number;
	} = $props();
</script>

<div
	class="z relative rounded-full"
	class:bg-green-500={isPlayer}
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
