<script>
    import NavBar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";

    import "$lib/css/app.css";
    import "$lib/css/global.css";

    import { onMount } from "svelte";
    import { page } from "$app/stores";

    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    injectAnalytics({ mode: dev ? 'development' : 'production' });

    let mounted = false;
    onMount(() => {
        mounted = true;
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));

                if (target) {
                        window.scrollTo({
                            top: target.offsetTop,
                            behavior: 'smooth'
                        });
                }
            });
        });
    })
    $: if ($page.url.pathname && mounted) {
        setTimeout(() => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();

                    const target = document.querySelector(this.getAttribute('href'));

                    if (target) {
                            window.scrollTo({
                                top: target.offsetTop,
                                behavior: 'smooth'
                            });
                    }
                });
            });
        }, 50)
    }
</script>

<div class="font-body flex flex-col justify-between bg-black text-white min-h-screen overflow-x-hidden md:overflow-x-visible">
    
    <NavBar />

    <body>
        <slot></slot>
    </body>

    <div class="mt-auto">
        <Footer />
    </div>

</div>