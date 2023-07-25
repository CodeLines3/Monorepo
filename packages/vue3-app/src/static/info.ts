// head list
export const Head = [
  { label: "教育", key: "edu" },
  { label: "工作", key: "worker" },
  { label: "项目", key: "project" },
  { label: "技能", key: "SAPS" },
  // { label: '其他', key: 'etc' },
];
// 基本信息
export const Info = [
  { label: "姓名", value: "孙宏新" },
  { label: "邮箱", value: "sunhongxin_job@163.com" },
  { label: "年月", value: "1996.05-男" },
  { label: "电话", value: "18355405800" },
];
// 工作经历
export const Jobs: any[] = [
  {
    id: "nanjing",
    firm: "南京恒歌零一信息科技有限公司",
    sub: "二十八所外包",
    post: "Web (前端)开发<28所军工>",
    time: "2019.05 - 2022.05",
    depart: "正常合同到期。",
    description: [
      "数据分析、可视化图表、实时数据处理、并发、内部 WebGIS (非公网 WebGIS库，非 SDK  开发，请认真查看)。",
      "项目从0到1技术选型、环境搭建、公用组件编写和复用模块提取、打包静态部署、出差交付、后期维护；",
      "改造项目移植功能从C++→Angular、Vue ，提供可行性技术方案、解决关键技术问题（实现关健功能 Demo code）；",
      "接手项目、重构，提升开发效率，改善用户体验（例如：保证功能完整前提能以原项目50%代码量实现并提升速度）等其他工作。",
    ],
  },
  {
    id: "hefei",
    firm: "庐江中合农产品市场有限公司",
    post: "信息部员工",
    time: "2018.06 - 2018.12",
    depart: "组织结构变更，工作地点变更。",
    description: [
      "在时，中国供销背景。主要以农产品批发、线上农产品商城为主要业务；",
      "工作内容主要负责上游商户和下游客户交易协调往来，深入市场一线调研，了解农副产品批发、流通中的痛点，集思广益提供解决方案；",
      "作为甲方参与线上商城平台的需求分析并且出差同乙方对接。其他工作包括机房运维、市场等工作。",
    ],
  },
];
// 项目经历
export const Projects: any[] = [
  {
    id: "nanjing",
    name: "军工项目",
    time: "2019.05 - 2022.05",
    description: `1、可视化开发：使用最新生态插件库，基于插件自定义实现符合设计的效果图。基于现有数据进行图和表的分析、人工编辑整饬，并能提供出图、出表、出报告，总体实现类 office  多软件功能在同一系统集成，提供模板简化操作，为操作员减负。
    2、数据并发下实现地图推点、列表实时显示。
    3、基于C端类似 qwebchannel  等插件，将网页同C端能力系统嵌入集成，包括通信、原C端代码实现转为 JS  实现等工作。
    4、基于 Node-ws  实现联合系统之间数据转发共享、通信。
    5、WebGIS 地图开发：使用内部部门提供技术支持二次开发（该地图库为 openlayer  封装），要素上图、人工地图干预编辑、出图存档提供相关技术分析支撑。（这部分只是工作一部分，业务为主，并且未用外面常用地图，有招聘 GIS 开发的注意！非引擎和 SDK 开发）
    技术点应用见-技能'。
  `,
    desc: [
      "可视化开发：使用最新生态插件库，基于插件自定义实现符合设计的效果图。基于现有数据进行图和表的分析、人工编辑整饬，并能提供出图、出表、出报告，总体实现类 office  多软件功能在同一系统集成，提供模板简化操作，为操作员减负；",
      "WebGIS 地图开发：使用内部部门提供技术支持二次开发（该地图库为 openlayer  封装），要素上图、人工地图干预编辑、出图存档提供相关技术分析支撑。（这部分只是工作一部分，业务为主，并且未用外面常用地图，有招聘 GIS 开发的注意！非引擎和 SDK 开发）；",
      "数据并发下实现地图推点、列表实时显示；",
      "基于 Node-ws 实现联合系统之间数据转发共享、通信。",
    ],
    result: [
      "基本完善 Web  开发生态，为后续项目方面积累重要经验以便于快速启动新项目；",
      "以少数的人工实现紧急和复杂开发，现场快速响应相关领导要求并实时反馈，缩短项目开发周期；",
      "参与过往项目取得领导和专家的认可。出差交付完成后重要成果取得了内部文件表扬；",
      "保质保量、按时完成任务",
    ],
  },
];
export const ProLabels: any[] = [
  { label: "", key: "time", span: 6, xs: { span: 24 } },
  { label: "项目名称", key: "name", span: 12, xs: { span: 24 } },
  { label: "项目描述", key: "description", lis: true },
  { label: "项目业绩", key: "result" },
  // { label: '技术栈', key: 'stack', href: '#ability' },
];
// 个人特点
export const Feature = {
  strongIndicator: [
    { max: 100, text: "不设边界" },
    { max: 100, text: "客观求实" },
    { max: 100, text: "韧性" },
    { max: 100, text: "热爱工作" },
    { max: 100, text: "独立" },
    { max: 100, text: "攻坚" },
  ],
  weakIndicator: [
    { max: 100, text: "沟通合作" },
    { max: 100, text: "拒绝内卷" },
    { max: 100, text: "社交" },
    { max: 100, text: "无所好" },
    { max: 100, text: "无所恶" },
  ],
  strongData: [80, 90, 60, 70, 98, 86],
  weakData: [70, 100, 40, 50, 50],
};
// 项目经历
export const Edu = [
  { label: "学历", value: "本科 · 统招全日制" },
  { label: "专业", value: "计算机科学与技术" },
  { label: "时间", value: "2014.09 - 2018.06" },
  { label: "学校", value: "安徽理工大学", url: "https://www.aust.edu.cn" },
];
// 专业技能
export const Ability: any = [
  { key: "root", text: "专业\n技能", figure: "Circle" },
  {
    key: "vue",
    text: "Vue(2、3)",
    dir: "left",
    parent: "root",
    url: ["https://cn.vuejs.org/guide/introduction.html"],
  },
  {
    key: "vue-1",
    text: "VueX、class-component、\nVue Router、Pinia",
    parent: "vue",
    url: [
      "https://vuex.vuejs.org/zh/",
      "https://router.vuejs.org/zh/",
      "https://class-component.vuejs.org/",
      "https://github.com/kaorun343/vue-property-decorator",
      "https://pinia.vuejs.org/zh/introduction.html",
    ],
  },
  {
    key: "vue-2",
    text: "elem-ui、vxe-table、axios",
    parent: "vue",
    url: [
      "https://element.eleme.io/#/zh-CN",
      "https://vxetable.cn/#/table/base/basic",
      "https://www.axios-http.cn/docs/intro",
    ],
  },
  {
    key: "es6",
    text: "ECMAScript",
    parent: "root",
    dir: "left",
    url: ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"],
  },
  {
    key: "es6-1",
    text: "TypeScript、RxJS",
    parent: "es6",
    url: [
      "https://www.tslang.cn/docs/handbook/basic-types.html",
      "https://cn.rx.js.org/",
    ],
  },
  { key: "Vis", text: "可视化", parent: "root", dir: "left" },
  {
    key: "Vis-1",
    text: "Svg、*charts等",
    parent: "Vis",
    url: [
      "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial",
      "https://echarts.apache.org/zh/index.html",
      "https://www.highcharts.com.cn/demo/highcharts",
    ],
  },
  {
    key: "Vis-2",
    text: "GoJS、Fabri、Muuri",
    parent: "Vis",
    url: ["https://gojs.net/latest/", "http://fabricjs.com/"],
  },
  { key: "etc", text: "其他", parent: "root", dir: "right" },
  {
    key: "etc-1",
    text: "React 16+",
    parent: "etc",
    url: [
      "https://react.docschina.org/",
      "https://cn.mobx.js.org/",
      "http://react-guide.github.io/react-router-cn/",
    ],
  },
  {
    key: "etc-2",
    text: "Vite、Webpack",
    parent: "etc",
    url: [
      "https://vitejs.cn/config/",
      "https://www.webpackjs.com/configuration/",
    ],
  },
  {
    key: "etc-3",
    text: "Angular6+、ngzerro",
    parent: "etc",
    url: ["http://angular.cn/", "http://ng.ant.design/docs/introduce/zh"],
  },
  {
    key: "etc-4",
    text: "小程序",
    parent: "etc",
    url: ["https://developers.weixin.qq.com/miniprogram/dev/framework/"],
  },
  {
    key: "Node",
    text: "Node",
    parent: "root",
    dir: "left",
    url: ["http://nodejs.cn/api/"],
  },
  {
    key: "Node-1",
    text: "Koa2、mongoose",
    parent: "Node",
    url: [
      "https://www.koajs.com.cn/",
      "http://www.mongoosejs.net/docs/guide.html",
    ],
  },
  {
    key: "Node-2",
    text: "PM2",
    parent: "Node",
    url: ["https://pm2.fenxianglu.cn/docs/start/"],
  },
  { key: "version", text: "版本部署", parent: "root", dir: "right" },
  {
    key: "version-1",
    text: "Git、Svn",
    parent: "version",
    url: ["https://git-scm.com/docs", "https://tortoisesvn.net/"],
  },
  {
    key: "version-2",
    text: "Nginx",
    parent: "version",
    url: ["https://www.linuxcool.com/", "http://nginx.org/en/docs/"],
  },
  { key: "CSS", text: "CSS(3)", parent: "root", dir: "right" },
  {
    key: "CSS-1",
    text: "Tailwind CSS、Sass",
    parent: "CSS",
    url: [
      "https://www.tailwindcss.cn/docs/installation",
      "https://www.sass.hk/",
      "https://less.bootcss.com/features/",
    ],
  },
];
