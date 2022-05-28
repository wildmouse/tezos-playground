import { TezosToolkit } from "@taquito/taquito"
import { InMemorySigner } from "@taquito/signer"
import * as faucet from "../ithacanet.json";

export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl)
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(" ")))
    }

    public increment(increment: number, contract: string) {
        this.tezos.contract
            .at(contract)
            .then((contract) => {
                console.log(`Incrementing storage value by ${increment}...`)
                return contract.methods.increment(increment).send()
            })
            .then((op) => {
                console.log(`Awaiting for ${op.hash} to be confirmed...`)
                return op.confirmation(3).then(() => op.hash)
            })
            .then((hash) => console.log(`Operation injected: ${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`))
    }

    // public sendTx(address: string, amount: number) {
    //     console.log(`Transfering ${amount} tz to ${address}...`)
    //
    //     this.tezos.contract.transfer({ to: address, amount: amount})
    //         .then(op => {
    //             console.log(`Waiting for ${op.hash} to be confirmed...`)
    //             return op.confirmation(1).then(() => op.hash)
    //         })
    //         .then(hash => console.log(`${hash}`))
    //         .catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`))
    // }

    // public async activateAccount() {
    //     const { pkh, activation_code } = faucet;
    //
    //     try {
    //         const operation = await this.tezos.tz.activate(pkh, activation_code)
    //         await operation.confirmation()
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // public getBalance(address: string): void {
    //     this.tezos.rpc
    //         .getBalance(address)
    //         .then(balance => console.log(balance))
    //         .catch(e => console.log("Address not found"));
    // }

    // public getContractEntrypoints(address: string) {
    //     this.tezos.contract
    //         .at(address)
    //         .then((c) => {
    //             let methods = c.parameterSchema.ExtractSignatures();
    //             console.log(JSON.stringify(methods, null, 2));
    //         })
    //         .catch((error) => console.log(`Error: ${error}`))
    // }

    public async main() {}
}