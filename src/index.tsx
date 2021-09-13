import React from "react";
import { Image } from "react-native";
import * as flag from "./flags/flagsIndex";

interface Props {
  isoCode: string;
  size: number;
  style?: any;
}

const CountryFlag = ({ isoCode, size, style }: Props) => {
  // This switch case is just there because you can't name variables "in" and "do"
  switch (isoCode.toLowerCase()) {
    case "in":
      return (
        <Image
          source={flag["ind"]}
          style={[{ width: size * 1.6, height: size }, style]}
        />
      );
      break;
    case "do":
      return (
        <Image
          source={flag["dom"]}
          style={[{ width: size * 1.6, height: size }, style]}
        />
      );
      break;
    default:
      return (
        <Image
          source={(flag as any)[isoCode.toLowerCase()]}
          style={[{ width: size * 1.6, height: size }, style]}
        />
      );
      break;
  }
};

export default CountryFlag;
