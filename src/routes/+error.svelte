<script>
    import { page } from '$app/stores';
    import Particles from "$lib/items/particles.svelte";
    import { onMount } from "svelte";

    let footer_height;
    let navbar_height;
    onMount(() => {
        footer_height = document.getElementById("footer").style.height;
        getFooterHeight();
    })
    function getFooterHeight () {
        const element = document.getElementById('footer');
        if (element) {
            footer_height = element.clientHeight;
        }
    }
</script>

<Particles />

<div style="height: calc(100vh - {footer_height}px);" class="w-full text-center gap-2 lg:gap-4 relative bg-black z-20 pointer-events-none flex justify-center pt-20 md:pt-12 lg:pt-0">
    <div class="flex flex-col gap-4 w-fit items-center justify-center rounded backdrop-blur-sm p-4">
        <p class="max-w-xs text-light italic text-gray-5 text-sm md:text-base">Oooh, looks like you have encountered an error, we are sorry about that</p>
        <div class="flex flex-col gap-0.5">
            <h1 class="text-gradient-primary text-8xl md:text-9xl font-bold">{$page.status}</h1>
            {#if $page.error.message}
                <p class="text-sm text-gray-4 font-semibold">{$page.error.message}</p>
            {/if}
        </div>
    </div>
</div>