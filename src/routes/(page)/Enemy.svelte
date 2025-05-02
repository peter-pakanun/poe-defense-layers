<script lang="ts">
	let {
		size = 10,
		xPos = 0,
		yPos = 0,
	}: {
		size?: number;
		xPos?: number;
		yPos?: number;
	} = $props();
</script>

<div
	class="relative rounded-full bg-red-500"
	style="width: {size}px; height: {size}px; left: {xPos}%; top: {yPos}%; transform: translate(-50%, -50%);"
>
	&nbsp;
</div>
