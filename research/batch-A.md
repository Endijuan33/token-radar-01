# Token Radar — Research Batch A

Researched 2026-11-15 (WIB) via web search + page fetches (official docs/sites, DefiLlama, reputable secondary sources).
Rule applied: only verified facts are stated; anything not verified is labelled **unverified**.
TVL figures in the task brief are the snapshot figures supplied by the parent agent, not re-verified here.
Market data (prices/FDV) is as of ~15 Nov 2026 and moves daily — re-check before using in the radar.

---

## 1. Steakhouse Financial (`steakhouse-financial`)

**What it is:** A DeFi risk curator (asset manager) that designs and manages non-custodial lending vaults — mainly on Morpho (Ethereum, Base) — allocating depositor stablecoins across Morpho lending markets against blue-chip collateral (cbBTC, wstETH, cbETH). It is the largest Morpho curator by deposits and also curates vaults for Coinbase lending and Robinhood Earn.

**Token status:** No token verified. DefiLlama lists no token for the protocol; third-party airdrop trackers list Steakhouse Financial as a tokenless protocol ("no token yet", TVL ~$2.7B). No Steakhouse token contract, ticker, or TGE has been announced anywhere found.

**Points / airdrop program:** No public points program found. Its vaults pay real borrower interest only — one vault-by-vault analysis states explicitly "there are no token emissions, no points, and no airdrop expectations here". Farming thesis is purely speculative (tokenless + large TVL).

**Farm steps:**
1. Deposit USDC into the Steakhouse Prime USDC vault on Morpho on Ethereum, the flagship low-risk vault lending only against blue-chip collateral.
2. Deposit USDC into the Steakhouse High Yield USDC vault on Morpho on Ethereum for a broader collateral set with a higher risk-return profile.
3. Deposit USDC into a Steakhouse-curated vault on Morpho on Base, where the same Prime strategy runs with lower transaction costs.
4. Use the Coinbase in-app USDC lending product, which routes deposits into Steakhouse Prime and Steakhouse High Yield USDC vaults on Base.
5. Hold the vault receipt tokens in the depositing wallet continuously so any future retroactive snapshot would capture the position.
6. Check the Steakhouse docs and official X account periodically for any new vault launch or announced rewards program before rotating capital.

**FDV comps:**
- Morpho (MORPHO): FDV ~$1.75B, protocol TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Aave (AAVE): FDV ~$1.6–1.7B, TVL ~$14.9B → FDV/TVL ≈ 0.11.
- (Note: curator TVL is a subset of Morpho TVL, so a curator token would not map 1:1 to Morpho's ratio.)

**Sources:**
- https://kitchen.steakhouse.financial/p/lend-your-usdc-on-coinbase
- https://www.weex.com/news/detail/morpho-stablecoin-yield-strategy-the-same-curator-a-396-vs-77-yield-difference-zmbk711lvddipzizhib95hsi
- https://99bitcoins.com/coins/airdrops/
- https://0xzx.com/en/drops/llama%3Asteakhouse-financial
- https://defillama.com/protocol/morpho
- https://defillama.com/protocol/aave?denomination=USD

**Confidence: medium** (no-token status corroborated by two independent trackers; no points program confirmed by absence + explicit "no points" statement).

---

## 2. Gauntlet (`gauntlet`)

**What it is:** A quantitative finance firm founded in 2018, originally an economic-security advisor to Aave, Compound and Uniswap, now a full-stack vault curator running risk-tiered lending and yield vaults on Morpho (Ethereum, Base, Arbitrum, OP Mainnet), Kamino and Drift on Solana, and Aera. Its Morpho vaults use three risk tiers: Prime (blue-chip collateral), Balanced, and Frontier.

**Token status:** No live token verified. No Gauntlet token contract, ticker, or TGE is published on its official site (gauntlet.xyz) or DefiLlama. One unaffiliated wiki page (wiki.gntlt.net) mentions a future "$GNTL" ticker while stating "there is no live token today" — that page's connection to the real Gauntlet firm is unverified, so the ticker claim is treated as unverified and is not relied on.

**Points / airdrop program:** No Gauntlet-native points program found. Vault depositors earn underlying strategy yield; some Gauntlet vaults currently earn third-party incentives, e.g. the Morpho Gauntlet USDG Premium vault is eligible for Arbitrum DRIP Season 2 ARB rewards distributed via Merkl (DRIP is an Arbitrum DAO incentive program, not a Gauntlet airdrop).

**Farm steps:**
1. Deposit USDC into a Gauntlet Prime vault on Morpho on Ethereum for conservative lending yield against blue-chip collateral.
2. Deposit USDC into a Gauntlet Balanced vault on Morpho for a wider market set with moderately higher risk and yield.
3. Deposit USDC into the Gauntlet USDC Prime vault on Kamino on Solana for managed stablecoin lending yield.
4. Deposit SOL into the Gauntlet SOL Balanced vault on Kamino on Solana for SOL-denominated managed lending exposure.
5. Deposit USDG into the Morpho Gauntlet USDG Premium vault on Arbitrum One and claim the Arbitrum DRIP ARB incentives via Merkl.
6. Hold vault receipt tokens in the depositing wallet continuously so any future retroactive snapshot would capture the position.

**FDV comps:**
- Morpho (MORPHO): FDV ~$1.75B, TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Aave (AAVE): FDV ~$1.6–1.7B, TVL ~$14.9B → FDV/TVL ≈ 0.11.

**Sources:**
- https://solanacompass.com/projects/gauntlet
- https://github.com/tradingstrategy-ai/web3-ethereum-defi/commit/d5781f02b4c59ac83346e1abc9a62e76aed08016
- https://www.airdroptracker.io/blog/arbitrum-airdrop-hub-arb-history-drip-and-ecosystem-points
- https://wiki.gntlt.net/tokenomics/ (unverified provenance — ticker claim not relied on)
- https://defillama.com/protocol/morpho
- https://defillama.com/protocol/aave?denomination=USD

**Confidence: medium** (vault lineup and DRIP eligibility verified; no-token status is absence-of-evidence plus one weak source).

---

## 3. Veda (`veda`)

**What it is:** The "native yield layer" — vault infrastructure (BoringVault) that lets protocols and institutions launch tokenized, non-custodial yield vaults with on-chain verifiable constraints on capital allocation. It powers ether.fi Liquid vaults, Mantle cmETH, Lombard LBTCv, and Kraken xStocks vaults, across Ethereum, Base, Arbitrum, Berachain, Solana and more.

**Token status:** No token verified. No Veda token contract, ticker, or TGE has been announced; airdrop trackers describe Veda as a points-based program that "may lead to a future token distribution, though no official airdrop has been confirmed".

**Points / airdrop program:** Yes — **Veda Points**. Multi-season campaign; Season 1 started 13 June 2024 and rewards holding qualifying Veda-powered vault assets. Points formula published by trackers: points = USD-equivalent balance × 0.01 × days held. Qualifying activity is listed on the official Veda Points dashboard; US users are excluded. Earning Veda Points is typically stacked with partner points (Ether.fi, Symbiotic, Lombard Lux, Babylon).

**Farm steps:**
1. Mint and hold weETHs (Super Symbiotic LRT) via the ether.fi app to earn Veda Points alongside Ether.fi and Symbiotic points.
2. Deposit LBTC into Lombard's DeFi Vault and hold the LBTCv receipt token to earn 3x Veda Points and 4x Lombard Lux.
3. Deposit into the ether.fi Liquid ETH vault on Ethereum to earn Veda Points plus 4x Ether.fi points on the position.
4. Deposit wBTC or BTC into the ether.fi eBTC vault on Ethereum to earn Veda Points together with Lombard, Babylon, EigenLayer, Karak, Symbiotic and Ether.fi points.
5. Check the official Veda Points dashboard regularly for newly added qualifying vaults and deposit into a listed vault while it is still eligible.
6. Hold qualifying vault tokens continuously, since points accrue per day held and the program is described as rewarding long-term participants.

**FDV comps:**
- Morpho (MORPHO): FDV ~$1.75B, TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Aave (AAVE): FDV ~$1.6–1.7B, TVL ~$14.9B → FDV/TVL ≈ 0.11.
- EigenLayer (EIGEN): FDV ~$250–450M (sources disagree; see §10), restaked TVL ~$6B → FDV/TVL ≈ 0.04–0.07.

**Sources:**
- https://www.gate.com/learn/articles/veda-the-first-native-yield-layer/4537
- https://veda.tech/blog/lombard-launch
- https://airdrops.io/veda/
- https://etherfi.gitbook.io/etherfi/getting-started/faq.md
- https://defillama.com/protocol/morpho
- https://defillama.com/protocol/aave?denomination=USD

**Confidence: high** (points program confirmed by official Veda blog + multiple trackers; no-token status corroborated).

---

## 4. USDD (`usdd`)

**What it is:** A decentralized USD stablecoin, originally launched May 2022 on TRON as an algorithmic coin, relaunched January 2025 as USDD 2.0 — an over-collateralized CDP stablecoin (Maker-style) where users lock TRX, sTRX, USDT or WBTC in vaults to mint USDD, with a Peg Stability Module swapping USDD 1:1 for USDT/USDC. Now native on TRON, Ethereum and BNB Chain. Yield-bearing wrapper sUSDD launched October 2025.

**Token status:** Token EXISTS — USDD itself is the token (a $1-pegged stablecoin, ~1.09B circulating supply as of late January 2026 per third-party trackers; no max supply). There is no separate USDD governance token; the related governance token is JST (JUST DAO), which is a different token. This protocol is therefore a stablecoin-yield farm, not a new-token launch candidate.

**Points / airdrop program:** Yes, announced — **USDD Points Mining**, announced by Justin Sun on 21 January 2026, targeting 2B total USDD supply and deeper TRON/Ethereum/BNB Chain deployment. The earning mechanics, points formula, and conversion details were not published in any source found — treat the mechanics as unverified. Separately, JustLend DAO runs recurring USDD Supply Mining phases (e.g. Phase XIII, 3–31 Jan 2026, dual USDD + TRX rewards), which are time-boxed and may already have ended.

**Farm steps:**
1. Mint USDD by opening a CDP vault on TRON and locking TRX, sTRX or USDT as collateral above the vault minimum collateral ratio.
2. Swap USDT for USDD at 1:1 with zero slippage through the USDD Peg Stability Module on TRON, Ethereum or BNB Chain.
3. Convert USDD into sUSDD on Ethereum or BNB Chain to earn auto-compounding yield from the Smart Allocator with no lockup.
4. Supply USDD on JustLend DAO on TRON to earn supply yield plus any live USDD Supply Mining rewards in USDD and TRX.
5. Provide USDD liquidity in a USDD/TRX or USDD/USDT pool on SunSwap on TRON to earn trading fees and liquidity mining rewards.
6. [UNVERIFIED] Watch the official USDD channels for the Points Mining mechanics and follow only the published rules once they appear, instead of assuming holding alone earns points.

**FDV comps:** Not applicable in the usual sense — USDD is a $1 stablecoin, so FDV ≈ circulating supply (~$1.09B). Comparable stablecoin protocols: Ethena (USDe/sUSDe) and Sky (DAI/USDS) — FDV/TVL ratios not computed for this entry because stablecoin "FDV" is the pegged supply itself.

**Sources:**
- https://www.onchainatlas.org/usdd/
- https://blockchainnews.azurewebsites.net/flashnews/usdd-points-mining-announced-targeting-2b-growth-and-multi-chain-expansion-on-tron-trx-ethereum-eth-bnb-chain
- https://gate.tv/news/detail/15239199
- https://www.odaily.news/en/post/5166377
- https://yellow.com/asset/usdd

**Confidence: high** (token existence and CDP mechanics well documented; points-mining mechanics unverified).

---

## 5. Nonce Capital (`nonce-capital`)

**What it is:** A DeFi risk curator that manages asset allocation and strategy for third-party vaults — principally the ether.fi Liquid vault suite (BoringVaults on Ethereum and Optimism) and Midas tokenized funds (Liquid Reserve, Liquid RWA on Optimism). It also serves as independent risk admin for ether.fi's dedicated Aave V4 instance on OP Mainnet powering EtherFi Cash. TVL ~$510M across Ethereum (~59%) and OP Mainnet.

**Token status:** No token verified. DefiLlama lists the protocol's token field as blank ("—"), and no Nonce Capital token, ticker, or TGE was found in any source. It is a behind-the-scenes curator, not a user-facing protocol with its own token.

**Points / airdrop program:** No public points program found under the Nonce Capital name. Exposure to its vaults earns the partner protocols' points instead (ether.fi points, Veda points, Symbiotic points via the Liquid vaults).

**Farm steps:**
1. Deposit ETH or staked ETH into the ether.fi Liquid ETH vault on Ethereum, curated by Nonce Capital, to earn Ether.fi and Veda points.
2. Deposit into the ether.fi Liquid BTC vault on Ethereum to earn Veda Points together with Lombard, Babylon, Symbiotic and Ether.fi points.
3. Deposit USDC into the ether.fi Liquid USD vault on Ethereum to earn points on a stablecoin position curated by Nonce Capital.
4. Deposit into the ether.fi Liquid vaults on OP Mainnet to get the same curated exposure with lower transaction costs.
5. Hold Midas Liquid Reserve or Liquid RWA tokens on Optimism, the tokenized funds whose strategies Nonce Capital manages.
6. Hold the vault receipt tokens continuously so any future retroactive snapshot of the curated vaults would capture the position.

**FDV comps:**
- Morpho (MORPHO): FDV ~$1.75B, TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Aave (AAVE): FDV ~$1.6–1.7B, TVL ~$14.9B → FDV/TVL ≈ 0.11.
- (Note: steps 2–3 rely on ether.fi vault points mechanics verified in §3; the Nonce curation link itself is verified via DefiLlama/Aave governance sources.)

**Sources:**
- https://defillama.com/protocol/nonce-capital
- https://governance.aave.com/t/arfc-deploy-a-dedicated-aave-v4-whitelabel-instance-fully-managed-by-etherfi-on-op-mainnet-to-power-ether-fi-cash/25314
- https://data.tradexustimes.com/defi/nonce-capital
- https://etherfi.gitbook.io/etherfi/getting-started/faq.md

**Confidence: medium** (curator role and no-token field verified via DefiLlama; "no points program" is absence-of-evidence).

---

## 6. Upshift (`upshift`)

**What it is:** The operating system for institutional onchain asset management — non-custodial ERC-4626 vault infrastructure (built on August prime-brokerage rails) that lets hedge funds and asset managers run DeFi/CeFi yield strategies in vaults across 30+ chains and 70+ protocols. Retail users deposit once into a curated vault and receive a receipt token. Also runs Upshift Clear (instant RWA redemption vaults, launched with Superstate's USCC fund).

**Token status:** No token verified. No Upshift token contract, ticker, or TGE has been announced; airdrop trackers describe a future token as "not officially confirmed yet".

**Points / airdrop program:** Yes — **Upshift Points**, currently in **Season 2** (confirmed on the official app as of 12 Oct 2026). Points accrue for vault deposits and ecosystem participation: 1x base for any vault deposit, 5x bonus while total Upshift TVL is below $750M, and per-vault multipliers up to 12x (e.g. 10x for the Upshift Gamma USDC vault). Partner venues (Morpho, Euler, Pendle) carry their own multipliers. The points formula itself is not public, and no token conversion has been announced.

**Farm steps:**
1. Deposit WHYPE into the Hyperbeat Ultra HYPE vault on HyperEVM to earn Upshift points plus Hyperbeat and other HyperEVM ecosystem points.
2. Deposit uBTC into the uBTC vault on HyperEVM to earn Upshift points on a BTC-denominated position.
3. Deposit USDC into the Upshift Gamma USDC vault on Ethereum, which carries a 10x Upshift points multiplier.
4. Deposit USDe into the HLPe vault on HyperEVM to earn 5x Upshift points plus 70x Ethena sats for the first month.
5. Supply upUSDC as collateral on Morpho through Upshift to earn a 5x Upshift points multiplier on the Morpho leg.
6. Complete Upshift quests on Layer3, such as depositing into the wHYPE vault, to earn additional quest rewards on top of vault points.

**FDV comps:**
- Morpho (MORPHO): FDV ~$1.75B, TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Aave (AAVE): FDV ~$1.6–1.7B, TVL ~$14.9B → FDV/TVL ≈ 0.11.

**Sources:**
- https://docs.upshift.finance/introduction/faq
- https://docs.upshift.finance/introduction/how-it-works
- https://www.swanbluechip.com/rewards/p/upshift/
- https://www.airdropguild.com/upshift-airdrop-farming-yield-strategies-on-hyperevm/
- https://www.techflowpost.com/en-US/article/25077
- https://blog.hyena.trade/posts/introducing-hyena-the-internet-trading-engine
- https://defillama.com/protocol/morpho
- https://defillama.com/protocol/aave?denomination=USD

**Confidence: high** (Season 2 and multipliers confirmed from the official app via a points tracker read on 12 Oct 2026; no-token status corroborated).

---

## 7. Bittensor dTAO (`bittensor-dtao`)

**What it is:** Bittensor is a blockchain (Subtensor) coordinating decentralized AI work through independent markets called subnets — miners produce AI outputs, validators score them, and the network pays them in TAO. The dTAO upgrade (live 13 Feb 2025) gave every subnet its own alpha token traded against TAO in a protocol liquidity pool, so staking TAO into a subnet swaps it into that subnet's alpha. The DefiLlama "bittensor-dtao" entry tracks DEX activity on Bittensor (subnet token pools). TAO has a 21M hard cap; the first halving was December 2025 (0.5 TAO/block, ~3,600 TAO/day).

**Token status:** Token EXISTS and is long launched — **TAO**, trading on major exchanges (Binance, Coinbase, Kraken). Price ~$190 (15 Nov 2026, Finnhub), market cap ~$2.2–2.4B, circulating ~11.7M of 21M max. Each subnet also has its own live alpha token. This is not a new-token launch candidate; it is an already-liquid L1 with per-subnet tokens.

**Points / airdrop program:** No points program found. Rewards are protocol emissions: staking TAO to validators (root network, subnet 0) or into a subnet earns a share of that subnet's alpha emissions (default split ~41% miners / 41% validators+stakers / 18% subnet owner).

**Farm steps:**
1. Stake TAO to a validator on the root network (subnet 0) to earn a share of validator rewards while keeping exposure in TAO itself.
2. Stake TAO into a high-demand subnet to swap into that subnet's alpha token and earn a share of the subnet's alpha emissions.
3. Compare subnet alpha prices and emission shares on a Bittensor explorer before choosing a subnet, since emissions follow market demand for each subnet token.
4. Unstake alpha back to TAO through the subnet pool when rotating between subnets, accepting the pool price impact and swap fees.
5. Hold TAO through the halving-era emission schedule, since new issuance is now 0.5 TAO per block and supply growth has slowed.
6. Track the chosen subnet's validator performance and owner take rate, since staker rewards are net of the validator's commission.

**FDV comps:**
- TAO itself: price ~$190 × 21M max supply → FDV ≈ $4.0B; dTAO DEX TVL ~$376M → FDV/TVL ≈ 10.6 (a very high ratio because TAO is an L1 token, not a DeFi app token — do not compare directly with vault-curator ratios).
- Render (RNDR) and Akash (AKT) are the usual decentralized-compute comps — FDV figures not verified in this pass, named without numbers.

**Sources:**
- https://tsnmedia.org/what-is-bittensor-a-complete-guide-to-tao-and-subnets-for-beginners/
- https://coinstats.app/news/06cab97688bd7380f444ac59cad342425723c667f76fccb4ff465ac0b60d67c0_What-is-Bittensor-TAO-A-market-for-AI-computing-power-with-21-million-tokens/
- https://www.khala.io/bittensor-network
- https://finnhub.io/?q=%22TAO%22 (price ~$189.50, mcap ~$2.43B, 15 Nov 2026)
- https://www.blocfolio.com/coin/bittensor (FDV ~$4.00B, 1.8x mcap)

**Confidence: high** (TAO existence, price, supply cap and dTAO mechanics verified across multiple sources).

---

## 8. OnRe (`onre`)

**What it is:** The world's first Bermuda-licensed (BMA Class F digital-asset + Class IIGB reinsurance licences) on-chain reinsurance protocol on Solana, operated by On Re SAC Ltd. Depositors receive ONyc, a yield-bearing dollar asset backed by reinsurance premiums and collateral (sUSDe), whose NAV rises with premium and collateral income. Backed by Solana Ventures, Ethena Labs and RockawayX; contracts audited by Quantstamp.

**Token status:** Product token EXISTS — **ONyc** is live on Solana (official address 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5, per airdrop tracker). No governance/reward token exists: the official position is that OnRe Points carry no promise of tokens, and no $ONRE token or airdrop has been announced. (One third-party blog claims "$ONRE token incentives are active" — this contradicts the official no-token stance and is treated as unverified; do not rely on it.)

**Points / airdrop program:** Yes — **OnRe Points**, launched by official announcement. Points accrue daily: 1 point per ONyc per day for base holding (1x), 2x for providing ONyc liquidity on Kamino/Orca/Raydium, 3x for supplying ONyc as lending collateral on Kamino/Loopscale, 4x for yield trading (holding YT-ONyc on Exponent). Looping strategies reach up to 6x–10x per community trackers. Referrals pay 10% of referrals' points to the referrer and +5% to the referred user. Points are tracked on a leaderboard; no conversion to a token has been disclosed.

**Farm steps:**
1. Mint ONyc on Solana through the OnRe app to earn 1 OnRe Point per ONyc per day plus the underlying reinsurance yield.
2. Supply ONyc as collateral on Kamino on Solana and borrow USDC against it to earn 3x OnRe Points on the supplied position.
3. Deposit USDC into the Loopscale OnRe USDC vault on Solana to earn lending yield plus 3x Loopscale points and 3x OnRe Points.
4. Provide ONyc liquidity on Orca or Raydium on Solana to earn 2x OnRe Points on the liquidity position.
5. Hold YT-ONyc on Exponent on Solana to earn 4x OnRe Points through yield trading on the ONyc yield stream.
6. Loop ONyc on Kamino by borrowing USDC against supplied ONyc and re-minting more ONyc to stack up to 6x OnRe Points on the leveraged position.

**FDV comps:**
- Ethena (ENA): FDV not verified in this pass — named without numbers (yield-bearing dollar comp).
- Ondo Finance (ONDO) and Maple Finance (SYRUP) are RWA yield comps — FDV figures not verified in this pass, named without numbers.
- (No verified FDV/TVL ratios for the RWA comps; do not use invented figures.)

**Sources:**
- https://www.onre.finance/blog/onre-introduces-points-program-rewarding-onyc-participation-across-defi
- https://airdropalert.com/airdrops/onre-finance/
- https://www.airdroptracker.io/airdrop-list
- https://99airdrops.com/potential-airdrops/
- https://blog.mexc.com/token-reviews/onre-airdrop-2026-how-to-earn-onre-by-depositing-into-the-worlds-first-on-chain-reinsurance-protocol-on-solana/ ($ONRE claim flagged unverified)

**Confidence: high** (points program confirmed by official OnRe announcement; ONyc live; no-governance-token stance confirmed by two trackers).

---

## 9. RockawayX (`rockawayx`)

**What it is:** A digital-asset investment firm (AUM $2B+, active since 2018, early Solana investor) that runs a full-stack vault-curation business: it designs, deploys, risk-manages and operates non-custodial yield/lending vaults for partners. Vaults run on Morpho (Ethereum: USDC Prime rxUSDCp, USDC Yield rxUSDCy, wETH rxWETH), Kamino (Solana: RWA USDC vault), Upshift, Feather, Ember and Lista, plus a tokenized credit facility on Pareto and market-neutral strategies on Midas.

**Token status:** No token verified. No RockawayX token, ticker, or TGE was found in any source; DefiLlama lists no token for the protocol. It is an investment firm/curator, not a token-issuing protocol.

**Points / airdrop program:** No public points program found under the RockawayX name. Depositors earn vault yield and, where the underlying venue runs incentives, partner rewards (e.g. the Tori Ecosystem Vault on Upshift gives exposure to Tori strUSD yield).

**Farm steps:**
1. Deposit USDC into the RockawayX USDC Prime vault (rxUSDCp) on Morpho on Ethereum for conservative lending yield against blue-chip collateral.
2. Deposit USDC into the RockawayX USDC Yield vault (rxUSDCy) on Morpho on Ethereum for diversified RWA and yield-bearing-stablecoin collateral exposure.
3. Deposit WETH into the RockawayX wETH vault (rxWETH) on Morpho on Ethereum for ETH-correlated lending yield.
4. Deposit USDC into the RockawayX RWA USDC vault on Kamino on Solana for real-world yield from OnRe reinsurance, Huma and Figure markets.
5. Deposit USDC, USDT or trUSD into the RockawayX Tori Ecosystem Vault on Upshift on Ethereum and hold the etrUSD receipt token for Tori strUSD yield.
6. Hold the vault receipt tokens in the depositing wallet continuously so any future retroactive snapshot would capture the position.

**FDV comps:**
- Morpho (MORPHO): FDV ~$1.75B, TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Aave (AAVE): FDV ~$1.6–1.7B, TVL ~$14.9B → FDV/TVL ≈ 0.11.

**Sources:**
- https://www.rockawayx.com/insights/rockawayx-vault-curation-an-overview-of-products-capabilities
- https://www.rockawayx.com/insights/rockawayx-curating-capital-flows
- https://rockawayx.com/insights/rockawayx-launches-three-curated-vaults-on-morpho
- https://www.rockawayx.com/insights/rockawayx-tori-ecosystem-vault-investment-thesis-risk-disclosure
- https://defillama.com/protocol/morpho
- https://defillama.com/protocol/aave?denomination=USD

**Confidence: medium** (vault lineup verified from official RockawayX posts; no-token/no-points is absence-of-evidence).

---

## 10. Symbiotic (`symbiotic`)

**What it is:** A permissionless restaking / shared-security protocol on Ethereum (mainnet live January 2025, launched out of stealth 11 June 2024). Networks build custom restaking setups from modular vaults, collaterals, operators and resolvers; it is collateral-agnostic (any ERC-20 can be restaked) unlike EigenLayer's ETH-centric model. Used by Ethena (securing USDe cross-chain transfers), LayerZero, Hyperlane and Mellow.

**Token status:** No token verified. Multiple trackers state explicitly: "Symbiotic has no token. No token contract is deployed on Ethereum, and none has been announced — no symbol, no ICO, no TGE exists to date." Any page or exchange claiming to trade a Symbiotic token is, per those sources, not the real protocol.

**Points / airdrop program:** Yes — **Symbiotic Points**. Running since the stealth launch on 11 June 2024, still active with no announced end date. Points accrue to restakers by deposit size and duration; no purchase or permission beyond restaking is required. Symbiotic has made no official token or airdrop commitment — points carry no token entitlement, and trackers flag this as the riskiest certainty-wise of the active restaking points bets.

**Farm steps:**
1. Deposit wstETH into a Symbiotic vault on Ethereum mainnet through the Symbiotic app to start earning Symbiotic Points immediately.
2. Deposit sUSDe into a Symbiotic vault on Ethereum mainnet to earn Symbiotic Points on a stablecoin restaking position.
3. Deposit weETH through the ether.fi Liquid Symbiotic route to earn Symbiotic Points together with Ether.fi and Veda points multipliers.
4. Deposit into a Mellow Finance vault on Ethereum mainnet that routes the deposit into Symbiotic to earn Symbiotic Points plus Mellow points.
5. Deposit weETHs into a Pendle pool on Ethereum to earn Symbiotic Points alongside Pendle yield and Ether.fi points.
6. Monitor the Symbiotic app dashboard for points accrual and new vault openings, since vaults have deposit caps and fill up.

**FDV comps:**
- EigenLayer / EigenCloud (EIGEN): FDV ~$250–450M across sources (Kaavon ~$253M; CoinGecko ~$445M; Tokenomist ~$153M projected) — figures disagree, so use as a range, not a point estimate. Restaked TVL ~$6B (Oct 2026) → FDV/TVL ≈ 0.04–0.07.
- Morpho (MORPHO): FDV ~$1.75B, TVL ~$10.3B → FDV/TVL ≈ 0.17.
- Karak (KARAK): restaking competitor, token status/FDV not verified in this pass — named without numbers.

**Sources:**
- https://DropsTab.com/coins/symbiotic
- https://www.panaprium.com/blogs/i/restaking-points-programs-worth-chasing
- https://www.bitget.com/airdrop/symbiotic
- https://CryptoRank.io/drophunting/symbiotic-activity219
- https://www.coingecko.com/en/coins/eigencloud
- https://www.kaavon.com/research/coins/eigenlayer
- https://defillama.com/protocol/morpho

**Confidence: high** (no-token status stated explicitly by multiple trackers; points program running since June 2024 confirmed).

---

## Cross-cutting notes for the radar

- **Already-launched tokens (not launch candidates):** USDD (stablecoin, live) and TAO (L1 token, live since 2021). Their radar value is yield/points-adjacent, not a new TGE.
- **Confirmed points programs:** Veda Points (Season 1 from Jun 2024), Upshift Points (Season 2), OnRe Points, Symbiotic Points (from Jun 2024), USDD Points Mining (announced Jan 2026, mechanics unverified).
- **No points program found:** Steakhouse Financial, Gauntlet, Nonce Capital, RockawayX — farming thesis there is purely speculative tokenless exposure (plus third-party incentives such as Arbitrum DRIP for Gauntlet USDG vaults).
- **Curator double-counting warning:** Steakhouse, Gauntlet, Nonce and RockawayX TVL sits on top of Morpho/Kamino/Aave infrastructure — their TVL is not standalone protocol TVL, so FDV/TVL ratios computed off Morpho/Aave are only rough anchors.
- **FDV figures are volatile:** MORPHO ~$1.75B and AAVE ~$1.6–1.7B are DefiLlama snapshots from 14–15 Nov 2026; EIGEN figures disagree across sources ($153M–$445M) — re-verify at build time.
