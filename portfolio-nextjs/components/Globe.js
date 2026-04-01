import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe({ size = 600, wrapperStyle = {} }) {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let animationFrameId;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
  width: size * 2,
  height: size * 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 8000,
  mapBrightness: 8,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [0.1, 0.8, 1],
  glowColor: [1, 1, 1],
    });

    function animate() {
      phi += 0.005;
      globe.update({ phi });
      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, [size]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...wrapperStyle,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size, maxWidth: "100%", aspectRatio: "1/1" }}
      />
    </div>
  );
}