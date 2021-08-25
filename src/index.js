import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import * as flag from "./../flags/flagsIndex";

const CountryFlag = ({ isoCode, size, style }) => {
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
          source={flag[isoCode.toLowerCase()]}
          style={[{ width: size * 1.6, height: size }, style]}
        />
      );
      break;
  }
};

CountryFlag.propTypes = {
  isoCode: PropTypes.string.isRequired,
  size: PropTypes.number,
};

CountryFlag.defaultProps = {
  isoCode: "de",
  size: 25,
};

export default CountryFlag;
