<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Opencart</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <product-loader
        @product-found="onProductFound"
      ></product-loader>
      <v-spacer></v-spacer>
      <template v-if="products.length != 0">
        <span >Всего: {{ total }}</span>
      </template>
      <v-spacer></v-spacer>
      <span class="text-uppercase font-weight-light">Касса</span>
    </v-app-bar>

    <v-content>
      <div class>
        <v-simple-table class="text-left">
          <thead>
            <tr>
              <th></th>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Цена за шт.</th>
              <th>Всего</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <product-in-table
              v-for="product in products"
              :key="product.product_id"
              :value="product"
              @count-updated="onProductUpdated"
              @product-removed="onProductRemoved"
            >
            </product-in-table>
          </tbody>
        </v-simple-table>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import ProductInTable from './components/ProductInTable'
import ProductLoader from './components/ProductLoader'
export default {
  components: {
    ProductInTable, ProductLoader
  },
  data: () => ({
    products: [],
  }),
  methods: {
		onProductUpdated(product) {
			product.total = product.count.val * product.price;
      let ind = this.$_.findIndex(this.products, o => o.product_id == product.product_id)
      if(ind < 0)
        return;
			this.$set(this.products, ind, product);
    },
    onProductFound(product){
      product.price = -(-product.price);
      product.count = {val : 1};
      product.total = product.price;
      let ind = this.$_.findIndex(this.products, o => o.product_id == product.product_id)
      if(ind < 0){
        this.products.push(product);
      }
      else {
        let upd_product = this.products[ind];
        upd_product.count.val++;
        upd_product.total = upd_product.price * upd_product.count.val;
        this.$set(this.products, ind, upd_product);
      }
    },
    onProductRemoved(product){
      this.products = this.$_.remove(this.products, o => o.product_id != product.product_id);
    }
	},
	computed: {
		total() {
			return this.$_.reduce(this.products, (acc, product) => {
				return acc + product.total;
			}, 0);
		}
	}
};
</script>
