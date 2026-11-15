# Batch D — Token-Launch Radar Research (make.fun token-radar-01)

Researched 2026-11-15. TVL figures are the task snapshot (DefiLlama, Nov 2026) unless otherwise noted.
Rule applied throughout: only verified facts are stated; anything unconfirmed is labelled **unverified**.
FDV/TVL ratios below are computed from the cited figures and dated 14–15 Nov 2026; prices move daily.

Reference comps used across sections (verified 14–15 Nov 2026):
- **Ethena (ENA)** — FDV ~$1.7–1.95B, TVL ~$4.9–5.2B → FDV/TVL ≈ **0.35–0.39x**.
- **Morpho (MORPHO)** — FDV ~$1.75–1.82B, TVL ~$11B → FDV/TVL ≈ **0.16x**.
- **Mezo (MEZO)** — FDV ~$2.9–3.8M, TVL ~$54M → FDV/TVL ≈ **0.06x** (post-crash; see §8).

---

## 1. Tori Finance (tori-finance) — $77M TVL, Basis Trading

**What it is:** Tori Finance is a macro carry / market-neutral protocol that issues trUSD, a synthetic dollar backed by hedged trading positions (money-market placements, spot–futures basis trades, calendar spreads), and strUSD, the staked, yield-accruing form of trUSD. Ethereum is the hub; trUSD/strUSD also run on Monad, Pharos, Arbitrum and Solana, and trUSD on Canton, with cross-chain transfers via Chainlink CCIP.

**Token status:** No governance token verified. trUSD and strUSD are product tokens (synthetic dollar and staked receipt), not a governance token. The docs state Cores are "not a promise of any token or payment". No token launch date found.

**Points / airdrop program:** **Cores — YES.** Season 1 began 23 June 2026 with a pre-deposit phase (30 Cores per dollar per day, the largest boost planned); that phase is complete and the vault has converted to the Ecosystem Vault (curated by RockawayX via Upshift). Cores are earned by holding trUSD, staking strUSD, and participating in integrated DeFi protocols, with per-venue multipliers shown in the app; referrals pay 10% of the referred user's Cores. Future use of Cores is undecided.

**Farm steps:**
1. Deposit stablecoins into the Tori Ecosystem Vault on Upshift on Ethereum and hold the resulting trUSD position to accrue Cores.
2. Stake trUSD into strUSD on Ethereum to earn strategy yield plus Cores at the staking multiplier.
3. Hold trUSD in a supported DeFi integration listed on the Tori app's DeFi page to earn Cores at that venue's multiplier.
4. Bridge trUSD or strUSD to Monad, Arbitrum, Pharos or Solana via Chainlink CCIP and use them in DeFi there if the app shows a live multiplier.
5. Generate a referral link in the Tori app and share it, earning 10% of each referred user's Cores on top of their own.
6. Check the Rewards / Boosts tab on the Activities page weekly to confirm which venues currently pay Cores and at what multiplier.

**FDV comps:** Ethena (ENA) ~$1.9B FDV / ~$4.9B TVL ≈ 0.39x; Usual (USUAL) — same category, FDV/TVL unverified; Axis — same category, no token yet.

**Sources:**
- https://docs.tori.finance/resources/cores
- https://docs.tori.finance/faq/general
- https://docs.tori.finance/llms.txt

---

## 2. infiniFi (infinifi) — $71M TVL, Yield

**What it is:** infiniFi is a decentralised banking protocol that applies fractional-reserve mechanics on-chain to stablecoin yield: users deposit USDC (or other stablecoins) to mint iUSD, then hold iUSD (liquid base), stake it as siUSD (liquid yield), or lock it as liUSD (locked, first-loss, highest yield). Deposits are deployed across Aave, Pendle, Ethena and other DeFi strategies. Chains: Ethereum (main), Base, Monad (also Arbitrum/Katana per third-party trackers).

**Token status:** Token CONFIRMED but NOT YET LAUNCHED. **INFI** is the native token, total supply fixed at 100M, ecosystem allocation 45%. TGE is targeted for Q4 2026 (no exact date published). Registration for the Season 1 + Season 2 airdrop closed 10 Nov 2026 at 15:30 UTC and only registered wallets receive INFI at TGE; at least the first 500 INFI of an allocation becomes liquid on Day 1 (subject to size). INFI will power governance and revenue share via locked wINFI.

**Points / airdrop program:** **Season 3 points — YES, live now.** Season 3 runs in weekly Chapters: each Chapter splits a 336,000-point pool by deposit size and multipliers, 12,000 points locked in every 6 hours, Chapters close on Mondays. Reported Road-to-TGE multipliers: iUSD 15x, siUSD 7.5x, liUSD 7.5x, Pendle siUSD YT 20x, Pendle siUSD LP 12x, Morpho eco vault 7.5x. Referrals pay a 10% bonus on direct referrals' points. Unclaimed Season 1/2 INFI is added to Season 3 rewards as a bonus, with an extra bonus for YT holders.

**Farm steps:**
1. Deposit USDC on Ethereum at app.infinifi.xyz to mint iUSD and hold it to accrue Season 3 points at the iUSD multiplier.
2. Stake iUSD into siUSD for liquid yield and a higher points multiplier than plain iUSD.
3. Lock iUSD into liUSD for a chosen duration of 1–13 weeks for the highest yield tier and points.
4. Buy the iUSD yield token (YT) on Pendle to earn Season 3 points plus the extra INFI bonus funded by unclaimed Season 1/2 tokens.
5. Supply USDC to the infiniFi Morpho eco vault to earn points at the Morpho-route multiplier.
6. Share a referral link to earn a 10% bonus on the points direct referrals generate while they stay active.

**FDV comps:** Ethena (ENA) ~$1.9B FDV / ~$4.9B TVL ≈ 0.39x; Morpho (MORPHO) ~$1.8B FDV / ~$11B TVL ≈ 0.16x; Maple Finance (SYRUP) — same yield category, FDV/TVL unverified.

**Sources:**
- https://airdrops.io/infinifi/
- https://www.bitrue.com/blog/infinifi-airdrop-guide-update
- https://www.coingabbar.com/en/infinifi-token-launch-date-infi-airdrop-registration-end-nears
- https://www.droply.digital/project/infinifi
- https://tokentopnews.com/article/infinifi-review-2026/

---

## 3. Axis (axis) — $70M TVL, Basis Trading

**What it is:** Axis (axis.to) is a quantitative yield platform that brings institutional market-neutral trading strategies on-chain. Its first product is USDx, a dollar-linked synthetic asset, with sUSDx as the staked yield-bearing version; yield comes from delta-neutral funding and cross-venue arbitrage (target 10–20% APY, not guaranteed). Raised $5M in a round led by Galaxy Ventures (FalconX, OKX Ventures, CMT Digital, Maven 11). **WARNING: this is NOT Axis Robotics (AXIS), the Base-chain Physical AI token listed on Binance Alpha on 21 Oct 2026 — a different project with the same ticker.**

**Token status:** No live token verified. Multiple sources (Oct 2026) state "No Axis token is live" and "there is no live native AXIS governance token". A public token sale is reported as planned, but no date or conversion mechanism is published — treat as unverified. Coordinates are explicitly non-transferable and do not guarantee any allocation.

**Points / airdrop program:** **Coordinates — YES.** Season 1 began 4 Sep 2026 and runs 90 days. The Origin Vault pre-deposit (USDT/USDC/USDx on Ethereum, via Upshift) closed 5 Aug 2026 with $67,248,750 from 1,857 wallets; after a 30-day lock it converted to the Ecosystem Vault. Coordinates accrue on eligible USDx/sUSDx balances, scaled by venue multipliers (Origin Vault positions reported at 10x in the Ecosystem Vault phase; earlier reports cite 2x during pre-deposit — multiplier history differs by phase, check the live app). Referrals add 10% of the referred user's Coordinates (some guides cite a 13% invite-code boost — unverified, code-dependent).

**Farm steps:**
1. Deposit USDT, USDC or USDx into the Axis Ecosystem Vault on Ethereum via app.axis.to to hold an eligible position that accrues Coordinates.
2. Stake USDx into sUSDx on Ethereum to earn strategy yield while the balance accrues Coordinates.
3. Provide USDx liquidity on Curve to earn Coordinates at the Curve venue multiplier shown in the app.
4. Enter USDx or sUSDx markets on Pendle (PT for fixed yield or YT for leveraged exposure) to earn Coordinates at the Pendle multiplier.
5. Hold the ogUSDx Origin Vault position token if already deposited, letting yield accrue through its rising share price with no claiming needed.
6. Check balances and eligible venues at app.axis.to/coordinates and apply a referral code before depositing to add the permanent referral boost.

**FDV comps:** Ethena (ENA) ~$1.9B FDV / ~$4.9B TVL ≈ 0.39x; Tori Finance — same category, no token yet; Usual (USUAL) — same category, FDV/TVL unverified.

**Sources:**
- https://airdrops.io/axis/
- https://www.airdropsea.app/guides/axis-origin-vault-airdrop-guide
- https://www.upshift.finance/blog/axis-origin-vault
- https://ourcryptotalk.com/blog/crypto-yield-is-evolving-can-axis-deliver-institutional-returns

---

## 4. Armitage by Wintermute (armitage-by-wintermute) — $103M TVL, Risk Curators

**What it is:** Armitage is Wintermute's vault-curation arm, launched 19 May 2026, curating non-custodial yield vaults on Morpho Vault V2 (Ethereum). Curators set markets, collateral and risk parameters without taking custody; Armitage executes liquidations itself, letting it accept collateral other curators cannot. Live vaults include Wintermute USDC Prime, Wintermute USDT Prime, Wintermute USDC Select, Wintermute USDT Select, Pendle Ecosystem USDC, Pendle Ecosystem High Yield USDC, and Wintermute Confidential WBTC (via Zama). Morpho reported $145M+ in total deposits across Armitage vaults (Oct 2026).

**Token status:** No Armitage token found, and Wintermute itself has no token. No token launch has been announced. Nothing verified suggests a future token.

**Points / airdrop program:** No public points program found. Depositors earn lending yield (and, in the Pendle Ecosystem High Yield vault, PENDLE rewards — 8.31% net APY quoted Oct 2026, of which 1.76% was PENDLE rewards). Any "farm" here is yield-only, not points.

**Farm steps:**
1. Deposit USDC into the Wintermute USDC Select vault on Morpho on Ethereum for the higher-yield Select-tier exposure.
2. Deposit USDC into the Wintermute USDC Prime vault on Morpho on Ethereum for the conservative blue-chip-collateral tier.
3. Deposit USDT into the Wintermute USDT Select vault on Morpho on Ethereum for diversified stablecoin exposure.
4. Deposit USDC into the Pendle Ecosystem High Yield USDC vault on Morpho on Ethereum to lend against Pendle principal-token collateral markets.
5. Deposit USDC into the Pendle Ecosystem USDC vault on Morpho on Ethereum for lower-risk Pendle PT-market lending.
6. Deposit confidential WBTC through the Zama app into the Wintermute Confidential WBTC vault to earn yield on WBTC with an encrypted position.

**FDV comps:** Morpho (MORPHO) ~$1.8B FDV / ~$11B TVL ≈ 0.16x; Steakhouse Financial — top curator, no token; Gauntlet — top curator, no token.

**Sources:**
- https://armitage.wintermute.com/docs/llms-full.txt
- https://morpho.org/stories/armitage
- https://www.wintermute.com/insights/news/wintermute-launches-armitage-bringing-its-defi-and-trading-expertise-to-vault-curation
- https://app.morpho.org/curator/armitage
- https://cryptobriefing.com/pendle-high-yield-usdc-vault-morpho/

---

## 5. Reti Pooling (reti-pooling) — $65M TVL, Staking Pool, Algorand

**What it is:** Réti Open Pooling is Algorand's open, non-custodial staking-pool protocol (built by TxnLab/Nodely for the Algorand Foundation). Anyone can run a validator pool or delegate ALGO into one; pooled stake collectively meets Algorand's 30,000 ALGO solo-staking threshold, and consensus rewards flow back to delegators pro-rata minus the validator's commission. No lockup: ALGO is never locked or removed from the delegator's control at the base layer. Pools can start from as little as ~10 ALGO.

**Token status:** No RETI token exists or has been announced — by design the protocol pays rewards in ALGO only. Some individual validator pools distribute their own extra reward tokens (e.g. Steak Pool validator #13 distributes STEAK, a third-party ASA, to its delegators); those are validator-level tokens, not a Reti token. No points program exists for the protocol itself.

**Points / airdrop program:** No public points program found.

**Farm steps:**
1. Open the Réti staking dashboard at reti.nodely.io and compare validator pools by commission rate, minimum entry and total stake.
2. Stake ALGO into a chosen validator pool on Algorand, entering at least that pool's minimum entry amount.
3. Leave the stake in place across epochs so consensus rewards compound automatically through the pool contract.
4. Check the pool's epoch payout schedule and confirm rewards are landing pro-rata to the staked balance.
5. Consider a validator pool that pays an additional reward token on top of ALGO if its on-chain reward rate is published and verifiable.
6. Re-check the chosen validator's uptime and commission each month and move the stake if the validator stops performing.

**FDV comps:** Lido (LDO) and Rocket Pool (RPL) — liquid-staking comps in the same staking category, FDV/TVL unverified; Folks Finance (xALGO) — Algorand liquid staking, FDV/TVL unverified.

**Sources:**
- https://txnlab.gitbook.io/reti-open-pooling/~gitbook/pdf?limit=100
- https://algorand.pxke.me/news/articles/txnlab-ships-production-grade-tooling-for-algorand-identity-and-defi
- https://www.algorandnews.ai/posts/algorand-participation-rewards-vs-traditional-staking
- https://www.algostakepool.com/whitepaper (third-party validator STEAK example)

---

## 6. Gami Labs (gami-labs) — $63M TVL, Risk Curators

**What it is:** Gami Labs (Gami Investment Labs S.A., Luxembourg) is an institutional on-chain asset manager and vault curator running 14+ public vaults with $55M+ TVL. Its flagship is the gamiUSDC vault (Lagoon/Morpho, Ethereum), plus earnUSDC and earnXLM on Stellar (via Upshift, co-curated with Stake Capital Group) and the FXRP MetaVault on Flare (via Spectra). Strategies allocate across Aave, Morpho, Curve, Pendle and Spectra; custody via Fordefi MPC with Hypernative monitoring.

**Token status:** No token verified. A June 2026 third-party guide states "GamiLabs currently has no token" and that no airdrop has been formally announced; no official token announcement was found. Treat any future token as speculative.

**Points / airdrop program:** No public points program of its own found. Depositors can pick up third-party incentives routed through Gami-curated vaults: e.g. the Turtle Huma PST vault (powered by Midas, curated by Gami Labs) pays Shells points (reported 100 Shells per $1,000 per day), and Flare FXRP vaults stack rFLR emissions from Flare's FAssets incentive program. These are partner programs, not Gami's.

**Farm steps:**
1. Deposit USDC into the gamiUSDC vault on Lagoon on Ethereum to hold the actively managed stablecoin vault position.
2. Deposit USDC into the earnUSDC vault on Stellar via Upshift to earn yield curated by Gami Labs and Stake Capital Group.
3. Deposit XLM into the earnXLM vault on Stellar via Upshift for the Stellar-native yield strategy.
4. Deposit FXRP into the Gami Labs FXRP MetaVault on Flare via Spectra to earn yield plus rFLR incentive emissions.
5. Deposit USDC into the Turtle Huma PST vault on Ethereum, curated by Gami Labs, to earn yield plus Turtle Shells points.
6. Hold the vault share tokens and review the curator's allocation and performance reports each week before deciding to stay or exit.

**FDV comps:** Morpho (MORPHO) ~$1.8B FDV / ~$11B TVL ≈ 0.16x; Steakhouse Financial — top curator, no token; Re7 Labs — top curator, no token.

**Sources:**
- https://web.fordefi.com/customer-stories/how-gami-labs-curates-institutional-vaults-with-fordefis-policy-engine
- https://app.lagoon.finance/vault/1/0xdae854d0896ad2fee335689a3f7b4a95fd1a3e46
- https://gamilabs.medium.com/gamilabs-vault-airdrop-how-to-position-yourself-for-maximum-allocation-cc99416a57af
- https://www.w3match.com/blog/turtle-yield-guide-stablecoins-eth-btc
- https://harvest.finance/report/xrp-yield-ranking

---

## 7. Yuzu Money (yuzu-money) — $57M TVL, Yield

**What it is:** Yuzu Money is a structured-yield protocol built around yzUSD, an overcollateralised senior-tranche stablecoin targeting $1, with syzUSD as the staked yield-bearing version (ERC-4626) and yzPP as the junior first-loss Protection Pool tranche that earns a premium for absorbing losses first. Backing strategies include tokenised T-bills, AAA CLOs, overcollateralised institutional lending, funding-rate arbitrage and stablecoin spreads, with reserves verifiable via Accountable proofs. Main chain is Plasma, with deployments on Ethereum and Monad; Yuzu Prime and Yuzu Marketplace add curated vault strategies. Note: primary mint/redeem of yzUSD and yzPrime is restricted to eligible/accredited/institutional investors after KYC screening — retail users access yzUSD on secondary markets.

**Token status:** Token PLANNED but NOT LAUNCHED. **$YUZU** is described as the native utility and governance token; the team has confirmed in multiple posts that Yuzu Juice points will convert linearly into tokens at TGE. No TGE date, tokenomics breakdown or allocation percentages have been published.

**Points / airdrop program:** **Yuzu Juice — YES.** Launched 30 Oct 2025 with retroactive points from day one. Earned by holding yzUSD, syzUSD or yzPP, providing liquidity on Curve, Balancer or Pendle LPs and YTs (reported multipliers 2x–10x, changing over time), and referrals paying a 5% Juice boost to both sides. syzUSD loops on Echelon (Aptos) also earn Yuzu points.

**Farm steps:**
1. Buy yzUSD on a secondary market on Plasma and hold it to accrue Yuzu Juice points.
2. Stake yzUSD into syzUSD on Plasma to earn weekly yield plus Juice at the staking multiplier.
3. Deposit into the yzPP junior tranche vault on Plasma to take first-loss risk in exchange for a higher yield premium and Juice.
4. Provide yzUSD or syzUSD liquidity in a Curve, Balancer or Pendle pool on Plasma or Ethereum to earn Juice at the pool's boosted multiplier.
5. Supply syzUSD as collateral on Echelon on Aptos and borrow USDC or USD1 to loop the position for leveraged yield plus Yuzu points.
6. Share a referral link so both sides earn a 5% Juice boost on everything generated.

**FDV comps:** Ethena (ENA) ~$1.9B FDV / ~$4.9B TVL ≈ 0.39x; Usual (USUAL) — same stablecoin-yield category, FDV/TVL unverified; Ondo (ONDO) — tokenised-yield comp, FDV/TVL unverified.

**Sources:**
- https://www.drops.bot/airdrops/upcoming/yuzu
- https://app.yuzu.money/docs
- https://dev.yuzu.money/alpha
- https://cryptorank.io/price/yuzu-money
- https://web3-ethereum-defi.tradingstrategy.ai/vaults/yuzu_money/

---

## 8. Mezo Earn (mezo-earn) — $54M TVL, Governance Incentives

**What it is:** Mezo Earn is the yield/governance mechanism of Mezo, the Bitcoin economic layer built by Thesis. Users lock BTC (native BTC, tBTC or wBTC) to receive veBTC voting power and earn BTC-denominated yield from protocol fees and emissions, lock MEZO for veMEZO to boost veBTC yield up to 5x, and borrow MUSD (Mezo's Bitcoin-backed stablecoin) against BTC at a fixed rate. Pre-TGE, deposits earned HODL Score points (1 BTC locked per day = 1,000 points; lock multipliers 3x/10x/16x for 2/6/9-month locks).

**Token status:** Token ALREADY LAUNCHED — the pre-TGE window is closed. **MEZO** is live and trading (Coinbase; CoinGecko page). Price ~$0.0029–0.0038, market cap ~$1.5–1.9M, FDV ~$2.9–3.8M on 1B max supply (500M circulating per CoinGecko), all-time high $0.1485 in Apr 2026 — down ~98% from ATH. Anchorage Digital is a day-one launch partner for custody of MEZO. This is a post-launch yield play, not a token-launch farm.

**Points / airdrop program:** HODL Score / HODL points were the pre-TGE program. Whether any points program still runs post-TGE is **unverified** — no current program was confirmed in the sources checked. The live mechanics are veBTC/veMEZO locking and MUSD borrowing, not points.

**Farm steps:**
1. Lock BTC, tBTC or wBTC on Mezo to mint a veBTC position and earn BTC-denominated yield from protocol fees.
2. Buy MEZO on an exchange and lock it for veMEZO to boost the veBTC yield by up to 5x.
3. Vote with veBTC power through Mezo gauges to direct emissions toward the pools that pay the best rewards.
4. Borrow MUSD against locked BTC at the fixed rate to unlock liquidity without selling the underlying Bitcoin.
5. Hold the veBTC position through full epochs so fee distributions accrue instead of exiting mid-epoch.
6. [UNVERIFIED] Check the Mezo app for any live HODL points campaign before depositing; if none is shown, treat the position as yield-only and skip any points expectation.

**FDV comps:** MEZO itself — FDV ~$3M / TVL ~$54M ≈ 0.06x (cautionary: ~98% below ATH); Babylon (BABY) — Bitcoin staking comp, FDV/TVL unverified; Lombard (BARD) — BTCFi comp, FDV/TVL unverified.

**Sources:**
- http://coingecko.com/en/coins/mezo
- https://thesis.co/blog/launching-mezo
- https://www.anchoragegroups.com/insights/anchorage-digital-becomes-day-one-launch-partner-for-mezos-token-generation-event/
- https://www.gate.com/learn/articles/understanding-mezo-pantera-and-multicoin-participate-in-investment-to-build-bitcoin-l2-economic-layer/2619
- https://www.mexc.co/en-PH/price/MEZO

---

## 9. Tulipa Capital (tulipa-capital) — $52M TVL, Risk Curators

**What it is:** Tulipa Capital is a boutique DeFi risk curator, active in DeFi since 2019 (started 2020 as a prop fund running delta-neutral strategies) and curating public vaults since summer 2024. It runs actively managed vaults across Lagoon, Morpho, Euler and Upshift — e.g. Tulipa USDC on Lagoon (target ~14% net APY via DeFi yield, tokenised RWAs and private deals; 1% management, 10% performance fee) and Tulipa ETH+ (delta-neutral strategies over ETH liquid-staking/restaking assets), plus Turtle vaults on Avalanche. It also curates vaults for Syntetika.

**Token status:** No Tulipa token found and none announced. The firm operates as a professional asset manager; its vaults issue vault share tokens (e.g. tulipaUSDC), not a governance token.

**Points / airdrop program:** No public points program found.

**Farm steps:**
1. Deposit USDC into the Tulipa USDC vault on Lagoon on Ethereum to hold the actively managed stablecoin vault position.
2. Deposit ETHplus into the Tulipa ETH+ vault on Lagoon on Ethereum for delta-neutral ETH yield over liquid-staking assets.
3. Deposit USDC into a Tulipa-curated Turtle vault on Avalanche to earn yield from the curator's Avalanche allocation.
4. Deposit into the Syntetika Enigma ONE strategy on Ethereum, curated by Tulipa Capital, to hold the oneUSD fund position.
5. Hold the vault share tokens and monitor the curator's published allocation updates and performance reports.
6. Compare the vault's net APY after its 1% management and 10% performance fees against other curators each month before adding funds.

**FDV comps:** Morpho (MORPHO) ~$1.8B FDV / ~$11B TVL ≈ 0.16x; Steakhouse Financial — top curator, no token; Re7 Labs — top curator, no token.

**Sources:**
- https://www.tulipa.capital/
- https://app.lagoon.finance/vault/1/0xce0b790ae0d8cf91e01f3fb69025e14569b574f3
- https://app.lagoon.finance/vault/1/0x9b1c616f5d2d8efb451b2823a58e789dc370705f
- https://syntetika.io/blog/enigma-one-a-market-neutral-strategy-is-now-live-on-syntetika
- https://github.com/ricosworks1/blockchain-payment-flow-analysis/blob/HEAD/case_studies/protocols/vaults_comprehensive.md

---

## 10. Firelight (firelight) — $51M TVL, Insurance, Flare

**What it is:** Firelight is an XRP staking and on-chain cover protocol on Flare, incubated by Sentora. Users bridge XRP via Flare's FAssets system to FXRP, deposit FXRP into the Firelight vault and receive stXRP 1:1 — a liquid receipt usable across Flare DeFi. In Phase 2 (cover live since 6 Oct 2026), staked FXRP backs on-chain cover sold to DeFi protocols: cover fees and emissions pay stakers, and stakers can be slashed if a covered protocol suffers an approved claim (a First-Loss Buffer absorbs the first part). First cover protects Sentora's USD Protected Vault and Protected RWA Vaults; aggregate deposit cap is $115M in XRP.

**Token status:** No Firelight governance token found. stXRP is a liquid receipt token, not a governance token; FLR (Flare) and XRP are separate assets. No token launch has been announced.

**Points / airdrop program:** **Firelight Points — YES.** Phase 1 depositors earned Firelight Points as a loyalty program for early participation. Per the Oct 2026 launch announcement, the first protocol emissions will be distributed to early contributors in proportion to the Firelight Points earned during development, growth and launch, with eligibility and claim details to be published through official channels. Final tokenomics/conversion mechanics for points have not been disclosed.

**Farm steps:**
1. Bridge XRP to Flare via the FAssets system to mint FXRP at 1:1.
2. Deposit FXRP into the Firelight vault on Flare to receive stXRP and accrue Firelight Points and Phase 2 emissions.
3. Hold stXRP in the wallet so the position keeps earning cover-fee emissions distributed in FXRP.
4. Deploy stXRP into Flare DeFi, such as the Gami Labs FXRP MetaVault on Spectra, to stack additional yield on top of the Firelight position.
5. Keep the stake in place through cover periods, noting the 30-day unstaking window in Phase 2 and the slashing risk if a covered vault is hacked.
6. Watch Firelight's official channels for the eligibility and claim details of the first emissions distribution tied to Firelight Points.

**FDV comps:** Nexus Mutual (NXM) — on-chain cover comp, FDV/TVL unverified; InsurAce — cover comp, FDV/TVL unverified; Morpho (MORPHO) ~$1.8B FDV / ~$11B TVL ≈ 0.16x (vault-infrastructure comp).

**Sources:**
- https://www.tradingview.com/news/chainwire:ca766ea70094b:0-firelight-is-live-backed-by-staked-fxrp-on-flare/
- https://bsc.news/post/firelight-50m-xrp-staked-defi-protection
- https://bitcoinethereumnews.com/tech/xrp-staking-on-flare-firelight-launches-stxrp-for-defi-cover/
- https://freecryptolist.com/flare-network-xrpfi-fassets-2026/
- https://harvest.finance/report/xrp-yield-ranking

---

## Batch notes / caveats

- **Axis vs Axis Robotics:** same ticker, different projects. Radar entries must use axis.to / USDx, never the Base-chain AXIS token.
- **Mezo Earn is post-launch:** MEZO already trades (~98% below ATH). It is not a pre-TGE farm; include only as a yield/valuation comp, not a launch candidate.
- **Curators are not protocols with tokens:** Armitage, Gami Labs and Tulipa Capital are asset managers/curators — their "token launch" thesis is speculative by nature; the farmable value is vault yield plus (for Armitage/Gami) partner incentives, not a native token.
- **Reti Pooling has no token by design:** rewards are ALGO; any token angle is validator-level (e.g. STEAK), not protocol-level.
- **Strongest points programs in this batch:** infiniFi Season 3 (confirmed INFI, TGE targeted Q4 2026), Yuzu Juice (confirmed linear $YUZU conversion, no date), Tori Cores (live, conversion undecided), Axis Coordinates (live, conversion unconfirmed), Firelight Points (emissions tied to points, mechanics undisclosed).
