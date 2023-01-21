import React from "react";
import { ArcRotateCamera, Vector3, HemisphericLight, Tools, Color4, SceneLoader } from "@babylonjs/core";
import SceneComponent from "babylonjs-hook";
import "@babylonjs/loaders/glTF";

// Babylon + React то же самое что и просто Babylon, только надо импортировать все методы которые ты используешь и убирать все приписки -> Babylon.Example = Example

const onSceneReady = (scene) => {
  const camera = new ArcRotateCamera("camera", Tools.ToRadians(0), Tools.ToRadians(90), 2000, Vector3.Zero(), scene); // ArcRotateCamera - фиксирует камеру; 2 и 3 параметры обязательны (Угол поворота камеры изначально); 4 параметр расстояние между камерой и сценой
  camera.attachControl(Vector3.Zero()); // Привязываем камеру к Vector3
  camera.lowerRadiusLimit = 1500
  camera.upperRadiusLimit = 3500
  camera.wheelDeltaPercentage = 0.01

  const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene); // Создаем свет

  scene.clearColor = new Color4(0, 0, 0, 0); // Пустой фон
  function change_model(url) {
    SceneLoader.ImportMesh(null, "assets/", url, scene, function (meshArr) {
      const gun = meshArr[0]
      gun.position.y = 400
    });
    
  }

  // planes[i].actionManager = new BABYLON.ActionManager(scene);
  // planes[i].actionManager.registerAction(
  //   new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
  //     function (event) {
  //       var pickedMesh = event.meshUnderPointer;
  //       zoom(camera, pickedMesh);
  //     }
  //   )
  // )

  // var posAnimX = new wind({
  //   steps: 30,
  //   fun: function (val) { camera.target.x = val; }
  // });
  // var posAnimY = new wind({
  //   steps: 30,
  //   fun: function (val) { camera.target.y = val; }
  // });
  // var posAnimZ = new wind({
  //   steps: 30,
  //   fun: function (val) { camera.target.z = val; }
  // });

  // var posAnimAlpha = new wind({
  //   steps: 30,
  //   fun: function (val) { camera.alpha = -val; }
  // });



  // var zoom = function (cam, tar) {

  //   posAnimX.go(tar.position.x - 4);
  //   posAnimY.go(tar.position.y);
  //   posAnimZ.go(tar.position.z);

  //   posAnimAlpha.go(tar.parent.rotation.y);

  // };

  const model = {
    engraving: {
      pos_1: {
        x: 900,
        y: 1000,
        z: 200,
      },
    },
    accessories: {
      pos_1: {
        x: 900,
        y: 1000,
        z: 200,
      },
    },
    woodСarving: {
      pos_1: {
        x: 900,
        y: 1000,
        z: 200,
      },
    },
    signature: {
      pos_1: {
        x: 900,
        y: 1000,
        z: 200,
      },
    },
  }

};

export default Scene => (
  <div className="canvas">
    <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
  </div>
);