"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Crushers from "@/components/products/crushers/Crushers";
import JawCrushers from "@/components/products/crushers/JawCrushers";
import ConeCrushers from "@/components/products/crushers/ConeCrushers";
import CcAvcSeries from "@/components/products/crushers/CcAvcSeries";
import CcQmSeries from "@/components/products/crushers/CcQmSeries";
import GyratoryConeCrusher from "@/components/products/crushers/GyratoryConeCrusher";
import RollCrushers from "@/components/products/crushers/RollCrushers";


import MobileSeries from "@/components/products/mobileseries/MobileSeries";
import TrackMountedConeCrusher from "@/components/products/mobileseries/TrackMountedConeCrusher";
import TmcQm from "@/components/products/mobileseries/TmcQm";
import TmcAvc from "@/components/products/mobileseries/TmcAvc";
import TrackMountedEndurer from "@/components/products/mobileseries/TrackMountedEndurer";
import TmeQm from "@/components/products/mobileseries/TmeQm";
import TmeAvc from "@/components/products/mobileseries/TmeAvc";
import TrackMountedJawCrusher from "@/components/products/mobileseries/TrackMountedJawCrusher";
import Jaw811 from "@/components/products/mobileseries/Jaw811";
import Jaw811S from "@/components/products/mobileseries/Jaw811S";
import TrackMountedScalper from "@/components/products/mobileseries/TrackMountedScalper";
import TrackMountedScreen from "@/components/products/mobileseries/TrackMountedScreen";
import Tms3Deck from "@/components/products/mobileseries/Tms3Deck";
import Tms4Deck from "@/components/products/mobileseries/Tms4Deck";
import TrackMountedVerticalShiftImpactor from "@/components/products/mobileseries/TrackMountedVerticalShiftImpactor";

import SemiMobileSeries from "@/components/products/semimobileseries/SemiMobileSeries";
import ProFastCone from "@/components/products/semimobileseries/ProFastCone";
import PrfmqSeries from "@/components/products/semimobileseries/PrfmqSeries";
import PrfmcSeries from "@/components/products/semimobileseries/PrfmcSeries";
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
import EcoWasher from "@/components/products/washingsystems/EcoWasher";
import ProWash from "@/components/products/washingsystems/ProWash";
import Thickener from "@/components/products/washingsystems/Thickener";


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
  ccavcseries: CcAvcSeries,
  ccqmseries: CcQmSeries,
  gyratoryconecrusher: GyratoryConeCrusher,
  rollcrushers: RollCrushers,
  

  mobileseries: MobileSeries,
  trackmountedconecrusher: TrackMountedConeCrusher,
  tmcqm: TmcQm,
  tmcavc: TmcAvc,
  trackmountedendurer: TrackMountedEndurer,
  tmeqm: TmeQm,
  tmeavc: TmeAvc,
  trackmountedjawcrusher: TrackMountedJawCrusher,
  jaw811: Jaw811,
  jaw811s: Jaw811S,
  trackmountedscalper: TrackMountedScalper,
  trackmountedscreen: TrackMountedScreen,
  tms3deck: Tms3Deck,
  tms4deck: Tms4Deck,
  trackmountedverticalshiftimpactor: TrackMountedVerticalShiftImpactor,


  semimobileseries: SemiMobileSeries,
  profastcone: ProFastCone,
  prfmqseries: PrfmqSeries,
  prfmcseries: PrfmcSeries,
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
  prowash: ProWash,
  ecowasher: EcoWasher,
  thickener: Thickener,


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
      <main className="bg-white min-h-screen py-12 px-4">
        <Component />
      </main>
      <Footer />
    </>
  );
}
