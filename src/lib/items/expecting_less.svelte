<script>
    import { onMount } from "svelte";

    export let price;

    const options = [
        {
            name: "Start from a template (per page)",
            type: "number",
            price_unit: 15,
            min: 0,
            max: 99
        },
        {
            name: "Use prebuild components (like Bootstrap, Material UI, etc...) (per page)",
            type: "number",
            price_unit: 10,
            min: 0,
            max: 99
        },
        {
            name: "Design not responsive (per page)",
            type: "number",
            price_unit: 10,
            min: 0,
            max: 99
        }
    ]

    // The difference from build your own website is that here operations are done with -1 instead of 1
    onMount(() => {
        for (let option of options) {
            const input = document.querySelector("#" + getId(option["name"]));

            if (option["type"] == "checkbox") {
                if (input.checked) {
                    $price += option["price"] * -1;
                }
                input.addEventListener("change", (event) => {
                    if (event.target.checked) {
                        $price += option["price"] * -1;

                        if (option["links"]) {
                            for (let link_name of option["links"]) {
                                const link = document.querySelector("#" + getId(link_name));

                                if (!link.checked) {
                                    link.checked = true;
                                    $price += findOptionByName(link_name)["price"] * -1;
                                }
                            }
                        }
                        if (option["cancel"]) {
                            for (let cancel_name of option["cancel"]) {
                                const cancel = document.querySelector("#" + getId(cancel_name));
                                if (cancel.checked) {
                                    cancel.checked = false;
                                    $price -= findOptionByName(cancel_name)["price"] * -1;
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
                                $price -= link_obj["price"] * -1;
                            }
                        }

                        $price -= option["price"] * -1;
                    }
                })
            } else if (option["type"] == "select") {
                input.addEventListener("change", (event) => {
                    const price_span = document.querySelector("#" + getId(option["name"]) + "_price");
                    price_span.innerHTML = "€" + event.target.value;

                    $price += parseInt(event.target.value) * -1;
                    if (input.dataset.previous_value) {
                        $price -= input.dataset.previous_value * -1;
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

                    $price += parseInt(event.target.value) * option["price_unit"] * -1;
                    if (option["starting_price"] && event.target.value != "0" && input.dataset.previous_value == "0") {
                        $price += option["starting_price"] * -1;
                    }
                    if (option["starting_price"] && event.target.value == "0" && input.dataset.previous_value != "0") {
                        $price -= option["starting_price"] * -1;
                    }
                    if (input.dataset.previous_value) {
                        $price -= parseInt(input.dataset.previous_value) * option["price_unit"] * -1;
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
  
  <div class="col-span-12 lg:col-span-5 bg-gray-5 rounded px-5 pt-5 pb-6 flex flex-col gap-3">
      <h4 class="text-2xl font-bold font-title text-gradient-primary w-fit">
          Want to pay less?
      </h4>
      <p class="text-5xl font-semibold">            
          €{$price}
      </p>
      <p class="text-gray-2">
          If the price is too high for your budget, there are some changes you can made to save money.
      </p>
      <ul class="flex flex-col gap-3 text-gray-1 mt-4 overflow-y-auto h-48 scrollable">
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
                    <input style="width: 2.375rem; font-size: 0.825rem;" data-previous_value="0" id="{getId(option["name"])}" class="mt-0.5 h-5 border-orange px-2 bg-gray-5 border-2 rounded-full focus:outline-none" type="text" value="0" min="{option["min"]}" max="{option["max"]}">
                    <label class="text-gray-1" for="{getId(option["name"])}">{option["name"]} -
                        {#if option["starting_price"]}
                            <span class="font-medium">€{option["starting_price"]}</span> + 
                        {/if}
                        <span class="font-medium">€{option["price_unit"]}<span class="font-normal">/unit</span></span>
                    </label>
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