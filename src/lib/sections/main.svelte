<script>
    import MainParticles from "$lib/items/main_particles.svelte";
</script>

<div class="h-screen grid place-items-center relative overflow-hidden">
    <div class="flex flex-col relative">

        <h1 class="z-30 font-title text-gradient-primary text-center text-10xl font-semibold leading-title pb-1">
            Marco<br>Moscatelli
        </h1>

        <h2 class="z-30 absolute top-neg-7 left-88 text-gray-1 leading-tight">
            Hi, I am a fullstack web developer and<br>AI pioneer based in Italy
        </h2>

        <div style="height: calc(100% + 28px);" class="absolute z-20 rounded w-full backdrop-blur-sm mt-[-28px]">

        </div>

    </div>

   <MainParticles />


</div>