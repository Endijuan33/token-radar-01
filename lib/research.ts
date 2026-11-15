// Researched farm plans for eighty-four protocols: the watchlist's forty plus the highest-TVL early rows (ranks 41-89).
//
// Each entry is the farm plan the research found for one protocol: the points program's name, the
// specific vault or product, the chain, and the concrete actions, each step sourced from the
// protocol's own docs or site (see research/batch-A.md through batch-H.md). A step that could not be
// verified is written generically instead of invented: no fake program names, no fake APYs, no fake
// dates. Protocols the research could not verify a program for get the category-derived plan from
// lib/model.ts instead of a researched entry.
//
// Entries are ordered by board rank, so the highest-ranked protocols come first in the dashboard's
// research.js. v2 trims every entry to three steps so the dashboard source still fits the dossier's
// 64 KiB text cap whole. This file is the single source of truth for the researched steps: main.ts writes the
// same steps to board.json and to the dashboard's research.js, so the board and the page can never
// disagree.
//
// Honest notes the research forced: Doppler Finance's XDP token already launched (28 Sep 2026) and
// MEZO, PLUME, B2 and TAO already trade, so those rows are yield plays, not new-token farms; USDD is
// itself a stablecoin; the Lightning Network cannot issue a token; b14g was exploited on 31 Oct 2026
// and K3 Capital lost about $2M in the Nov 2025 Stream/deUSD collapse, so both rows carry a warning.

import type { FarmStep } from './model.ts';

/** Researched farm plans by protocol slug, in board-rank order. */
export const RESEARCH_STEPS: Record<string, FarmStep[]> = {
  'steakhouse-financial': [
    { text: 'Deposit USDC into Steakhouse Prime USDC vault on Morpho on ETH.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Steakhouse High Yield USDC vault on Morpho on ETH.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Steakhouse-curated vault on Morpho on Base for lower gas.', cost: '$100, $2 gas', time: '15m' },
  ],
  'gauntlet': [
    { text: 'Deposit USDC into Gauntlet Prime vault on Morpho on ETH for conservative yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Gauntlet Balanced vault on Morpho for a wider market set.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Gauntlet USDC Prime vault on Kamino on SOL.', cost: '$100, $1 gas', time: '15m' },
  ],
  'veda': [
    { text: 'Mint and hold weETHs via ether.fi app to earn Veda Points plus Ether.fi and Symbiotic points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit LBTC into Lombard\'s DeFi Vault and hold LBTCv for 3x Veda Points and 4x Lombard Lux.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into ether.fi Liquid ETH vault on ETH for Veda Points plus 4x Ether.fi points.', cost: '$150, $8 gas', time: '15m' },
  ],
  'upshift': [
    { text: 'Deposit USDC into Upshift Gamma USDC vault on ETH, which carries a 10x points multiplier.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Deposit WHYPE into Hyperbeat Ultra HYPE vault on HyperEVM to earn Upshift plus Hyperbeat points.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit uBTC into uBTC vault on HyperEVM to earn Upshift points on a BTC position.', cost: '$100, $2 gas', time: '15m' },
  ],
  'usdd': [
    { text: 'Mint USDD by opening a CDP vault on TRON and locking TRX, sTRX or USDT as collateral.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Swap USDT for USDD at 1:1 through USDD Peg Stability Module on TRON, Ethereum or BNB Chain.', cost: '$100, $2 gas', time: '10m' },
    { text: 'Convert USDD into sUSDD on ETH or BNB Chain for auto-compounding yield with no lockup.', cost: '$100, $4 gas', time: '10m' },
  ],
  'nonce-capital': [
    { text: 'Deposit ETH or staked ETH into ether.fi Liquid ETH vault on ETH, curated by Nonce Capital.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into ether.fi Liquid BTC vault on ETH for Veda Points with Lombard and Babylon points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into ether.fi Liquid USD vault on ETH for points on a stablecoin position.', cost: '$150, $8 gas', time: '15m' },
  ],
  'symbiotic': [
    { text: 'Deposit wstETH into Symbiotic vault on ETH through Symbiotic app to earn Symbiotic Points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit sUSDe into Symbiotic vault on ETH to earn Symbiotic Points on a stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit weETH through ether.fi Liquid Symbiotic route for Symbiotic plus Ether.fi and Veda points.', cost: '$150, $8 gas', time: '15m' },
  ],
  'onre': [
    { text: 'Mint ONyc on SOL through OnRe app to earn 1 OnRe Point per ONyc per day plus reinsurance yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Supply ONyc as collateral on Kamino on SOL and borrow USDC against it to earn 3x OnRe Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC into Loopscale OnRe USDC vault on SOL for lending yield plus 3x OnRe Points.', cost: '$100, $1 gas', time: '15m' },
  ],
  'bittensor-dtao': [
    { text: 'Stake TAO to a validator on root network (subnet 0) to earn a share of validator rewards in TAO.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Stake TAO into high-demand subnet to swap into its alpha token and earn alpha emissions.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Compare subnet alpha prices and emission shares on a Bittensor explorer before choosing a subnet.', cost: 'free to check', time: '15m' },
  ],
  'opentrade': [
    { text: 'Deposit USDC into Nest vault on Plume powered by OpenTrade and hold the nTOKEN to accrue RWA yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Buy or mint SIERRA, the liquid yield token on AVAX backed by OpenTrade vaults, and hold it.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC into OpenTrade-powered USDC vault on AVAX to earn Treasury-backed yield.', cost: '$100, $2 gas', time: '15m' },
  ],
  'plume-vaults': [
    { text: 'Deposit stablecoins into Nest vault on Plume (nTBILL, nBASIS, nWISDOM) and hold the nTOKEN for RWA yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit stablecoins into Nest vault on SOL and deploy the nTOKEN across Solana DeFi while holding it.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Mint nBASIS on Nest and bring it to Pendle on ETH, choosing PT-nBASIS for fixed yield or YT for upside.', cost: '$100, $8 gas', time: '20m' },
  ],
  'rockawayx': [
    { text: 'Deposit USDC into RockawayX USDC Prime vault (rxUSDCp) on Morpho on ETH.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into RockawayX USDC Yield vault (rxUSDCy) on Morpho on ETH for RWA collateral exposure.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit WETH into RockawayX wETH vault (rxWETH) on Morpho on ETH for ETH-correlated yield.', cost: '$150, $8 gas', time: '15m' },
  ],
  'hyperithm': [
    { text: 'Deposit USDC into Hyperithm USDC Apex vault on Morpho and hold the vault shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDT into Saturn USDT vault on Lista (BNB Chain), curated by Hyperithm, for 5x Saturn Points.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC into Saturn USDC vault on Morpho, curated by Hyperithm, for 5x Orbital Points on top of APY.', cost: '$100, $8 gas', time: '15m' },
  ],
  'k3-capital': [
    { text: 'Deposit WETH into K3 Capital Earn WETH vault on Euler (Monad) and hold the receipt token.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit AUSD into K3 Capital Earn AUSD vault on Euler (Monad) for stablecoin yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC or USDT into K3-curated vault on Morpho on ETH and hold the vault shares.', cost: '$150, $8 gas', time: '15m' },
  ],
  'b14g': [
    { text: 'Deposit BTC through b14g on Babylon to earn Babylon rewards plus b14g Points while Babylon caps are full.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit CORE into dualCORE vault on Core chain to pair with BTC stakers for the boosted dual rate.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Hold dualCORE receipt token in the b14g app to keep accumulating b14g Points and dual-staking yield.', cost: 'capital stays put', time: '30 days' },
  ],
  'lagoon': [
    { text: 'Open the Lagoon app, connect a wallet, and browse the public vault list for a vault open to retail deposits.', cost: 'free to browse', time: '10m' },
    { text: 'Review the chosen vault\'s strategy, curator, fees, deposit asset and withdrawal terms before depositing.', cost: 'just the check', time: '15m' },
    { text: 'Deposit USDC into Attrius atrUSD vault on ETH and hold the atrUSD vault shares.', cost: '$150, $8 gas', time: '15m' },
  ],
  'r25': [
    { text: 'Deposit USDC into pRNH vault on Pharos through R25 for NYLIM Anemoy high-yield corporate bond exposure.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC into Axil Consumer Credit Vault (rcPC) on Pharos for emerging-market consumer lending.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Buy or mint rcUSD on Sui and stake it to receive rcUSDp, the yield-bearing receipt token.', cost: '$100, $1 gas', time: '15m' },
  ],
  'clearstar': [
    { text: 'Deposit USDC into Clearstar cbAssets Vault on Morpho and hold the vault shares for lending yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Clearstar USDC Core vault on Morpho for a core, diversified lending allocation.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Clearstar Earn USDC vault on Euler (Monad) and hold the CSUSDC receipt token.', cost: '$100, $2 gas', time: '15m' },
  ],
  'lofty': [
    { text: 'Create a Lofty account, complete identity verification, and browse the property marketplace on Algorand.', cost: 'free to register', time: '20m' },
    { text: 'Buy property tokens for a chosen rental property on Lofty at $50 per token and hold them for daily rent.', cost: '$50 per token, $1 gas', time: '15m' },
    { text: 'Collect daily rent payouts in USDC from the held property tokens.', cost: 'free to collect', time: '5m a day' },
  ],
  'galaxy-curation': [
    { text: 'Deposit USDC into Galaxy USDC vault on Kamino on SOL and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDT into Galaxy USDT vault on Kamino on SOL and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Look for Galaxy Quality and Enhanced vaults on Morpho on ETH and deposit into listed vault.', cost: '$150, $8 gas', time: '15m' },
  ],
  'curvance': [
    { text: 'Supply USDC to a Curvance USDC market on Monad and hold the cToken position.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Check the Curvance app for any live Merkl incentives on its markets and only deposit while they are live.', cost: 'free to check', time: '10m' },
    { text: 'Borrow against supplied collateral on Curvance on Monad only while keeping the health factor above liquidation.', cost: '$2 gas', time: '10m' },
  ],
  'armitage-by-wintermute': [
    { text: 'Deposit USDC into Wintermute USDC Select vault on Morpho on ETH for Select-tier yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Wintermute USDC Prime vault on Morpho on ETH for the conservative tier.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDT into Wintermute USDT Select vault on Morpho on ETH for stablecoin diversification.', cost: '$150, $8 gas', time: '15m' },
  ],
  'ember': [
    { text: 'Deposit USDC into Ember Earn vault on Sui and hold eEARN receipt tokens.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit SUI into Ember Sui vault on Sui and hold eSUI receipt tokens.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit BLUE into Bluefin Vault on Ember on Sui and hold eBLUE receipt tokens.', cost: '$100, $1 gas', time: '15m' },
  ],
  'valos': [
    { text: 'Check the Accountable YieldApp page for the Valos vault, since it is described as permissioned.', cost: 'free to check', time: '10m' },
    { text: 'Look for a Valos vUSD/AUSD market on Euler on Monad and deposit only if it is open to retail deposits.', cost: '$100, $2 gas', time: '15m' },
    { text: 'If you hold vUSD from a Valos credit position, hold it rather than selling so it keeps accruing yield.', cost: 'capital stays put', time: '30 days' },
  ],
  'tydro': [
    { text: 'Bridge assets to Ink L2 using the official bridge and hold ETH on Ink for gas.', cost: '$50, $4 gas', time: '15m' },
    { text: 'Supply USDT0 to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Supply wETH to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.', cost: '$100, $1 gas', time: '15m' },
  ],
  'infinifi': [
    { text: 'Deposit USDC on ETH at the infiniFi app to mint iUSD and hold it for Season 3 points.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Stake iUSD into siUSD for liquid yield and a higher points multiplier than plain iUSD.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Lock iUSD into liUSD for 1-13 weeks for the highest yield tier and points.', cost: '$100, $8 gas', time: '15m' },
  ],
  'keyrock': [
    { text: 'Deposit USDC into Keyrock USDC vault on ETH via Morpho app and hold kUSDC shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Keyrock Prime USDC vault on Arc via Morpho and hold krUSDC shares.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDT into Keyrock Prime USDT vault on ETH via Morpho app and hold the shares.', cost: '$150, $8 gas', time: '15m' },
  ],
  'doppler-finance': [
    { text: 'Deposit XRP into Doppler XRP Vault on XRPL using an XRPL wallet and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit RLUSD into Doppler RLUSD Vault on XRPL and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit cbXRP into Doppler vault on Base and hold the vault position.', cost: '$100, $2 gas', time: '15m' },
  ],
  'gami-labs': [
    { text: 'Deposit USDC into gamiUSDC vault on Lagoon on ETH for the managed stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into earnUSDC vault on Stellar via Upshift for Gami Labs and Stake Capital yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit XLM into earnXLM vault on Stellar via Upshift for the Stellar-native yield strategy.', cost: '$100, $1 gas', time: '15m' },
  ],
  'tori-finance': [
    { text: 'Deposit stablecoins into Tori Ecosystem Vault on Upshift on ETH and hold trUSD to accrue Cores.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Stake trUSD into strUSD on ETH to earn strategy yield plus Cores at the staking multiplier.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Bridge trUSD or strUSD to Monad, Arbitrum, Pharos or Solana via Chainlink CCIP for DeFi there.', cost: '$100, $4 gas', time: '20m' },
  ],
  'tulipa-capital': [
    { text: 'Deposit USDC into Tulipa USDC vault on Lagoon on ETH for the managed stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit ETHplus into Tulipa ETH+ vault on Lagoon on ETH for delta-neutral ETH yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Tulipa-curated Turtle vault on AVAX for the curator\'s Avalanche allocation.', cost: '$100, $2 gas', time: '15m' },
  ],
  'axis': [
    { text: 'Deposit USDT, USDC or USDx into Axis Ecosystem Vault on ETH via Axis app to accrue Coordinates.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Stake USDx into sUSDx on ETH to earn strategy yield while the balance accrues Coordinates.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Provide USDx liquidity on Curve to earn Coordinates at the Curve venue multiplier shown in the app.', cost: '$100, $8 gas', time: '15m' },
  ],
  'yuzu-money': [
    { text: 'Buy yzUSD on a secondary market on Plasma and hold it to accrue Yuzu Juice points.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Stake yzUSD into syzUSD on Plasma to earn weekly yield plus Juice at the staking multiplier.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit into yzPP junior tranche vault on Plasma for first-loss risk, a higher premium and Juice.', cost: '$100, $2 gas', time: '15m' },
  ],
  'reti-pooling': [
    { text: 'Open the Réti staking dashboard and compare validator pools by commission, minimum entry and stake.', cost: 'free to browse', time: '10m' },
    { text: 'Stake ALGO into chosen validator pool on Algorand, entering at least that pool\'s minimum amount.', cost: '$50, $1 gas', time: '15m' },
    { text: 'Leave the stake in place across epochs so consensus rewards compound automatically through pool.', cost: 'capital stays put', time: '30 days' },
  ],
  'saturn': [
    { text: 'Register at claim.saturn.credit', cost: '$0, sig only', time: '10m' },
    { text: 'Deposit USDat into sUSDat vault on Ethereum', cost: '$100, $2 gas', time: '15m' },
    { text: 'Hold sUSDat; watch @saturn_credit X for TGE', cost: '$0', time: '5m' },
  ],
  'firelight': [
    { text: 'Bridge XRP to Flare via FAssets system to mint FXRP at 1:1.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit FXRP into Firelight vault on Flare to receive stXRP and accrue Firelight Points and emissions.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deploy stXRP into Flare DeFi, such as the Gami Labs FXRP MetaVault on Spectra, to stack extra yield.', cost: '$100, $1 gas', time: '15m' },
  ],
  'hive-protocol': [
    { text: 'Stake BTC through Hive protocol on BSquared to secure the network and earn B2 token rewards.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Stake B2 tokens by delegating to an existing sequencer to earn a share of fees and staking rewards.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit BTC into Mining Squared yield pool to accrue B2 rewards over time.', cost: '$100, $2 gas', time: '15m' },
  ],
  'mezo-earn': [
    { text: 'Lock BTC, tBTC or wBTC on Mezo to mint a veBTC position and earn BTC-denominated yield from fees.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Buy MEZO on an exchange and lock it for veMEZO to boost the veBTC yield by up to 5x.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Vote with veBTC power through Mezo gauges to direct emissions toward the best-paying pools.', cost: 'free to vote', time: '10m' },
  ],
  'lightning-network': [
    { text: 'Run a Lightning node (LND or Core Lightning) and open well-connected channels funded with BTC for routing fees.', cost: '$100, $1 gas', time: '60m' },
    { text: 'Open channels to high-traffic hubs and large exchanges, since routing income follows payment volume.', cost: '$50, $1 gas', time: '30m' },
    { text: 'Rebalance channels regularly so liquidity sits where payments flow, keeping the node routable.', cost: '$1 gas', time: '15m a week' },
  ],
  'noble': [
    { text: 'Swap USDC for USDN on Osmosis and hold USDN to earn the base Treasury yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDN into Noble Points Vault and hold the deposit to earn Noble Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDN into Boosted Yield Vault on Noble and hold it to earn base yield plus extra yield.', cost: '$100, $1 gas', time: '15m' },
  ],
  'ultrayield-curator': [
    { text: 'Deposit USDC in UltraYield USDC V1 on Morpho', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit USDT in UltraYield USDT Core', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold receipt tokens; watch UltraYield X', cost: '$0', time: '5m' },
  ],
  'makina': [
    { text: 'Deposit USDC in Makina DUSD Machine', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit ETH in Makina DETH Machine', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold Machine tokens; check Makina points page', cost: '$0, $0 gas', time: '5m' },
  ],
  'xrpl-dex': [
    { text: 'Deposit XRP+RLUSD in XRP/RLUSD AMM on XRPL', cost: '$50, <$1', time: '10m' },
    { text: 'Swap XRP for RLUSD via XRPL DEX order book', cost: '$50, <$1 gas', time: '10m' },
    { text: 'Hold AMM LP tokens; vote on pool fee', cost: '$0, <$1', time: '5m' },
  ],
  'felix-vaults': [
    { text: 'Deposit USDC in Felix USDC V2 vault', cost: '$50, <$1', time: '15m' },
    { text: 'Deposit feUSD in Felix WHYPE stability pool', cost: '$50, <$1 gas', time: '15m' },
    { text: 'Hold positions; check Felix points dashboard', cost: '$0, $0 gas', time: '5m' },
  ],
  'aegis-yusd': [
    { text: 'Mint YUSD with USDC via Aegis Mint', cost: '$50, $2 gas', time: '15m' },
    { text: 'Stake YUSD into sYUSD, auto-compound', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold sYUSD; check Aegis Points weekly', cost: '$0', time: '5m' },
  ],
  'vfat.io': [
    { text: 'Swap USDC for ETH via vfat router on Base', cost: '$50, <$1 gas', time: '10m' },
    { text: 'Deposit USDC in a listed yield vault via vfat', cost: '$50, <$1', time: '15m' },
    { text: 'Track the position in vfat portfolio tracker', cost: '$0, $0 gas', time: '5m' },
  ],
  'plasma-saving-vaults': [
    { text: 'Deposit USDT0 in Plasma Saving Vault', cost: '$50, <$1', time: '15m' },
    { text: 'Lend USDT0 on Aave V3 on Plasma', cost: '$50, <$1', time: '15m' },
    { text: 'Hold vault shares; check plasma.org rewards', cost: '$0', time: '5m' },
  ],
  'project-0': [
    { text: 'Lend USDC on Project 0 on Solana', cost: '$50, <$1 gas', time: '10m' },
    { text: 'Borrow USDC against SOL on Project 0', cost: '$50, <$1 gas', time: '10m' },
    { text: 'Hold deposit live; check points on Portfolio', cost: '$0', time: '5m' },
  ],
  'manta-cedefi': [
    { text: 'Deposit USDT in Manta CeDeFi for mUSD', cost: '$50, <$1', time: '15m' },
    { text: 'Deposit ETH in Manta CeDeFi for mETH', cost: '$50, <$1', time: '15m' },
    { text: 'Hold mTokens; check CeDeFi dashboard for yields', cost: '$0, $0 gas', time: '5m' },
  ],
  'current': [
    { text: 'Supply USDC to Current on Sui', cost: '$50, <$1 gas', time: '10m' },
    { text: 'Loop SUI with Current Multiply on Sui', cost: '$50, <$1 gas', time: '15m' },
    { text: 'Hold position; check Current points page', cost: '$0, $0 gas', time: '5m' },
  ],
  'd2-finance': [
    { text: 'Deposit USDC into d2HYPE vault on Hyperliquid', cost: '$50, $2 gas', time: '20m' },
    { text: 'Deposit USDC into Hot7 Epoch 1 vault on Base', cost: '$50, $2 gas', time: '20m' },
    { text: 'Hold shares; watch D2 channels for HOT news', cost: '$0, $0 gas', time: '10m' },
  ],
  'lulo': [
    { text: 'Deposit USDC into Lulo Protected on Solana', cost: '$50, $1 gas', time: '15m' },
    { text: 'Deposit USDC into Lulo Boost on Solana', cost: '$50, $1 gas', time: '15m' },
    { text: 'Hold deposit; check partner points in Lulo app', cost: '$0, $0 gas', time: '10m' },
  ],
  'august-digital': [
    { text: 'Deposit USDC into August USDC V2 on Monad', cost: '$50, $1 gas', time: '15m' },
    { text: 'Deposit USDC into August USPC vault on Monad', cost: '$50, $1 gas', time: '15m' },
    { text: 'Hold shares; check Upshift Points dashboard', cost: '$0, $0 gas', time: '10m' },
  ],
  'liminal-basis': [
    { text: 'Mint limUSD with USDC on HyperEVM', cost: '$50, $2 gas', time: '15m' },
    { text: 'Mint xLEND with USDC on Hyperliquid', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold xTokens; watch Liminal channels for news', cost: '$0, $0 gas', time: '10m' },
  ],
  'apex-omni': [
    { text: 'Trade a small perp on ApeX Omni on Arbitrum', cost: '$50, $1 gas', time: '15m' },
    { text: 'Stake APEX in Staking 4.0 on ApeX Omni', cost: '$50, $1 gas', time: '15m' },
    { text: 'Check ApeX Social points and Season 2 news', cost: '$0, $0 gas', time: '10m' },
  ],
  'marginfi-lending': [
    { text: 'Lend USDC on Project 0 (ex-marginfi), Solana', cost: '$50, $1 gas', time: '15m' },
    { text: 'Borrow USDT against USDC on Project 0', cost: '$25 loan, $1 gas', time: '15m' },
    { text: 'Hold deposit; check Project 0 points page', cost: '$0, $0 gas', time: '10m' },
  ],
  '3f': [
    { text: 'Deposit into FALCONX-5X vault on 3F', cost: '$50, $5 gas', time: '20m' },
    { text: 'Deposit into 3F x Steakhouse USDC vault', cost: '$50, $5 gas', time: '20m' },
    { text: 'Hold vault tokens; watch 3F channels for news', cost: '$0, $0 gas', time: '10m' },
  ],
  'mantle-restaking': [
    { text: 'Stake ETH to mint mETH on Ethereum', cost: '$50, $5 gas', time: '20m' },
    { text: 'Bridge mETH from Ethereum to Mantle', cost: '$50, $1 gas', time: '20m' },
    { text: 'Hold mETH; check dashboard for COOK news', cost: '$0, $0 gas', time: '10m' },
  ],
  'neutral-trade': [
    { text: 'Deposit USDC into Neutral Autopilot, Solana', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC into NT Earn on Solana', cost: '$100, $1 gas', time: '15m' },
    { text: 'Hold positions; check NT Points leaderboard', cost: '$0, $0 gas', time: '10m' },
  ],
  'zoo-finance': [
    { text: 'Deposit iBGT into Zoo L-Vault on Berachain', cost: '$50, $1 gas', time: '15m' },
    { text: 'Deposit USDC into Zoo B-Vault on Berachain', cost: '$50, $1 gas', time: '15m' },
    { text: 'Hold vault receipts; watch Zoo channels', cost: '$0, $0 gas', time: '10m' },
  ],
  'origami-finance': [
    { text: 'Deposit USDe into lovEthena vault on Ethereum', cost: '$50, $5 gas', time: '20m' },
    { text: 'Deposit USDC into lovStables on Ethereum', cost: '$50, $5 gas', time: '20m' },
    { text: 'Hold lovTokens; check Ori Points dashboard', cost: '$0, $0 gas', time: '10m' },
  ],
  'mystic-finance-lending': [
    { text: 'Supply FXRP to a Morpho vault on Flare', cost: '$50, $1 gas', time: '10m' },
    { text: 'Borrow FXRP against stXRP PT collateral', cost: '$0, $1 gas', time: '10m' },
    { text: 'Hold vault shares; check Firelight points', cost: '$0', time: '5m' },
  ],
  'zircuit-staking': [
    { text: 'Stake ZRC in the Liquidity Hub on Zircuit', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit weETH into L2 staking on Zircuit', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold staked ZRC; check Season 3 points', cost: '$0', time: '5m' },
  ],
  'y10k-capital': [
    { text: 'Deposit AUSD in Y10k AUSD Vault on Monad', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit PYUSD in Y10k vault on Sei', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold y10kAUSD; watch Yield Network posts', cost: '$0', time: '5m' },
  ],
  'anemoy-capital': [
    { text: 'Buy deJTRSY wrapper tokens on Ethereum', cost: '$50, $2 gas', time: '15m' },
    { text: 'Supply deJAAA as collateral on Templar', cost: '$0, $1 gas', time: '10m' },
    { text: 'Hold fund tokens; check Centrifuge app', cost: '$0', time: '5m' },
  ],
  'agni-finance': [
    { text: 'Add mETH/WETH liquidity on Agni, Mantle', cost: '$50, $1 gas', time: '15m' },
    { text: 'Swap USDC for WMNT on Agni DEX', cost: '$10, $1 gas', time: '5m' },
    { text: 'Take rewards as locked AGNI for bonus', cost: '$0, $1 gas', time: '5m' },
  ],
  'avant-aveth': [
    { text: 'Mint avETH with ETH on Ethereum', cost: '$50, $2 gas', time: '15m' },
    { text: 'Stake avETH for savETH senior yield', cost: '$0, $2 gas', time: '10m' },
    { text: 'Hold savETH; watch for AVANT TGE date', cost: '$0', time: '5m' },
  ],
  'nuva': [
    { text: 'Deposit USDC into HOME vault on Ethereum', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit USDC into nvYLDS vault on Ethereum', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold nv tokens; check NUVA Points page', cost: '$0', time: '5m' },
  ],
  'decibel': [
    { text: 'Deposit USDC into DLP vault on Aptos', cost: '$50, $1 gas', time: '10m' },
    { text: 'Open a small perp trade on Decibel', cost: '$10, $1 gas', time: '10m' },
    { text: 'Hold DLP shares; check Amps dashboard', cost: '$0', time: '5m' },
  ],
  'gamma-research': [
    { text: 'Deposit AUSD into earnAUSD on Monad', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit AUSD into earnAUSD Looping Vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold earnAUSD; claim Merkl incentives', cost: '$0', time: '5m' },
  ],
  'templar-lending': [
    { text: 'Supply USDC to deJAAA/USDC on Stellar', cost: '$50, $1 gas', time: '10m' },
    { text: 'Borrow USDC against deJTRSY on Stellar', cost: '$0, $1 gas', time: '10m' },
    { text: 'Hold positions; watch Precept markets', cost: '$0', time: '5m' },
  ],
  'theo-network-thbill': [
    { text: 'Hold thUSD from the Theo app on Ethereum', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit thUSD into Boost vault, Morpho', cost: '$0, $2 gas', time: '10m' },
    { text: 'Hold sthUSD; check Theo rewards page', cost: '$0', time: '5m' },
  ],
  'drakewell': [
    { text: 'Buy USDdw on Uniswap on Arbitrum', cost: '$50, $1 gas', time: '10m' },
    { text: 'Buy SPYdw on Uniswap on Arbitrum', cost: '$50, $1 gas', time: '10m' },
    { text: 'Hold USDdw/SPYdw, watch drakewell.fi', cost: '$0', time: '5m' },
  ],
  'hakutora': [
    { text: 'Deposit USDC in Hakutora USDC vault, ETH', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit USDT in Hakutora USDT vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold vault shares, check Merkl rewards', cost: '$0', time: '5m' },
  ],
  'waterline': [
    { text: 'Deposit USDC in Waterline Reservoir vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit USDC in Waterline InfiniFi vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold vault shares, check Merkl rewards', cost: '$0', time: '5m' },
  ],
  'flowdesk': [
    { text: 'Deposit USDT in Flowdesk High Yield vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit AUSD in Flowdesk AUSD RWA vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold vault shares, check Merkl rewards', cost: '$0', time: '5m' },
  ],
  'manifest-trade': [
    { text: 'Place a limit order on USDT/USDC market', cost: '$50, $0.01 gas', time: '10m' },
    { text: 'Deposit PYUSD into a Destiny vault', cost: '$50, $0.01 gas', time: '10m' },
    { text: 'Hold upPYUSD, watch manifest.trade', cost: '$0', time: '5m' },
  ],
  'sygnum-fiusd-liquidity-fund': [
    { text: 'Apply via Sygnum as accredited investor', cost: '$11.8k min', time: '1d' },
    { text: 'Subscribe FIUSD via Sygnum Desygnate', cost: '$0', time: '1h' },
    { text: 'Hold FIUSD, yield accrues in NAV', cost: '$0', time: '5m' },
  ],
  'estate-protocol': [
    { text: 'Complete KYC, buy a property token share', cost: '$50, $0.10 gas', time: '30m' },
    { text: 'Buy a second property token on Arbitrum', cost: '$50, $0.10 gas', time: '15m' },
    { text: 'Hold tokens, collect monthly USDC rent', cost: '$0', time: '5m' },
  ],
  'native-credit-pool': [
    { text: 'Supply USDC to Native Credit Pool, Morph', cost: '$50, $1 gas', time: '15m' },
    { text: 'Supply USDT to Native Credit Pool, Ethereum', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold pool shares, watch native.org', cost: '$0', time: '5m' },
  ],
  'hyperbeat-earn': [
    { text: 'Deposit USDT0 into hbUSDT vault, HyperEVM', cost: '$50, $1 gas', time: '15m' },
    { text: 'Deposit WHYPE into hbHYPE Ultra vault', cost: '$50, $1 gas', time: '15m' },
    { text: 'Hold hbUSDT, check Hearts on dashboard', cost: '$0', time: '5m' },
  ],
  'fstswap': [
    { text: 'Swap BNB for USDT on FstSwap, BNB Chain', cost: '$50, $0.10 gas', time: '10m' },
    { text: 'Add BNB-USDT liquidity on FstSwap', cost: '$50, $0.10 gas', time: '10m' },
    { text: 'Hold LP tokens, claim swap fees', cost: '$0', time: '5m' },
  ],
  '9summits': [
    { text: 'Deposit USDC in 9Summits Flagship vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit ETH in 9Summits Flagship ETH vault', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold vault shares, watch 9summits.io', cost: '$0', time: '5m' },
  ],
  'starknet-btc-staking': [
    { text: 'Delegate WBTC to a validator on Starknet', cost: '$50, $1 gas', time: '15m' },
    { text: 'Stake WBTC via Endur, receive xWBTC', cost: '$50, $1 gas', time: '15m' },
    { text: 'Hold xWBTC, claim STRK rewards', cost: '$0', time: '5m' },
  ],
};
