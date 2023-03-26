const { ethers, formatEther } = require('ethers')

const RPC_URL = 'https://rpc.ankr.com/eth'

const TX = '<TRANSACTION_HAHS>'

const run = async () => {
  const provider = new ethers.JsonRpcProvider(RPC_URL)

  const blockNumber = await provider.getBlockNumber()
  console.log('blockNumber : ', blockNumber)

  const balance = await provider.getBalance('vitalik.eth')
  console.log('balance (ETH)', balance)
  console.log('balance (ETH)', formatEther(balance))

  // const tx = await provider.getTransaction(TX)
  // console.log('tx', tx)
}

run()
  .then()
  .catch((error) => console.log(error))
