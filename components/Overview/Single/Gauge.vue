<template>
  <div class="level">
    <!-- <v-card class='card-data'> -->
    <v-card-title class="sidebar rounded-lg mb-3">
      {{ description }}
    </v-card-title>
    <div :id="id" style="width: 100%; height: 250px" :data="data"></div>
    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          formatter: "{a} <br/>{c}"
        },
        series: [
          {
            name: "Disc",
            type: "gauge",
            z: 3,
            min: 0,
            max: this.max,
            splitNumber: 10,
            radius: "90%",
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [0.3, "#0fa463"],
                  [0.7, "#eb8934"],
                  [1, "#db3b38"]
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              distance: -20,
              length: 10,
              lineStyle: {
                color: "#ffffff"
              }
            },
            splitLine: {
              distance: -20,
              length: 20,
              lineStyle: {
                color: "#ffffff"
              }
            },
            axisLabel: {
              // borderRadius: 2,
              distance: 30,
              color: "auto",
              padding: 3,
              fontSize: "0.9em"
            },
            title: {
              fontSize: "0.8em",
              offsetCenter: ["0", "95%"]
              // show:false
            },
            detail: {
              fontSize: "1.4em",
              formatter: "{value}",
              offsetCenter: ["0", "75%"],
              color: "auto"
            },
            data: [{ value: this.data, name: this.unit }]
          }
        ]
      }
    };
  },
  mounted() {
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }, 100);
  },
  updated() {
    var option = {
      tooltip: {
        formatter: "{a} <br/>{c}"
      },
      series: [
        {
          name: "Disc",
          type: "gauge",
          z: 3,
          min: 0,
          max: this.max,
          splitNumber: 10,
          radius: "90%",
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.3, "#0fa463"],
                [0.7, "#eb8934"],
                [1, "#db3b38"]
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            distance: -20,
            length: 10,
            lineStyle: {
              color: "#ffffff"
            }
          },
          splitLine: {
            distance: -20,
            length: 20,
            lineStyle: {
              color: "#ffffff"
            }
          },
          axisLabel: {
            // borderRadius: 2,
            distance: 30,
            color: "auto",
            padding: 3,
            fontSize: "0.9em"
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "95%"]
            // show:false
          },
          detail: {
            fontSize: "1.4em",
            formatter: "{value}",
            offsetCenter: ["0", "75%"],
            color: "auto"
          },
          data: [{ value: this.data, name: this.unit }]
        }
      ]
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true);
  },
  props: ["description", "id", "max", "unit", "data"]
};
</script>

<style scoped>
.v-card__title {
  font-size: 1rem;
  padding: 8px 10px 8px 20px;
  color: aliceblue;
}
</style>
