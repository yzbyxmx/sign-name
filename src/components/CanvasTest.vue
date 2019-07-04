<template>
    <!--<div id="canvas">-->
      <!--<div class="btn">-->
          <!--<span id="clear-btn">清除</span>-->
          <!--<span id="save-btn">保存</span>-->
      <!--</div>-->
    <!--</div>-->
  <div class="container">
      <div>
        签名区域:
      </div>
      <div id="canvas" class="sign">

      </div>
      <div class="btn">
        <span id="clear-btn">清除</span>
        <span id="save-btn">保存</span>
      </div>
  </div>
</template>

<script>
    export default {
        name: "canvas-test",
        mounted() {
           // this.initPage()
        },
        methods:{
          initPage() {
            this.lineCanvas({
              el: document.getElementById("canvas"),//绘制canvas的父级div
              clearEl: document.getElementById("clear-btn"),//清除按钮
              saveEl: document.getElementById("save-btn"),//保存按钮
            })
          },
          lineCanvas(obj) {
              let background = "#f7f8f9"
              let color = "#000000"
              let canvas = document.createElement("canvas")
              canvas.width = obj.el.clientWidth
              canvas.height = obj.el.clientHeight
              obj.el.appendChild(canvas)
              let ctx = canvas.getContext('2d')
              ctx.fillStyle = background
              ctx.fillRect(0,0,canvas.width,canvas.height)
              ctx.lineWidth = 1
              ctx.lineCap = 'round'

             canvas.addEventListener("touchstart",(e) => {
               ctx.beginPath()
               ctx.moveTo(e.changedTouches[0].pageX,e.changedTouches[0].pageY)
             })

              canvas.addEventListener("touchmove",(e)=>{
                ctx.lineTo(e.changedTouches[0].pageX,e.changedTouches[0].pageY)
                ctx.stroke()
              })
              obj.clearEl.addEventListener('click',()=>{
                ctx.clearRect(0,0,canvas.width,canvas.height)
              })
              obj.saveEl.addEventListener('click',()=>{
                let base64Img = canvas.toDataURL()
                console.log(1234,base64Img)
              })
          }

        }
    }
</script>

<style lang="scss" scoped>
  #canvas {
    width: px2Vw(300);
    height: px2Vw(500);
    margin-left: px2Vw(35);
  }
  span {
    display: inline-block;
    width: 40%;
    height: 33px;
    text-align: center;
    line-height: 33px;
  }
  .container {
    width: 100%;
    height: 100%;
    .sign {
      width: px2Vw(373);
      height: px2Vw(150);
      border: 1px solid #f7f8f9;
      position: fixed;
      top: 35px;
    }
    .btn {
      height: px2Vw(55);
      position: fixed;
      bottom: 0;
      border-top: px2Vw(1) solid #f7f8f9;
      span {
        display: inline-block;
        width: px2Vw(180);
        text-align: center;
        line-height: px2Vw(55);
      }
    }
  }
</style>
