"use client";
import ReactParticles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Particles = ({ options }: { options: object }) => {
  const init = async (engine: Engine) => await loadSlim(engine);
  return <ReactParticles id="custom-particle" init={init} options={options} />;
};

export default Particles;
