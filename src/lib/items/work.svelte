<script>
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";

    export let orientation;
    export let parent_width;
    export let image_url = "";
    export let skills_used = [];

    export let title = "";
    export let brief_description = "";

    let modal_active = false;
</script>

<div class="flex {orientation == "left" ? "justify-start" : "justify-end"}">
    <button on:click={() => modal_active=true} style="width: calc({parent_width}px - {parent_width > 1024 ? "20%" : parent_width > 768 ? "10%" : "0px"});" class="bg-gray-5 flex gap-6 p-6 h-72 work-card rounded text-start">
        <div class="w-72 h-full overflow-hidden shrink-0 rounded">
            <img src="{image_url}" class="w-full h-full object-cover rounded image-work" alt="portfolio project">
        </div>

        <div class="flex flex-col gap-2 pt-2.5 pb-3 h-full">
            <h3 class="font-semibold text-2xl">{title}</h3>
            <p class="text-gray-1">{brief_description}</p>
            
            <div class="mt-auto flex flex-col gap-1">
                <p class="text-gray-2 font-semibold text-sm">Skills used</p>
                <ul class="flex flex-wrap gap-2">
                    {#each skills_used as skill}
                        <li>
                            <Icon icon="skill-icons:{skill}" class="w-6 h-6"/>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </button>
</div>

<div transition:fade={{duration: 300}} class="fixed top-0 left-0 w-full h-full work-modal {modal_active ? "active pointer-events-auto" : "pointer-events-none"}">
    <div class="relative w-full h-full">
        <div class="absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2">

        </div>
    </div>
</div>