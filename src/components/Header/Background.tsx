const Background = () => {
  return (
    <div
      className="fixed top-0 -z-10 right-0 bg-[#000011] left-0 bottom-0"
      id="bg-wrap"
    >
      <svg
        viewBox="0 0 100 300"
        opacity={0.2}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="0.441602%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient2"
            cx="50%"
            cy="50%"
            fx="2.68147%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="23.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient3"
            cx="50%"
            cy="50%"
            fx="0.836536%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="21.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient4"
            cx="50%"
            cy="50%"
            fx="4.56417%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="23s"
              values="0%;5%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient5"
            cx="50%"
            cy="50%"
            fx="2.65405%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="24.5s"
              values="0%;5%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(0,0,255, .8)"></stop>
            <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient6"
            cx="50%"
            cy="50%"
            fx="0.981338%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="25.5s"
              values="0%;5%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(255,0,0, .5)"></stop>
            <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="17s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
          <animate
            attributeName="x"
            dur="23s"
            values="0%;-25%;0%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="24s"
            values="25%;-25%;25%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
          <animate
            attributeName="x"
            dur="25s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="26s"
            values="0%;-25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="19s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Background;
