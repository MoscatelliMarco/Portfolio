<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';

    let footerHeight = 0;
    onMount(() => {
        window.addEventListener('resize', getFooterHeight);
        getFooterHeight()
    });

    function getFooterHeight () {
        const element = document.getElementById('footer');
        if (element) {
            footerHeight = element.clientHeight;
        }
    }
</script>

<footer id="footer"  style={`padding-top: ${footerHeight * .1}px;`} class="relative z-10 w-full bg-gradient-to-t from-black/0 via-85% via-black to-black items-center">
    <div class="flex flex-col items-center gap-8 justify-center py-24">
        <h4 class="font-title text-3xl font-medium">
            Marco Moscatelli
        </h4>
        <div class="flex flex-col items-center gap-4 w-full backdrop-blur-sm">
            <div style="height: 2px;" class="w-full max-w-xl mx-4 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <ul class="flex gap-16 text-gray-3 text-sm font-medium">
                <li><a href="#works">Works</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
            <div style="height: 2px;" class="w-full max-w-xl mx-4 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        <div class="flex gap-3">
            <a target="_blank" href="https://github.com/MoscatelliMarco">
                <Icon icon="bxl:github" class="text-gray-3 h-8 w-8 backdrop-blur-sm p-1 rounded"/>
            </a>
            <a href="mailto:info@marcomoscatelli.com">
                <Icon icon="bxl:gmail" class="text-gray-3 h-8 w-8 backdrop-blur-sm p-1 rounded" />
            </a>
        </div>
    </div>
</footer>