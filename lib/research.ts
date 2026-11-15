// Researched farm plans for the watchlist's forty protocols.
//
// Each entry is the farm plan the research found for one protocol: the points program's name, the
// specific vault or product, the chain, and the concrete actions, each step sourced from the
// protocol's own docs or site (see research/batch-A.md through batch-D.md). A step that could not be
// verified is written generically instead of invented: no fake program names, no fake APYs, no fake
// dates. Protocols the research could not verify a program for get the category-derived plan from
// lib/model.ts instead of a researched entry.
//
// Entries are ordered by board rank, so the highest-ranked protocols come first in the dashboard's
// research.js. This file is the single source of truth for the researched steps: main.ts writes the
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
    { text: 'Use the Coinbase in-app USDC lending product, which routes into Steakhouse vaults on Base.', cost: '$100, no extra gas', time: '10m' },
    { text: 'Hold vault receipt tokens continuously so a future snapshot would capture the position.', cost: 'capital stays put', time: '30 days' },
  ],
  gauntlet: [
    { text: 'Deposit USDC into Gauntlet Prime vault on Morpho on ETH for conservative yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Gauntlet Balanced vault on Morpho for a wider market set.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Gauntlet USDC Prime vault on Kamino on SOL.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDG into Morpho Gauntlet USDG Premium vault on Arbitrum; claim DRIP ARB via Merkl.', cost: '$100, $2 gas', time: '20m' },
    { text: 'Hold vault receipt tokens continuously so a future snapshot would capture the position.', cost: 'capital stays put', time: '30 days' },
  ],
  veda: [
    { text: 'Mint and hold weETHs via ether.fi app to earn Veda Points plus Ether.fi and Symbiotic points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit LBTC into Lombard\'s DeFi Vault and hold LBTCv for 3x Veda Points and 4x Lombard Lux.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into ether.fi Liquid ETH vault on ETH for Veda Points plus 4x Ether.fi points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit wBTC or BTC into ether.fi eBTC vault on ETH for Veda Points with Lombard and Babylon points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Check official Veda Points dashboard for newly added qualifying vaults and deposit while eligible.', cost: 'free to check', time: '10m' },
  ],
  upshift: [
    { text: 'Deposit USDC into Upshift Gamma USDC vault on ETH, which carries a 10x points multiplier.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Deposit WHYPE into Hyperbeat Ultra HYPE vault on HyperEVM to earn Upshift plus Hyperbeat points.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit uBTC into uBTC vault on HyperEVM to earn Upshift points on a BTC position.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDe into HLPe vault on HyperEVM to earn 5x Upshift points plus Ethena sats.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Supply upUSDC as collateral on Morpho through Upshift for a 5x points multiplier on Morpho leg.', cost: '$100, $4 gas', time: '15m' },
  ],
  usdd: [
    { text: 'Mint USDD by opening a CDP vault on TRON and locking TRX, sTRX or USDT as collateral.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Swap USDT for USDD at 1:1 through USDD Peg Stability Module on TRON, Ethereum or BNB Chain.', cost: '$100, $2 gas', time: '10m' },
    { text: 'Convert USDD into sUSDD on ETH or BNB Chain for auto-compounding yield with no lockup.', cost: '$100, $4 gas', time: '10m' },
    { text: 'Supply USDD on JustLend DAO on TRON to earn supply yield plus any live USDD Supply Mining rewards.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Watch the official USDD channels for the Points Mining mechanics and follow only the published rules.', cost: 'free to check', time: '10m' },
  ],
  'nonce-capital': [
    { text: 'Deposit ETH or staked ETH into ether.fi Liquid ETH vault on ETH, curated by Nonce Capital.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into ether.fi Liquid BTC vault on ETH for Veda Points with Lombard and Babylon points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into ether.fi Liquid USD vault on ETH for points on a stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into ether.fi Liquid vaults on OP Mainnet for the same curated exposure at lower gas.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Hold Midas Liquid Reserve or Liquid RWA tokens on Optimism, the funds Nonce Capital manages.', cost: '$100, $2 gas', time: '10m' },
  ],
  symbiotic: [
    { text: 'Deposit wstETH into Symbiotic vault on ETH through Symbiotic app to earn Symbiotic Points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit sUSDe into Symbiotic vault on ETH to earn Symbiotic Points on a stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit weETH through ether.fi Liquid Symbiotic route for Symbiotic plus Ether.fi and Veda points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into Mellow Finance vault on ETH that routes into Symbiotic for Symbiotic plus Mellow points.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Monitor the Symbiotic app dashboard for points accrual and new vaults, since vaults have caps and fill up.', cost: 'free to check', time: '10m' },
  ],
  onre: [
    { text: 'Mint ONyc on SOL through OnRe app to earn 1 OnRe Point per ONyc per day plus reinsurance yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Supply ONyc as collateral on Kamino on SOL and borrow USDC against it to earn 3x OnRe Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC into Loopscale OnRe USDC vault on SOL for lending yield plus 3x OnRe Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Provide ONyc liquidity on Orca or Raydium on SOL to earn 2x OnRe Points on liquidity position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Hold YT-ONyc on Exponent on SOL to earn 4x OnRe Points through yield trading on ONyc stream.', cost: '$100, $1 gas', time: '15m' },
  ],
  'bittensor-dtao': [
    { text: 'Stake TAO to a validator on root network (subnet 0) to earn a share of validator rewards in TAO.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Stake TAO into high-demand subnet to swap into its alpha token and earn alpha emissions.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Compare subnet alpha prices and emission shares on a Bittensor explorer before choosing a subnet.', cost: 'free to check', time: '15m' },
    { text: 'Unstake alpha back to TAO through subnet pool when rotating, accepting pool price impact.', cost: '$1 gas', time: '10m' },
    { text: 'Track the chosen subnet\'s validator performance and owner take rate, since rewards are net of commission.', cost: 'free to check', time: '10m' },
  ],
  opentrade: [
    { text: 'Deposit USDC into Nest vault on Plume powered by OpenTrade and hold the nTOKEN to accrue RWA yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Buy or mint SIERRA, the liquid yield token on AVAX backed by OpenTrade vaults, and hold it.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC into OpenTrade-powered USDC vault on AVAX to earn Treasury-backed yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Hold vault receipt token instead of redeeming, since yield accrues into its value in real time.', cost: 'capital stays put', time: '30 days' },
    { text: 'Monitor partner launches (Nest, Sierra, Littio) for new OpenTrade vaults, the only route to fresh exposure.', cost: 'free to check', time: '10m' },
  ],
  'plume-vaults': [
    { text: 'Deposit stablecoins into Nest vault on Plume (nTBILL, nBASIS, nWISDOM) and hold the nTOKEN for RWA yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit stablecoins into Nest vault on SOL and deploy the nTOKEN across Solana DeFi while holding it.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Mint nBASIS on Nest and bring it to Pendle on ETH, choosing PT-nBASIS for fixed yield or YT for upside.', cost: '$100, $8 gas', time: '20m' },
    { text: 'Stake PLUME with validators on Plume to earn staking rewards while waiting for a future Nest season.', cost: '$50, $1 gas', time: '15m' },
    { text: 'Watch Plume\'s official blog for a new Nest incentive season, since both points programs ended in Mar 2026.', cost: 'free to check', time: '10m' },
  ],
  rockawayx: [
    { text: 'Deposit USDC into RockawayX USDC Prime vault (rxUSDCp) on Morpho on ETH.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into RockawayX USDC Yield vault (rxUSDCy) on Morpho on ETH for RWA collateral exposure.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit WETH into RockawayX wETH vault (rxWETH) on Morpho on ETH for ETH-correlated yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into RockawayX RWA USDC vault on Kamino on SOL for OnRe, Huma and Figure yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC, USDT or trUSD into RockawayX Tori Ecosystem Vault on Upshift and hold etrUSD.', cost: '$100, $8 gas', time: '15m' },
  ],
  hyperithm: [
    { text: 'Deposit USDC into Hyperithm USDC Apex vault on Morpho and hold the vault shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDT into Saturn USDT vault on Lista (BNB Chain), curated by Hyperithm, for 5x Saturn Points.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC into Saturn USDC vault on Morpho, curated by Hyperithm, for 5x Orbital Points on top of APY.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Buy or mint mHYPER on Midas for Hyperithm\'s market-neutral strategy and pass-through Ethena and Resolv points.', cost: '$100, $4 gas', time: '15m' },
    { text: 'Deposit cbBTC into Hyperithm cbBTC Apex vault on Morpho for yield on a delta-neutral BTC strategy.', cost: '$150, $8 gas', time: '15m' },
  ],
  'k3-capital': [
    { text: 'Deposit WETH into K3 Capital Earn WETH vault on Euler (Monad) and hold the receipt token.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit AUSD into K3 Capital Earn AUSD vault on Euler (Monad) for stablecoin yield.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC or USDT into K3-curated vault on Morpho on ETH and hold the vault shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Watch K3-managed pre-deposit campaigns for early-deposit chances, noting lock-ups and counterparty risk.', cost: 'free to check', time: '10m' },
    { text: 'Note the risk: K3 lost about $2M in the Nov 2025 Stream/deUSD collapse; curator vaults carry asset risk.', cost: 'just the check', time: '5m' },
  ],
  b14g: [
    { text: 'Deposit BTC through b14g on Babylon to earn Babylon rewards plus b14g Points while Babylon caps are full.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit CORE into dualCORE vault on Core chain to pair with BTC stakers for the boosted dual rate.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Hold dualCORE receipt token in the b14g app to keep accumulating b14g Points and dual-staking yield.', cost: 'capital stays put', time: '30 days' },
    { text: 'Check the b14g app regularly for point balances and any claim window, since those are only visible there.', cost: 'free to check', time: '10m' },
    { text: 'Wait for the published post-mortem first: about 97M CORE (~$1.35M) was drained on 31 Oct 2026 and contracts paused.', cost: 'just the check', time: '5m' },
  ],
  lagoon: [
    { text: 'Open the Lagoon app, connect a wallet, and browse the public vault list for a vault open to retail deposits.', cost: 'free to browse', time: '10m' },
    { text: 'Review the chosen vault\'s strategy, curator, fees, deposit asset and withdrawal terms before depositing.', cost: 'just the check', time: '15m' },
    { text: 'Deposit USDC into Attrius atrUSD vault on ETH and hold the atrUSD vault shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit into Attrius atrETH vault on ETH and hold the atrETH shares for ETH-denominated yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Check whether a vault built on Lagoon runs its own points program and follow that vault\'s own rules.', cost: 'free to check', time: '10m' },
  ],
  r25: [
    { text: 'Deposit USDC into pRNH vault on Pharos through R25 for NYLIM Anemoy high-yield corporate bond exposure.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDC into Axil Consumer Credit Vault (rcPC) on Pharos for emerging-market consumer lending.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Buy or mint rcUSD on Sui and stake it to receive rcUSDp, the yield-bearing receipt token.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC into R25 Treasury vault (mrcUSD) on Ember (Sui) for a managed R25 strategy.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Subscribe to R25 vaults through Binance Wallet Pharos campaign while live to share PROS rewards.', cost: '$100, $2 gas', time: '15m' },
  ],
  clearstar: [
    { text: 'Deposit USDC into Clearstar cbAssets Vault on Morpho and hold the vault shares for lending yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Clearstar USDC Core vault on Morpho for a core, diversified lending allocation.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Clearstar Earn USDC vault on Euler (Monad) and hold the CSUSDC receipt token.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit FXRP into earnXRP vault on Flare, curated by Clearstar, for yield denominated in XRP.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit WETH into Clearstar Core ETH vault on Morpho for ETH-denominated curated lending yield.', cost: '$150, $8 gas', time: '15m' },
  ],
  lofty: [
    { text: 'Create a Lofty account, complete identity verification, and browse the property marketplace on Algorand.', cost: 'free to register', time: '20m' },
    { text: 'Buy property tokens for a chosen rental property on Lofty at $50 per token and hold them for daily rent.', cost: '$50 per token, $1 gas', time: '15m' },
    { text: 'Collect daily rent payouts in USDC from the held property tokens.', cost: 'free to collect', time: '5m a day' },
    { text: 'Vote on property decisions such as repairs, rent changes and sales when a vote opens for a property held.', cost: 'free to vote', time: '10m' },
    { text: 'Sell property tokens on Lofty secondary marketplace in USDC when exiting a property position.', cost: '$1 gas', time: '10m' },
  ],
  'galaxy-curation': [
    { text: 'Deposit USDC into Galaxy USDC vault on Kamino on SOL and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDT into Galaxy USDT vault on Kamino on SOL and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Look for Galaxy Quality and Enhanced vaults on Morpho on ETH and deposit into listed vault.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Check the Kamino vault page for any minimum deposit, fee or withdrawal terms before depositing.', cost: 'free to check', time: '10m' },
    { text: 'Do not expect points from a Galaxy vault deposit, since no points program was found.', cost: 'just the check', time: '5m' },
  ],
  curvance: [
    { text: 'Supply USDC to a Curvance USDC market on Monad and hold the cToken position.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Check the Curvance app for any live Merkl incentives on its markets and only deposit while they are live.', cost: 'free to check', time: '10m' },
    { text: 'Borrow against supplied collateral on Curvance on Monad only while keeping the health factor above liquidation.', cost: '$2 gas', time: '10m' },
    { text: 'Check official Curvance site and docs for a named CVE season or points page before depositing for a token.', cost: 'free to check', time: '10m' },
    { text: 'Do not deposit for CVE unless Curvance publishes reward terms, since no current rule confirms an allocation.', cost: 'just the check', time: '5m' },
  ],
  'armitage-by-wintermute': [
    { text: 'Deposit USDC into Wintermute USDC Select vault on Morpho on ETH for Select-tier yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Wintermute USDC Prime vault on Morpho on ETH for the conservative tier.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDT into Wintermute USDT Select vault on Morpho on ETH for stablecoin diversification.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Pendle Ecosystem High Yield USDC vault on Morpho to lend against Pendle PT markets.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Pendle Ecosystem USDC vault on Morpho for lower-risk Pendle PT-market lending.', cost: '$150, $8 gas', time: '15m' },
  ],
  ember: [
    { text: 'Deposit USDC into Ember Earn vault on Sui and hold eEARN receipt tokens.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit SUI into Ember Sui vault on Sui and hold eSUI receipt tokens.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit BLUE into Bluefin Vault on Ember on Sui and hold eBLUE receipt tokens.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC into Ember High Income vault on Sui and hold HIGH receipt tokens.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Supply eEARN as collateral on Suilend on Sui to borrow against the vault position while holding eEARN.', cost: '$100, $1 gas', time: '15m' },
  ],
  valos: [
    { text: 'Check the Accountable YieldApp page for the Valos vault, since it is described as permissioned.', cost: 'free to check', time: '10m' },
    { text: 'Look for a Valos vUSD/AUSD market on Euler on Monad and deposit only if it is open to retail deposits.', cost: '$100, $2 gas', time: '15m' },
    { text: 'If you hold vUSD from a Valos credit position, hold it rather than selling so it keeps accruing yield.', cost: 'capital stays put', time: '30 days' },
    { text: 'Monitor the Valos vault on Accountable for any change from permissioned to open deposits.', cost: 'free to check', time: '10m' },
    { text: 'Do not attempt the institutional Valos vault without an invitation, since it is permissioned.', cost: 'just the check', time: '5m' },
  ],
  tydro: [
    { text: 'Bridge assets to Ink L2 using the official bridge and hold ETH on Ink for gas.', cost: '$50, $4 gas', time: '15m' },
    { text: 'Supply USDT0 to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Supply wETH to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Supply kBTC to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Borrow against supplied collateral on Tydro on Ink while keeping the health factor above liquidation.', cost: '$1 gas', time: '10m' },
  ],
  infinifi: [
    { text: 'Deposit USDC on ETH at the infiniFi app to mint iUSD and hold it for Season 3 points.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Stake iUSD into siUSD for liquid yield and a higher points multiplier than plain iUSD.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Lock iUSD into liUSD for 1-13 weeks for the highest yield tier and points.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Buy the iUSD yield token (YT) on Pendle for Season 3 points plus the extra INFI bonus.', cost: '$100, $8 gas', time: '20m' },
    { text: 'Supply USDC to the infiniFi Morpho eco vault to earn points at the Morpho-route multiplier.', cost: '$100, $8 gas', time: '15m' },
  ],
  keyrock: [
    { text: 'Deposit USDC into Keyrock USDC vault on ETH via Morpho app and hold kUSDC shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Keyrock Prime USDC vault on Arc via Morpho and hold krUSDC shares.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit USDT into Keyrock Prime USDT vault on ETH via Morpho app and hold the shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit RLUSD into Keyrock RLUSD vault on ETH via Morpho app and hold the shares.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Hold Keyrock vault shares and check the Morpho vault page for any third-party rewards on vault.', cost: 'free to check', time: '10m' },
  ],
  'doppler-finance': [
    { text: 'Deposit XRP into Doppler XRP Vault on XRPL using an XRPL wallet and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit RLUSD into Doppler RLUSD Vault on XRPL and hold the vault position.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit cbXRP into Doppler vault on Base and hold the vault position.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Note XDP launched 28 Sep 2026: the pre-token farm is over; only vault yield and future seasons remain.', cost: 'just the check', time: '5m' },
    { text: 'Check official Doppler site for a new Doppler Points season before depositing for points.', cost: 'free to check', time: '10m' },
  ],
  'gami-labs': [
    { text: 'Deposit USDC into gamiUSDC vault on Lagoon on ETH for the managed stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into earnUSDC vault on Stellar via Upshift for Gami Labs and Stake Capital yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit XLM into earnXLM vault on Stellar via Upshift for the Stellar-native yield strategy.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit FXRP into Gami Labs FXRP MetaVault on Flare via Spectra for yield plus rFLR emissions.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDC into Turtle Huma PST vault on ETH, curated by Gami Labs, for Turtle Shells points.', cost: '$100, $8 gas', time: '15m' },
  ],
  'tori-finance': [
    { text: 'Deposit stablecoins into Tori Ecosystem Vault on Upshift on ETH and hold trUSD to accrue Cores.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Stake trUSD into strUSD on ETH to earn strategy yield plus Cores at the staking multiplier.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Hold trUSD in a supported DeFi integration listed on Tori app\'s DeFi page to earn Cores there.', cost: '$100, $4 gas', time: '15m' },
    { text: 'Bridge trUSD or strUSD to Monad, Arbitrum, Pharos or Solana via Chainlink CCIP for DeFi there.', cost: '$100, $4 gas', time: '20m' },
    { text: 'Check the Rewards / Boosts tab on Activities page weekly for the venues paying Cores now.', cost: 'free to check', time: '10m' },
  ],
  'tulipa-capital': [
    { text: 'Deposit USDC into Tulipa USDC vault on Lagoon on ETH for the managed stablecoin position.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit ETHplus into Tulipa ETH+ vault on Lagoon on ETH for delta-neutral ETH yield.', cost: '$150, $8 gas', time: '15m' },
    { text: 'Deposit USDC into Tulipa-curated Turtle vault on AVAX for the curator\'s Avalanche allocation.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit into Syntetika Enigma ONE strategy on ETH, curated by Tulipa, to hold oneUSD.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Hold vault share tokens and monitor the curator\'s allocation updates and performance reports.', cost: 'free to check', time: '10m' },
  ],
  axis: [
    { text: 'Deposit USDT, USDC or USDx into Axis Ecosystem Vault on ETH via Axis app to accrue Coordinates.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Stake USDx into sUSDx on ETH to earn strategy yield while the balance accrues Coordinates.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Provide USDx liquidity on Curve to earn Coordinates at the Curve venue multiplier shown in the app.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Enter USDx or sUSDx markets on Pendle to earn Coordinates at the Pendle multiplier.', cost: '$100, $8 gas', time: '15m' },
    { text: 'Check balances and venues at the Axis coordinates page and apply a referral code before depositing.', cost: 'free to check', time: '10m' },
  ],
  'yuzu-money': [
    { text: 'Buy yzUSD on a secondary market on Plasma and hold it to accrue Yuzu Juice points.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Stake yzUSD into syzUSD on Plasma to earn weekly yield plus Juice at the staking multiplier.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Deposit into yzPP junior tranche vault on Plasma for first-loss risk, a higher premium and Juice.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Provide yzUSD or syzUSD liquidity in a Curve, Balancer or Pendle pool for Juice at the boosted multiplier.', cost: '$100, $4 gas', time: '20m' },
    { text: 'Supply syzUSD as collateral on Echelon on Aptos and borrow USDC or USD1 to loop for yield plus Juice.', cost: '$100, $2 gas', time: '20m' },
  ],
  'reti-pooling': [
    { text: 'Open the Réti staking dashboard and compare validator pools by commission, minimum entry and stake.', cost: 'free to browse', time: '10m' },
    { text: 'Stake ALGO into chosen validator pool on Algorand, entering at least that pool\'s minimum amount.', cost: '$50, $1 gas', time: '15m' },
    { text: 'Leave the stake in place across epochs so consensus rewards compound automatically through pool.', cost: 'capital stays put', time: '30 days' },
    { text: 'Check the pool\'s epoch payout schedule and confirm rewards are landing pro-rata to the staked balance.', cost: 'free to check', time: '10m' },
    { text: 'Re-check the chosen validator\'s uptime and commission each month and move the stake if it stops performing.', cost: '$1 gas', time: '10m' },
  ],
  saturn: [
    { text: 'Register at claim.saturn.credit before 16 Nov 2026, 9:00 AM EST to confirm STRN eligibility and a wallet.', cost: 'free to register', time: '10m' },
    { text: 'Swap USDC for USDat at 1:1 on Saturn\'s swap interface and hold USDat for Orbital Points at 5x per day.', cost: '$100, $4 gas', time: '15m' },
    { text: 'Stake USDat to receive sUSDat, the yield-bearing version, and hold it for points at 1x plus vault yield.', cost: '$100, $4 gas', time: '15m' },
    { text: 'Buy YT-USDat on Pendle for the highest multiplier at 30x Orbital Points per day.', cost: '$100, $8 gas', time: '20m' },
    { text: 'Provide liquidity in the Curve USDC/USDat pool to earn Orbital Points at 25x per day.', cost: '$100, $4 gas', time: '15m' },
  ],
  firelight: [
    { text: 'Bridge XRP to Flare via FAssets system to mint FXRP at 1:1.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit FXRP into Firelight vault on Flare to receive stXRP and accrue Firelight Points and emissions.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Hold stXRP in the wallet so the position keeps earning cover-fee emissions distributed in FXRP.', cost: 'capital stays put', time: '30 days' },
    { text: 'Deploy stXRP into Flare DeFi, such as the Gami Labs FXRP MetaVault on Spectra, to stack extra yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Watch Firelight\'s official channels for the eligibility and claim details of the first emissions distribution.', cost: 'free to check', time: '10m' },
  ],
  'hive-protocol': [
    { text: 'Stake BTC through Hive protocol on BSquared to secure the network and earn B2 token rewards.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Stake B2 tokens by delegating to an existing sequencer to earn a share of fees and staking rewards.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Deposit BTC into Mining Squared yield pool to accrue B2 rewards over time.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Bridge BTC or B2 to BSquared with a Web3 wallet, then stake via Hive; unstaking carries a 1-day lock.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Hold staked positions through 96-month HIVE emission schedule, since the BUZZ phases are over.', cost: 'capital stays put', time: '30 days' },
  ],
  'mezo-earn': [
    { text: 'Lock BTC, tBTC or wBTC on Mezo to mint a veBTC position and earn BTC-denominated yield from fees.', cost: '$100, $2 gas', time: '15m' },
    { text: 'Buy MEZO on an exchange and lock it for veMEZO to boost the veBTC yield by up to 5x.', cost: '$50, $2 gas', time: '15m' },
    { text: 'Vote with veBTC power through Mezo gauges to direct emissions toward the best-paying pools.', cost: 'free to vote', time: '10m' },
    { text: 'Borrow MUSD against locked BTC at the fixed rate to unlock liquidity without selling the Bitcoin.', cost: '$2 gas', time: '15m' },
    { text: 'Check the Mezo app for any live HODL points campaign first; if none is shown, treat it as yield-only.', cost: 'free to check', time: '10m' },
  ],
  'lightning-network': [
    { text: 'Run a Lightning node (LND or Core Lightning) and open well-connected channels funded with BTC for routing fees.', cost: '$100, $1 gas', time: '60m' },
    { text: 'Open channels to high-traffic hubs and large exchanges, since routing income follows payment volume.', cost: '$50, $1 gas', time: '30m' },
    { text: 'Rebalance channels regularly so liquidity sits where payments flow, keeping the node routable.', cost: '$1 gas', time: '15m a week' },
    { text: 'Offer inbound liquidity as a service to merchants and wallet operators who need receiving capacity.', cost: 'free to offer', time: '15m' },
    { text: 'Keep the node online and monitored continuously, because an offline node earns no routing fees.', cost: 'server costs only', time: 'ongoing' },
  ],
  noble: [
    { text: 'Swap USDC for USDN on Osmosis and hold USDN to earn the base Treasury yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Deposit USDN into Noble Points Vault and hold the deposit to earn Noble Points.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Hold USDN in the Points Vault for at least 120 days to reach the highest holding-duration multiplier.', cost: 'capital stays put', time: '120 days' },
    { text: 'Deposit USDN into Boosted Yield Vault on Noble and hold it to earn base yield plus extra yield.', cost: '$100, $1 gas', time: '15m' },
    { text: 'Check the Noble Points Vault page for current season status first, since Season 2 live status is unverified.', cost: 'free to check', time: '10m' },
  ],
};
