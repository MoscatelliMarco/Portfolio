<script>
    import BuildYourOwnWebsite from "$lib/items/build_your_own_website.svelte";
    import ExpectingLess from "$lib/items/expecting_less.svelte";
    import Tick from "$lib/items/icons/tick.svelte";
    import Cross from "$lib/items/icons/cross.svelte";
    import { writable } from "svelte/store";

    let price = writable(0);
</script>

<div id="services" class="relative z-20 bg-black py-52 flex flex-col items-center gap-4">
    <h2 class="text-5xl font-title text-white font-semibold">
        Services
    </h2>

    <p class="text-center text-sm text-gray-3">A curated list of all the services that I offer</p>

    <div class="grid grid-cols-12 gap-4 section-box text-black mt-6">
        <div class="col-span-12 lg:col-span-5 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
            <h4 class="text-2xl font-bold font-title text-gradient-primary w-fit">
                Blog
            </h4>
            <p class="text-5xl font-semibold">            
                €700
            </p>
            <p class="text-gray-2">
                You think only on writing quality articles, I’ll take care of the rest ― Everything optimized with SEO to rank your articles at the top of Google rankings.
            </p>
            <ul class="flex flex-col gap-3 text-gray-1 mt-2">
                <li class="flex gap-3 items-start">
                    <Tick />
                    Landing page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Blog article page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    3 info pages (about, tos, privacy policy, etc...)
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    2 any other pages that you want
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Simple animations
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Admin dashboard with perfomance graph
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Blog editor page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Image and video management system
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Google analytics
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Automatic multilingual support
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Deployment and domain configuration
                </li>
                <li class="flex gap-3 items-start">
                    <Cross />
                    User authentication
                </li>
                <li class="flex gap-3 items-start">
                    <Cross />
                    Payments integration
                </li>
            </ul>
        </div>

        <div class="col-span-12 lg:col-span-7 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
            <h4 class="text-2xl font-bold font-title text-gradient-primary w-fit">
                Ecommerce
            </h4>
            <p class="text-5xl font-semibold">            
                €1250
            </p>
            <p class="text-gray-2">
                Shopify is not always the solution, it's expensive and difficult to customize, my ecommerce solutions provides you with the right tools to increase your sales and your earnings. I have picked a better alternative, MedusaJS, the best open source ecommerce engine!
            </p>
            <ul class="flex flex-col gap-3 text-gray-1 mt-2">
                <li class="flex gap-3 items-start">
                    <Tick />
                    Migration from your Shopify store
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Landing page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Checkout page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Products and product page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    6 info pages
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    4 other pages that you want
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Medium complexity animations
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Database connection
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    User authentication
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    <p><a class="underline" href="https://medusajs.com/" target="_blank">MedusaJS</a> configuration</p>
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Any type of payment method that you like (Stripe, Paypal, Clarna, even Manual)
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Automatic multilingual support
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Deployment and domain configuration
                </li>
            </ul>
        </div>

        <div class="col-span-12 lg:col-span-6 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
            <h4 class="font-title text-gray-2/70 w-fit">
                <span class="text-2xl text-gradient-primary font-bold mr-2">Portfolio website</span> (like this one)
            </h4>
            <p class="text-5xl font-semibold">            
                €350
            </p>
            <p class="text-gray-2">
                A one page application developed to rocket your clients conversion rate with maniacally studied details and animations.
            </p>
            <ul class="flex flex-col gap-3 text-gray-1 mt-2">
                <li class="flex gap-3 items-start">
                    <Tick />
                    Landing page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    One info page
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Complex animations
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Google analytics
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Automatic multilingual support
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Deployment and domain configuration
                </li>
                <li class="flex gap-3 items-start">
                    <Cross />
                    Stripe integration
                </li>
                <li class="flex gap-3 items-start">
                    <Cross />
                    User authentication
                </li>
                <li class="flex gap-3 items-start">
                    <Cross />
                    Image and video management system
                </li>
                <li class="flex gap-3 items-start">
                    <Cross />
                    Admin dashboard
                </li>
            </ul>
        </div>

        <BuildYourOwnWebsite price={price}/>

        <div class="order-last lg:order-none col-span-12 lg:col-span-7 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
            <h4 class="text-2xl text-gradient-primary font-title font-bold w-fit">FREE EXTRAS</h4>
            <p class="text-gray-2">
                Whether you want a blog, an ecommerce or any other type of website, there are some things that I take as granted to provide your with the best experience and results as possible. Let's get together and discuss about you vision.
            </p>
            <ul class="flex flex-col gap-3 text-gray-1 mt-2">
                <li class="flex gap-3 items-start">
                    <Tick />
                    Optimized SEO
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Optimized performance
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Unique, modern, and customize design
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Enduring, memorable user experience
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Responsive design for every page that you need
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Adaptive, scalable backend solutions
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Catch-up meetings & close communication
                </li>
                <li class="flex gap-3 items-start">
                    <Tick />
                    Secured website against the most common attacks like: DDOS attacks, NoSQL injection, javascript injections, brute-force attacks, etc...
                </li>
            </ul>
        </div>

        <ExpectingLess price={price}/>
    </div>

    <p class="text-sm text-gray-2 text-center mt-2 max-w-md">price may vary based on your requests, the price displayed is just a general guideline</p>
</div>