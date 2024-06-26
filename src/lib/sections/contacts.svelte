<script>
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    import { Shine } from "svelte-ux";

    let name_error = "";
    let email_error = "";
    let message_error = "";
    let isSendLoading = false;
    let submit_button;
    let submit_button_hidden;

    onMount(() => {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let timer;
        const delay = 800;
        name.addEventListener("keyup", () => {
            clearTimeout(timer);
            timer = setTimeout(() => {validateInput(name.value, "name");}, delay);
        });

        email.addEventListener("keyup", () => {
            clearTimeout(timer);
            timer = setTimeout(() => {validateInput(email.value, "email");}, delay);
        });

        message.addEventListener("keyup", () => {
            clearTimeout(timer);
            timer = setTimeout(() => {validateInput(message.value, "message");}, delay);
        });

        submit_button.addEventListener("click", () => {
            validateInput(name.value, "name");
            validateInput(email.value, "email");
            validateInput(message.value, "message");

            if (!(name_error || email_error || message_error)) {
                isSendLoading = true;
                submit_button_hidden.click();
            }
        })
    })

    function validateInput(input, type) {
        if (type === "name") {
            if (input.length === 0) {
                name_error = "Name is required";
            } else if (input.length > 50 || input.length < 4) {
                name_error = "Name must be between 4 and 50 characters";
            } else {
                name_error = "";
            }
        } else if (type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.length === 0) {
                email_error = "Email is required";
            } else if (!emailRegex.test(input)) {
                email_error = "Invalid email address";
            } else if (input.length < 5 || input.length > 80) {
                email_error = "Email must be between 5 and 80 characters";
            } else {
                email_error = "";
            }
        } else if (type === "message") {
            if (input.length === 0) {
                message_error = "Message is required";
            } else if (input.length < 20 || input.length > 500) {
                message_error = "Message must be between 20 and 500 characters";
            } else {
                message_error = "";
            }
        }
    }

    // After form store changes put it back remove the message after x milliseconds
    let form_response = {}; // This is added because $page can't be overwritten manualy (discovered from testing)
    $: if($page.form) {
        isSendLoading = false;
        form_response = {...$page.form};
        setTimeout(() => {
            form_response = {};
        }, 8000)
    }
</script>

<form id="contact" use:enhance action="?/contact" method="POST" class="relative z-20 bg-black flex justify-center">
    <div class="relative flex flex-col lg:flex-row gap-8 lg:gap-12 section-box py-52">
        <div id="sticky-js" class="flex flex-col relative lg:sticky h-fit lg:top-22 gap-3 w-full lg:w-2/5 shrink-0">
            <h5 class="text-4xl font-semibold font-title">Any doubt?</h5>
            <p class="text-gray-3">Do you have any special requests? Not sure if I am the right person? Or maybe you just want to be sure about the price? Don't hesitate to contact me to clear any doubt.</p>
        </div>

        <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-0.5">
                <label for="name" class="text-gray-2 text-sm uppercase">Name</label>
                <input class="focus:outline-none focus:border-orange/50 rounded-sm bg-gray-1 px-3 py-2 border border-gray-2" id="name" name="name" type="text">
                {#if name_error}
                    <div transition:slide={{duration: 200}} class="flex items-center gap-1.5 text-error pt-1">
                        <Icon icon="mdi:error-outline" class="h-5 w-5" />
                        <p class="font-medium">{name_error}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col gap-0.5">
                <label for="email" class="text-gray-2 text-sm uppercase">Email</label>
                <input class="focus:outline-none focus:border-orange/50 rounded-sm bg-gray-1 px-3 py-2 border border-gray-2" id="email" name="email" type="text">
                {#if email_error}
                    <div transition:slide={{duration: 200}} class="flex items-center gap-1.5 text-error pt-1">
                        <Icon icon="mdi:error-outline" class="h-5 w-5" />
                        <p class="font-medium">{email_error}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col gap-0.5">
                <label for="message" class="text-gray-2 text-sm uppercase">Message</label>
                <textarea class="focus:outline-none focus:border-orange/50 rounded-sm bg-gray-1 h-36 px-3 py-2 border border-gray-2" name="message" id="message"></textarea>
                {#if message_error}
                    <div transition:slide={{duration: 200}} class="flex items-center gap-1.5 text-error pt-1">
                        <Icon icon="mdi:error-outline" class="h-5 w-5" />
                        <p class="font-medium">{message_error}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center mt-4">
                <a href="mailto:info@marcomoscatelli.com" class="flex gap-1 md:gap-1.5 items-center text-gray-3 hover:text-gray-4 font-medium">
                    <Icon icon="ic:round-email" class="h-5 w-4 md:h-5 md:w-5"/>
                    <p class="text-sm md:text-base">info@marcomoscatelli.com</p>
                </a>
                <Shine lightRadius=250 depth=1 surfaceScale=2 specularConstant=0.35>
                    <button  bind:this={submit_button} type="button" class="w-full sm:w-auto justify-center px-28 lg:px-16 xl:px-20 bg-gradient-to-r from-pink/80 to-orange/80 py-2 rounded-sm flex items-center border border-white font-medium">
                        {#if isSendLoading}
                            <div transition:slide={{axis: "x", duration: 300}} class="overflow-hidden pr-2.5">
                                <svg class="h-4 w-4 rotate object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...$$props}>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M12 3C16.9706 3 21 7.02944 21 12" transform="rotate(360 12 12)" />
                                </svg>
                            </div>
                        {/if}
                        Send
                        <Icon icon="mingcute:send-fill" class="mt-0.5 ml-1" />
                    </button>
                </Shine>
                <button bind:this={submit_button_hidden} type="submit" class="hidden" aria-label="hidden"></button>
            </div>
            {#if form_response?.error}
                <div transition:slide={{duration: 200}} class="flex gap-1.5 text-error pt-1.5">
                    <Icon icon="mdi:error-outline" class="h-5 w-5 mt-0.5" />
                    <p class="font-medium">{@html $page.form?.error}</p>
                </div>
            {:else if form_response?.success}
                <div transition:slide={{duration: 200}} class="flex items-center gap-2 text-info pt-1.5">
                    <Icon icon="mdi:information-outline" class="h-5 w-5" />
                    <p class="font-medium">Message sent</p>
                </div>
            {/if}
        </div>
    </div>
</form>

<style>
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .rotate {
        display: inline-block;
        animation: rotate 1s linear infinite;
    }

    .slideIn {
        transform: translateX(0%);
        transition: transform 0.3s ease;
    }
    .slideOut {
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
</style>