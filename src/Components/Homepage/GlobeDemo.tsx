 "use client";
import React from "react";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/data/Samplearcs";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 500,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.2,
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* Adjusting the responsive globe container for iPad Pro */}
      <div className="w-full max-w-[90vw] h-[50vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
