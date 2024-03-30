<script>
    import Icon from "@iconify/svelte";
</script>

<div class="relative z-20 bg-black py-48 flex flex-col items-center gap-8">
    <h2 class="text-5xl font-title text-white font-semibold">
        Services
    </h2>

    <div class="grid grid-cols-12 gap-4 w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-2 md:mx-4 lg:mx-5 xl:mx-8 text-black">
        <div class="col-span-5 bg-white rounded px-4 pt-5 pb-6 flex flex-col gap-3">
            <h4 style="width: fit-content;" class="text-2xl font-bold font-title text-gradient-primary">
                Blog
            </h4>
            <p class="text-5xl font-semibold">            
                €600
            </p>
            <p class="text-gray-2">
                You think only on writing quality articles, I’ll take care of the rest. Let's get together and discuss about you vision.
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
        <div class="col-span-7 bg-white rounded px-4 py-3">
            <p>ECOMMERCE</p>
        </div>
        <div class="col-span-6 bg-white rounded px-4 py-3">
            <p>SAAS</p>
        </div>
        <div class="col-span-6 bg-white rounded px-4 py-3">
            <p>BUILD YOUR OWN</p>
        </div>
    </div>
</div>