<template>
    <tr>
          <td>
            <v-img
              :src="product.popup"
              aspect-ratio="1"
              class="grey lighten-2"
              min-width="100"
              min-height="50"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </td>
          <td>{{ product.name }}</td>
          <td>
            <number-input :value="product.count" @input="onCountChanged"></number-input>
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.total }}</td>
    </tr>
</template>

<script>
import NumberInput from './NumberInput'
export default {
    components: {
        NumberInput
    },
    name: "product-in-table",
    created(){
        this.product = this.value;
    },
    props: {
        value: Object
    },
    data: () => ({
        product: {}
    }),
    methods : {
        onCountChanged(val){
            this.product.count = val;
            this.$emit('count-updated', this.product);
        }
    }
}
</script>