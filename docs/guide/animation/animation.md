---
title: 动画模块
---

# animation

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/animation/index" class="demo-box-iframe"></iframe>
</div>

nvue中动画的实现并不是很友好。

- 1. 有时候不用animation模块，动画效果出不来（动态设置的动画），或者不像H5/MP上面那样随意可控；
- 2. nvue-app下不支持keyframe动画；

我们需要一个封装好的动画插件，他需要满足以下功能：

- 1. 易懂，易用；
- 2. 较为统一的去实现各端动画；
- 3. 能实现keyframe的效果；
- 4. js控制动画，并统一有带动画完成的回调等；

我们封装的`animate.js`就能满足要求，后期我们会基于`animate.js`提供很多的优秀动画效果。其实复杂的动画也是由基础的动画组合而成的。

# 原理

- 在nvue-app端，我们使用的是animation模块来实现动画；

- 在非nvue-app端，将动画设置转换为style样式，通过更改style的方式写入动画；

- nvue-app的keyframe效果，我们通过bindingx的timing事件实现；

- 非nvue-app下的keyframe动画，依然通过写keyframe来实现，这里我们不再统一封装；

基于我们的动画库，很多动画效果的实现，将会变得清晰许多。

# 提供的方法

## animate

`animate(ref, options, ins, name, extra)`

- ref：需要设置动画的元素，比如：加入一个元素的ref是refName，那么我们应该传`this.$refs['refName']`；
- options：动画内容；
- ins：页面的Vue实例，尽在nvue-app下有效，配合name来实现元素的style修改；
- name：控制元素动画的style变量名字，只是在非nvue-app下有效。下面我们会讲具体的使用示范；
- extra：一些个性化的其他样式配置，仅在非nvue-app下有效；

animate方法是Promise化的，你可以在then/catch中继续执行某些操作。

下面我们将讲解具体的使用示范：

```html
<view class="ai-box n-bg-inverse n-overflow-hidden n-flex-row n-align-center n-justify-center">
	<!-- 这个盒子将会实现fade效果 -->
	<view ref="fade" class="ai-item n-bg-success n-flex-row n-align-center n-justify-center" :style="fadeAni">
		<text class="n-color-inverse n-size-base">fade</text>
	</view>
</view>
<script>
	export default {
		data() {
			return {
				fadeAni: '' // 非nvue-app下用来控制元素动画的样式
			}
		}，
		methods: {
			fade() {
				const el = this.$refs[name]
				animate(el, {
					styles: {
						opacity: 0
					},
					duration: 500,
					timingFunction: 'ease-in-out'
				}, this, 'fadeAni').then(res=>{
					// 在这里做些别的事情，比如过一会儿再显示fade元素
				}).catch(err=>{
					
				})
			},
		}
	}
</script>
```

我们调用`fade`方法，就会隐藏掉`ref`为`fade`的视图。

在nvue-app端，我们是通过修改`animation`模块实现的，在非nvue-app端，我们是通过修改`fadeAni`变量来实现的，您应该已经注意到了：我们传入了页面vue实例`this`以及状态`fadeAni`。

这里面并不复杂，重点就是`animate`方法的`options`如何设置。

```js
{
	styles: {width: 500},  // 动画内容
	delay: 0,  // 是否延后
	duration: 300,  // 动画时长
	timingFuntion: 'ease-in-out'  // 动画函数
}
```

**具体解释：**

- styles，设置不同样式过渡效果的键值对，下表列出了所有合法的参数：
  - width：表示动画执行后应用到组件上的宽度值。
  - height：表示动画执行后应用到组件上的高度值。
  - backgroundColor：backgroundColor动画执行后应用到组件上的背景颜色。
  - opacity：opacity表示动画执行后应用到组件上的不透明度值。
  - transformOrigin：transformOrigin定义变化过程的中心点，如transformOrigin: x-axis y-axis 参数 x-axis 可能的值为 left、center、right、长度值或百分比值，参数 y-axis 可能的值为 top、center、bottom、长度值或百分比。默认值为center center。
  - transform：transform变换类型，可能包含rotate，translate，scale`及其他属性。默认值为空。
  - translate/translateX/translateY：指定元素要移动到的位置。单位是长度或百分比，默认值是0.
  - rotate/rotateX/rotateY：指定元素将被旋转的角度。单位是度 角度度，默认值是0
  - perspective：观察者距离z=0平面的距离。单位值数字，默认值为正无穷
  - scale/scaleX/scaleY：按比例放大或缩小元素。单位是数字，默认值是1
- duration，duration(number)：指定动画的持续时间 (单位是毫秒)，默认值是 0，表示瞬间达到动画结束状态。
- delay，delay (number)：指定请求动画操作到执行动画之间的时间间隔 (单位是毫秒)，默认值是 0，表示没有延迟，在请求后立即执行动画。
- needLayout，needLayout (boolean)：动画执行是否影响布局，默认值是false。
- timingFunction，timingFunction (string)：描述动画执行的速度曲线，用于描述动画已消耗时间和动画完成进度间的映射关系。默认值是 linear，表示动画从开始到结束都拥有同样的速度。下表列出了所有合法的属性：
  - linear:动画从头到尾的速度是相同的
  - ease-in:动画速度由慢到快
  - ease-out:动画速度由快到慢
  - ease-in-out:动画先加速到达中间点后减速到达终点
  - cubic-bezier(x1, y1, x2, y2):在三次贝塞尔函数中定义变化过程，函数的参数值必须处于 0 到 1 之间。更多关于三次贝塞尔的信息请参阅 cubic-bezier 和 Bézier curve。

## timing

`timing(props, exitExpression)`

为了在nvue-app下支持keyframe动画效果，我们使用bindingx的timing事件。

- props：定义了动画元素和动画内容的数组；
- exitExpression： 退出条件。这是可选的。我们可以自己手动移除掉bindingx的绑定效果；

比如：

```js
timing(
// 这是props数组
[
	// 每一项都是一个object，定义了timing的规则
	{
		element: el,  // this.$refs['refName'].ref 这样获取
		property: 'transform.rotateZ',
		expression: 't*0.72'
	}
])
```

bindingx可以实现很多的东西，具体支持的属性以及事件等请看：

[具体内容](https://alibaba.github.io/bindingx/guide/cn_api_attributes)

## unbind

我们的timing方法会返回一个绑定值，在你不需要用到那个timing的时候，或者退出页面的时候，记得解除绑定。

`this.timingShakeToken && unbind(this.timingShakeToken, 'timing')`

# 非nvue-app下的keyframe

以下仅仅作为制作keyframe的参考。

```css
/* #ifndef APP-NVUE */
.timing {
	&-scale {
		animation: timing-scale ease-in-out 1s infinite;
	}
	&-shake {
		animation: timing-shake ease-in-out 1s;
	}
	&-rotate {
		transform-origin: center center;
		animation: timing-rotate linear 0.6s infinite;
	}
	&-ripple {
		animation: timing-ripple ease-in-out 0.8s;
	}
}

@keyframes timing-scale {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
}
@keyframes timing-shake {
	0%,
	100% {
		transform: translateX(0);
	}
	10% {
		transform: translateX(-12px);
	}
	20% {
		transform: translateX(10px);
	}
	30% {
		transform: translateX(-8px);
	}
	40% {
		transform: translateX(7px);
	}
	50% {
		transform: translateX(-6px);
	}
	60% {
		transform: translateX(5px);
	}
	70% {
		transform: translateX(-4px);
	}
	80% {
		transform: translateX(3px);
	}
	90% {
		transform: translateX(-2px);
	}
}
@keyframes timing-rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes timing-ripple {
	0% {
		border-top-right-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
		width: 0px;
		height: 0.1px;
	}
	100% {
		border-top-right-radius: 600px;
		border-bottom-left-radius: 600px;
		border-bottom-right-radius: 600px;
		width: 600px;
		height: 600px;
	}
}
/* #endif */
```
