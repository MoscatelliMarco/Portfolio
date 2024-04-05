<script>
    import Particles from "$lib/items/particles.svelte";
</script>

<div class="h-screen grid place-items-center relative overflow-hidden">
    <div class="flex flex-col relative backdrop-blur-sm z-20 pt-[36px] p-2 rounded mb-2">

        <h1 class="z-30 font-title text-gradient-primary text-center title font-semibold pb-1">
            Marco<br>Moscatelli
        </h1>

        <h2 class="z-30 relative md:absolute left-90 text-gray-3 subtitle text-center md:text-start">
            Hi, I am a fullstack web developer <span class="line-break hidden md:block"></span> and <span class="line-break block md:hidden"></span> AI pioneer based in Italy
        </h2>

    </div>

   <Particles />

</div>

<style>
    .title {
        font-size: clamp(60px, 13vw, 168px);
        line-height: 0.68;
    }
    .subtitle {
        font-size: clamp(13px, 1.48vw, 18px);
        line-height: 1.25;
        left: 0px;
        top: 10px;
    }
    .line-break {
        font-size: clamp(13px, 1.48vw, 18px);
    }

    @media (min-width: 768px) {
        .subtitle {
            left: clamp(210px, 28.2vw, 360px);
            top: 12px;
        }
    }
</style>