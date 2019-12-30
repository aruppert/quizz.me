import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.icon1};
  height: 50px;
  stroke: ${props => props.theme.colors.icon1};
  stroke-width: 0.75;
  stroke-linecap: round;
`;

export default function Star(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M 77 15 C 74 15 64.558134 15.0278 56.292969 23.292969 C 53.651547 25.93439 46.974795 34.117953 40.845703 41.748047 C 40.42295 42.274331 40.141764 42.634104 39.726562 43.152344 L 18.773438 48.025391 A 1.0001 1.0001 0 0 0 18.199219 48.400391 L 15.199219 52.400391 A 1.0001 1.0001 0 0 0 15.724609 53.960938 L 29.476562 57.890625 L 30.783203 59.197266 L 28.123047 64.517578 C 24.935428 64.611544 22.464426 65.859794 20.630859 67.693359 C 18.724167 69.600052 17.478702 72.106863 16.650391 74.591797 C 14.993768 79.561665 15 84.5 15 84.5 A 0.50005 0.50005 0 0 0 15.5 85 C 15.5 85 20.438335 85.0062 25.408203 83.349609 C 27.893137 82.521298 30.399948 81.275833 32.306641 79.369141 C 34.140206 77.535574 35.388456 75.064572 35.482422 71.876953 L 40.802734 69.216797 L 42.109375 70.523438 L 46.039062 84.275391 A 1.0001 1.0001 0 0 0 47.599609 84.800781 L 51.599609 81.800781 A 1.0001 1.0001 0 0 0 51.974609 81.226562 L 56.847656 60.273438 C 57.365896 59.858236 57.725669 59.57705 58.251953 59.154297 C 65.882045 53.025203 74.06561 46.348453 76.707031 43.707031 C 84.972196 35.441866 85 26 85 23 C 85 20.433333 84.745493 18.845556 84.460938 17.849609 C 84.318658 17.351636 84.16762 17.00229 84.033203 16.755859 C 83.898786 16.509428 83.707031 16.292969 83.707031 16.292969 C 83.707031 16.292969 83.490572 16.101214 83.244141 15.966797 C 82.99771 15.83238 82.648364 15.681342 82.150391 15.539062 C 81.154444 15.254506 79.566667 15 77 15 z M 77 17 C 79.433333 17 80.845556 17.245494 81.599609 17.460938 C 81.97347 17.567754 82.182832 17.665345 82.28125 17.71875 C 82.33465 17.81717 82.432245 18.02653 82.539062 18.400391 C 82.754507 19.154444 83 20.566667 83 23 C 83 24.859529 83.007733 28.856058 81.173828 33.466797 L 73.853516 26.146484 L 66.533203 18.826172 C 71.143942 16.992267 75.140471 17 77 17 z M 65.546875 19.253906 L 73.146484 26.853516 L 80.746094 34.453125 C 79.604441 36.9986 77.895049 39.690887 75.292969 42.292969 C 72.93439 44.651547 64.617953 51.474795 56.998047 57.595703 C 53.431343 60.46076 50.189769 63.036522 47.708984 65.001953 L 45.853516 63.146484 A 0.50005 0.50005 0 0 0 45.494141 62.994141 A 0.50005 0.50005 0 0 0 45.146484 63.853516 L 46.919922 65.626953 C 44.98281 67.159143 43.342105 68.453038 43.076172 68.662109 L 31.337891 56.923828 C 31.546962 56.657895 32.840857 55.01719 34.373047 53.080078 L 43.146484 61.853516 A 0.50005 0.50005 0 1 0 43.853516 61.146484 L 34.998047 52.291016 C 36.963478 49.810231 39.53924 46.568657 42.404297 43.001953 C 48.525205 35.382047 55.348453 27.06561 57.707031 24.707031 C 60.309113 22.10495 63.0014 20.395559 65.546875 19.253906 z M 61.5 30 C 56.811499 30 53 33.811503 53 38.5 C 53 43.188497 56.811499 47 61.5 47 C 66.188501 47 70 43.188497 70 38.5 C 70 33.811503 66.188501 30 61.5 30 z M 61.5 31 C 65.648061 31 69 34.351942 69 38.5 C 69 42.648058 65.648061 46 61.5 46 C 57.351939 46 54 42.648058 54 38.5 C 54 34.351942 57.351939 31 61.5 31 z M 60.484375 33.099609 A 0.50005 0.50005 0 0 0 60.400391 33.111328 C 57.888987 33.62087 56 35.844263 56 38.5 C 56 41.531313 58.468687 44 61.5 44 C 63.750074 44 65.685835 42.64185 66.535156 40.701172 A 0.50024099 0.50024099 0 1 0 65.619141 40.298828 C 64.924462 41.88615 63.347926 43 61.5 43 C 59.009313 43 57 40.990687 57 38.5 C 57 36.317737 58.547009 34.508254 60.599609 34.091797 A 0.50005 0.50005 0 0 0 60.484375 33.099609 z M 62.5 33.099609 A 0.50005 0.50005 0 0 0 62.400391 34.091797 C 63.052224 34.223588 63.647129 34.508556 64.173828 34.900391 A 0.50005 0.50005 0 1 0 64.771484 34.099609 C 64.142184 33.631444 63.411776 33.275537 62.599609 33.111328 A 0.50005 0.50005 0 0 0 62.5 33.099609 z M 66.0625 35.994141 A 0.50005 0.50005 0 0 0 65.619141 36.701172 C 65.74596 36.991305 65.845112 37.289484 65.908203 37.599609 A 0.50025175 0.50025175 0 1 0 66.888672 37.400391 C 66.809763 37.012516 66.68829 36.644695 66.537109 36.298828 A 0.50005 0.50005 0 0 0 66.0625 35.994141 z M 37.714844 45.675781 C 33.447095 51.024353 30.103094 55.252408 29.628906 55.855469 L 17.671875 52.4375 L 19.582031 49.890625 L 37.714844 45.675781 z M 32.273438 60.6875 L 39.3125 67.726562 L 35.197266 69.783203 L 30.216797 64.802734 L 32.273438 60.6875 z M 54.324219 62.285156 L 50.109375 80.417969 L 47.5625 82.328125 L 44.144531 70.371094 C 44.747592 69.896906 48.975647 66.552905 54.324219 62.285156 z M 28.144531 65.515625 A 1.0001 1.0001 0 0 0 28.292969 65.707031 L 29.712891 67.126953 C 25.675836 67.715166 23.438073 70.278035 22.294922 72.792969 C 20.99296 75.657284 21 78.5 21 78.5 A 0.50005 0.50005 0 0 0 21.5 79 C 21.5 79 24.342716 79.007 27.207031 77.705078 C 29.721965 76.561927 32.284834 74.324164 32.873047 70.287109 L 34.292969 71.707031 A 1.0001 1.0001 0 0 0 34.484375 71.855469 C 34.398461 74.795238 33.280551 76.981169 31.599609 78.662109 C 29.850052 80.411667 27.481863 81.603702 25.091797 82.400391 C 20.73906 83.851303 16.785364 83.950407 16.037109 83.962891 C 16.049589 83.214636 16.148697 79.26094 17.599609 74.908203 C 18.396298 72.518137 19.588333 70.149948 21.337891 68.400391 C 23.018831 66.719449 25.204762 65.601539 28.144531 65.515625 z M 30.617188 68.03125 L 31.96875 69.382812 C 31.673422 73.599663 29.261933 75.672665 26.792969 76.794922 C 24.594978 77.794008 22.725202 77.920016 22.050781 77.949219 C 22.079981 77.274798 22.205992 75.405022 23.205078 73.207031 C 24.327335 70.738067 26.400337 68.326578 30.617188 68.03125 z" />
    </Svg>
  );
}
