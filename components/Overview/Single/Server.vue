<template>
  <div class="level">
    <div
      id="server"
      :speed="speed"
      :temperature="temperature"
      :disc="disc"
    ></div>
  </div>
</template>

<script>
var myChart;
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
            max: 100,
            splitNumber: 10,
            center: ["35%", "50%"],
            radius: "90%",
            axisLine: {
              lineStyle: {
                width: 10,
                color: [
                  [0.2, "#91c7ae"],
                  [0.8, "#63869e"],
                  [1, "#c23531"]
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              distance: 0,
              length: 5,
              lineStyle: {
                color: "auto"
              }
            },
            splitLine: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "auto"
              }
            },
            axisLabel: {
              // borderRadius: 2,
              // distance:12,
              color: "#333",
              padding: 3,
              fontSize: "0.8em"
            },
            title: {
              fontSize: "0.8em",
              offsetCenter: ["0", "80%"]
            },
            detail: {
              show: false
            },
            data: [{ value: this.disc, name: "Disc (%)" }]
          },
          {
            name: "Temperature",
            type: "gauge",
            center: ["75%", "45%"],
            radius: "70%",
            min: 0,
            max: 100,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              lineStyle: {
                width: 8,
                color: [
                  [0.2, "#91c7ae"],
                  [0.8, "#63869e"],
                  [1, "#c23531"]
                ]
              }
            },
            pointer: {
              width: 4,
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              splitNumber: 5,
              distance: 0,
              length: 5,
              lineStyle: {
                color: "auto"
              }
            },
            title: {
              fontSize: "0.8em",
              offsetCenter: ["0", "-115%"]
            },
            axisLabel: {
              distance: 12,
              color: "#333",
              padding: 3,
              fontSize: "0.8em"
            },
            splitLine: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "auto"
              }
            },
            detail: {
              show: false
            },
            data: [{ value: this.temperature, name: "Temperature (°C)" }]
          },
          {
            name: "Speed",
            type: "gauge",
            center: ["75%", "45%"],
            radius: "70%",
            min: 0,
            max: 3000,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              lineStyle: {
                width: 8,
                color: [
                  [0.2, "#91c7ae"],
                  [0.8, "#63869e"],
                  [1, "#c23531"]
                ]
              }
            },
            pointer: {
              width: 4,
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              splitNumber: 5,
              distance: 0
            },
            splitLine: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "auto"
              }
            },
            axisLabel: {
              distance: 10,
              color: "#333",
              padding: 3,
              fontSize: "0.8em"
            },
            pointer: {
              width: 4,
              itemStyle: {
                color: "auto"
              }
            },
            title: {
              fontSize: "0.8em",
              offsetCenter: ["0", "118%"]
            },
            detail: {
              show: false
            },
            data: [{ value: this.speed, name: "Speed (MHz)" }]
          }
        ]
      }
    };
  },
  methods: {
    interval1: function() {
      setInterval(() => {
        this.option.series[0].data[0].value =
          (Math.random() * 100).toFixed(2) - 0;
        this.option.series[1].data[0].value =
          (Math.random() * 100).toFixed(2) - 0;
        this.option.series[2].data[0].value =
          (Math.random() * 3000).toFixed(2) - 0;
        myChart.setOption(this.option, true);
      }, 2000);
    }
  },
  mounted() {
    setTimeout(() => {
      myChart = this.$echarts.init(document.getElementById("server"));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }, 100);

    // this.interval1()
  },
  updated() {
    const option = {
      tooltip: {
        formatter: "{a} <br/>{c}"
      },
      series: [
        {
          name: "Disc",
          type: "gauge",
          z: 3,
          min: 0,
          max: 100,
          splitNumber: 10,
          center: ["35%", "50%"],
          radius: "90%",
          axisLine: {
            lineStyle: {
              width: 10,
              color: [
                [0.2, "#91c7ae"],
                [0.8, "#63869e"],
                [1, "#c23531"]
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            distance: 0,
            length: 5,
            lineStyle: {
              color: "auto"
            }
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: "auto"
            }
          },
          axisLabel: {
            // borderRadius: 2,
            // distance:12,
            color: "#333",
            padding: 3,
            fontSize: "0.8em"
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "80%"]
          },
          detail: {
            show: false
          },
          data: [{ value: this.disc, name: "Disc (%)" }]
        },
        {
          name: "Temperature",
          type: "gauge",
          center: ["75%", "45%"],
          radius: "70%",
          min: 0,
          max: 100,
          startAngle: 135,
          endAngle: 45,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              width: 8,
              color: [
                [0.2, "#91c7ae"],
                [0.8, "#63869e"],
                [1, "#c23531"]
              ]
            }
          },
          pointer: {
            width: 4,
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            splitNumber: 5,
            distance: 0,
            length: 5,
            lineStyle: {
              color: "auto"
            }
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "-115%"]
          },
          axisLabel: {
            distance: 12,
            color: "#333",
            padding: 3,
            fontSize: "0.8em"
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: "auto"
            }
          },
          detail: {
            show: false
          },
          data: [{ value: this.temperature, name: "Temperature (°C)" }]
        },
        {
          name: "Speed",
          type: "gauge",
          center: ["75%", "45%"],
          radius: "70%",
          min: 0,
          max: 3000,
          startAngle: 315,
          endAngle: 225,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              width: 8,
              color: [
                [0.2, "#91c7ae"],
                [0.8, "#63869e"],
                [1, "#c23531"]
              ]
            }
          },
          pointer: {
            width: 4,
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            splitNumber: 5,
            distance: 0
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: "auto"
            }
          },
          axisLabel: {
            distance: 10,
            color: "#333",
            padding: 3,
            fontSize: "0.8em"
          },
          pointer: {
            width: 4,
            itemStyle: {
              color: "auto"
            }
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "118%"]
          },
          detail: {
            show: false
          },
          data: [{ value: this.speed, name: "Speed (MHz)" }]
        }
      ]
    };
    myChart = this.$echarts.init(document.getElementById("server"));
    myChart.setOption(option, true);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  },
  props: ["disc", "temperature", "speed"]
};
</script>

<style scoped>
#server {
  width: 100%;
  height: 278px;
}

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  #server {
    width: 100%;
    height: 220px;
  }
}
/* Iphone XR */
@media (max-width: 376px) {
  #server {
    width: 100%;
    height: 210px;
  }
}
/* MOTO G4/ Galaxy S5 */
@media (max-width: 360px) {
  #server {
    width: 100%;
    height: 200px;
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
}

/* Galaxy Fold */
@media (max-width: 300px) {
  #server {
    width: 100%;
    height: 170px;
  }
}
</style>
