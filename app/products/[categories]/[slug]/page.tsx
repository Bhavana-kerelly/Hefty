"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Crushers from "@/components/products/crushers/Crushers";
import JawCrushers from "@/components/products/crushers/JawCrushers";
import ConeCrushers from "@/components/products/crushers/ConeCrushers";
import RollCrushers from "@/components/products/crushers/RollCrushers";


import MobileSeries from "@/components/products/mobileseries/MobileSeries";
import TrackMountedConeCrusher from "@/components/products/mobileseries/TrackMountedConeCrusher";
import TrackMountedEndurer from "@/components/products/mobileseries/TrackMountedEndurer";
import TrackMountedJawCrusher from "@/components/products/mobileseries/TrackMountedJawCrusher";
import TrackMountedScalper from "@/components/products/mobileseries/TrackMountedScalper";
import TrackMountedScreen from "@/components/products/mobileseries/TrackMountedScreen";
import TrackMountedVerticalShiftImpactor from "@/components/products/mobileseries/TrackMountedVerticalShiftImpactor";

import SemiMobileSeries from "@/components/products/semimobileseries/SemiMobileSeries";
import ProFastCone from "@/components/products/semimobileseries/ProFastCone";
import ProFastJaw from "@/components/products/semimobileseries/ProFastJaw";
import ProFastVerticalShiftImpactor from "@/components/products/semimobileseries/ProFastVerticalShiftImpactor";

import Feeders from "@/components/products/feeders/Feeders";
import FeederScreen from "@/components/products/feeders/FeederScreen";
import GrizzlyFeeder from "@/components/products/feeders/GrizzlyFeeder";
import PanFeeder from "@/components/products/feeders/PanFeeder";

import Impactors from "@/components/products/impactors/Impactors";
import VerticalShiftImpactor from "@/components/products/impactors/VerticalShiftImpactor";
import HorizontalShiftImpactor from "@/components/products/impactors/HorizontalShiftImpactor";

import Screens from "@/components/products/screens/Screens";
import VibratingScreen from "@/components/products/screens/VibratingScreen";


import WashingSystems from "@/components/products/washingsystems/WashingSystems";
import DualSandWasher from "@/components/products/washingsystems/DualSandWasher";
import SandWasher from "@/components/products/washingsystems/SandWasher";


import Classifier from "@/components/products/classifier/Classifier";
import ProAirClassifier from "@/components/products/classifier/ProAirClassifier";

import ConcreteBatchingSolution from "@/components/products/concretebatchingsolution/ConcreteBatchingSolution";

import MechanicalRoadPaver from "@/components/products/mechanicalroadpaver/MechanicalRoadPaver";

import EvDumperTruck from "@/components/products/evdumpertruck/EvDumperTruck";

import EvTractorTrailerTruck from "@/components/products/evtractortrailertruck/EvTractorTrailerTruck";

const productsMap: Record<string, React.ComponentType> = {
  crushers: Crushers,
  jawcrushers: JawCrushers,
  conecrushers: ConeCrushers,
  rollcrushers: RollCrushers,
  

  mobileseries: MobileSeries,
  trackmountedconecrusher: TrackMountedConeCrusher,
  trackmountedendurer: TrackMountedEndurer,
  trackmountedjawcrusher: TrackMountedJawCrusher,
  trackmountedscalper: TrackMountedScalper,
  trackmountedscreen: TrackMountedScreen,
  trackmountedverticalshiftimpactor: TrackMountedVerticalShiftImpactor,


  semimobileseries: SemiMobileSeries,
  profastcone: ProFastCone,
  profastjaw: ProFastJaw,
  profastverticalshiftimpactor: ProFastVerticalShiftImpactor,


  feeders: Feeders,
  feederscreen: FeederScreen,
  grizzlyfeeder: GrizzlyFeeder,
  panfeeder: PanFeeder,

  impactors: Impactors,
  horizontalshiftimpactor: HorizontalShiftImpactor,
  verticalshiftimpactor: VerticalShiftImpactor,

  screens: Screens,
  vibratingscreen: VibratingScreen,

  washingsystems: WashingSystems,
  dualsandwasher: DualSandWasher,
  sandwasher: SandWasher,

  classifier: Classifier,
  proairclassifier: ProAirClassifier,

  concretebatchingsolution: ConcreteBatchingSolution,
  mechanicalroadpaver: MechanicalRoadPaver,
  evdumpertruck: EvDumperTruck,
  evtractortrailertruck: EvTractorTrailerTruck,

};

export default function ProductPage() {
  const params = useParams<{ categories?: string; slug?: string }>();

   const category = params.categories?.toLowerCase();
const slug = params.slug?.toLowerCase();

// First try matching slug directly (most pages will be like this)
let key = slug;

// If no slug is provided, fallback to category (e.g. /products/crushers)
if (!slug) {
  key = category;
}
  const Component = productsMap[key || ""];


  
  if (!Component) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4">
        <Component />
      </main>
      <Footer />
    </>
  );
}
