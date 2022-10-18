import React from "react";
import { Image } from "react-native";
import * as flag from "./flags/flagsIndex";

interface Props {
  isoCode: string;
  size: number;
  style?: any;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CountryFlag = ({ isoCode, size, style }: Props) => {
  // This switch case is just there because you can't name variables "in" and "do"
  switch (isoCode.toLowerCase()) {
    case "in":
      return <Image source={flag["ind"]} style={[{ width: size * 1.6, height: size }, style]} />;
      break;
    case "do":
      return <Image source={flag["dom"]} style={[{ width: size * 1.6, height: size }, style]} />;
      break;
    case "gb-eng":
    case "gb-nir":
    case "gb-sct":
    case "gb-wls":
      const suffix = capitalizeFirstLetter(isoCode.toLowerCase().split('-')[1]);
      const key = `gb${suffix}`;
      return <Image source={(flag as any)[key]} style={[{ width: size * 1.6, height: size }, style]} />;
      break;
    default:
      return (
        <Image source={(flag as any)[isoCode.toLowerCase()]} style={[{ width: size * 1.6, height: size }, style]} />
      );
      break;
  }
};

export default CountryFlag;
