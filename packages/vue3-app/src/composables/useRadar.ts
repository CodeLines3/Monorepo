import { reactive } from 'vue'

import { graphic, use } from 'echarts/core'
import { RadarChart } from 'echarts/charts'

use([RadarChart])

//
export default function useRadar(param: never) {
  const { strongIndicator, weakIndicator, strongData, weakData } = param
  const label = { show: true, color: 'inherit', fontSize: 14 }
  const strong = {
    type: 'radar',
    emphasis: {
      lineStyle: { width: 4 }
    },
    label,
    data: [
      {
        value: strongData,
        name: 'Strong',
        areaStyle: {
          color: new graphic.RadialGradient(0.5, 0.5, 1, [
            { color: 'rgba(255, 145, 124, 1)', offset: 0 },
            { color: 'rgba(255, 145, 124, 0)', offset: 1 }
          ])
        }
      }
    ]
  }
  const weak = {
    type: 'radar',
    radarIndex: 1,
    label,
    data: [
      {
        value: weakData,
        name: 'Weak'
      }
    ]
  }
  const axisName = {
    color: '#111',
    fontSize: 16
  }
  const radius = '80%'
  const strongRadar = {
    indicator: strongIndicator,
    // center: ["25%", "55%"],
    center: ['50%', '55%'],
    radius,
    axisName,
    startAngle: 60
  }
  const weakRadar = {
    indicator: weakIndicator,
    center: ['75%', '55%'],
    splitNumber: 1,
    shape: 'circle',
    radius,
    axisName,
    splitArea: {
      areaStyle: {
        color: new graphic.RadialGradient(0.5, 0.5, 1, [
          { color: '#ccc', offset: 0 },
          { color: 'rgba(0, 0, 0, 0.5)', offset: 1 }
        ])
      }
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  }
  const paramOption: unknown = reactive({
    color: ['#f60', '#0dd'],
    legend: {
      itemGap: 32,
      align: 'right'
    },
    radar: [strongRadar],
    grid: {
      top: 140
    },
    series: [strong] // , weak
  })
  return paramOption
}
