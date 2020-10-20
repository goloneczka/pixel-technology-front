<template>
    <div class="pb-5">
        <h4> Algorytm Luhna</h4>
        <form @submit="checkIsLuhna" method="post">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Podaj ciag cyfr</label>
                <div class="col-sm-4">
                    <input v-model="string" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">sprawdz</button>
            </div>
            <div v-if="response.errors">
                {{response.errors.toString()}}
            </div>
            <div v-if="response.input">
                {{'cyfra kontrolna dla '}}
                <b > {{response.input}} </b>
                {{'wynosi '}}
                <b > {{response.digit}} </b>
                <div v-if="response.digit === 0">
                    - jest to poprawny ciąg
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    import {luhnaService} from '../App'

    export default {
        name: "Luhna",
        data: function () {
            return {
                string: '',
                response: ''
            }
        },
        methods: {
            checkIsLuhna(e) {
                luhnaService.postData(this.string).then((response) => {
                    this.response = response
                })
                e.preventDefault();
            }
        }

    }
</script>

<style scoped>

</style>