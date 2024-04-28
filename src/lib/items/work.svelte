<script>
    import Icon from "@iconify/svelte";

    export let orientation;
    export let parent_width;
    export let image_url = "";
    export let skills_used = [];

    export let title = "";
    export let description = "";
    export let url = "";
    export let source_code = "";
</script>

<div class="flex {orientation == "left" ? "justify-start" : "justify-end"}">
    <a href="{url}" target="_blank" style="width: calc({parent_width}px - {parent_width > 1024 ? "20%" : parent_width > 768 ? "10%" : "0px"});" 
        class="bg-gray-5 flex flex-col md:flex-row gap-5 lg:gap-6 p-6 min-h-80 work-card rounded text-start">
        <div class="w-full md:w-72 h-96 md:h-full overflow-hidden shrink-0 rounded border border-gray-3">
            <img src="{image_url}" class="w-full h-full object-cover rounded image-work" alt="portfolio project">
        </div>

        <div class="flex flex-col gap-1 px-1 pb-0.5 md:p-0 md:pt-2.5 md:pb-3 h-full">
            <div class="flex gap-3 items-center">
                <h3 class="font-semibold text-2xl">{title}</h3>
                {#if source_code}
                    <a href="{source_code}" target="_blank" class="p-1 bg-white/60 rounded-full">
                        <Icon icon="mdi:github" class="h-5 w-5" />
                    </a>
                {/if}
            </div>
            <p class="text-gray-1 -mt-0.5">{description}</p>
            
            <div class="mt-auto flex flex-col gap-1">
                <p class="text-gray-2 font-semibold text-sm mt-3">Skills used</p>
                <ul class="flex flex-wrap gap-2">
                    {#each skills_used as skill}
                        <li>
                            <Icon icon="skill-icons:{skill}" class="w-6 h-6"/>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </a>
</div>