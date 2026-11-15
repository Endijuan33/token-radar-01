# Token Radar — Research Batch H

Researched 2026-11-15 (WIB) via web search + page fetches (official docs/sites, DefiLlama, reputable secondary sources).
Rule applied: only verified facts are stated; anything not verified is labelled **unverified**.
TVL figures are the snapshot figures supplied by the parent agent (DefiLlama snapshot as of 2026-11-14), not re-verified here.
Capital sizing rule: TVL >= $1B -> $150, >= $100M -> $100, else $50. All 13 protocols in this batch are under $100M TVL, so every step is sized at $50.
Each farm step is written to render at 85 characters or fewer including its cost and time.

---

## 77. Drakewell (`drakewell`)

**What it is:** An issuer of on-chain structured products (formerly JUSD Finance, rebranded 10 Nov 2026), backed by JPEG Trading. Products: USDdw, a fixed-yield token (the former JUSD), and SPYdw, a hedged S&P 500 portfolio launched with the rebrand — collateral yield buys one-year SPY call options while the collateral stays as the floor. Chains: Arbitrum, Ethereum, Aleo. TVL ~$28.2M (snapshot). Listed 2026-10-02.

**Token status:** No governance token verified. USDdw and SPYdw are product tokens, not a protocol token. Direct mint/burn of both is restricted to whitelisted institutional participants via drakewell.fi; retail can only buy the tokens on secondary markets (Uniswap).

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program, airdrop, or token announcement appears on the protocol's own pages or in the rebrand coverage. (Note: search results for "JUSD" points/airdrops refer to unrelated projects — a Drake perp DEX on Monad and an "EPS" token — not Drakewell.)

**Farm steps:**
- text: Buy USDdw on Uniswap on Arbitrum | cost: $50, $1 gas | time: 10m
- text: Buy SPYdw on Uniswap on Arbitrum | cost: $50, $1 gas | time: 10m
- text: Hold USDdw/SPYdw, watch drakewell.fi | cost: $0 | time: 5m

**Sources:**
- https://cryptobriefing.com/jusd-finance-becomes-drakewell-and-introduces-spydw-a-hedged-spy-portfolio/
- https://defillama.com/protocol/drakewell

**Confidence: medium** (product lineup and institutional-only minting verified from the rebrand announcement; no-program status is absence-of-evidence).

---

## 78. Hakutora (`hakutora`)

**What it is:** A risk curator running lending vaults on Morpho (Ethereum). Verified vaults include the Hakutora USDC vault (hUSDC, ~$11M deposits) and the Hakutora USDT vault (~$5M). TVL ~$16.2M (snapshot). Listed 2025-05-20.

**Token status:** No token verified. No Hakutora token, ticker, or TGE found in any source; DefiLlama lists no token for the protocol.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No Hakutora-native points program found. Depositors earn borrower interest only; any Morpho/Merkl incentives on its vaults would be third-party, not a Hakutora program.

**Farm steps:**
- text: Deposit USDC in Hakutora USDC vault, ETH | cost: $50, $2 gas | time: 15m
- text: Deposit USDT in Hakutora USDT vault | cost: $50, $2 gas | time: 15m
- text: Hold vault shares, check Merkl rewards | cost: $0 | time: 5m

**Sources:**
- https://www.stakingrewards.com/defi/0xa71d08a159258553a5ac190d60fa919425ff02ea
- https://10k.nyxshcon.org/lending?view=vaults

**Confidence: medium** (vault lineup verified via vault trackers; no-token/no-points is absence-of-evidence).

---

## 79. Waterline (`waterline`)

**What it is:** A risk curator running lending vaults on Morpho (Ethereum). Verified vaults: Waterline Reservoir USDC (~$11M, ~7% APY incl. rewards) and Waterline InfiniFi USDC (~$1M). TVL ~$22.6M (snapshot). Listed 2026-09-03.

**Token status:** No token verified. No Waterline token, ticker, or TGE found in any source; DefiLlama lists no token for the protocol.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No Waterline-native points program found. Depositors earn borrower interest (plus any third-party rewards routed through Morpho/Merkl).

**Farm steps:**
- text: Deposit USDC in Waterline Reservoir vault | cost: $50, $2 gas | time: 15m
- text: Deposit USDC in Waterline InfiniFi vault | cost: $50, $2 gas | time: 15m
- text: Hold vault shares, check Merkl rewards | cost: $0 | time: 5m

**Sources:**
- https://blog.vaults.fyi/morpho-yields/
- https://app.morpho.org/ethereum/variable/0xdf034d0351a4c0af947e1a37ecd5ccbce60d72eac90de6fcad48c74e2869d14c/usdc-pt-iusd-25jun2026

**Confidence: medium** (vault lineup verified via vault trackers; no-token/no-points is absence-of-evidence).

---

## 80. Flowdesk (`flowdesk`)

**What it is:** A full-service digital-asset trading and technology firm (founded 2020) that also curates Morpho vaults on Ethereum. Verified vaults: Flowdesk Confidential High Yield USDT (~$23.8M deposits, a Zama confidential vault live since 15 Sep 2026) and the Flowdesk AUSD RWA Strategy vault (fAUSD, AUSD with xStocks tokenized equities as collateral). TVL ~$28.0M (snapshot). Listed 2026-09-02.

**Token status:** No token verified. No Flowdesk token, ticker, or TGE found in any source; it is a trading firm/curator, not a token-issuing protocol.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No Flowdesk-native points program found. Zama notes confidential incentive campaigns run via Merkl on select confidential vaults, starting with Steakhouse's — Flowdesk vault eligibility for those is unverified.

**Farm steps:**
- text: Deposit USDT in Flowdesk High Yield vault | cost: $50, $2 gas | time: 15m
- text: Deposit AUSD in Flowdesk AUSD RWA vault | cost: $50, $2 gas | time: 15m
- text: Hold vault shares, check Merkl rewards | cost: $0 | time: 5m

**Sources:**
- https://www.zama.org/post/confidential-defi-at-scale
- https://DeFiLlama.com/protocol/flowdesk

**Confidence: medium** (vault lineup verified from Zama + Morpho listings; no-token/no-points is absence-of-evidence).

---

## 81. Manifest Trade (`manifest-trade`)

**What it is:** A spot central limit order book (CLOB) DEX on Solana with 0% maker and taker fees, built by CKS Systems (now Bonasa Technologies); core program formally verified by Certora in 2024. Anyone can create a market for any token pair (~0.004 SOL rent). Busiest market is USDT/USDC. Destiny Vaults are a separate market-making vault program on top of Manifest (vaults for PYUSD, USDG, CASH, JitoSOL, BTC, USD1, USDS; depositors receive vault tokens such as upPYUSD). TVL ~$9.1M (snapshot). Listed 2024-11-13.

**Token status:** No token verified. Multiple trackers state explicitly: Manifest "has no token" and no confirmed airdrop; it is not linked to the MANIFEST memecoins sharing its name.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program found on Manifest's own pages or in trackers. Farming thesis is purely speculative tokenless usage (trading + Destiny Vault deposits).

**Farm steps:**
- text: Place a limit order on USDT/USDC market | cost: $50, $0.01 gas | time: 10m
- text: Deposit PYUSD into a Destiny vault | cost: $50, $0.01 gas | time: 10m
- text: Hold upPYUSD, watch manifest.trade | cost: $0 | time: 5m

**Sources:**
- https://solanacompass.com/projects/manifest
- https://bitcoininfonews.com/manifest-trade-review-2026

**Confidence: high** (no-token status stated explicitly by multiple trackers; Destiny Vault lineup verified).

---

## 82. Sygnum FIUSD Liquidity Fund (`sygnum-fiusd-liquidity-fund`)

**What it is:** A permissioned security token issued by Sygnum Bank representing units of Fidelity International's Institutional Liquidity Fund (USD Fund Class G Acc) — a regulated money-market-fund position on public rails, on zkSync Era (and Arbitrum). Originated March 2024 from the tokenization of $50M of Matter Labs treasury reserves. TVL ~$14.2M (snapshot). Listed 2024-09-25.

**Token status:** **ALREADY LAUNCHED — FIUSD.** The token is live since March 2024: ~4,000 FIUSD in circulation, NAV ~$11,841 per token, only 3 holders, zero 30-day transfer volume. It is a regulated, permissioned fund share for accredited/institutional investors only — not a new-token farm and not purchasable by retail at $50 (one token costs ~$11.8k, plus Sygnum onboarding).

**Points / airdrop program:** None. This is a tokenized money-market fund, not a points program.

**Farm steps:**
- text: Apply via Sygnum as accredited investor | cost: $11.8k min | time: 1d
- text: Subscribe FIUSD via Sygnum Desygnate | cost: $0 | time: 1h
- text: Hold FIUSD, yield accrues in NAV | cost: $0 | time: 5m

**Sources:**
- https://yellow.com/asset/fiusd
- https://app.rwa.xyz/assets/FIUSD

**Confidence: high** (permissioned, institutional-only nature and holder count verified across RWA trackers).

---

## 83. Mezo Earn (`mezo-earn`)

**What it is:** The yield/governance system of Mezo, the Bitcoin-native EVM chain built by Thesis (mainnet May 2025). Users lock BTC to mint MUSD (a 100% BTC-backed stablecoin, 1% fixed borrow rate), lock BTC for veBTC voting power, lock MEZO for veMEZO (up to 5x vote boost), and earn via the MUSD Savings Vault (deposit MUSD, receive sMUSD) and gauge emissions. TVL ~$53.6M (snapshot). Listed 2026-05-12.

**Token status:** **ALREADY LAUNCHED — MEZO.** TGE 1 April 2026; spot trading opened the same day on Coinbase, Bitget, KuCoin, Gate, Kraken and MEXC. Genesis supply 1,000,000,000 MEZO; 50% unlocked at TGE. ATH ~$0.148 (13 Apr 2026). This is a yield play on a live token, not a new-token farm.

**Points / airdrop program:** No points program — rewards are live MEZO emissions: weekly gauge emissions directed by veBTC votes, anti-dilution rebases to veMEZO holders, and MUSD Savings Vault yield from protocol fees.

**Farm steps:**
- text: Deposit MUSD in Mezo MUSD Savings Vault | cost: $50, $1 gas | time: 15m
- text: Stake sMUSD in the MUSD Savings gauge | cost: $0, $1 gas | time: 10m
- text: Lock BTC for veBTC, vote gauges weekly | cost: $50, $1 gas | time: 15m

**Sources:**
- https://mezo.org/docs/users/mezo-earn/vaults/musd-savings-vault/
- https://DropsTab.com/coins/mezo

**Confidence: high** (TGE date and listings verified across multiple sources; vault/gauge mechanics from official Mezo docs).

---

## 84. Estate Protocol (`estate-protocol`)

**What it is:** A tokenized real-estate platform on Arbitrum (exclusively) offering fractional ownership of luxury properties, with investments from as little as $50. 27 properties tokenized by end-2025 (~$12.4M total tokenized value), rent paid monthly to holders in USDC. Offerings are securities: Reg D 506(c) / Reg S, KYC and accreditation, wallet whitelisting, transfer restrictions. TVL ~$13.9M (snapshot). Listed 2024-10-09.

**Token status:** No protocol token verified. Each property is its own tokenized share; no Estate governance/reward token, ticker, or TGE found.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program found. Returns are real rental income, not emissions.

**Farm steps:**
- text: Complete KYC, buy a property token share | cost: $50, $0.10 gas | time: 30m
- text: Buy a second property token on Arbitrum | cost: $50, $0.10 gas | time: 15m
- text: Hold tokens, collect monthly USDC rent | cost: $0 | time: 5m

**Sources:**
- https://www.estateprotocol.com/blog/estate-protocol-recap-2025-growth-of-real-estate-on-arbitrum/
- https://defillama.com/protocol/estate-protocol

**Confidence: medium** (property count, rent mechanics and KYC/accreditation verified from official recap and founder pages).

---

## 85. Native Credit Pool (`native-credit-pool`)

**What it is:** The lending leg of Native (native.org), an on-chain token-liquidity platform. The Credit Pool is a unified, single-sided asset supply pool that lets market makers borrow assets for trading, deepening on-chain spot liquidity — an alternative to AMMs alongside Native's Swap Engine and Core CLOB. Largest chain is Morph (~$9.4M), then Ethereum (~$6.8M). TVL ~$19.1M (snapshot). Listed 2024-05-23.

**Token status:** No token verified. No Native token, ticker, or TGE found; third-party trackers list Native Credit Pool as "no token".

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program for the Credit Pool found. (An old Native Lend incentive campaign with ZetaChain — 80,000 ZETA for lending/borrowing on ZetaChain — is a past, chain-specific campaign, not a live Credit Pool program.)

**Farm steps:**
- text: Supply USDC to Native Credit Pool, Morph | cost: $50, $1 gas | time: 15m
- text: Supply USDT to Native Credit Pool, Ethereum | cost: $50, $2 gas | time: 15m
- text: Hold pool shares, watch native.org | cost: $0 | time: 5m

**Sources:**
- https://DeFillama.com/protocol/native-credit-pool
- https://defillama.com/protocol/native?denomination=MNT

**Confidence: medium** (pool mechanics verified from DefiLlama; no-token/no-points is absence-of-evidence).

---

## 86. Hyperbeat Earn (`hyperbeat-earn`)

**What it is:** The yield-vault suite of Hyperbeat, the native yield layer on Hyperliquid (HyperEVM). Vaults issue receipt tokens whose value rises with strategy yield: hbUSDT (curated by MEV Capital, powered by Midas), hbUSDC (Hyperbeat Core, RockawayX risk oversight), hbHYPE / Ultra HYPE (Edge UltraYield Capital), hbBTC / Ultra UBTC, plus the Ventuals (HIP-3) VLP vault. TVL ~$17.6M (snapshot). Listed 2025-04-28.

**Token status:** No token verified yet. No BEAT token is live; the team bought the BEAT ticker on Hyperliquid, which trackers read as a signal Hearts may convert to BEAT — conversion itself is unconfirmed.

**Points / airdrop program:** Yes — **Hearts**. Fixed supply of 51M Hearts distributed weekly for engaging with Hyperbeat products (vault deposits, staking, referrals), ranked Bronze through Challenger. Recent updates put distribution at ~35M of 51M (Week 17), so the program is well advanced — farm now, not later. Vault deposits also stack partner points (Ethena sats, HyperLend, HypurrFi, Felix, etc.).

**Farm steps:**
- text: Deposit USDT0 into hbUSDT vault, HyperEVM | cost: $50, $1 gas | time: 15m
- text: Deposit WHYPE into hbHYPE Ultra vault | cost: $50, $1 gas | time: 15m
- text: Hold hbUSDT, check Hearts on dashboard | cost: $0 | time: 5m

**Sources:**
- https://airdrops.io/hyperbeat/
- https://www.hypurr.co/blog-posts/uncoil-x-hypurrco-community-research-hyperbeat

**Confidence: high** (Hearts program and vault lineup confirmed by official docs via trackers; BEAT conversion unconfirmed).

---

## 87. FstSwap (`fstswap`)

**What it is:** A decentralized exchange for BEP-20 token swaps on BNB Chain, launched April 2022, CertiK-audited, 0.30% swap fee. TVL ~$11.8M (snapshot). Listed 2022-09-20.

**Token status:** **ALREADY LAUNCHED — FIST.** FistToken (FIST) is the governance token of FstSwap, contract 0xc9882def23bc42d53895b8361d0b1edc7570bc6a on BNB Chain, 200M total supply, created Dec 2021. This is a live DEX with a live token, not a new-token farm.

**Points / airdrop program:** None found. No points program; any yield comes from swap fees / LP positions.

**Farm steps:**
- text: Swap BNB for USDT on FstSwap, BNB Chain | cost: $50, $0.10 gas | time: 10m
- text: Add BNB-USDT liquidity on FstSwap | cost: $50, $0.10 gas | time: 10m
- text: Hold LP tokens, claim swap fees | cost: $0 | time: 5m

**Sources:**
- https://coinmarketcap.com/exchanges/fstswap/?start=zkk%22zkk%27zkk%3Ea
- https://newcoinhub.com/bnb/0xc9882def23bc42d53895b8361d0b1edc7570bc6a

**Confidence: high** (launch date and FIST token verified across multiple exchange trackers).

---

## 88. 9Summits (`9summits`)

**What it is:** An on-chain asset manager / risk curator (9summits.io) running vaults on Morpho, Euler, Silo and Lagoon Finance across Ethereum, Avalanche, Base and Unichain. Verified vaults: 9Summits Flagship USDC and Turtle Lines USDC on Morpho, 9Summits Flagship ETH (9SETH) on Lagoon, and the 9SicUSDC Short Duration Institutional Credit vault on Lagoon (Rekord). TVL ~$16.0M (snapshot). Listed 2025-05-20.

**Token status:** No token verified. No 9Summits token, ticker, or TGE found in any source.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No 9Summits-native points program found. Note as a risk flag, not a farm input: 9Summits vaults were among the ~15 Morpho vaults hit in the March 2026 Resolv USR exploit, after its Public Allocator kept supplying the broken market for ~10 hours post-attack.

**Farm steps:**
- text: Deposit USDC in 9Summits Flagship vault | cost: $50, $2 gas | time: 15m
- text: Deposit ETH in 9Summits Flagship ETH vault | cost: $50, $2 gas | time: 15m
- text: Hold vault shares, watch 9summits.io | cost: $0 | time: 5m

**Sources:**
- https://app.lagoon.finance/vault/1/0x07ed467acd4ffd13023046968b0859781cb90d9b
- https://www.rekord.io/guides/metamorpho-v2-erc4626-erc7540-vaults/

**Confidence: medium** (vault lineup verified via Lagoon/Rekord; no-token/no-points is absence-of-evidence; Resolv exposure verified in multiple post-mortems).

---

## 89. Starknet BTC Staking (`starknet-btc-staking`)

**What it is:** Bitcoin staking on Starknet — the first rollup with dual-token staking. Validators are secured 75% by STRK and 25% by BTC; BTC stakers delegate wrapped BTC (WBTC, tBTC, SolvBTC, LBTC) to validators and earn rewards in STRK (BTC gets a fixed 25% share of STRK emissions). Liquid staking via Endur from day one: stake WBTC, receive xWBTC. Staking v2 live since late 2025; BTCFi initiative launched September 2025. TVL ~$46.6M (snapshot). Listed 2026-04-06.

**Token status:** **ALREADY LAUNCHED — STRK.** STRK is Starknet's long-live native token (staking, governance, fees; trading since 2024). BTC staking pays rewards in already-trading STRK — this is a yield play, not a new-token farm.

**Points / airdrop program:** None. Rewards are protocol STRK emissions, not points.

**Farm steps:**
- text: Delegate WBTC to a validator on Starknet | cost: $50, $1 gas | time: 15m
- text: Stake WBTC via Endur, receive xWBTC | cost: $50, $1 gas | time: 15m
- text: Hold xWBTC, claim STRK rewards | cost: $0 | time: 5m

**Sources:**
- https://www.starknet.io/staking/
- https://www.xverse.app/blog/best-bitcoin-staking-apps

**Confidence: high** (dual-token model and STRK-paid BTC rewards verified from official Starknet staking pages).

---

## Cross-cutting notes for the radar

- **Already-launched tokens (not launch candidates):** Mezo Earn (MEZO, TGE 1 Apr 2026), FstSwap (FIST, live since 2021/22), Starknet BTC Staking (STRK, live since 2024), Sygnum FIUSD (FIUSD fund share, live since Mar 2024, permissioned/institutional-only).
- **Confirmed points program:** Hyperbeat Earn — Hearts (51M supply, ~35M distributed by Week 17; program well advanced).
- **No verifiable program:** Drakewell, Hakutora, Waterline, Flowdesk, Manifest Trade, Estate Protocol, Native Credit Pool, 9Summits — farming thesis there is purely speculative tokenless exposure (plus real yield).
- **Curator double-counting warning:** Hakutora, Waterline, Flowdesk and 9Summits TVL sits on top of Morpho/Lagoon infrastructure — their TVL is not standalone protocol TVL.
- **Risk flag carried over:** 9Summits vaults were hit in the March 2026 Resolv USR exploit via Morpho's Public Allocator; curator automation risk is real for this cohort.
- **FIUSD is not retail-farmable:** one token costs ~$11.8k NAV and subscription is Sygnum-gated; the $50 sizing in its steps is overridden by the ~$11.8k minimum.
