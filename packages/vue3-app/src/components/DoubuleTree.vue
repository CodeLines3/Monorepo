<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  GraphObject,
  Diagram,
  Node as goNode,
  Shape,
  Binding,
  TextBlock,
  Link,
  TreeModel,
  ToolManager,
  Point,
  TreeLayout,
  DiagramEvent
} from 'gojs'
import { DoubleTreeLayout } from 'gojs/extensionsJSM/DoubleTreeLayout'
import { Ability } from '@/static/info'

const root: any = ref(null) // 挂载节点
const emit = defineEmits(['dbclick'])

// 双击节点
const handleDbClick = (data: any) => {
  const { url, text } = data
  if (text === '小程序') {
    emit('dbclick', data)
  } else {
    url.forEach((e: string) => {
      const winblank = window.open(e)!
      winblank.opener = null
    })
  }
}
const Colors: any = {
  vue: '#42b883',
  es6: '#76ae63',
  Vis: '#e43961',
  Node: '#43853d',
  version: '#f14e32',
  CSS: '#38bdf8',
  etc: '#087ea4',
  root: '#42d392',
  build: '#646cff'
}
let myDiagram: Diagram
function init() {
  const $ = GraphObject.make,
    layout: any = $(DoubleTreeLayout, {
      directionFunction: (n: any) => n.data && n.data.dir !== 'left',
      bottomRightOptions: {
        alignment: TreeLayout.AlignmentCenterChildren
      }
    })
  myDiagram = $(Diagram, root.value, {
    allowDelete: false,
    scrollMode: Diagram.InfiniteScroll,
    initialAutoScale: Diagram.Uniform,
    'toolManager.mouseWheelBehavior': ToolManager.WheelZoom,
    layout
  })

  myDiagram.nodeTemplate = $(
    goNode,
    'Auto',
    {
      isShadowed: true,
      shadowOffset: new Point(2, 2),
      movable: false,
      selectionAdorned: false
    },
    $(
      Shape,
      'RoundedRectangle',
      {
        strokeWidth: 0
      },
      new Binding('figure', 'figure'),
      new Binding('fill', '', data => {
        const { key } = data,
          [head] = key.split('-')
        return Colors[head]
      })
    ),
    $(
      TextBlock,
      { margin: 8, stroke: '#fff' },
      new Binding('text', 'text'),
      new Binding('font', '', data => {
        const { key } = data
        let size = 20
        switch (key) {
          case 'root':
            size = 32
            break
          default:
            break
        }
        return `bold ${size}px sans-serif`
      })
    )
  )

  myDiagram.linkTemplate = $(
    Link,
    {
      selectable: false,
      isSelected: false,
      routing: Link.Orthogonal,
      corner: 5
    },
    $(Shape)
  )
  myDiagram.model = new TreeModel(Ability)

  myDiagram.addDiagramListener('ObjectDoubleClicked', (e: DiagramEvent) => {
    const {
        subject: { part }
      } = e,
      {
        type: { name },
        data
      } = part
    switch (name) {
      case 'Link':
        break
      default:
        handleDbClick(data)
        break
    }
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <div id="tree" ref="root"></div>
</template>
<style scoped></style>
