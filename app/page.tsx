import CardGridComponent from "@/components/card-grid-panel";
import { AIPorn, animPorn, fetishVR, onlyFans, topVRSideList, trans, vrGay, vrTubes } from "@/data/website-data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto p-16">
      <div className="flex">
        <Image src="/VVK-logo.svg" alt="Free-VRPorn Logo" width={130} height={0} />
        <h1 className="md:text-4xl p-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 font-sans font-bold">
          Explore Free VR Porn - The Best in VR Adult Entertainment
        </h1>
      </div>
      <CardGridComponent title="TOP VR PORN SITES" item={topVRSideList} />
      <CardGridComponent title="3D ANIMATED PORN" item={animPorn} />
      <CardGridComponent title="GAY VR" item={vrGay} />
      <CardGridComponent title="TRANS VR" item={trans} />
      <CardGridComponent title="FETISH VR" item={fetishVR} />
      <CardGridComponent title="AI PRON VR" item={AIPorn} />
      <CardGridComponent title="VR TUBES" item={vrTubes} />
      <CardGridComponent title="ONLY FANS" item={onlyFans} />
    </div>

  );
}