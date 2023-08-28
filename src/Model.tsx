import { useGLTF } from "@react-three/drei";
import { ModelSides, type GLTFResult, type ModelProps } from "./types";

export const Model = (props: ModelProps) => {
  const { nodes, materials } = useGLTF("/Barn_Testing.glb") as GLTFResult;

  const getMeshProps = (side: ModelSides) => {
    const meshProps = {
      materials: materials.Siding_LPSmartPanelSiding,
      "material-color": "silver",
    };
    if (side === props.highlightedWall) {
      meshProps.materials = materials.Siding_LPSmartPanelSiding_color;
      meshProps["material-color"] = "red";
    }
    return meshProps;
  };

  return (
    <group {...props} dispose={null} position={[0, -1, 0]} scale={0.7}>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          geometry={nodes.Mesh.geometry}
          {...getMeshProps(ModelSides.BACK)}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.Wood_Trim} />
        <mesh
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
          {...getMeshProps(ModelSides.BACK)}
        />
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
          {...getMeshProps(ModelSides.RIGHT)}
        />
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
          {...getMeshProps(ModelSides.FRONT)}
        />
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
          {...getMeshProps(ModelSides.LEFT)}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/Barn_Testing.glb");
