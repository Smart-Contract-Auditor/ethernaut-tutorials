const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const COIN_FLIP_ADDRESS = "";

module.exports = buildModule("CoinFlipAttack", (m) => {

    const coinFlipAttack = m.contract("CoinFlipAttack", [COIN_FLIP_ADDRESS]);

    return { coinFlipAttack };
});