<template>
    <v-text-field
        placeholder="Продукт"
        @keydown="onEnter"
        v-model="ean"
    >

    </v-text-field>
</template>

<script>
export default {
    data : () => ({
        ean: ""
    }),
    methods: {
        onEnter(event){
            if(event.key === 'Enter'){
                this.$Axios.post('/index.php?route=japi/product/find', {ean : this.ean})
                .then((res) => {
                    let product = res.data;
                    this.$emit('product-found', product);
                })
            }
        }
    }
}
</script>