<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)
</script>
<script>
export default {
  data() {
    return chartConfig
  },
}
</script>

<template>
  <Doughnut :data="data" :options="options" />
</template>
