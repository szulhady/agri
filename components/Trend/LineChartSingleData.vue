<template>
  <div class="container-chart">
    <div
      class="chart"
      :id="id"
      style="width: 100%;height:280px"
      :data="data"
      :xAxis="xAxis"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sensorUnit: ["mg/l", "°C", "unit", "ppt", "mg/l"]
    };
  },

  mounted() {
    var option2 = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: ["Current"],
        textStyle: {
          fontSize: 12
        }
      },
      xAxis: {
        name: this.xAxis,
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom"
        },
        type: "category",
        data: this.dailyHour
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12
        },
        name: this.sensorUnit[this.index],
        type: "value",
        min: this.axisMin,
        max: this.axisMax,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12
        }
      },

      series: [
        {
          //min data set
          name: "Current",
          data: this.data,
          type: "line",
          fontSize: 30,
          color: "#36c25b",
          areaStyle: { color: "rgba(135, 211, 124, 1)" },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function(d) {
              return d.name + d.data;
            }
          }
        }
      ]
    };
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById(this.id));

      myChart.setOption(option2, true);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }, 500);
  },

  updated() {
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: ["Current"],
        textStyle: {
          fontSize: 12
        }
      },
      xAxis: {
        name: this.xAxis,
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom"
        },
        type: "category",
        data: this.dailyHour
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12
        },
        name: this.sensorUnit[this.index],
        type: "value",
        min: this.axisMin,
        max: this.axisMax,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12
        }
      },

      series: [
        {
          //min data set
          name: "Current",
          data: this.data,
          type: "line",
          fontSize: 30,
          color: "#36c25b",
          areaStyle: { color: "rgba(135, 211, 124, 1)" },

          label: {
            color: "black",
            fontSize: 15,
            formatter: function(d) {
              return d.name + d.data;
            }
          }
        }
      ]
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  },

  props: ["id", "data", "dailyHour", "xAxis", "axisMin", "axisMax", "index"]
};
</script>

<style scoped>
.container-chart {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.chart {
  padding: 0 auto;
}
</style>
