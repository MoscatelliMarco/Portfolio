<script>
    import Icon from "@iconify/svelte";
    import BuildYourOwnWebsite from "$lib/items/build_your_own_website.svelte";
</script>

<div class="relative z-20 bg-black py-48 flex flex-col items-center gap-4">
    <h2 class="text-5xl font-title text-white font-semibold">
        Services
    </h2>

    <p class="text-center text-sm text-gray-3">A cured list of all the services that I offer</p>

    <div class="grid grid-cols-12 gap-4 w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-2 md:mx-4 lg:mx-5 xl:mx-8 text-black mt-6">
        <div class="col-span-5 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
            <h4 class="text-2xl font-bold font-title text-gradient-primary w-fit">
                Blog
            </h4>
            <p class="text-5xl font-semibold">            
                €600
            </p>
            <p class="text-gray-2">
                You think only on writing quality articles, I’ll take care of the rest ― Everything optimized with SEO to rank your articles at the top of Google rankings.
            </p>
            <ul class="flex flex-col gap-3 text-gray-1 mt-2">
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Landing page
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Blog article page
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Admin dashboard with perfomance graph
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Blog editor page
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    3 info pages
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Google analytics
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Multilingual support
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Deployment and domain configuration
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="entypo:circle-with-cross" class="text-black h-6 w-6 shrink-0" />
                    User authentication
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="entypo:circle-with-cross" class="text-black h-6 w-6 shrink-0" />
                    Stripe integration
                </li>
            </ul>
        </div>

        <div class="col-span-7 bg-gray-5 rounded px-5 pt-5 pb-6">
            <p>ECOMMERCE</p>
        </div>

        <div class="col-span-6 bg-gray-5 rounded px-5 pt-5 pb-6">
            <p>SAAS</p>
        </div>

        <BuildYourOwnWebsite />

        <div class="col-span-7 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
            <h4 class="text-2xl text-gradient-primary font-title font-bold w-fit">FREE EXTRAS</h4>
            <p class="text-gray-2">
                Whether you want a blog, an ecommerce or any other type of website, there are some things that I take as granted to provide your with the best experience and results as possible. Let's get together and discuss about you vision.
            </p>
            <ul class="flex flex-col gap-3 text-gray-1 mt-2">
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Optimized SEO
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Optimized performance
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Unique, modern, and customize design
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Enduring, memorable user experience
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Responsive design for every page that you need
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Adaptive, scalable backend solutions
                </li>
                <li class="flex gap-3 items-start">
                    <Icon icon="mdi:tick-circle" class="text-black h-6 w-6 shrink-0" />
                    Catch-up meetings & close communication
                </li>
            </ul>
        </div>

        <div class="col-span-5 bg-gray-5 rounded px-5 pt-5 pb-6">
            <p>EXPECTING LESS?</p>
        </div>
    </div>

    <p class="text-sm text-gray-2 text-center mt-2 max-w-md">*price may vary based on your requests, the price displayed is just a general guideline</p>
</div>