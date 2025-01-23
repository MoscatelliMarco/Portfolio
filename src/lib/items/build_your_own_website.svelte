<script>
    // IMPORTANT in this version type=="select" is coded and supported but not shown in the final result for UI porpuse, might change in the future
    import { onMount } from "svelte";

    export let price;

    const options = [
        {
            name: "Landing pages",
            type: "number",
            price_unit: 55,
            min: 0,
            max: 99
        },
        {
            name: "Info pages (about, tos, privacy policy, etc...)",
            type: "number",
            price_unit: 15,
            starting_price: 30,
            min: 0,
            max: 99
        },
        {
            name: "Other pages (error, product, listing pages, etc...)",
            type: "number",
            price_unit: 45,
            min: 0,
            max: 99
        },
        "DIVIDER",
        {
            name: "Simple animations",
            type: "checkbox",
            price: 25,
            cancel: ["Complex animations", "Medium complexity animations"]
        },
        {
            name: "Medium complexity animations",
            type: "checkbox",
            price: 40,
            cancel: ["Simple animations", "Complex animations"]
        },
        {
            name: "Complex animations",
            type: "checkbox",
            price: 50,
            cancel: ["Simple animations", "Medium complexity animations"]
        },
        "DIVIDER",
        {
            name: "Admin dashboard",
            type: "checkbox",
            price: 60
        },
        {
            name: "Blog editor page in admin dashboard",
            type: "checkbox",
            price: 50,
            links: ["Admin dashboard", "Database integration"]
        },
        "DIVIDER",
        {
            name: "Database integration",
            type: "checkbox",
            price: 40
        },
        {
            name: "Accounts and authentication",
            type: "checkbox",
            price: 50,
            links: ["Database integration"]
        },
        {
            name: "Image and video management system (If you want images that can be changed from the UI of the website)",
            type: "checkbox",
            price: 50,
            links: ["Database integration"]
        },
        {
            name: "Stripe integration",
            type: "checkbox",
            price: 40,
            links: ["Database integration"]
        },
        "DIVIDER",
        {
            name: "Automatic multilingual support (Google Translate)",
            type: "checkbox",
            price: 40,
            cancel: ["Manual multilingual support"]
        },
        {
            name: "Manual multilingual support",
            type: "checkbox",
            price: 70,
            links: ["Database integration"],
            cancel: ["Automatic multilingual support (Google Translate)"]
        },
        "DIVIDER",
        {
            name: "Google analytics",
            type: "checkbox",
            price: 30
        },
        {
            name: "Deployment and domain configuration",
            type: "checkbox",
            price: 30
        }
    ]

    onMount(() => {
        for (let option of options) {
            let input;
            if (option !== "DIVIDER") {
                input = document.querySelector("#" + getId(option["name"]));
            }

            if (option["type"] == "checkbox") {
                if (input.checked) {
                    $price += option["price"];
                }
                input.addEventListener("change", (event) => {
                    if (event.target.checked) {
                        $price += option["price"];

                        if (option["links"]) {
                            for (let link_name of option["links"]) {
                                const link = document.querySelector("#" + getId(link_name));

                                if (!link.checked) {
                                    link.checked = true;
                                    $price += findOptionByName(link_name)["price"];
                                }
                            }
                        }
                        if (option["cancel"]) {
                            for (let cancel_name of option["cancel"]) {
                                const cancel = document.querySelector("#" + getId(cancel_name));
                                if (cancel.checked) {
                                    cancel.checked = false;
                                    $price -= findOptionByName(cancel_name)["price"];
                                }
                            }
                        }
                    } else {
                        // If there is any option dependant on this just remove the links
                        const links = searchObjectsByName(option["name"]);
                        for (let link_obj of links) {
                            const link = document.querySelector("#" + getId(link_obj["name"]));
                            if (link.checked) {
                                link.checked = false;
                                $price -= link_obj["price"];
                            }
                        }

                        $price -= option["price"];
                    }
                })
            } else if (option["type"] == "select") {
                input.addEventListener("change", (event) => {
                    const price_span = document.querySelector("#" + getId(option["name"]) + "_price");
                    price_span.innerHTML = "€" + event.target.value;

                    $price += parseInt(event.target.value);
                    if (input.dataset.previous_value) {
                        $price -= input.dataset.previous_value;
                    }
                    input.dataset.previous_value = event.target.value;
                })
            } else if (option["type"] == "number") {
                input.addEventListener("input", (event) => {
                    if (parseInt(event.target.value) > 99) {
                        event.target.value = 99;
                    } else if (parseInt(event.target.value) < 0) {
                        event.target.value = 0;
                    } else if (!event.target.value) {
                        event.target.value = 0;
                    } else {
                        event.target.value = parseInt(event.target.value);
                    }

                    $price += parseInt(event.target.value) * option["price_unit"];
                    if (option["starting_price"] && event.target.value != "0" && input.dataset.previous_value == "0") {
                        $price += option["starting_price"];
                    }
                    if (option["starting_price"] && event.target.value == "0" && input.dataset.previous_value != "0") {
                        $price -= option["starting_price"];
                    }
                    if (input.dataset.previous_value) {
                        $price -= parseInt(input.dataset.previous_value) * option["price_unit"];
                    }
                    input.dataset.previous_value = event.target.value;
                })
            }
        }
    })

    // Go from name to ID easily
    function getId(name) {
        return name.replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").replaceAll(".", "").replaceAll(",", "").replaceAll("+", "").toLowerCase()
    }

    // Function to find option by the name
    function findOptionByName(name) {
        return options.find(obj => obj.name === name);
    }

    // Function to search options based on their links
    function searchObjectsByName(name) {
        let foundObjects = [];

        // Iterate through each object in the list
        for (let obj of options) {
            // Check if the object has a 'names' property which is an array
            if (obj.links && Array.isArray(obj.links)) {
                // Check if the nameToSearch exists in the 'names' array of the current object
                if (obj.links.includes(name)) {
                    // If the name is found, add the object to the foundObjects array
                    foundObjects.push(obj);
                }
            }
        }
        // Return the array of found objects
        return foundObjects;
    }
</script>

<div class="col-span-12 lg:col-span-6 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
    <h4 class="text-2xl font-bold font-title text-gradient-primary w-fit">
        Build your own
    </h4>
    <p class="text-5xl font-semibold">            
        €{$price}
    </p>
    <p class="text-gray-2">
        If you have something different in mind, build your website here to clear any doubt about the price.
    </p>
    <ul class="flex flex-col gap-3 text-gray-1 mt-4 overflow-y-auto h-96 scrollable">
        {#each options as option}
            {#if option["type"] == "checkbox"}
                <li class="flex gap-2">
                    <div class="relative mt-0.5">
                        <input checked={option["checked"] ? "true" : ""} class="checkbox-flip h-5 w-5 opacity-0 cursor-pointer" type="checkbox" id="{getId(option["name"])}">
                        <span class="checkbox-span absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                    </div>
                    <label class="text-gray-1" for="{getId(option["name"])}">{option["name"]} - <span class="font-medium">€{option["price"]}</span></label>
                </li>
            {:else if option["type"] == "select"}
                <li class="flex gap-2">
                    <select class="border-orange bg-gray-5 rounded-full border-2 focus:outline-none pl-2 pr-1 py-0.5 text-sm" id="{getId(option["name"])}">
                        {#each Object.keys(option['options']) as element}
                            <option value={option["options"][element]}>{element} - €{option["options"][element]}</option>
                        {/each}
                    </select>
                    <label class="text-gray-1" for="{getId(option["name"])}">{option["name"]} - <span class="font-medium" id="{getId(option["name"])}_price">€{option["options"][Object.keys(option['options'])[0]]}</span></label>
                </li>
            {:else if option["type"] == "number"}
                <li class="flex gap-2">
                    <input style="width: 2.375rem; font-size: 0.825rem;" data-previous_value="0" id="{getId(option["name"])}" class="mt-0.5 h-5 border-orange px-2 bg-gray-5 border-2 rounded-full focus:outline-none" type="text" value="0">
                    <label class="text-gray-1" for="{getId(option["name"])}">{option["name"]} -
                        {#if option["starting_price"]}
                            <span class="font-medium">€{option["starting_price"]}</span> + 
                        {/if}
                        <span class="font-medium">€{option["price_unit"]}<span class="font-normal">/unit</span></span>
                    </label>
                </li>
            {:else if option == "DIVIDER"}
                <li>
                    <div style="height: 1.5px;" class="bg-gradient-to-r from-transparent via-25% via-gray-4 to-transparent w-2/3 rounded-full my-0.5"></div>
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