// main.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';

import * as faucet from './ithacanet.json';

const RPC_URL = "https://hangzhounet.smartpy.io";

const deploy = async () => {
    try {
        const tezos = new TezosToolkit(RPC_URL);
        tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')));
    } catch (err) {
        console.log(err);
    }
}

deploy();