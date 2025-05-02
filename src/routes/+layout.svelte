<script lang="ts">
	import '../app.css';
	import '@fontsource/kanit';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}
