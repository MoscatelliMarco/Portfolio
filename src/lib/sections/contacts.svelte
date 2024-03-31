<script>
    import { enhance } from "$app/forms";
    import Icon from "@iconify/svelte";
</script>

<form use:enhance action="?/contact" method="POST" class="relative z-20 bg-black flex justify-center">
    <div class="relative grid grid-cols-2 gap-12 w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-2 md:mx-4 lg:mx-5 xl:mx-8 py-48">
        <div class="flex flex-col sticky h-fit top-0 gap-3">
            <h5 class="text-4xl font-semibold font-title">Any doubt?</h5>
            <p class="text-gray-3">Do you have any special requests? Not sure if I am the right person? Or maybe you just want to be sure about the price? Don't hesitate to contact me to clear any doubt.</p>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-0.5">
                <label for="name" class="text-gray-2 text-sm uppercase">Name</label>
                <input class="rounded-sm bg-gray-1 px-3 py-2 border border-gray-2" id="name" name="name" type="text">
            </div>
            <div class="flex flex-col gap-0.5">
                <label for="email" class="text-gray-2 text-sm uppercase">Email</label>
                <input class="rounded-sm bg-gray-1 px-3 py-2 border border-gray-2" id="email" name="email" type="text">
            </div>
            <div class="flex flex-col gap-0.5">
                <label for="message" class="text-gray-2 text-sm uppercase">Message</label>
                <textarea class="rounded-sm bg-gray-1 h-36 px-3 py-2 border border-gray-2" name="message" id="message"></textarea>
            </div>
            <div class="flex justify-between items-center mt-4">
                <a href="mailto:info@marcomoscatelli.com" class="flex gap-1 items-center text-gray-3 hover:text-gray-4 font-medium">
                    <Icon icon="ic:round-email" class="h-5 w-5"/>
                    <p>info@marcomoscatelli.com</p>
                </a>
                <button class="bg-gradient-to-r from-pink/80 to-orange/80 hover:from-pink/90 hover:to-orange/90 px-10 py-2 rounded-sm flex gap-1 items-center border border-white font-medium">
                    Send
                    <Icon icon="mingcute:send-fill" />
                </button>
            </div>
        </div>
    </div>
</form>