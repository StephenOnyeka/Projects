import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function About() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let animationFrameId;

    const globe = createGlobe(canvasRef.current, {
      // devicePixelRatio: 2,
      // width: 600 * 2,
      // height: 600 * 2,
      // phi: 0,
      // theta: 0,
      // dark: 1,
      // diffuse: 1.2,
      // mapSamples: 16000,
      // mapBrightness: 6,
      // baseColor: [0.3, 0.3, 0.3],
      // markerColor: [0.1, 0.8, 1],
      // glowColor: [1, 1, 1],
      // markers: [
      //   { location: [37.7595, -122.4367], size: 0.03 },
      //   { location: [40.7128, -74.006], size: 0.1 },
      // ],
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.78, -122.44], size: 0.03, id: 'sf' },
        { location: [40.71, -74.01], size: 0.03, id: 'nyc' },
      ],
      arcs: [
        { from: [37.78, -122.44], to: [40.71, -74.01] },
      ],
      arcColor: [0.3, 0.5, 1],
      arcWidth: 0.5,
      arcHeight: 0.3,

      // onRender: (state) => {
      //   state.phi = phi;
      //   phi += 0.005;
      // },
    // });
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
  }, []);

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: "1/1" }}
      />
    </div>
  );
}