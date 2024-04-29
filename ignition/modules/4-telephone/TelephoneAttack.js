const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TELEPHONE_ADDRESS = "";

module.exports = buildModule("TelephoneAttack", (m) => {

    const telephoneAttack = m.contract("TelephoneAttack", [TELEPHONE_ADDRESS]);

    return { telephoneAttack };
});
