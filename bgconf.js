
        let noise = new SimplexNoise();
    
        function draw(e) {
      let xCount = 60;
      let yCount = 15;
      let iXCount = 1/ (xCount - 1);
      let iYCount = 1 / (yCount - 1);
      let time = e * 0.0004;
      let timeStep = 0.0001;
      let grad = ctx.createLinearGradient(-width, 0, width, height);
      let t = time % 1;
      let tSide = Math.floor(time % 0.5) === 0;
      let hueA = tSide ? 30 : 30;
      let hueB = !tSide ? 80 : 80;
      let colorA = hsl(0, 0, 0);
      let colorB = hsl(0, 0, 0);
      grad.addColorStop(map(t, 0, 3, TWO*THIRD, TWO*THIRD), colorA);
      grad.addColorStop(map(t, 0, 2, THIRD, THIRD), colorB);
      grad.addColorStop(map(t, 1, 3, TWO*THIRD, TWO*THIRD), colorA);


      ctx.globalAlpha = map(Math.cos(time), -1, 1, 0.15, 0.3);
      background(grad);
      ctx.globalAlpha = 0.2;
      beginPath();
      for (let j = 0; j < yCount; j++) {
        let tj = j * iYCount;
        let c = Math.cos(tj * TAU + time) * 0.1;
        for (let i = 0; i < xCount; i++) {
          let t = i * iXCount;
          let n = noise.noise3D(t, time, c);
          let y = n * height_half;
          let x = t * (width + 20) - width_half - 10;
          (i ? lineTo : moveTo)(x, y);
        }
        time += timeStep;
      }
      compositeOperation(compOper.lighter);
      //ctx.filter = 'blur(0px)';
      stroke(0.5, 0);
      //ctx.filter = 'blur(10px)';
      stroke(hsl(0, 0, 100, 0.1), 1);
    }
    