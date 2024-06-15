<script>
    import { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';
	import ParticlesComponent from '@tsparticles/svelte';

	let particlesConfig = {
		particles: {
            fullScreen: false,
			color: {
				value: '#7F7F7F'
			},
			links: {
				enable: true,
				color: '#7F7F7F'
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