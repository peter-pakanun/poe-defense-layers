<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let {
		size = 10,
		xPos = 0,
		yPos = 0,

		name = 'Enemy',
		physicalDamage = 841,
	}: {
		size?: number;
		xPos?: number;
		yPos?: number;

		name?: string;
		physicalDamage?: number;
	} = $props();
</script>

<div
	class="z relative rounded-full bg-red-500"
	style="width: {size}px; height: {size}px; left: {xPos}%; top: {yPos}%; transform: translate(-50%, -50%);"
>
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<div class="">&nbsp;</div>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>{name}</p>
				<p>Physical Damage: {physicalDamage}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</div>
