<script>
    import { page } from '$app/stores';
    import Particles from "$lib/items/particles.svelte";
</script>

<Particles />

<div class="relative z-20 mt-16 md:mt-28 lg:mt-40 xl:mt-56 text-center gap-2 lg:gap-4 flex justify-center w-full">
    <div class="flex flex-col gap-4 w-fit items-center justify-center rounded backdrop-blur-sm p-4">
        <p class="max-w-xs text-light italic text-gray-5">Oooh, looks like you have encountered an error, we are sorry about that</p>
        <div class="flex flex-col gap-0.5">
            <h1 class="text-gradient-primary text-9xl font-bold">{$page.status}</h1>
            {#if $page.error.message}
                <p class="text-sm text-gray-4">{$page.error.message}</p>
            {/if}
        </div>
    </div>
</div>