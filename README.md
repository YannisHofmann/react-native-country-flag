# react-native-country-flag

This is a react-native package to display every 254 country flag with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard!

![preview image](https://raw.githubusercontent.com/YannisHofmann/react-native-country-flag/main/assets/preview_cover.png)

[![NPM](https://img.shields.io/npm/v/react-native-country-flag.svg)](https://www.npmjs.com/package/react-native-country-flag)
[![Npm package total downloads](https://badgen.net/npm/dt/react-native-country-flag)](https://npmjs.com/package/react-native-country-flag)


## 📖 Table of Contents

- [⬇️ Install package](#-install-package)
- [💾 Flag Data (local or remote)](#-data)
- [🚩 Flag component (props)](<#-Flag-component-(props)>)
- [📝 License](<#-Flag-component-(props)>)


&nbsp;


## ⬇️ Install package

```bash
npm install --save react-native-country-flag
```

&nbsp;

## 💾 Data

Data required for the countryflag component to work has been completely decoupled from the library. That gives developers the flexibility to better control their app bundle size and let them choose how and when this data is loaded. Data can be:

### Usage with remotely Fetched flags

- **Pros:** Data fetched only when needed, does not affect your app bundle size
- **Cons:** Network latency, doesn’t work offline

```js
import CountryFlag from "react-native-country-flag";

<CountryFlag isoCode="de" size={25} />
```



### Usage with flags directly Bundled into your codebase

🚧 **Note**: Still in progress (probely available in v2.1)

- **Pros:** Component renders instantly, data is available offline
- **Cons:** Does affect your app bundle size

```sh
npm install --save react-native-country-flag/data
```

```jsx
import CountryFlag from "react-native-country-flag";
import flags from "react-native-country-flag/data";

<CountryFlag isoCode="de" size={25} flags={flags} />
```


&nbsp;

## 🚩 Flag component (props)

```js
import CountryFlag from "react-native-country-flag";

<CountryFlag isoCode="de" size={25} />
```

You can only use the [ISO 3166-1 alpha-2 Standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the isoCode property.

| Prop    |    Type    |                                                    Desciption                                                     |
| ------- | :--------: | :---------------------------------------------------------------------------------------------------------------: |
| isoCode |   String   | Define the country flag with the [ISO 3166-1 alpha-2 Standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). |
| size    |  Integer   |                                      Define the size from the country flag.                                       |
| style   | Stylesheet |                               Customize the style from the `CountryFlag` component.                               |
| flags   |            |                              Optional: pass bundeled flags `CountryFlag` component.                               |


&nbsp;

## 📝 License

MIT © [Yannis Hofmann](https://github.com/YannisHofmann)
