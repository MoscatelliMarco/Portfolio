<script>
    import { onMount } from 'svelte';
    import Work from '$lib/items/work.svelte';

    let worksParentWidth = 0;
    let worksParentHeight = 0;
    onMount(() => {
        window.addEventListener('resize', getWorksParentWidthHeight);
        getWorksParentWidthHeight();
    });

    function getWorksParentWidthHeight () {
        const element = document.getElementById('works-parent');
        if (element) {
            worksParentWidth = element.clientWidth;
            worksParentHeight = element.clientHeight;
        }
    }
</script>

<div id="works" class="relative flex justify-center z-30 w-full bg-gradient-to-b from-black/0 pt-[45vh] -mt-[40vh] md:pt-[12vh] md:-mt-[8vh] lg:pt-[15vh] lg:-mt-[10vh] via-10% via-black to-black">
    <div class="relative z-20 flex flex-col gap-8 section-box py-52">
        <h2 class="text-6xl font-semibold text-white font-title">
            My works
        </h2>

        <div id="works-parent" class="flex flex-col gap-8 text-black">

            <Work 
            image_url="/gaetano_chianello.webp"
            skills_used={["html", "css", "javascript", "tailwindcss-light", "figma-light", "nodejs-light", "expressjs-light", "mongodb"]} 
            parent_width={worksParentWidth} 
            orientation="left"
            title="Gaetano Chianello",
            description="Gaetano Chianello is a personal trainer who needed a website to show his abilities, this website includes dynamic pages, an option to select different languages, and a connection to MongoDB."
            url="https://gaetanochianello.com"
            />
            <Work 
            image_url="/matteo_moscatelli.webp"
            skills_used={["html", "css", "javascript", "svelte", "tailwindcss-light", "figma-light", "photoshop", "nodejs-light", "mongodb"]} 
            parent_width={worksParentWidth} 
            orientation="right"
            title="Matteo Moscatelli",
            description="Matteo Moscatelli is captivating portfolio showcasing his pioneering work as a sociology educator at Università Cattolica di Milano. Explore his innovative research, teaching methodologies, and societal impact in a concise and compelling presentation."
            url="https://matteo-moscatelli.vercel.app"
            />
            <Work 
            image_url="/sensopinion.webp"
            skills_used={["html", "css", "javascript", "svelte", "tailwindcss-light", "figma-light", "nodejs-light", "python-light", "fastapi", "mongodb"]} 
            parent_width={worksParentWidth} 
            orientation="left"
            title="Sensopinion",
            description="Sensopinion is a news sentiment analyzer that scrapes the web for news where it analyses the emotions, it also provides a screener where you can sort, filter and search the most trending news of the time."
            url="https://sensopinion.vercel.app/"
            source_code="https://github.com/MoscatelliMarco/Sensopinion"
            />
            <Work 
            image_url="/webscrap.webp"
            skills_used={["html", "css", "javascript", "python-light", "selenium"]} 
            parent_width={worksParentWidth} 
            orientation="right"
            title="Webscrap Serie A",
            description="A repository that is your go-to resource for scraping football match data from Serie A, Italy's premier football league. On my Github you'll find many other web scraping project starting with the prefix &quot;WebScrap&quot;"
            url="https://github.com/MoscatelliMarco/WebScrap-SerieA"
            source_code="https://github.com/MoscatelliMarco/WebScrap-SerieA"
            />
            <Work 
            image_url="/musico_marketplace.webp"
            skills_used={["figma-light", "photoshop"]}
            parent_width={worksParentWidth}
            orientation="left"
            title="Musico - NFT Marketplace"
            description="The Musico NFT Marketplace design in Figma showcases a sleek, modern interface using Glassmorphism. Translucent elements with frosted glass effects, soft shadows, and vibrant gradients create a sophisticated and immersive user experience."
            url="https://www.figma.com/design/BWdZLdr2SSWqO1RVLBQeJk/Musico-NFT-marketplace"
            />
            <Work 
            image_url="/medusa_plugin_blogger.webp"
            skills_used={["html", "css", "javascript", "typescript", "react-light", "expressjs-light", "postgresql-light"]}
            parent_width={worksParentWidth}
            orientation="right"
            title="Medusa Plugin Blogger"
            description="A blog integration for your MedusaJS admin page, enabling you to create and manage blog articles directly from the admin interface. This plugin extends the capabilities of MedusaJS, a powerful headless commerce platform, by adding a dedicated blogging feature."
            url="https://github.com/MoscatelliMarco/medusa-plugin-blogger"
            source_code="https://github.com/MoscatelliMarco/medusa-plugin-blogger"
            />
        </div>
    </div>
</div>