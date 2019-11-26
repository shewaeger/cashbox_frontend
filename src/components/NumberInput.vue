<template>
	<v-text-field
		label="Количество"
		v-mask="mask"
		@input="onInput"
		:value="valueC.val"
	>
	<template v-slot:append>
		<v-btn @click="onClickUp" text icon color="dark">
			<v-icon>mdi-arrow-up</v-icon>
		</v-btn>
		<v-btn @click="onClickDown" text icon color="dark">
			<v-icon>mdi-arrow-down</v-icon>
		</v-btn>
	</template>
	</v-text-field>
</template>

<script>
export default {
	created(){
		this.valueC = this.value;
	},
	props: {
		value: Object
	},	
  name: "number-input",
  data: () => ({
		mask: "################",
		valueC: Object
  }),
  methods: {
	onInput(str) {
		if(str.length === 0)
			this.valueC.val = 0;
		this.$emit('input', this.valueC.val)
	},
	onClickUp() {
		this.valueC.val++;
		this.$emit('input', this.valueC.val)
	},
	onClickDown() {
		if (this.valueC.val > 0){
			this.valueC.val--;
			this.$emit('input', this.valueC.val)
		}
	}
  }
};
</script>