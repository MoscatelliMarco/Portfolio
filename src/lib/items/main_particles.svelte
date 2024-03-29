<script>
    import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
	import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
            fullScreen: false,
			color: {
				value: '#BDBDBD'
			},
			links: {
				enable: true,
				color: '#BDBDBD'
			},
			move: {
				enable: true
			},
			number: {
				value: 50
			}
		}
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    class="absolute z-10"
    style=""
    options="{particlesConfig}"
/>