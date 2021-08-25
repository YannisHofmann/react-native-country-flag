# react-native-country-flag

This is a React-Native package to display every 254 Country flags with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard!

[![NPM](https://img.shields.io/npm/v/react-native-country-flag.svg)](https://github.com/YannisHofmann/react-native-country-flag.git)

## Install

```bash
npm install --save react-native-country-flag
```

## Usage

This is an simple example how you can use the `CountryFlag` component.

```jsx
import CountryFlag from "react-native-country-flag";

<CountryFlag isoCode="de" size={25} />;
```

You can only use the [ISO 3166-1 alpha-2 Standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the isoCode property.

## Props

| Prop    |       Type        |                                                    Desciption                                                    |
| ------- | :---------------: | :--------------------------------------------------------------------------------------------------------------: |
| isoCode |      String       | Define the Country flag with the [ISO 3166-1 alpha-2 Standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| size    |      Integer      |                                       Define the size of the Country flag                                        |
| style   | Stylesheet/Object |                               Customize the style from the `CountryFlag` Component                               |

## License

MIT © [Yannis Hofmann](https://github.com/YannisHofmann)
