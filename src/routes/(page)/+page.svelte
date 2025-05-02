<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="container h-full py-6">
	<div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
		<Card.Root class="order-1">
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
		<div class="order-2 flex flex-col space-y-4">test</div>
	</div>
</div>
