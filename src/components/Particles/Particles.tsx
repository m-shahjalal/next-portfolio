"use client";
import ReactParticles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, tsParticles } from "tsparticles-engine";

const Particles = ({ options }: { options: object }) => {
  const init = async (engine: Engine) => await loadFull(engine);

  return <ReactParticles id="custom-particle" init={init} options={options} />;
};

export default Particles;
