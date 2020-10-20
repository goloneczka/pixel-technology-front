<template>
    <div >
        <Header/>
        <div class="container" >
            <Luhna/>
            <NearestNeighbour />
        </div>

    </div>
</template>

<script>
    import Header from "./Header";
    import Luhna from "./Luhna";
    import NearestNeighbour from "./NearestNeighbour";

    export default {
        name: 'HelloWorld',
        components: {Luhna, Header, NearestNeighbour}

    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
