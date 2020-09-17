<script>
    export let name = '@JasonEricDavis'
    let message = ''

    let socket = new WebSocket(`ws://${location.host}`)
    socket.onopen = function(e) {
        console.log('connection made')
    }

    socket.onmessage = function(e) {
        console.log(`Recieved Message: ${e.data}`);
        message = e.data;
    }
</script>

<style>
    h2 {
        background-color: lightblue;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-template-rows: 1fr 70px;
        height: 100vh;
    }

    .window {
        background-color: transparent;
    }

    .sidebar h2{
        float: right;
        padding-right: 5px;
    }

    .row-bottom {
        grid-column-start: 1;
        grid-column-end: 3;
        color: #0581d3;
        padding: 20px;
        background-color: lightgreen;
    }

    
</style>

<div class="wrapper">
    <div class="window"></div>
    <div class="sidebar">
        <h2>{name}</h2>
    </div>
    <div class="row-bottom">{message}</div>
</div>
