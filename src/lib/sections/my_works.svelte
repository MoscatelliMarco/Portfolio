<script>
    import { onMount } from 'svelte';
    import Work from '$lib/items/work.svelte';

    let worksParentWidth = 0;
    let worksParentHeight = 0;
    onMount(() => {
        window.addEventListener('resize', getWorksParentWidthHeight);
        getWorksParentWidthHeight()
    });

    function getWorksParentWidthHeight () {
        const element = document.getElementById('works-parent');
        if (element) {
            worksParentWidth = element.clientWidth;
            worksParentHeight = element.clientHeight;
        }
    }
</script>

<div id="works" style="padding-top: {worksParentHeight * .1}px; margin-top: -{worksParentHeight * .09}px;" class="relative flex justify-center z-30 w-full bg-gradient-to-b from-black/0 via-10% via-black to-black overflow-x-hidden">
    <div class="relative z-20 flex flex-col gap-8 section-box py-52">
        <h2 class="text-6xl font-semibold text-white font-title">
            My works
        </h2>

        <div id="works-parent" class="flex flex-col gap-8 text-black">

            <Work 
            image_url="/gaetano_chianello.png"
            skills_used={["html", "css", "javascript", "tailwindcss-light", "figma-light", "nodejs-light", "expressjs-light", "mongodb"]} 
            parent_width={worksParentWidth} 
            orientation="left"
            title="Gaetano Chianello",
            brief_description="Gaetano Chianello is a personal trainer who needed a website to show his abilities, this website includes dynamic pages, an option to select different languages, and a connection to MongoDB."
            />
            <Work parent_width={worksParentWidth} orientation="right"/>
            <Work parent_width={worksParentWidth} orientation="left"/>

        </div>
    </div>
</div>