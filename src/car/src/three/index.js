import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.set(5, 5, 5);
  return camera;
}

function createAmbientLight(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);
}

function createRenderer(el) {
  const renderer = new THREE.WebGLRenderer({ canvas: el });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
}

function createOrbitControls(camera, el) {
  const controls = new OrbitControls(camera, el);
  return controls;
}

function createAxesHelper(scene) {
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);
}

export function createThree(canvas) {
  const scene = createScene();

  const camera = createCamera(scene);
  scene.add(camera);

  createAmbientLight(scene);
  createAxesHelper(scene);

  const renderer = createRenderer(canvas.value);

  const controls = createOrbitControls(camera, renderer.domElement);

  function animate() {
    function _animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    _animate();
  }
  return [scene, animate];
}
