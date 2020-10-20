<template>
    <div>
        <h4> Algorytm najbliższego sąsiada</h4>
        <div class="row">
            <div class="col-sm-8">
                <div class="row pb-2" v-for="(item, index) in places" v-bind:key="index">
                    <div class="col-sm">
                        <input v-model="item.name" class="form-control" placeholder="nazwa miejsca">
                    </div>
                    <div class="col-sm">
                        <input v-model="item.latitude" class="form-control" placeholder="szerokość geograficzna">
                    </div>
                    <div class="col-sm">
                        <input v-model="item.longitude" class="form-control" placeholder="długość geograficzna">
                    </div>
                    <div class="col-sm-1">
                        <button type="button" class="btn btn-danger" @click="removePlace(index)">X</button>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <button type="submit" class="btn btn-primary" @click="addPlace">dodaj</button>
                    </div>
                    <div class="col-sm">
                        <button type="submit" class="btn btn-primary" @click="getNN">oblicz</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <h5>Posortowane: </h5>
                <div v-if="response.errors">
                    {{response.errors.toString()}}
                </div>
                <div v-else v-for="(item, index) in response" v-bind:key="index">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {nnService} from "../App";

    export default {
        name: "NearestNeighbour",
        data: function () {
            return {
                places: [{
                    name: '',
                    latitude: '',
                    longitude: ''
                }],
                response: []
            }
        },
        methods: {
            addPlace() {
                this.places.push({
                    name: '',
                    latitude: '',
                    longitude: ''
                })
            },
            getNN() {
                if (this.places.length !== 1) {
                    nnService.postData(this.places).then((response) => {
                        this.response = response
                    })
                }
            },
            removePlace(indx) {
                if (this.places.length !== 1)
                    this.places.splice(indx, 1);
            }
        }
    }
</script>

<style scoped>

</style>