const { ethers, formatUnits } = require('ethers')

const USDC = '0xdac17f958d2ee523a2206206994597c13d831ec7'
const RPC_URL = 'https://rpc.ankr.com/eth'

const ERC20ABI = [
  'function symbol() public view returns (string)',
  'function decimals() public view returns (uint8)',
  'function totalSupply() public view returns (uint256)',
  'function balanceOf(address _owner) public view returns (uint256 balance)',
]

const run = async () => {
  const provider = new ethers.JsonRpcProvider(RPC_URL)
  const usdcContract = new ethers.Contract(USDC, ERC20ABI, provider)

  const decimals = await usdcContract.decimals()

  const symbol = await usdcContract.symbol()
  const totalSupply = await usdcContract.totalSupply()
  console.log(`${symbol} totalSupply : `, formatUnits(totalSupply, decimals))

  const balance = await usdcContract.balanceOf('vitalik.eth')
  console.log('balance', formatUnits(balance, decimals))
}

run()
  .then()
  .catch((error) => console.log(error))
