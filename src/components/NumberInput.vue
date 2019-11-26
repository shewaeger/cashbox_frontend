<template>
	<v-text-field
		label="Количество"
		v-mask="mask"
		@input="onInput"
		:value="valueC"
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
		value: Number
	},	
  name: "number-input",
  data: () => ({
		mask: "################",
		valueC: 1
  }),
  methods: {
	onInput(str) {
		if(str.length === 0)
			this.valueC = 0;
		this.$emit('input', this.valueC)
	},
	onClickUp() {
		this.valueC++;
		this.$emit('input', this.valueC)
	},
	onClickDown() {
		if (this.valueC > 0){
			this.valueC--;
			this.$emit('input', this.valueC)
		}
	}
  }
};
</script>