const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const COIN_FLIP_ADDRESS = "0x03ca5642E7607De0C0B12c154b640D2E556A59F0";

module.exports = buildModule("CoinFlipAttack", (m) => {

    const coinFlipAttack = m.contract("CoinFlipAttack", [COIN_FLIP_ADDRESS]);

    return { coinFlipAttack };
});