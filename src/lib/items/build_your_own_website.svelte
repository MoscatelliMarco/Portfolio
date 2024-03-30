<script>
  import { replaceState } from "$app/navigation";
    import { onMount } from "svelte";

    let price = 0;

    const options = [
        {
            name: "Landing page",
            type: "checkbox",
            price: 70
        },
        {
            name: "Admin dashboard",
            type: "checkbox",
            price: 70
        },
        {
            name: "Perfomance graphs in admin dashboard",
            type: "checkbox",
            price: 50
        },
        {
            name: "Manage users in admin dashboard",
            type: "checkbox",
            price: 50
        },
        {
            name: "Blog editor in admin dashboard",
            type: "checkbox",
            price: 50
        },
        {
            name: "Database integration",
            type: "checkbox",
            price: 60
        },
        {
            name: "Accounts and authentication",
            type: "checkbox",
            price: 100
        },
        {
            name: "Image and video management system (If you want images that can be changed from the UI of the website)",
            type: "checkbox",
            price: 80
        },
        {
            name: "Automatic multilingual support (Google Translate)",
            type: "checkbox",
            price: 60
        },
        {
            name: "Manual multilingual support",
            type: "checkbox",
            price: 100
        },
        {
            name: "Google analytics",
            type: "checkbox",
            price: 50
        },
        {
            name: "Deployment and domain configuration",
            type: "checkbox",
            price: 40
        },
    ]

    onMount(() => {
        for (let option of options) {
            const input = document.querySelector("#" + option["name"].replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").toLowerCase());

            if (option["type"] == "checkbox") {
                input.addEventListener("change", (event) => {
                    if (event.target.checked) {
                        price += option["price"];
                    } else {
                        price -= option["price"];
                    }
                })
            }
        }
    })
</script>

<div class="col-span-6 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
    <h4 class="text-2xl font-bold font-title text-gradient-primary w-fit">
        Build your own
    </h4>
    <p class="text-5xl font-semibold">            
        €{price}
    </p>
    <p class="text-gray-2">
        If you have something different in mind build your website here to clear any doubt about the price.
    </p>
    <ul class="flex flex-col gap-3 text-gray-1 mt-2 overflow-y-auto h-64 scrollable">
        {#each options as option}
            {#if option["type"] == "checkbox"}
                <li class="flex gap-2">
                    <div class="relative mt-0.5">
                        <input class="checkbox-flip h-5 w-5 opacity-0 cursor-pointer" type="checkbox" id="{option["name"].replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").toLowerCase()}">
                        <span class="checkbox-span absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                    </div>
                    <label class="text-gray-1" for="{option["name"].replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").toLowerCase()}">{option["name"]} - <span class="font-medium">€{option["price"]}</span></label>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    /* Checkbox flip animation */
    .checkbox-span:before, .checkbox-span:after{
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    z-index: 1;
    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    border: 2px solid #E96138;
    border-radius: 9999px;
    }
    .checkbox-span:after {
    z-index: 0;
    border: none;
    }
    .checkbox-flip:checked ~ .checkbox-span:before {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
    background: linear-gradient(to right, #F21AB6, #E96138);
    }

    /* Customizing the scrollbar */
    .scrollable::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
    }

    /* Styling the scrollbar track */
    .scrollable::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Set the color of the scrollbar track */
    border-radius: 10px; /* Set the border radius to make it rounded */
    }

    /* Styling the scrollbar thumb */
    .scrollable::-webkit-scrollbar-thumb {
    background-color: #BDBDBD; /* Set the color of the scrollbar thumb */
    border-radius: 10px; /* Set the border radius to make it rounded */
    }

    /* Hide the scrollbar buttons (arrows) */
    .scrollable::-webkit-scrollbar-button {
    display: none;
    }
</style>