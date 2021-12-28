const { version } = require("../package.json");

const mainnet = require("../tokens/mainnet.json");
const fantom = require("../tokens/fantom.json");
const matic = require("../tokens/matic.json");
const xdai = require("../tokens/xdai.json");
const bsc = require("../tokens/bsc.json");
const avalanche = require("../tokens/avalanche.json");
const heco = require("../tokens/heco.json");
const harmony = require("../tokens/harmony.json");
const okex = require("../tokens/okex.json");
const arbitrum = require("../tokens/arbitrum.json");
const celo = require("../tokens/celo.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "ChampagneSwap Community",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/champagneswap/art/master/champagne/logo-256x256.png",
    keywords: ["champagneswap", "default"],
    tokens: [
      ...mainnet,
      ...fantom,
      ...matic,
      ...xdai,
      ...bsc,
      ...avalanche,
      ...heco,
      ...harmony,
      ...okex,
      ...arbitrum,
      ...celo,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
