import { App } from "./src/app"

// const RPC_URL = "https://hangzhounet.smartpy.io";
const RPC_URL = "https://rpc.ithacanet.teztnets.xyz";
const ACCOUNT_TO_CHECK = "tz1Xqa5LRU5tayDcZEFr7Sw2GjrbDBY3HtHH"
const COUNTER_CONTRACT = "KT1Gm3XHrRCTJ3TNH6kB3Nt4pURv4XR3kTv8"
const RECIPIENT = "tz1dDc5HrFbjsAuydBwotTa2nzuRkePSRDZg"
const AMOUNT = 10
const INCREMENT = 5

new App(RPC_URL).increment(INCREMENT, COUNTER_CONTRACT)

