<script>
    import Icon from "@iconify/svelte";

    export let orientation;
    export let parent_width;
    export let image_url = "";
    export let skills_used = [];
</script>

<div class="flex {orientation == "left" ? "justify-start" : "justify-end"}">
    <div style="width: calc({parent_width}px - 20%);" class="bg-gray-5 rounded flex gap-6 p-6 h-72 overflow-hidden">
        <img src="{image_url}" class="w-72 object-cover rounded" alt="portfolio project">

        <div class="flex flex-col gap-2 pt-3 pb-2.5">
            <h3 class="font-semibold text-2xl">Titolo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident, sed mollitia deserunt cumque iusto ad eos facilis labore perferendis architecto aspernatur eum consectetur dignissimos, tempora doloremque inventore quibusdam! Mollitia.</p>
            
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
    </div>
</div>