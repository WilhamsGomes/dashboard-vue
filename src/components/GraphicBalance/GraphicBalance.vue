<template>
  <div class="graphic">
    <div id="chart">
      <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import VueApexCharts from "vue3-apexcharts";

  export default defineComponent({
      name:"GraphicBalance",
      data (){
          return{
            series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'series2',
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            chartOptions: {
              colors: ['#2C2A36', '#F74C41'],
              chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          }
      },
      components:{
        apexchart: VueApexCharts,
      }
  })
</script>

<style scoped>

.graphic{
    background-color: #1E1D26;
    max-width: 100%;
    height: 60vh;
    border-radius: 12px;
    padding: 20px;
}

#chart{
  height: 20vh !important;
}

</style>