<script>
    import Icon from '@iconify/svelte';
    import { register } from 'swiper/element/bundle';
    import { onMount } from 'svelte';
    register();
    
    onMount(() => {
        // swiper element
        const swiperEl = document.querySelector('#skills-carousel');

        // swiper parameters
        const swiperParams = {
            autoplay: {
                delay: 2500, // Auto play every n seconds
            },
            navigation: true,
            loop: true,
            freeMode: true,
            centeredSlides: true,
            slidesPerView: 5,
            navigation: {
                nextEl: null,
                prevEl: null,
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();
    });
</script>

<div id="skills" class="relative z-20 py-52 bg-black">
    <h3 class="text-6xl font-semibold flex justify-center font-title section-box">
        My skills
    </h3>

    <div class="flex justify-center mt-12 section-box">
        <p class="text-center max-w-3xl mx-4 text-gray-4">
            I can build and design websites fully customized with database access using frameworks like Sveltekit or Express, I will integrated them with AI if asked using Python and Pytorch, deploying them with distribution control system softwares like git on Linux or Vercel. For your AI models I will also scrape the web using Selenium and Scrapy.
            <br>
            If you have any doubt don't hesitate to 
            <a href="#contact" class="text-gray-4 font-semibold hover:underline">contact me</a>.
        </p>
    </div>

    <swiper-container init="false" id="skills-carousel" class="mt-24 max-w-5xl px-4 section-box">
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:html" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:css" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:javascript" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:tailwindcss-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:bootstrap" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:svelte" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:vite-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:nodejs-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:expressjs-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:mongodb" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:figma-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:photoshop" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:python-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:pytorch-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:scikitlearn-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:fastapi" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:selenium" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:git" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:github-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:vercel-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center">
            <div class="skills">
                <Icon icon="skill-icons:linux-light" class="w-full h-full"/>
            </div>
        </swiper-slide>
    </swiper-container>
</div>

<style>
    .skills {
        height: 6rem;
        width: 6rem;
    }
</style>