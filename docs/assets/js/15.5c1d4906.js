(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{526:function(v,_,e){"use strict";e.r(_);var t=e(6),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("前面已经讲到渲染进程拿到数据流，那本篇则是渲染进程拿到数据后如何进行渲染，本篇内容较多，但是都很重要。")]),v._v(" "),e("h2",{attrs:{id:"构建dom树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建dom树"}},[v._v("#")]),v._v(" 构建DOM树")]),v._v(" "),e("p",[v._v("由于浏览器无法直接识别"),e("code",[v._v("HTML")]),v._v("，所以需要将"),e("code",[v._v("HTML")]),v._v("解析为"),e("code",[v._v("DOM")]),v._v("树；在控制台中输入"),e("code",[v._v("document")]),v._v("就可以返回当前页面的"),e("code",[v._v("DOM")]),v._v("树，此时你会发现这个"),e("code",[v._v("DOM")]),v._v("树和"),e("code",[v._v("HTML")]),v._v("几乎完全一样，但不同的是，这个"),e("code",[v._v("DOM")]),v._v("树是解析后保存在内存中的，所以我们才能通过JS进行查询和修改。")]),v._v(" "),e("h2",{attrs:{id:"样式计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[v._v("#")]),v._v(" 样式计算")]),v._v(" "),e("ul",[e("li",[v._v("和"),e("code",[v._v("HTML")]),v._v("一样浏览器一样无法直接识别"),e("code",[v._v("CSS")]),v._v("，所以当渲染进程接收到"),e("code",[v._v("CSS")]),v._v("文本时会执行转换，将其转换为浏览器可理解的结构。 在浏览器中输入 "),e("code",[v._v("document.styleSheets")]),v._v(" 会返回一个对象，这个对象将包含不同来源的样式。")]),v._v(" "),e("li",[v._v("属性值标准化：诸如em、blue、bold 都会被转换 12px、rgb(0,0,255)、700")]),v._v(" "),e("li",[v._v("根据"),e("code",[v._v("DOM")]),v._v("树计算最终样式，【继承】由于"),e("code",[v._v("CSS")]),v._v("具有继承机制，所以需要获取父节点样式用于计算 ，【层叠】层叠是 "),e("code",[v._v("CSS")]),v._v(" 的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法。它在 "),e("code",[v._v("CSS")]),v._v(" 处于核心地位，"),e("code",[v._v("CSS")]),v._v(" 的全称“层叠样式表”正是强调了这一点。在开发者工具中切换到computed即可查看该元素的最终样式。")])]),v._v(" "),e("h2",{attrs:{id:"布局阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布局阶段"}},[v._v("#")]),v._v(" 布局阶段")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("创建布局树")]),v._v(" "),e("p",[v._v("现在，我们有 "),e("code",[v._v("DOM")]),v._v(" 树和 "),e("code",[v._v("DOM")]),v._v(" 树中元素的样式，但这还不足以显示页面，因为我们还不知道 "),e("code",[v._v("DOM")]),v._v(" 元素的几何位置信息。")]),v._v(" "),e("p",[v._v("你可能注意到了 "),e("code",[v._v("DOM")]),v._v(" 树还含有很多不可见的元素，比如 head 标签，还有使用了 display:none 属性的元素。所以在显示之前，我们还要额外地构建一棵只包含可见元素布局树。如下图所示\n"),e("img",{attrs:{src:v.$withBase("/brower/layouttree.png")}})]),v._v(" "),e("p",[v._v("从上图我们可以看出整个流程将head标签及所有 display:none 全部忽略。")])]),v._v(" "),e("li",[e("p",[v._v("布局计算")]),v._v(" "),e("p",[v._v("现在我们有了一棵完整的布局树。那么接下来，就要计算布局树节点的坐标位置了。再执行计算后会把布局运算结果重新写回布局树中。")])])]),v._v(" "),e("h2",{attrs:{id:"分层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[v._v("#")]),v._v(" 分层")]),v._v(" "),e("p",[v._v("现在我们已经合成了布局树而且每个元素的具体坐标也计算了出来，但此时还不能进行绘制。由于页面中有很多复杂效果，包括3D转换 或者 使用了 z-index 进行z轴排列等。所以渲染引擎需要为**【特定节点】"),e("strong",[v._v("生成一个图层，并合成")]),v._v("【图层树】**。在开发者工具中打开 Layers 面板即可直观的看到页面分层的情况。浏览器的页面实际上被分成了很多图层，这些图层叠加后合成了最终的页面。"),e("img",{attrs:{src:v.$withBase("/brower/layoutandlayers.png")}})]),v._v(" "),e("p",[v._v("通常情况下，并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，"),e("em",[e("strong",[v._v("那么这个节点就从属于父节点的图层")])]),v._v("。***z-index 失效许多时候都与父节点的图层有关。***如上图中的 span 标签没有专属图层，那么它们就从属于它们的父节点图层。但不管怎样，最终每一个节点都会直接或者间接地从属于一个层。")]),v._v(" "),e("p",[v._v("q：那什么情况下会为元素创建单独图层呢？")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("拥有层叠上下文会被提升为单独一层，如: position: flex, z-index, filter 等，具体可参考MDN")])]),v._v(" "),e("li",[e("p",[v._v("当内容超出元素大小，当我们在一个较小的div中插入较多文本就会出现裁剪的情况，渲染引擎会为文字部分单独创建一个层，如果出现滚动条，滚动条也会被提升为单独的层。")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/brower/overflow.png")}})])]),v._v(" "),e("h2",{attrs:{id:"图层绘制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图层绘制"}},[v._v("#")]),v._v(" 图层绘制")]),v._v(" "),e("p",[v._v("一切准备就绪，我们解析"),e("code",[v._v("DOM")]),v._v("树、计算层叠样式、用二者合成布局树、根据层叠上下文生成图层并合成图层树。拿到最终的图层树后，渲染引擎开始对每一个图层进行绘制。")]),v._v(" "),e("p",[v._v("**【生成绘制队列】**渲染引擎会把一个图层的绘制拆分成很多小的绘制指令按顺序形成一个队列；")]),v._v(" "),e("blockquote",[e("p",[v._v("在 layers 中选择 document 点击 profiler 即可看到整个绘制过程。")])]),v._v(" "),e("p",[e("strong",[v._v("【合成】")]),v._v(" 绘制队列只是用来记录绘制指令，而实际的绘制将由渲染进程中的【合成线程】进行绘制，绘制过程如下：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("视口(viewport)：即屏幕可视窗口或当前可视窗口；基于这个原因合成线程会将图层划分为图块，然后合成线程会按照【视口】附近的 【图块】生成**【位图】**，图块 转换为 位图 的过程即栅格化。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在栅格化线程池内执行。"),e("img",{attrs:{src:v.$withBase("/brower/raster.png")}})])]),v._v(" "),e("li",[e("p",[v._v("通常，栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。相信你还记得，GPU 操作是运行在 GPU 进程中，如果栅格化操作使用了 GPU，那么最终生成位图的操作是在 GPU 中完成的，这就涉及到了跨进程操作。具体形式你可以参考下图："),e("img",{attrs:{src:v.$withBase("/brower/gpuraster.png")}})]),v._v(" "),e("p",[v._v("从图中可以看出，渲染进程把生成图块的指令发送给 GPU，然后在 GPU 中执行生成图块的位图，并保存在 "),e("strong",[v._v("GPU 的内存中")]),v._v("。")])])]),v._v(" "),e("h2",{attrs:{id:"最终合成与显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最终合成与显示"}},[v._v("#")]),v._v(" 最终合成与显示")]),v._v(" "),e("p",[v._v("一旦图块都被光栅化后，【合成线程】发出指令“DrawQuad”给浏览器进程。 浏览器进程里的viz组件根据DrawQuad命令，"),e("em",[v._v("将其页面内容绘制到内存中")]),v._v("，最后在将内存显示在屏幕上")]),v._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("ol",[e("li",[v._v("渲染进程将 "),e("code",[v._v("HTML")]),v._v(" 内容转换为能够读懂的 "),e("code",[v._v("DOM")]),v._v(" 树结构。")]),v._v(" "),e("li",[v._v("渲染引擎将 "),e("code",[v._v("CSS")]),v._v(" 样式表转化为浏览器可以理解的 styleSheets，计算出 "),e("code",[v._v("DOM")]),v._v(" 节点的样式。")]),v._v(" "),e("li",[v._v("创建布局树，并计算元素的布局信息。")]),v._v(" "),e("li",[v._v("对布局树进行分层，并生成分层树。")]),v._v(" "),e("li",[v._v("为每个图层生成绘制列表，并将其提交到合成线程。")]),v._v(" "),e("li",[v._v("合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。")]),v._v(" "),e("li",[v._v("合成线程发送绘制图块命令 DrawQuad 给浏览器进程。")]),v._v(" "),e("li",[v._v("浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。")])]),v._v(" "),e("h2",{attrs:{id:"流程图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[v._v("#")]),v._v(" 流程图")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/brower/flowchart.png")}})])}),[],!1,null,null,null);_.default=a.exports}}]);