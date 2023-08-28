import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Mesh_4: THREE.Mesh;
    Mesh_5: THREE.Mesh;
    Mesh_6: THREE.Mesh;
    Mesh_7: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    Mesh001_2: THREE.Mesh;
    LoftedBarn_6Wall_10x12_None_Wall1: THREE.Mesh;
    LoftedBarn_6Wall_10x12_None_Wall2: THREE.Mesh;
    LoftedBarn_6Wall_10x12_None_Wall3: THREE.Mesh;
    LoftedBarn_6Wall_10x12_None_Wall4: THREE.Mesh;
  };
  materials: {
    Siding_LPSmartPanelSiding: THREE.MeshStandardMaterial;
    Siding_LPSmartPanelSiding_color: THREE.MeshStandardMaterial;
    Siding_BoardandBatten: THREE.MeshStandardMaterial;
    Roofing_Shingles_DesertTan: THREE.MeshStandardMaterial;
    Wood_Trim_Interior: THREE.MeshStandardMaterial;
    Wood_InteriorFloor: THREE.MeshStandardMaterial;
    Wood_Trim: THREE.MeshStandardMaterial;
    Metal_Interior: THREE.MeshStandardMaterial;
    Metal_Exterior: THREE.MeshStandardMaterial;
    Wood_Interior: THREE.MeshStandardMaterial;
  };
};

export type ModelProps = {
  highlightedWall: ModelSides;
};

export enum ModelSides {
  LEFT,
  RIGHT,
  FRONT,
  BACK,
  NONE,
}
