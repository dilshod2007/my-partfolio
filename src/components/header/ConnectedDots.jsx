import React, { useRef, useEffect } from "react";
import "./connectedDots.css";

const ConnectedDots = () => {
  const canvasRef = useRef(null);
  const dotsArray = useRef([]); // Используем useRef для сохранения состояния точек

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots(); // Пересоздаём точки при изменении размера экрана
    };

    const createDots = () => {
      dotsArray.current = [];
      const numDots = Math.floor((canvas.width * canvas.height) / 5000); // Количество точек пропорционально размеру экрана

      for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 2 + 0.5; // Уменьшили размер точек
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dotsArray.current.push(new Dot(x, y, radius));
      }
    };

    class Dot {
      constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = (Math.random() - 0.5) * 0.5; // Скорость движения точек
        this.dy = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        // Отскакивание от стен
        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;

        this.draw();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsArray.current.forEach((dot) => dot.update());
      requestAnimationFrame(animate);
    };

    handleResize(); // Устанавливаем начальные размеры
    window.addEventListener("resize", handleResize); // Добавляем обработчик изменения размера

    animate();

    return () => {
      window.removeEventListener("resize", handleResize); // Очищаем обработчик при размонтировании компонента
    };
  }, []);

  return <canvas ref={canvasRef} className="connected-dots"></canvas>;
};

export default ConnectedDots;
