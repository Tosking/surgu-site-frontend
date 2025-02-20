"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GLTFLoader } from "three-stdlib";
const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Инициализация сцены
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    // Настройки рендерера
    renderer.setSize(700, 700);
    renderer.setClearColor(0x000000, 0); // Прозрачный фон
    mountRef.current.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Освещение
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(light);

    // Загрузка модели
    const loader = new GLTFLoader();
    loader.load(
      "model/korabl.glb",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z);

        camera.position.set(center.x + 9, center.y + 2, center.z + maxSize - 5);
        camera.lookAt(center);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // Позиция камеры по умолчанию
    camera.position.set(0, 2, 5);

    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Обработчик изменения размера
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Очистка
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "900px", height: "700px" }} />;
};

export default ThreeScene;
