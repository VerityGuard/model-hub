<script lang="ts" context="module">
    import "../tailwind.css";
    import "../app.css";
    import Header from "../components/+Header.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<style>
</style>