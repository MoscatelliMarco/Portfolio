<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { Shine } from 'svelte-ux'; 

    let scrolled;
    onMount(() => {
        window.addEventListener("scroll", () => {
            scrolled = window.scrollY > 0;
        })
        scrolled = window.scrollY > 0;
    })

    let navbar_open = false;
    let close_dialog_button;
</script>

<nav class="fixed top-2.5 md:top-3 lg:top-3.5 w-full z-40 flex justify-center">
    <div style="max-width: 1200px;" class="px-2.5 py-2 md:p-2.5 lg:p-3 flex justify-between items-center gap-4 w-full mx-3 md:mx-5 lg:mx-7 xl:mx-8 rounded-full bg-white nav-on-scroll border-2 {scrolled ? "scrolled backdrop-blur-md" : " backdrop-blur-sm"}">
        <div class="hidden md:flex gap-8 uppercase ml-2.5 text-sm">
            <a href={$page.url.pathname == "/" ? "#works" : "/#works"}>Works</a>
            <a href={$page.url.pathname == "/" ? "#skills" : "/#skills"}>Skills</a>
            <a href={$page.url.pathname == "/" ? "#services" : "/#services"}>Services</a>
        </div>
        <Shine lightRadius=200 depth=0.8 surfaceScale=1.5 specularConstant=0.3>
            <a href="#contact" class="bg-gradient-to-r from-pink/70 to-orange/70 border rounded-full px-4 py-1.5 text-sm">Contact</a>
        </Shine>
        <button  aria-label="Close navbar menu" class="block md:hidden hamburger-menu stroke-gray-4 {navbar_open ? "open" : ""}" onclick="navbar_mobile.showModal()" on:click={() => {navbar_open = !navbar_open;}}>
            <svg class="w-9 h-9" viewBox="0 0 100 100">
              <path class="line top" d="M 20,30 H 80"/>
              <path class="line middle" d="M 20,50 H 80" />
              <path class="line bottom" d="M 20,70 H 80"/>
            </svg>
        </button>
    </div>
    <dialog id="navbar_mobile" class="modal w-full h-full bg-black/80">
        <div class="modal-box p-0 rounded-xl overflow-hidden flex flex-col bg-transparent items-center max-w-56 shadow-none">
            <a on:click={() => close_dialog_button.click()} href={$page.url.pathname == "/" ? "#works" : "/#works"} class="w-full hover:bg-white/5 text-center pt-7 pb-[1.76rem] text-lg">Works</a>
            <a on:click={() => close_dialog_button.click()} href={$page.url.pathname == "/" ? "#skills" : "/#skills"} class="w-full hover:bg-white/5 text-center py-7 text-lg border-y border-gray-2">Skills</a>
            <a on:click={() => close_dialog_button.click()} href={$page.url.pathname == "/" ? "#services" : "/#services"} class="w-full hover:bg-white/5 text-center pb-7 pt-[1.76rem] text-lg">Services</a>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button bind:this={close_dialog_button} on:click={() => {navbar_open = !navbar_open;}}>close</button>
        </form>
    </dialog>
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

    .line {
        stroke-width: 5;
        transition: all 500ms;
    }

    .top {
        transform-origin: 26px 40px;
    }

    .middle {
        stroke-dasharray: 60 60;
    }

    .bottom {
        transform-origin: 26px 60px;
    }

    .hamburger-menu.open .top {
        transform: rotate(45deg);
    }

    .hamburger-menu.open .middle {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
    }

    .hamburger-menu.open .bottom {
        transform: rotate(-45deg);
    }
</style>