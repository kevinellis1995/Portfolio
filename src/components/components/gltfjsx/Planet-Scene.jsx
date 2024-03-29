/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [10.23KB] > C:\Users\kevin\Projects\practice\React-portfolio\public\planet\scene-transformed.glb [377.98KB] (-3595%)
Author: cmzw (https://sketchfab.com/cmzw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70
Title: Stylized planet
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  
  let glbPath = '/Portfolio/assets/planet-scene.glb';
  if (!import.meta.env.PROD) {
    glbPath = '/planet-scene.glb'; // Adjust path for development environment
  }
  const { nodes, materials, animations } = useGLTF(glbPath);
  console.log(nodes)
  const group = useRef()
  const { actions } = useAnimations(animations, group)
  useGLTF.preload(glbPath);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode" rotation={[0.031, 0, 0.064]}>
          <group name="Clouds_1">
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} />
          </group>
          <group name="Planet_2">
            <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} />
          </group>
        </group>
      </group>
    </group>
  )
}
