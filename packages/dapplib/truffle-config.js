require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind essay imitate private forget segment'; 
let testAccounts = [
"0x4c9c932142abeeccb57c3de3a569163d902334af8a0e6c63d79c7606c854fb00",
"0xb491589a4ffe158366cf9de558c7805b10a8edc747664cfd9be3f7ca7dcdfa92",
"0xc77fc3ff2117d8e2a3d96c83d00631b90e30f21338e0ee77a0374b91afac00d1",
"0xfb24f627ff4e9004b567ab7b26af163661e9358352e67b36d6ab6e13dcf42da3",
"0x45677b63619b41c96e6acca9750228edb4ed8c18d3c47ffe32f8a5b3dabf8640",
"0x996c149a5fe7c1caca15ade79221607ec4e9e5c52afd74b4a0d2b46872ff6389",
"0x196a79804fc57c19fc4f31c47cc2049c34c76821ffd4d44e4db9eefd451c2e33",
"0x3b10987fae77107692ef5e6057e6a2d05577892b23de3496270e3f172833706e",
"0xcb9a8e0e9b921de742bebbc94cabdf8c5a5defe36cb31d5ae2b3f9dd88d442cb",
"0x3c10a82e05d21d2fee512a14b87e3e60ced275309b3932da2c9a5d44b0a365da"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

