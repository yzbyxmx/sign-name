<template>
    <div>
        <canvas id="canvas" width="300" height="150">

        </canvas>
        <div class="img-sec">
         <img :src="imgSrc"/>
        </div>
        <div class="btn">
          <span @click="toClear()">清除</span>
          <span @click="toSave()">保存</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sign-name",
        data(){
          return {
              ctx:null,
              canvas:null,
              imgSrc:''
          }
        },
        mounted() {
          this.initPage()
        },
        methods:{
          initPage() {
            this.canvas = document.getElementById('canvas')
            if(this.canvas.getContext){
              this.ctx = this.canvas.getContext('2d')
              this.ctx.lineCap = 'round'
              this.ctx.fillStyle = "#fff"
              this.ctx.lineWidth = 2
              this.ctx.fillRect(0,0,350,150)

              this.canvas.addEventListener("touchstart",(e)=>{
                console.log(123,e)
                this.ctx.beginPath()
                this.ctx.moveTo(e.changedTouches[0].pageX,e.changedTouches[0].pageY)
              })

              this.canvas.addEventListener("touchmove",(e)=>{
                this.ctx.lineTo(e.changedTouches[0].pageX,e.changedTouches[0].pageY)
                this.ctx.stroke()
              })

            }
          },
          toClear() {
            this.ctx.clearRect(0,0,300,150)
          },
          toSave() {
            let base64Img = this.canvas.toDataURL()
            let img = new Image()
            img.src = base64Img
            this.imgSrc = base64Img
           console.log('===',base64Img)
          }
        }

    }
</script>

<style lang="scss" scoped>
  .btn {
    height: px2Vw(55);
    position: fixed;
    bottom: 0;
    line-height: px2Vw(55);
    border-top: px2Vw(1) solid #f7f8f9;
    span {
      display: inline-block;
      width: px2Vw(185);
      text-align: center;
    }
  }
  .img-sec {
    padding-top: px2Vw(200);
  }
  canvas {
    position: fixed;
    border: 2px dashed #cccccc;
    float: right;
  }
</style>
