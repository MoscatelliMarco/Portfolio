<script>
    import { onMount } from "svelte";

    let scrolled;
    onMount(() => {
        window.addEventListener("scroll", () => {
            scrolled = window.scrollY > 0;
        })
        scrolled = window.scrollY > 0;
    })
</script>

<nav class="fixed top-3 lg:top-3.5 w-full z-40 flex justify-center">
    <div style="max-width: 1200px;" class="flex justify-between items-center gap-4 w-full mx-4 md:mx-5 lg:mx-7 xl:mx-8 p-2.5 lg:p-3 rounded-full bg-white nav-on-scroll border-2 {scrolled ? "scrolled backdrop-blur-md" : " backdrop-blur-sm"}">
        <div class="flex gap-8 uppercase ml-2.5 text-sm">
            <a href="#works">Works</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
        </div>
        <a href="#contact" class="bg-gradient-to-r from-pink/70 to-orange/70 border rounded-full px-4 py-1.5 text-sm">Contact</a>
    </div>
</nav>

<style>

    .nav-on-scroll {
        transition: background-color 250ms ease-in-out, border-color 100ms ease-in-out;
        background-color: transparent;
        border-color: transparent;
    }
    .nav-on-scroll.scrolled {
        transition: border-color 500ms ease-in-out, background-color 250ms ease-in-out;
        background-color: rgba(59, 59, 59, 0.6);
        border-color: rgba(59, 59, 59);
    }
</style>