<script>
    import NavBar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";

    import "../public/app.css";
    import "../public/global.css";
</script>

<div class="font-body flex flex-col justify-between bg-white text-black">

    <NavBar />

    <body>
        <slot></slot>
    </body>

    <div class="mt-auto">

        <Footer />

    </div>

</div>