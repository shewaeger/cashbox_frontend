<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Opencart</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <product-loader></product-loader>
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
            </tr>
          </thead>
          <tbody>
            <product-in-table
              v-for="product in products"
              :key="product.product_id"
              :value="product"
              @count-updated="onProductUpdated"
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
			product.total = product.count * product.price;
			let ind = this.$_.findIndex(this.products, o => o.product_id == product.product_id)
			this.$set(this.products, ind, product);
		},
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
