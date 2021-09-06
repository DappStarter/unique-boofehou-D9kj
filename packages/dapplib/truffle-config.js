require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan raise sad under grace drop tail gasp'; 
let testAccounts = [
"0xdbbaad27496e362eecdca00a1c12c626693bb117af499464908011662cabfef0",
"0x44aeddb87a011bca9c41e9cdff37dbae65b2a0f2cd1bea19e86c92e16b8e5912",
"0x9879cd6009bd1ac6c9a8bba1fbd0ba3d1dbf9c4b9098f509ff408a5150417ec1",
"0x46758c9d1bbe5bb3297c844f536464fdd79515a335f91bb1dd689e6526cb30de",
"0x119a06a08fa321075dea36cc556165e520f63451703daecf0701535b5fb08afe",
"0xa26dc46fff13888b5aa413d1849e4ad12e981740caef01f2b2eb812834d0961d",
"0xea7f39202b28ca333e6adec40cfa389cb525984e5485ece46a469156fe7ddcf1",
"0x7eb5c2fe000bcc824ca6986cad77dc18882ee4a95226a6fec5bf7bfc14220cc8",
"0x9e0b76beb8c6a45c60ba96835074b0c096c94bcf1842e903d6330524e2a334a7",
"0x5ee054d5d6f8fc4a89f4c189d668df90a61cf925d7b25a1d31812078230745c9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


