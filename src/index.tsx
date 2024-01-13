import React from "react";
import { Image } from "react-native";
// import * as flag from "./flags/flagsIndex";

interface CountryFlagProps {
  isoCode: string;
  size: number;
  style?: any;
  flags?: any;
}

const FLAG_CDN_URL = "https://flagcdn.com/w80/";
const FORMAT = ".png";

const CountryFlag = ({ isoCode, size, style, flags }: CountryFlagProps) => {
  return (
    <Image
      source={{ uri: FLAG_CDN_URL + isoCode.toLocaleLowerCase() + FORMAT }}
      style={[{ width: size * 1.6, height: size }, style]}
      resizeMode="contain"
    />
  );

  // TODO: Still in progress (probely available in v2.1)
  // This switch case is just there because you can't name variables "in" and "do"
  // switch (isoCode.toLowerCase()) {
  //   case "in":
  //     return <Image source={flag["ind"]} style={[{ width: size * 1.6, height: size }, style]} />;
  //     break;
  //   case "do":
  //     return <Image source={flag["dom"]} style={[{ width: size * 1.6, height: size }, style]} />;
  //     break;
  //   default:
  //     return (
  //       <Image source={(flag as any)[isoCode.toLowerCase()]} style={[{ width: size * 1.6, height: size }, style]} />
  //     );
  //     break;
  // }
};

export default CountryFlag;
