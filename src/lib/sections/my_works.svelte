<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';

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

<div style="padding-top: {worksParentHeight * .1}px;" class="relative flex justify-center z-10 w-full bg-gradient-to-b from-black/0 via-10% via-black to-black">
    <div class="relative z-20 flex flex-col gap-8 w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-2 md:mx-4 lg:mx-5 xl:mx-8 py-48">
        <h2 class="text-6xl font-semibold text-white font-title">
            My works
        </h2>

        <div id="works-parent" class="flex flex-col gap-8">

            <div class="flex justify-start">
                <div style="width: calc({worksParentWidth}px - 20%);" class="bg-white rounded flex gap-6 p-6 h-72">
                    <div class="w-72 flex flex-col justify-center items-center rounded bg-red-500 shrink-0">Immagine</div>

                    <div class="flex flex-col gap-2 pt-3 pb-2.5">
                        <h3 class="font-semibold text-2xl">Titolo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident, sed mollitia deserunt cumque iusto ad eos facilis labore perferendis architecto aspernatur eum consectetur dignissimos, tempora doloremque inventore quibusdam! Mollitia.</p>
                        
                        <div class="mt-auto flex flex-col gap-1">
                            <p class="text-gray-2 font-semibold text-sm">Skills used</p>
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <Icon icon="skill-icons:html" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:css" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:javascript" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:svelte" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:linux" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:figma" class="w-6 h-6"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <div style="width: calc({worksParentWidth}px - 20%);" class="bg-white rounded flex gap-6 p-6 h-72">
                    <div class="w-72 flex flex-col justify-center items-center rounded bg-red-500 shrink-0">Immagine</div>

                    <div class="flex flex-col gap-2 pt-3 pb-2.5">
                        <h3 class="font-semibold text-2xl">Titolo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident, sed mollitia deserunt cumque iusto ad eos facilis labore perferendis architecto aspernatur eum consectetur dignissimos, tempora doloremque inventore quibusdam! Mollitia.</p>
                        
                        <div class="mt-auto flex flex-col gap-1">
                            <p class="text-gray-2 font-semibold text-sm">Skills used</p>
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <Icon icon="skill-icons:html" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:css" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:javascript" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:svelte" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:linux" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:figma" class="w-6 h-6"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-start">
                <div style="width: calc({worksParentWidth}px - 20%);" class="bg-white rounded flex gap-6 p-6 h-72">
                    <div class="w-72 flex flex-col justify-center items-center rounded bg-red-500 shrink-0">Immagine</div>

                    <div class="flex flex-col gap-2 pt-3 pb-2.5">
                        <h3 class="font-semibold text-2xl">Titolo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident, sed mollitia deserunt cumque iusto ad eos facilis labore perferendis architecto aspernatur eum consectetur dignissimos, tempora doloremque inventore quibusdam! Mollitia.</p>
                        
                        <div class="mt-auto flex flex-col gap-1">
                            <p class="text-gray-2 font-semibold text-sm">Skills used</p>
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <Icon icon="skill-icons:html" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:css" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:javascript" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:svelte" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:linux" class="w-6 h-6"/>
                                </li>
                                <li>
                                    <Icon icon="skill-icons:figma" class="w-6 h-6"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>