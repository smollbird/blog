import * as THREE from "three";

export function createCube() {
  const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(cubeGeo, material);
  return cube;
}
