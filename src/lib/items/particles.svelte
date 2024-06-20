<script>
    import { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';
	import ParticlesComponent from '@tsparticles/svelte';
	import { onMount } from 'svelte';

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

	const calculateParticleCount = () => {
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;
		const area = screenWidth * screenHeight;
		
		// Calculate particle count based on screen area
		// Galaxy NOTE 20 -> 376980
		// Ipad 14.7 -> 874800
		// Desktop -> 980712
		if (area < 500000) {
			return 20;
		} else if (area < 900000) {
			return 45;
		} else {
			return 65;
		}
	};

	const updateParticleCount = () => {
		particlesConfig.particles.number.value = calculateParticleCount();
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});

	onMount(() => {
		// Initial particle count setup
		updateParticleCount();

		const handleResize = () => {
			updateParticleCount();
		};

		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
  	});
</script>

<svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    class="absolute z-10"
    style=""
    options="{particlesConfig}"
/>