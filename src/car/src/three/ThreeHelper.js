import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class ThreeHelper {
    animateQueue = [];
    constructor(el) {
        this.el = el || document.body;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(5, 5, 5);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.el.appendChild(this.renderer.domElement);
        window.onreset = this.resize;
        this.addOrbitControls();
        this.render();
    }

    addAxes() {
        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
        return this;
    }

    loadModel(optins) {
        return new Promise((resolve, reject) => {
            switch (optins.type) {
                case 'gltf':
                    const loader = new GLTFLoader();
                    loader.load(optins.url, (gltf) => {
                        this.scene.add(gltf.scene);
                        resolve(gltf.scene);
                    });
                    break;
                default:
                    reject('not support type');
            }
        });
    }

    loadModels(modelOptions) {
        return Promise.all(modelOptions.map((option) => this.loadModel(option)));
    }

    addOrbitControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.controls.enableDamping = true;
        // this.controls.dampingFactor = 0.25;
        // this.controls.enableZoom = true;
        // this.controls.autoRotate = true;
        // this.controls.autoRotateSpeed = 0.5;
        // this.controls.minDistance = 0;
        // this.controls.maxDistance = 100;
        // this.controls.maxPolarAngle = Math.PI / 2;
        // this.controls.minPolarAngle = Math.PI / 2;
        this.controls.update();
    }

    initLight() {
        const light = new THREE.AmbientLight(0xffffff); // soft white light
        this.scene.add(light);
        return this;
    }

    addRectAreaLight(options) {}

    addSpotLight() {}

    addGUI(){

    }

    render() {
        const _this = this;
        function _render() {
            requestAnimationFrame(_render);
            _this.animateQueue.forEach((animate) => animate());
            _this.renderer.render(_this.scene, _this.camera);
            _this.controls.update();
        }
        _render();
        return this;
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        return this;
    }

    animate(animate) {
        this.animateQueue.push(animate);
        return this;
    }

    add(mesh){
        this.scene.add(mesh);
    }
}

export default ThreeHelper;
