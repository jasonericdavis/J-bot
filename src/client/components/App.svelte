<script>
    export let name = 'Jason'
</script>

<style>
    h1 {
        background-color: orange;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 150px;
        grid-template-rows: 1fr;
        height: 100vh;
    }

    .window {
        background-color: yellow;
    }

    .sidebar {
        background-color: green;
    }
</style>

<div class="wrapper">
    <div class="window"></div>
    <div class="sidebar">
        <h1>Hello {name}</h1>
    </div>
</div>
