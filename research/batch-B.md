# Token-Radar Research — Batch B

Researched 2026-11-15 (WIB). TVL figures are the snapshot figures supplied in the task brief unless otherwise noted. All facts below come from the sources listed per protocol; anything not verifiable is marked **unverified** or stated as "no X found in the sources searched" — absence of evidence is not presented as proof of absence.

---

## 1. OpenTrade (`opentrade`) — RWA — TVL ~$242M

**What it is:** An institutional-grade, yield-as-a-service platform that builds and operates stablecoin yield vaults backed by real-world assets (U.S. Treasury money-market funds, investment-grade commercial paper, trade finance). It sells the infrastructure to fintechs and protocols rather than operating a retail app; end users reach its vaults through partners such as Plume's Nest, Sierra Protocol, Littio and Glim.

**Token status:** No OpenTrade token found in any public source searched. OpenTrade is a venture-backed private company (backers include a16z crypto and Circle; founded by former USDC/Centre team members) with no public token or governance token. Do not confuse it with the unrelated "OpenTrade" DEX on MintMe (TRADE token), which is a different project.

**Points / airdrop program:** No public points program found. OpenTrade runs no retail points campaign; yield is the only user incentive, delivered through partner products.

**Farm steps:**
1. Deposit USDC into a Nest vault on Plume that is powered by OpenTrade infrastructure (the WisdomTree-backed WTGXX and CRDT vaults) and hold the resulting nTOKEN to accrue RWA yield.
2. Buy or mint SIERRA, the liquid yield token on Avalanche whose reserves are deployed into OpenTrade vaults, and hold it so its value accrues yield over time.
3. Deposit USDC into the OpenTrade-powered USDC vault on Avalanche to earn Treasury-backed yield plus any Avalanche incentive boost advertised on the vault page.
4. Hold the vault receipt token instead of redeeming immediately, since yield accrues into the token's value in real time and early exit forfeits compounding.
5. Monitor partner launches (Nest, Sierra, Littio) for new OpenTrade vaults, since new vaults are the only route to fresh OpenTrade exposure.

**FDV comps (RWA):**
- Ondo Finance (ONDO): FDV ~$3.0B at ~$0.30 (15 Nov 2026), vs RWA AUM ~$2.77B — FDV/AUM ≈ 1.1x.
- Plume (PLUME): FDV ~$122–135M, vs Plume chain TVL $600M+ — FDV/TVL ≈ 0.2x (chain-level, not protocol-level).

**Sources:**
- https://bitcoinethereumnews.com/wp-json/wp/v2/posts/2267325 (Plume × OpenTrade × WisdomTree Nest vaults)
- https://www.realworldtokenspace.com/watchlist (OpenTrade ~$267M TVL, backers, collateral mix)
- https://coinlaw.io/sierra-liquid-yield-token-avalanche-launch/ (SIERRA powered by OpenTrade)
- https://blockchain.news/news/avalanche-embedded-real-world-assets-rwa (USDC Vault ~4.10% APY, up to 9.78% with Avalanche incentives)
- https://defillama.com/fees/chain/avalanche (OpenTrade fees, 0.50% p.a. management fee)

---

## 2. Hyperithm (`hyperithm`) — Risk Curators — TVL ~$222M

**What it is:** A Tokyo- and Seoul-based digital asset manager ($300M+ AUM) that acts as a risk curator: it designs and manages lending vaults on Morpho (and Euler, Kamino, YieldApp, Astar Earn), choosing collateral, caps and oracles, and runs delta-neutral / market-neutral yield strategies.

**Token status:** No Hyperithm token found in any public source searched. Hyperithm is a TradFi-style asset manager; its products are vault shares (e.g. aHYPER, aHyperBTC) and third-party certificates (e.g. Midas mHYPER), not a governance token.

**Points / airdrop program:** No Hyperithm-native points program found. Points exposure is indirect: Hyperithm-curated vaults pass through the points of the underlying protocols — e.g. mHYPER (Midas certificate referencing Hyperithm's strategy) carries exposure to Ethena, Resolv and Hyperbeat points programs, and Hyperithm-curated Saturn vaults earn Saturn Orbital Points.

**Farm steps:**
1. Deposit USDC into the Hyperithm USDC Apex vault on Morpho and hold the vault shares to earn base lending yield.
2. Deposit USDT into the Saturn USDT vault on Lista (BNB Chain), curated by Hyperithm, to earn Lista emissions plus 5x Saturn Points for suppliers.
3. Deposit USDC into the Saturn USDC vault on Morpho, curated by Hyperithm, which accrues 5x Orbital Points on top of base vault APY.
4. Buy or mint mHYPER on Midas to get tokenised exposure to Hyperithm's market-neutral strategy and its pass-through Ethena, Resolv and Hyperbeat points.
5. Deposit cbBTC into the Hyperithm cbBTC Apex vault on Morpho, or into the aHyperBTC looping vault on YieldApp, to earn yield on a delta-neutral BTC strategy.
6. Claim any pass-through rewards (e.g. Resolv Season 1 rewards for mMEV/mHYPER holders) via Merkl, checking eligibility at the Merkl app.

**FDV comps (curators / lending infra):**
- Morpho (MORPHO): FDV ~$1.7B (15 Nov 2026, ~$1.75, 1B max supply). FDV/TVL ratio unverified — Morpho TVL not captured in this research.
- EigenLayer (EIGEN): market cap ~$737M at ~$0.134 (15 Nov 2026); FDV unverified.

**Sources:**
- https://app.morpho.org/curator/hyperithm (Hyperithm vault list: USDC Apex, Saturn USDC, Apyx USDC, cbBTC Apex)
- https://telemetr.io/en/channels/2089508259-midasrwa (mHYPER: Hyperithm strategy, 27%+ APY stealth phase, Ethena/Resolv/Hyperbeat points)
- https://tradingstrategy.ai/vaults/curators (Hyperithm: 19 vaults, ~$134.5M, 6.8% avg APY)
- https://twstalker.com/hyperithm (Saturn vault 5x points, Orbital Points, aHyperBTC looping vault)

---

## 3. Lightning Network (`lightning-network`) — Payments, Bitcoin — TVL ~$218M

**What it is:** Bitcoin's Layer-2 payment-channel network: users lock BTC into multisig payment channels and transact off-chain instantly for near-zero fees, settling back to Bitcoin L1 only when channels open or close. It is infrastructure, not a DeFi app — no smart-contract TVL, no lending, no yield product.

**Token status:** No token. The Lightning Network has no native token and no token launch is possible in the usual sense — the only asset involved is BTC itself. Any "Lightning token" claim is a different project or a scam.

**Points / airdrop program:** No public points program found. There is no points campaign, season or airdrop attached to the Lightning Network itself.

**Farm steps:**
1. Run a Lightning node (e.g. LND or Core Lightning) and open well-connected payment channels funded with BTC to earn routing fees on payments that flow through.
2. Open channels to high-traffic hubs and large exchanges, since routing income depends on payment volume through your channels rather than on how much BTC is locked.
3. Rebalance channels regularly so liquidity sits on the side where payments flow, keeping the node routable and fee-earning.
4. Offer inbound liquidity as a service to merchants and wallet operators who need reliable receiving capacity.
5. Keep the node online and monitored continuously, because routing fees are active infrastructure income, not passive yield, and an offline node earns nothing.

**FDV comps (Bitcoin L2 / payments):**
- Stacks (STX): Bitcoin L2 with a live token; FDV unverified in this research.
- Rootstock (RBTC / RIF): merge-mined Bitcoin sidechain with live tokens; FDV unverified in this research.
- No direct FDV/TVL comp exists: Lightning's "TVL" is channel capacity, not smart-contract deposits, so ratios are not comparable.

**Sources:**
- https://defillama.com/protocol/lightning-network?ref=defisites (TVL $214.5M, #1 Payments, 100% Bitcoin)
- https://altcoininvestor.com/how-to-earn-yield-on-bitcoin/ (routing fees ~1 sat base fee, active operation not passive yield; ~4,898 BTC public capacity May 2026)
- https://ourcryptotalk.com/blog/top-bitcoin-layer-2-projects-tvl-2026 (capacity ~4,965 BTC, payments-only, no general smart contracts)
- https://defillama.com/protocols/payments (Payments category $232M, Lightning 91.3%)

---

## 4. Plume Vaults (`plume-vaults`) — RWA — TVL ~$212M

**What it is:** Nest, the flagship staking/yield protocol of Plume (the RWA-focused L1): users deposit stablecoins into institutional-grade RWA vaults and receive liquid yield-bearing vault tokens (nTOKENS — nTBILL, nBASIS, nWISDOM, nALPHA, nOPAL) that accrue real-world yield and are composable across DeFi on Plume, Solana and Ethereum.

**Token status:** YES — a token exists. PLUME is the native token of the Plume network (10B max supply, live and trading; FDV ~$122–135M, price ~$0.012–0.013 on 15 Nov 2026). Note: PLUME is the chain token, not a Nest-specific token; Nest itself issues yield-bearing vault tokens (nTOKENS), not a governance token.

**Points / airdrop program:** ENDED — no live program found as of 15 Nov 2026. Two programs ran and both closed: Plume Nest Points (PNP) Season One (Nov 2025 – 13 Mar 2026; 1% of PLUME supply allocated, redeemable in PLUME) and Plume Points Season 2 (ended 31 Mar 2026; registration 29 Apr–27 May 2026, min 10,000 PP). Plume's own blog says the focus after Season 2 is Nest itself, with "more announcements coming soon" — no new season has been verified.

**Farm steps:**
1. Deposit stablecoins into a Nest vault on Plume (nTBILL for tokenised Treasuries, nBASIS for basis-trade yield, nWISDOM for private credit, nALPHA for diversified assets, nOPAL for Brazilian receivables) and hold the nTOKEN to accrue real-world yield.
2. Deposit stablecoins into a Nest vault on Solana (nTBILL, nOPAL, nBASIS, nWISDOM, nALPHA) and deploy the nTOKEN across Solana DeFi while holding it.
3. Mint nBASIS on Nest and bring it to Pendle on Ethereum mainnet, choosing PT-nBASIS for fixed yield or YT-nBASIS for variable upside.
4. Provide liquidity with nTOKENS in RWA trading pairs on Plume's flagship DEX (historically the highest PNP multiplier at 8x; points ended, so this now earns trading fees only).
5. Stake PLUME with validators on Plume to earn staking rewards while waiting for any future Nest incentive season to be announced.

**FDV comps (RWA):**
- Ondo Finance (ONDO): FDV ~$3.0B vs RWA AUM ~$2.77B — FDV/AUM ≈ 1.1x.
- Plume (PLUME) itself: FDV ~$122–135M vs Plume chain TVL $600M+ — FDV/TVL ≈ 0.2x.

**Sources:**
- https://www.plume.org/blog/meet-the-new-nest-real-yield-real-ownership (Nest relaunch, PNP Season One, 1% of PLUME supply, ends Mar 2026)
- https://www.swanbluechip.com/rewards/p/plume/ (Plume Points S2 ended 31 Mar 2026; PNP S1 ended 13 Mar 2026)
- https://www.plume.org/blog/plume-points-season-2-airdrop-registration-is-now-open (registration window, 10,000 PP minimum)
- https://www.plume.org/blog/now-live-real-yield-with-nest-nbasis-on-pendle (nBASIS on Pendle, YT earns Nest Points — program now ended)
- https://www.plume.org/blog/building-solanas-real-world-yield-layer-with-plume (Nest vaults on Solana: nTBILL, nOPAL, nBASIS, nWISDOM, nALPHA)
- https://marketcapof.com/crypto/plume/ (PLUME FDV ~$121M, CoinGecko data, 15 Nov 2026)

---

## 5. K3 Capital (`k3-capital`) — Risk Curators — TVL ~$208M

**What it is:** An institutional-grade DeFi risk curator: it designs and manages lending and fixed-rate vaults across Euler, Morpho, Term and Pendle (chains: Ethereum, Monad, Optimism, Plasma, Arbitrum), picking collateral, caps and oracles for each market. It also runs custom credit facilities (e.g. a $40M revolving facility for USD.AI) and manages pre-deposit campaigns (e.g. Daylight/DayFi).

**Token status:** NO token — explicitly confirmed. K3 Capital's own FAQ states: "As of the current version, K3 Capital does not have a publicly traded governance token" and that a governance layer "may" come in future versions. No token launch has been announced.

**Points / airdrop program:** No public points program found. K3 runs no retail points campaign; depositors earn vault yield only.

**Farm steps:**
1. Deposit WETH into the K3 Capital Earn WETH vault on Euler (Monad) and hold the receipt token to earn yield from the underlying markets.
2. Deposit AUSD into the K3 Capital Earn AUSD vault on Euler (Monad) for stablecoin yield on the same platform.
3. Deposit USDC, USDT or other supported assets into a K3-curated vault on Morpho on Ethereum and hold the vault shares.
4. Deposit RSETH, NUSD, BOLD, EUROP, USDT or USDT0 into K3 Capital vaults on Ethereum mainnet or Plasma, as listed on the platform's vault page.
5. Watch K3-managed pre-deposit campaigns (e.g. Daylight DayFi) for early-deposit opportunities, noting that these carry lock-ups and counterparty risk.

**Risk flag (verified):** K3 lost ~$2M in the Stream Finance / Elixir deUSD collapse (Nov 2025) after Elixir unilaterally changed deUSD's strategy; K3 liquidated on 4 Nov 2025 and has hired U.S. lawyers to sue Elixir. Curator vaults carry underlying-asset risk that the curator does not fully control.

**FDV comps (curators / lending infra):**
- Morpho (MORPHO): FDV ~$1.7B (15 Nov 2026). FDV/TVL ratio unverified.
- Euler (EUL): live governance token; FDV unverified in this research.

**Sources:**
- https://www.k3-capital.net/questions/ (FAQ: no publicly traded governance token; vaults on Ethereum + Plasma; deposit assets RSETH, NUSD, BOLD, EUROP, USDT, USDT0)
- https://defillama.com/research/report/sentora-the-vault-economy-scale-and-composition (K3 #4 curator, $210.2M TVL, 2.90% share, Monad growth)
- https://defiprime.com/ethereum (K3 curates Euler/Morpho/Term/Pendle vaults; Ethereum, Monad, Optimism, Plasma, Arbitrum)
- https://www.techflowpost.com/en-US/article/28970 (Stream/deUSD incident, $2M K3 loss, lawsuit)
- https://github.com/kamalbuilds/ava-monad/blob/HEAD/docs/MONAD.md (K3 Earn WETH/AUSD vaults on Euler, Monad)

---

## 6. Hive Protocol (`hive-protocol`) — Chain, BSquared — TVL ~$199M

**What it is:** The Bitcoin staking protocol of B² Network (BSquared, a zk-rollup Bitcoin L2): users stake BTC to secure B² and receive $B2 token rewards. Hive is effectively the staking layer of the B² chain rather than a standalone DeFi app; DefiLlama files it under Chain.

**Token status:** YES — a token exists, but it is the chain token, not a Hive-specific token. B2 is the native token of B² Network (210M max supply; 67,353,370 circulating as of 12–15 Nov 2026; price ~$0.40; IDO 30 Apr 2025 at $0.0714 via Binance Wallet). 20% of supply (42M B2) is allocated to HIVE staking rewards, released linearly over 96 months.

**Points / airdrop program:** ENDED — no live points program found. The BUZZ campaigns (Phase I pre-stake testing, Phase II mainnet liquidity) rewarded participants with early B2 allocations and both phases were airdropped at/around TGE (BUZZ I 5.5%, BUZZ II 5% of supply). Ongoing rewards are paid in B2 tokens directly for BTC staking, not points.

**Farm steps:**
1. Stake BTC through the Hive protocol on BSquared to secure the network and earn B2 token rewards proportional to the BTC staked.
2. Stake B2 tokens by delegating to an existing sequencer to earn a share of transaction fees and staking rewards.
3. Deposit BTC into a Mining Squared yield pool to accrue B2 rewards over time.
4. Bridge BTC or B2 to BSquared with a Web3 wallet, then stake via Hive; unstaking carries a 1-day lock.
5. Hold staked positions through the 96-month HIVE emission schedule rather than chasing short campaigns, since the BUZZ points phases are over and B2 staking rewards are the remaining incentive.

**Note on TVL:** Hive TVL reportedly spiked ~2,400% to ~$247M in a single day around 21 Oct 2026 (per APED.ai), with the catalyst unclear; treat the current ~$199M figure as volatile.

**FDV comps (Bitcoin staking / restaking):**
- BSquared (B2) itself: price ~$0.40 × 210M max supply ≈ $84M FDV (computed from verified price and supply); vs Hive TVL ~$199M — FDV/TVL ≈ 0.42x.
- Babylon (BABY): price ~$0.0085 (15 Nov 2026); FDV unverified in this research.
- Lombard / SolvBTC: BTC liquid-staking comps; token FDVs unverified in this research.

**Sources:**
- https://defillama.com/protocol/hive-protocol ("Stake BTC, safeguard B², and receive $B2 Tokens"; 100% BSquared)
- https://www.kucoin.com/price/B2 (B2 profile, BUZZ campaigns, IDO 30 Apr 2025, 67,353,370 circulating, Hive staking)
- https://www.gate.com/learn/articles/what-is-bsquared--network-b2/8892 (tokenomics: HIVE 20%, BUZZ I 5.5%, BUZZ II 5%)
- https://getblock.io/marketplace/projects/bsquared/ (Hive staking: fee-free, instant reward activation, 1-day unstaking lock)
- https://aped.ai/briefs (Hive TVL +2,418% to $247.2M on BSquared, 21 Oct 2026)

---

## 7. R25 (`r25`) — RWA, Pharos/Sui — TVL ~$198M

**What it is:** RWA vault infrastructure that issues and manages tokenised real-world-asset vaults with automated and curated on-chain yield strategies. Its products include money-market-fund vaults (rcUSD / rcUSDp on Sui), the pRNH high-yield corporate-credit vault on Pharos (NYLIM/Anemoy HYB portfolio, target $100M, ~7% target yield) and the Axil Consumer Credit Vault (rcPC) on Pharos for emerging-market consumer lending (up to 15% APY).

**Token status:** No R25 governance token found in any public source searched. rcUSD and rcUSDp are product tokens (a dollar token backed by regulated instruments, and its yield-bearing staking receipt), not a protocol/governance token. No R25 token launch has been announced in the sources searched.

**Points / airdrop program:** No R25-native points program found. The only campaign found is a Pharos/Binance Wallet promotion, "R25 Season 2: Subscribe to Share $200k PROS Rewards" (Oct 2026), which pays rewards in PROS (the Pharos chain token), not in any R25 token or points.

**Farm steps:**
1. Deposit USDC into the pRNH vault on Pharos through R25 to gain exposure to the NYLIM Anemoy U.S. high-yield corporate bond portfolio.
2. Deposit USDC into the Axil Consumer Credit Vault (rcPC) on Pharos, curated by Axil, for exposure to emerging-market consumer lending.
3. Buy or mint rcUSD on Sui and stake it to receive rcUSDp, the yield-bearing receipt token (DefiLlama-tracked pool ~8.3% APY).
4. Deposit USDC into the R25 Treasury vault (mrcUSD) on Ember (Sui), curated by Ember and R25, for a managed R25 strategy with a 4-day withdrawal period.
5. Subscribe to R25 vaults through the Binance Wallet Pharos campaign while it is live to share in PROS rewards on top of vault yield.

**FDV comps (RWA):**
- Ondo Finance (ONDO): FDV ~$3.0B vs RWA AUM ~$2.77B — FDV/AUM ≈ 1.1x.
- Plume (PLUME): FDV ~$122–135M vs Plume chain TVL $600M+ — FDV/TVL ≈ 0.2x.

**Sources:**
- https://defillama.com/protocol/r25 (TVL $198.26M; Pharos $189.96M / Sui $8.3M; 1 pool, 8.3% APY; #7 RWA)
- https://bitrss.com/ther25-protocol-launches-rcusd-and-rcusdp-on-sui-network-bridging-real-world-assets-with-blockchain-153186 (rcUSD/rcUSDp launch on Sui, 29 Oct 2026)
- https://businessintelligence.mo/2026/08/25/pharos-expands-realfi-market-with-onchain-access-to-institutional-u-s-high-yield-credit/ (pRNH vault, $100M target, ~7% target yield)
- https://alexablockchain.com/r25-powered-vault-brings-emerging-market-consumer-lending-onchain/ (Axil rcPC vault, $35M committed, up to 15% APY)
- https://www.jewelswap.io/blog/what-is-ember-protocol (R25 Treasury mrcUSD vault on Ember/Sui, 8.0% reported APY, 4-day withdrawal)
- https://www.facebook.com/Jamil.KalyalUpdate/posts/pfbid02DVvHn9Trvtgx3PU6DqfcszZoSeppngecjku2hKMsgY4Pc24EGEyR6JtdFECK3R9hl (R25 Season 2, $200k PROS rewards, Binance Wallet)

---

## 8. b14g (`b14g`) — Restaking, Bitcoin/Babylon — TVL ~$174M

**What it is:** A modular dual-staking layer for Bitcoin: it pairs BTC holders with native-token holders (e.g. CORE) so both sides earn boosted dual-staking yields securing networks such as Core and Babylon, without wrapping BTC or giving up custody (BTC stays time-locked on Bitcoin).

**Token status:** No b14g token found in any public source searched. The yield is paid in the underlying chain rewards (CORE, Babylon rewards); no b14g governance token exists in the sources searched.

**Points / airdrop program:** YES — the b14g Point Program is live (announced on the project's Paragraph blog). It rewards BTC depositors with b14g Points that build up over time. The detailed mechanics (points per BTC, multipliers, conversion) were not recoverable from the sources that rendered — the announcement page truncated in the fetch — so mechanics are marked unverified below.

**Farm steps:**
1. Deposit BTC through b14g on Babylon to earn Babylon staking rewards plus b14g Points while Babylon's own caps are full.
2. Deposit CORE into the dualCORE vault on Core chain to pair with BTC stakers and earn the boosted dual-staking rate (advertised 15–20% APY vs ~6% for plain CORE staking).
3. Hold the dualCORE receipt token in the b14g app to keep accumulating b14g Points and dual-staking yield.
4. Check the b14g points dashboard in the app regularly, since point balances and any conversion or claim window are only visible there. [UNVERIFIED — dashboard mechanics not confirmed from rendered sources]
5. Redeem from the dualCORE vault when exiting, noting the BTC leg is time-locked on Bitcoin and the CORE leg sits in b14g contracts.

**SECURITY FLAG (verified, material):** On 31 Oct 2026 ~09:29 UTC, ~97M CORE (~$1.35M) staked through b14g was withdrawn without authorisation via the Marketplace contract. b14g paused the affected contracts the same day; staked BTC was untouched (time-locked on Bitcoin). A Core hard fork later moved ~68.15M CORE (~70%) to a recovery address. TVL fell 38.9% in 30 days to ~$161M (14 Nov 2026). Any farm step here must wait for the published post-mortem.

**FDV comps (BTC restaking):**
- Babylon (BABY): price ~$0.0085 (15 Nov 2026); FDV unverified in this research.
- EigenLayer (EIGEN): market cap ~$737M at ~$0.134 (15 Nov 2026); FDV unverified.
- Lombard (LBTC): largest BTC liquid-staking protocol (~$426M TVL); token FDV unverified in this research.

**Sources:**
- https://paragraph.com/@b14g (b14g Point Program announcement — live, for BTC depositors; page text truncated on fetch)
- https://defillama.com/protocol/b14g (TVL $160.91M; Bitcoin 99.1%; #3 restaking; 1 incident 31 Oct 2026, Protocol Logic)
- https://altcoinreporter.com/b14g-says-97-million-core-drained-from-bitcoin-staking-protocol/ (97M CORE drained 31 Oct 2026, BTC untouched, contracts paused)
- https://cryptomediazone.com/hack-database/b14g-core-staking-exploit/ (dual-staking model, 15–20% dualCORE APY, 68.15M CORE recovered by hard fork)
- https://www.facebook.com/EmmanuelNkejesu123/posts/pfbid07vzgS23ZoRR2rG6vBwHcH2WZiaRvEHgW6ZAH4vrv1xcS8u8e9zSkjuXT9xkdTJDil (b14g app screenshot: dualCORE vault UI)

---

## 9. Clearstar (`clearstar`) — Risk Curators — TVL ~$162M

**What it is:** A Swiss-backed risk manager and vault curator. It runs curated lending vaults on Morpho (cbAssets, ecosystem vaults for 3Jane/Re/Noon, USDC Core, Core ETH, Accountable AUSD, USDC Reactor, Solana vault), Earn vaults on Euler (Monad), and curates the earnXRP vault on Flare (FXRP yield vault, ~$48M) — allocating deposits across lending, LP and staking strategies under policy constraints.

**Token status:** No Clearstar token found in any public source searched. Clearstar is a risk-management firm; its products are vault shares, not a governance token.

**Points / airdrop program:** No public points program found. Depositors earn vault yield only; any points come from the underlying protocols a vault deploys into, not from Clearstar itself.

**Farm steps:**
1. Deposit USDC into the Clearstar cbAssets Vault on Morpho (the largest Clearstar vault, ~$33–36M) and hold the vault shares to earn lending yield.
2. Deposit USDC into the Clearstar USDC Core vault on Morpho for a core, diversified lending allocation.
3. Deposit USDC into the Clearstar Earn USDC vault on Euler (Monad) and hold the CSUSDC receipt token.
4. Deposit FXRP into the earnXRP vault on Flare, curated by Clearstar, to earn yield denominated in XRP from Flare DeFi deployments and carry trades.
5. Deposit WETH into the Clearstar Core ETH vault on Morpho for ETH-denominated curated lending yield.
6. Deposit SOL into the Clearstar Solana Vault on Morpho for SOL-denominated curated lending yield.

**FDV comps (curators / lending infra):**
- Morpho (MORPHO): FDV ~$1.7B (15 Nov 2026). FDV/TVL ratio unverified.
- Euler (EUL): live governance token; FDV unverified in this research.

**Sources:**
- https://app.morpho.org/curator/clearstar (Clearstar vault list with sizes and APYs)
- https://app.morpho.org/vaults (Clearstar cbAssets Vault $35.70M USDC)
- https://www.upshift.finance/blog/earnxrp-on-flare-how-to-earn-yield-on-your-xrp (earnXRP curated by Clearstar, ~$48M, Flare)
- https://harvest.finance/eth (Clearstar Fusion on Euler/Base, 2.53% APY)
- https://www.compasslabs.ai/risk?chain=base&minTvl=10000000 (Clearstar High Yield USDC V2 collateral breakdown)

---

## 10. Saturn (`saturn`) — Stablecoin Wrapper — TVL ~$154M

**What it is:** Saturn Credit, an on-chain structured digital-credit protocol built around Strategy's STRC preferred stock. It has a dual-token system: USDat, a USD-pegged stablecoin backed by tokenised Treasuries, and sUSDat, a yield-bearing ERC-4626 vault share that gains economic exposure to STRC through Ondo's STRCon, targeting 11%+ returns. It operates on Ethereum, BNB Chain and Monad.

**Token status:** Token CONFIRMED but not yet launched. The Saturn Foundation has confirmed the STRN governance token, with TGE targeted for Q4 2026. Up to 5% of total STRN supply is set aside for Season 2 (Orbital Points) participants, allocated by snapshot. Tokenomics and claim mechanics had not been announced as of the sources read.

**Points / airdrop program:** YES — Orbital Points, Season 2 (live now). Season 2 began 9 Aug 2026 and ends at the snapshot, taken at TGE or on 8 Dec 2026, whichever comes first (or when TVL hits $1B). Registration for Season 1 and Season 2 participants opened 9 Nov 2026 and closes 16 Nov 2026, 9:00 AM EST, at claim.saturn.credit — registration only confirms eligibility and a receiving address; claiming opens at TGE. US, UK, EU/EEA and OFAC-listed addresses are not eligible. Multipliers (from Saturn docs via SwanBluechip): hold USDat 5x, hold sUSDat 1x, Curve USDC/USDat LP 25x, Curve USDC/sUSDat LP 25x, hold YT-USDat on Pendle 30x, borrow AUSD against sUSDat 2x. Season 1 (Gravity Points) ended 8 Aug 2026; holders of >1,000,000 Gravity Points get a 20% Orbital Points boost.

**Farm steps:**
1. Register at claim.saturn.credit before 16 Nov 2026, 9:00 AM EST to confirm eligibility and a receiving wallet for the STRN distribution.
2. Swap USDC for USDat at 1:1 on Saturn's swap interface and simply hold USDat to earn Orbital Points at 5x per day.
3. Stake USDat to receive sUSDat, the yield-bearing version capturing STRC exposure, and hold it to earn points at 1x plus vault yield.
4. Buy YT-USDat on Pendle for the highest multiplier at 30x Orbital Points per day.
5. Provide liquidity in the Curve USDC/USDat pool to earn Orbital Points at 25x per day.
6. Deposit USDC into the Saturn USDC vault on Morpho, curated by Hyperithm, which accrues 5x Orbital Points on top of base vault APY.

**FDV comps (yield stablecoins / structured credit):**
- Ondo Finance (ONDO): FDV ~$3.0B vs RWA AUM ~$2.77B — FDV/AUM ≈ 1.1x.
- Ethena (ENA): yield-stablecoin comp (USDe/sUSDe); FDV unverified in this research.

**Sources:**
- https://airdrops.io/saturn-credit/ (STRN confirmed, up to 5% supply, registration 9–16 Nov 2026, snapshot at TGE or 8 Dec 2026, multipliers)
- https://swanbluechip.com/rewards/p/saturn/ (Season 2 dates, multipliers from Saturn GitBook docs, 5% pool, token not launched)
- https://usethebitcoin.com/airdrop/saturn-airdrop-guide/ (Season 1 ended 8 Aug 2026, Season 2 to 8 Dec 2026 or $1B TVL, multipliers)
- https://panews.io/articles/01a18291-a021-778c-9ac3-ca698280aef3 (STRN TGE Q4 2026, ~$2.8M raised, YZi Labs/Sora/Spartan)
- https://www.bitrue.com/blog/saturn-credit-airdrop-guide (registration 9 Nov 2026, claim at TGE, Season 2 snapshot timing)
- https://twstalker.com/hyperithm (Saturn USDT vault: 30K LISTA emissions/week, 5x Saturn Points; Saturn USDC vaults accrue 5x Orbital Points)

---

## Cross-protocol notes

- **Live points programs right now (15 Nov 2026):** Saturn Orbital Points Season 2 (ends at TGE or 8 Dec 2026; registration closes 16 Nov 2026) and b14g Point Program (live; mechanics unverified). Everything else in this batch is ended (Plume PNP/PP, BSquared BUZZ) or never existed (OpenTrade, Hyperithm, K3, Clearstar, Lightning, R25-native).
- **Tokens already launched:** PLUME (Plume Vaults) and B2 (Hive/BSquared). **Token confirmed, TGE pending:** STRN (Saturn, Q4 2026). **No token found:** OpenTrade, Hyperithm, K3 Capital (explicitly confirmed none), R25, b14g, Clearstar. **Structurally tokenless:** Lightning Network.
- **Highest-risk flag:** b14g suffered a ~$1.35M CORE exploit on 31 Oct 2026 (BTC untouched, ~70% recovered via hard fork); K3 Capital lost ~$2M in the Stream/deUSD collapse (Nov 2025).
- **FDV reference points verified 15 Nov 2026:** ONDO FDV ~$3.0B; MORPHO FDV ~$1.7B; PLUME FDV ~$122–135M; EIGEN market cap ~$737M; B2 price ~$0.40 (FDV ≈ $84M computed); BABY price ~$0.0085; EIGEN price ~$0.134. Prices move daily — re-check before use.
