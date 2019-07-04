<template>
  <div class="hello">
    <canvas id="canvas" width="300" height="300"></canvas>
    <div class="date">
      {{date}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date:new Date().toLocaleString()
    }
  },
  mounted() {
    this.initPage()
    let _this = this
    _this.timer = setInterval(()=>{
      _this.date = new Date().toLocaleString()
    })
  },
  computed: {

  },
  methods:{
    initPage() {
      let canvas = document.getElementById('canvas')
      const _this = this
      if(canvas.getContext) {
        let ctx = canvas.getContext('2d')
        ctx.translate(150,150)
        setInterval(()=>{
            _this.initCanvas(ctx)
        },1000)
      }
    },
    initCanvas(ctx) {
        this.clearCanvas(ctx)
        let time = new Date()
        let secondes = time.getSeconds()
        let minutes = time.getMinutes()
        let hours = time.getHours()
        hours = hours > 12 ? hours -12 : hours
        let minute = minutes + secondes / 60
        let hour = hours + minutes / 60
        let monthStr = (time.getMonth() +1) > 9 ? time.getMonth() + 1 : '0'+ (time.getMonth() + 1)
        let dayStr = time.getDay() > 9 ? time.getDay() : '0'+time.getDay()
        ctx.save()


        //draw Numbers
        ctx.font = '25px Arial';
        ctx.fillStyle = '#EEAD0E';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for(let i = 1;i<13;i++) {
          let theta = Math.PI*2/12*i - Math.PI/2
          var x = 150 * 0.8 * Math.cos(theta);
          var y = 150 * 0.8 * Math.sin(theta);
          ctx.fillText(i, x, y);
        }
        ctx.restore()

        //draw Hours
        ctx.save()
        ctx.rotate(Math.PI*2/12*hour - Math.PI/2)
        ctx.beginPath()
        ctx.moveTo(-15,-5)
        ctx.lineTo(-15,5)
        ctx.lineTo(55,1)
        ctx.fill()
        ctx.restore()

        //draw Minutes
        ctx.save()
        ctx.rotate(Math.PI*2/60*minute - Math.PI/2)
        ctx.beginPath()
        ctx.moveTo(-15,-4)
        ctx.lineTo(-15,4)
        ctx.lineTo(95,1)
        ctx.fill()
        ctx.restore()

        //draw seconds
        ctx.save()
        ctx.rotate(Math.PI*2/60*secondes - Math.PI/2)
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.moveTo(-15,-2)
        ctx.lineTo(-15,2)
        ctx.lineTo(105,1)
        ctx.fill()
        ctx.restore()

        ctx.save()
        ctx.font = '20px'
        ctx.fillStyle = 'pink'
        ctx.fillText('adidas',-10,-80)
        ctx.restore()

        ctx.save()
        ctx.font = '30px'
        ctx.fillText((monthStr+'-'+dayStr),70,3)
        ctx.restore()

    },
    clearCanvas(ctx) {
      ctx.clearRect(-150,-150,300,300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello {
    text-align: center;
  }
  canvas {
    /*border: 1px solid #2c3e50;*/
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .date {
    font-weight: bold;
    font-size: 20px;
  }
</style>
