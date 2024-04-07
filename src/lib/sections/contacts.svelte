<script>
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";

    let name_error = "";
    let email_error = "";
    let message_error = "";
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
        form_response = {...$page.form};
        setTimeout(() => {
            form_response = {};
        }, 8000)
    }
</script>

<form id="contact" use:enhance action="?/contact" method="POST" class="relative z-20 bg-black flex justify-center">
    <div class="relative flex flex-col lg:flex-row gap-8 lg:gap-12 section-box py-52">
        <div class="flex flex-col relative lg:sticky h-fit lg:top-22 gap-3 w-full lg:w-2/5 shrink-0">
            <h5 class="text-4xl font-semibold font-title">Any doubt?</h5>
            <p class="text-gray-3">Do you have any special requests? Not sure if I am the right person? Or maybe you just want to be sure about the price? Don't hesitate to contact me to clear any doubt.</p>
        </div>

        <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-0.5">
                <label for="name" class="text-gray-2 text-sm uppercase">Name</label>
                <input class="rounded-sm bg-gray-1 px-3 py-2 border border-gray-2" id="name" name="name" type="text">
                {#if name_error}
                    <div transition:slide={{duration: 200}} class="flex items-center gap-1.5 text-error pt-1">
                        <Icon icon="mdi:error-outline" class="h-5 w-5" />
                        <p class="font-medium">{name_error}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col gap-0.5">
                <label for="email" class="text-gray-2 text-sm uppercase">Email</label>
                <input class="rounded-sm bg-gray-1 px-3 py-2 border border-gray-2" id="email" name="email" type="text">
                {#if email_error}
                    <div transition:slide={{duration: 200}} class="flex items-center gap-1.5 text-error pt-1">
                        <Icon icon="mdi:error-outline" class="h-5 w-5" />
                        <p class="font-medium">{email_error}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col gap-0.5">
                <label for="message" class="text-gray-2 text-sm uppercase">Message</label>
                <textarea class="rounded-sm bg-gray-1 h-36 px-3 py-2 border border-gray-2" name="message" id="message"></textarea>
                {#if message_error}
                    <div transition:slide={{duration: 200}} class="flex items-center gap-1.5 text-error pt-1">
                        <Icon icon="mdi:error-outline" class="h-5 w-5" />
                        <p class="font-medium">{message_error}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center mt-4">
                <a href="mailto:info@marcomoscatelli.com" class="flex gap-1 items-center text-gray-3 hover:text-gray-4 font-medium">
                    <Icon icon="ic:round-email" class="h-5 w-5"/>
                    <p>info@marcomoscatelli.com</p>
                </a>
                <button  bind:this={submit_button} type="button" class="w-full sm:w-auto justify-center px-28 lg:px-16 xl:px-20 bg-gradient-to-r from-pink/80 to-orange/80 hover:from-pink/90 hover:to-orange/90 py-2 rounded-sm flex gap-1 items-center border border-white font-medium">
                    Send
                    <Icon icon="mingcute:send-fill" />
                </button>
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