"use client";
import ReactParticles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, tsParticles } from "tsparticles-engine";
import { loadPolygonPath } from "tsparticles-path-polygon";

const Particles = ({ options }: { options: object }) => {
  const init = async (engine: Engine) => {
    await loadFull(engine);
  };

  (async () => {
    await loadPolygonPath(tsParticles);
  })();

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <ReactParticles id="custom-particle" init={init} options={options} />
    </div>
  );
};

export default Particles;
