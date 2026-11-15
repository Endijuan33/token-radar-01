# Token Radar — Research Batch E

Researched 2026-11-15 (WIB) via web search + page fetches (official docs/sites, DefiLlama, reputable secondary sources).
Rule applied: only verified facts are stated; anything not verified is labelled **unverified**.
TVL, chains, category and listed_at figures are the snapshot figures supplied by the parent agent (snapshot as of 2026-11-14), not re-verified here.
Capital sizing rule: TVL >= $1B -> $150, >= $100M -> $100, else $50. All protocols in this batch are under $100M except Saturn ($154M), so steps use $50, except Saturn at $100.
Each protocol has exactly 3 farm steps in the form `- text: <action> | cost: ... | time: ...`; every step line is 85 characters or fewer.

---

## 41. UltraYield Curator (`ultrayield-curator`)

**What it is:** A Morpho risk curator created by crypto hedge fund Edge Capital, running actively managed lending vaults (market-neutral strategies) on Ethereum, Hyperliquid L1, Etherlink, Base, Monad and more. Snapshot TVL $40.36M, first chain Ethereum, category Risk Curators, listed 2025-10-24.

**Token status:** No token verified. No UltraYield token, ticker, or TGE appears in any source found; DefiLlama lists no token for the protocol.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program under the UltraYield name was found on its own pages or in any tracker. Its vaults pay borrower interest only. (Adjacent exposure: UltraYield also curates the Hyperbeat Ultra HYPE vault, hbHYPE, whose depositors earn Hyperbeat Hearts points — that is Hyperbeat's program, not UltraYield's.)

**Farm steps:**
- text: Deposit USDC in UltraYield USDC V1 on Morpho | cost: $50, $2 gas | time: 15m
- text: Deposit USDT in UltraYield USDT Core | cost: $50+$2 gas | time: 15m
- text: Hold receipt tokens; watch UltraYield X | cost: $0 | time: 5m

**Sources:**
- https://app.morpho.org/curator/ultrayield
- https://defillama.com/protocol/ultrayield-curator

**Confidence: medium** (vault lineup verified on the official Morpho curator page; no-token/no-points is absence-of-evidence).

---

## 42. Makina (`makina`)

**What it is:** A non-custodial, cross-chain DeFi execution platform for professionally managed tokenized strategies. Users deposit a single asset into a strategy vault called a Machine and receive a fungible machine token; professional Operators deploy the capital across lending, LP and yield venues via MakinaVM, with cross-chain movement over Chainlink CCIP. Snapshot TVL $38.71M, first chain Ethereum, category Onchain Capital Allocator, listed 2025-11-05. Launch strategies were DUSD, DETH and DBIT, operated by Dialectic.

**Token status:** Token NOT yet trading — **MAK**, ERC-20 governance/utility token on Ethereum, 1B total supply. A Legion public sale ran 25 Nov–2 Dec 2025 (17,333,333 MAK at $0.075); purchased tokens become claimable at TGE. No TGE date has been announced.

**Points / airdrop program:** Yes — **Makina Points**. Pre-Launch Machines point-farming campaign launched 29 Sep 2025; Season 0 rewarded early depositors, Season 1 began 27 Oct 2025. 25M MAK (2.5% of supply) is allocated to the points campaign; points accrue for deposits and holding Machine Tokens, with 5x multipliers reported for Pendle/Equilibria/Penpie activity. Caution: on 20 Jan 2026 a flash-loan exploit drained the DUSD/USDC Curve pool of ~1,299 ETH (~$4.1M) via unvalidated oracle data — check the current status of the affected Machine before depositing.

**Farm steps:**
- text: Deposit USDC in Makina DUSD Machine | cost: $50+$2 gas | time: 15m
- text: Deposit ETH in Makina DETH Machine | cost: $50+$2 gas | time: 15m
- text: Hold Machine tokens; check Makina points page | cost: $0, $0 gas | time: 5m

**Sources:**
- https://docs.makina.finance/concepts/architecture/machine/overview
- https://dropstab.com/coins/makina

**Confidence: medium-high** (points campaign and MAK sale verified across trackers; exploit is a single-tracker report, treat as caution not certainty).

---

## 43. XRPL DEX (`xrpl-dex`)

**What it is:** The native decentralized exchange of the XRP Ledger — a built-in order-book DEX live since 2012, plus a protocol-level AMM (XLS-30) live on mainnet since 22 March 2024. There is no exchange contract: trades settle at protocol level, AMM pools charge 0–1% fees set by LP vote, and LP tokens are issued by the AMM. Snapshot TVL $27.71M, chain Ripple, category Dexs, listed 2024-07-25.

**Token status:** **ALREADY LAUNCHED — XRP** (trading since 2012; the ledger's native asset). There is no XRPL-DEX protocol token and no points program. (Note: an unrelated third-party site, xrpl-dex.pro, advertises an "XDX" token TGE — its provenance is unverified and it is not the ledger's native DEX; do not rely on it.)

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program exists for the native DEX; LPs earn trading fees only.

**Farm steps:**
- text: Deposit XRP+RLUSD in XRP/RLUSD AMM on XRPL | cost: $50, <$1 | time: 10m
- text: Swap XRP for RLUSD via XRPL DEX order book | cost: $50, <$1 gas | time: 10m
- text: Hold AMM LP tokens; vote on pool fee | cost: $0, <$1 | time: 5m

**Sources:**
- https://chainstack.com/what-is-xrp-ledger/
- https://xrpl.to/insights/solana-vs-xrpl

**Confidence: high** (native DEX + AMM mechanics verified against XRPL docs and secondary sources).

---

## 44. Felix Vaults (`felix-vaults`)

**What it is:** The Morpho vault arm of Felix Protocol, a licensed Liquity V2 CDP fork on HyperEVM that mints the feUSD stablecoin against HYPE, kHYPE, ETH and BTC collateral. Felix Vaults give single-click exposure to Felix lending yields; V1 vaults (USDC Frontier, USDC, USDT0, HYPE, USDe) and V2 vaults (USDC V2, USDT0 V2, HYPE V2, USDe V2) run on Morpho on HyperEVM. Snapshot TVL $31.91M, first chain Hyperliquid L1, category Onchain Capital Allocator, listed 2025-05-28.

**Token status:** No token verified. No Felix token, ticker, or TGE has been announced; a third-party tracker notes the "$FELIX ticker was bought in October 2024" but no launch followed. feUSD is the live stablecoin, not a governance token.

**Points / airdrop program:** Yes — **Felix Points**. Season 1 ran from April 2025, Season 2 started January 2026 and is still accruing. Points are earned by minting feUSD, supplying feUSD to a Stability Pool, depositing HYPE, and providing LP on integrated HyperEVM DEXs. Felix is also tied to Hyperliquid's Season 2 points.

**Farm steps:**
- text: Deposit USDC in Felix USDC V2 vault | cost: $50, <$1 | time: 15m
- text: Deposit feUSD in Felix WHYPE stability pool | cost: $50, <$1 gas | time: 15m
- text: Hold positions; check Felix points dashboard | cost: $0, $0 gas | time: 5m

**Sources:**
- https://10k.nyxshcon.org/risk/felix
- https://medium.com/@ennzjcdt/felix-rewards-with-feusd-on-hyperevm-6f7d61f9cfdb

**Confidence: medium-high** (points seasons verified across trackers; vault names verified on-chain via the risk report).

---

## 45. Aegis YUSD (`aegis-yusd`)

**What it is:** A Bitcoin-backed, yield-bearing stablecoin protocol. Users deposit USDT/USDC/DAI into the Aegis Mint contract; collateral is converted to BTC and deployed into delta-neutral BTC perpetual positions, and funding-rate income is distributed to holders. Products: YUSD (BTC-backed dollar), jUSD (JLP-backed dollar), sYUSD (staked, auto-compounding YUSD) and sjUSD. Snapshot TVL $34.47M, first chain Ethereum, category Basis Trading, listed 2025-04-10. Over $1.9M in yield has been distributed to YUSD/sYUSD holders since April 2025.

**Token status:** Token NOT yet launched — **AEG**, the planned governance token. YUSD itself is a live $1-pegged stablecoin, not the farm token.

**Points / airdrop program:** Yes — **Aegis Points**, Season 1. Hold YUSD: 15 points per $1 per day; provide liquidity: 30 points per $1 per day (2x); borrow through Euler: 45 points per $1 per day (3x); social tasks: 50 points each. Season 1 earnings carry a 50% bonus, and 0.2% of total AEG supply is distributed weekly by points share.

**Farm steps:**
- text: Mint YUSD with USDC via Aegis Mint | cost: $50+$2 gas | time: 15m
- text: Stake YUSD into sYUSD, auto-compound | cost: $50+$2 gas | time: 15m
- text: Hold sYUSD; check Aegis Points weekly | cost: $0 | time: 5m

**Sources:**
- https://www.mexc.com/en-TH/news/26
- https://defillama.com/protocol/aegis?tvl=false&events=false&fees=true

**Confidence: medium-high** (points rates and AEG weekly distribution come from secondary coverage, not the official docs — re-check on aegis.im before farming).

---

## 46. vfat.io (`vfat.io`)

**What it is:** A multi-chain yield aggregator, portfolio tracker and swap/bridge tool across 37 chains (first chain Base): it finds yield opportunities, moves liquidity between pools, automates positions, tracks multi-wallet DeFi portfolios, and routes swaps/bridges through DEX aggregators. Snapshot TVL $28.07M, first chain Base, category Yield Aggregator, listed 2024-05-14.

**Token status:** No token verified. No vfat token, ticker, or TGE exists in any source found.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program was found; the site's only live incentive is a referral program. vfat.io is a tool for farming other protocols' yields, not a farmable protocol itself — any token thesis here is purely speculative.

**Farm steps:**
- text: Swap USDC for ETH via vfat router on Base | cost: $50, <$1 gas | time: 10m
- text: Deposit USDC in a listed yield vault via vfat | cost: $50, <$1 | time: 15m
- text: Track the position in vfat portfolio tracker | cost: $0, $0 gas | time: 5m

**Sources:**
- https://vfat.io/
- https://cryptoclaritycollective.com/best-defi-dex-aggregators-2026-how-to-get-the-best-swap-rates-safely/

**Confidence: high** (no-token/no-points confirmed by reading the live homepage; it presents itself as an aggregator/tracker only).

---

## 47. Reti Pooling (`reti-pooling`)

**What it is:** Réti Open Pooling (built by TxnLab/Nodely) — the open, smart-contract staking-pool protocol on Algorand. Anyone can create or join a pool: depositors stake any amount of ALGO to a validator, the pool aggregates stake to meet Algorand's 30,000 ALGO solo-staking threshold, and consensus rewards are distributed proportionally minus a validator commission. Mainnet app id 2714516089. Snapshot TVL $65.25M, chain Algorand, category Staking Pool, listed 2025-01-24.

**Token status:** **ALREADY LAUNCHED — ALGO** (the reward asset, trading since 2019). There is no Reti token.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No Reti points program was found; rewards are ALGO consensus rewards only (some individual validators add their own token bonuses, e.g. SIGN — validator-specific, not a Reti program).

**Farm steps:**
- text: Stake ALGO with a Réti validator on Algorand | cost: $50, <$1 gas | time: 10m
- text: Stake ALGO with a second Réti validator | cost: $50, <$1 gas | time: 10m
- text: Hold stake; claim ALGO rewards in dashboard | cost: $0, <$1 | time: 5m

**Sources:**
- https://algorand.co/governance-to-staking-rewards
- https://www.algorandnews.ai/posts/algorand-participation-rewards-vs-traditional-staking

**Confidence: high** (pooling mechanics verified in the official Réti docs via the Algorand Foundation page; no-token status is absence-of-evidence plus the protocol's design).

---

## 48. Plasma Saving Vaults (`plasma-saving-vaults`)

**What it is:** The Plasma chain's flagship savings vault. At launch in September 2025 it took $1.3B in the first hour and $2.7B within a day at ~20% headline APY (underlying yield + looping + XPL incentives); a year later it holds ~$32M and token incentives have run to zero, leaving fee-based yield of roughly 3.8%. Snapshot TVL $31.74M, chain Plasma, category Onchain Capital Allocator, listed 2025-09-26.

**Token status:** **ALREADY LAUNCHED — XPL** (Plasma's native token; public sale June 2025 at $500M FDV via Sonar, mainnet live late 2025). The pre-TGE "Units" program that rewarded vault deposits with XPL allocation ended with the sale. The vault is now a plain yield product, not a launch farm.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No live points program for the vault was found. Separately, Plasma One (the stablecoin neobank) runs a cashback/referral program and a Locked XPL Vault: locking XPL for 12 months unlocks card tiers.

**Farm steps:**
- text: Deposit USDT0 in Plasma Saving Vault | cost: $50, <$1 | time: 15m
- text: Lend USDT0 on Aave V3 on Plasma | cost: $50, <$1 | time: 15m
- text: Hold vault shares; check plasma.org rewards | cost: $0 | time: 5m

**Sources:**
- https://www.goat0fcrypto.com/plasma-vault
- https://www.plasma.org/plasma-one-rewards

**Confidence: medium-high** (launch figures and incentive expiry verified in the vault analysis; the "incentives at zero" claim is one analyst's DefiLlama read — re-check before depositing).

---

## 49. Project 0 (`project-0`)

**What it is:** Solana's DeFi prime broker — the September 2025 relaunch of marginfi, keeping marginfi's lending program (shared pool per asset, called a bank) and building a wider app on top that links Kamino, Jupiter Lend and Drift, so users can borrow against their whole portfolio in one place. Yield vaults with Gamma launched August 2026. Snapshot TVL $48.87M, chain Solana, category Lending, listed 2025-12-24.

**Token status:** No token verified. No Project 0 token, ticker, or TGE date has been announced as of November 2026; any coin claiming to be the marginfi/Project 0 token is fake unless the team announces it. A January 2026 roadmap post says a token comes after most Solana lending TVL is integrated and before scaling into derivatives.

**Points / airdrop program:** Yes — **Project 0 Points**, live. marginfi points converted 1:1 at the relaunch, but they only activate with a live deposit on the Project 0 app. Points are earned by lending, borrowing, staking SOL for its LST, and referrals; the governance proposal outlines ~20% of token supply for the community. Exact per-dollar points rates are not published in the docs.

**Farm steps:**
- text: Lend USDC on Project 0 on Solana | cost: $50, <$1 gas | time: 10m
- text: Borrow USDC against SOL on Project 0 | cost: $50, <$1 gas | time: 10m
- text: Hold deposit live; check points on Portfolio | cost: $0 | time: 5m

**Sources:**
- https://solanacompass.com/projects/marginfi
- https://solanaguides.com/marginfi-airdrop-guide

**Confidence: high** (points carry-over and live status corroborated by two independent guides; no-token status confirmed against the official blog/docs as of Nov 2026).

---

## 50. Manta CeDeFi (`manta-cedefi`)

**What it is:** Manta Network's CeDeFi product (launched 19 May 2024): deposit BTC, ETH, STONE, USDT, USDC or wUSDM on Ethereum, BNB Chain or Manta Pacific; assets are held by Ceffu (ex-Binance Custody) via MirrorX and earn institutional CeFi income plus funding-rate arbitrage, while depositors receive Liquid Custody Tokens redeemable for mBTC / mETH / mUSD. Snapshot TVL $26.53M, chain Manta, category Basis Trading, listed 2024-05-23.

**Token status:** **ALREADY LAUNCHED — MANTA** (Manta Network's native token, trading since January 2024).

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** The CeDeFi points campaign was a limited 2-month program (19 May–27 Jul 2024) paying MANTA to deposits under $500M TVL; it ended in July 2024 and no live points program was found. mTokens can still be restaked into partner programs (e.g. Mind Network vFHE, per 2024 coverage — verify current status before relying on it).

**Farm steps:**
- text: Deposit USDT in Manta CeDeFi for mUSD | cost: $50, <$1 | time: 15m
- text: Deposit ETH in Manta CeDeFi for mETH | cost: $50, <$1 | time: 15m
- text: Hold mTokens; check CeDeFi dashboard for yields | cost: $0, $0 gas | time: 5m

**Sources:**
- https://mantanetwork.medium.com/manta-cedefi-boosting-yield-and-security-4728b723be69
- https://www.chaincatcher.com/en/tags/cedefi

**Confidence: high** (points end date 27 Jul 2024 stated in Manta's own Medium post; MANTA launched status is well established).

---

## 51. Current (`current`)

**What it is:** The fastest-growing lender on Sui in 2026 — built entirely on isolated markets with E-Mode, plus Multiply and Margin products that use flash loans to build looped/leveraged positions from the same pools. Its borrowed total ($76.1M) exceeds its TVL ($55.5M, 31 Oct 2026) because so much supply is looped. Largest assets are USDC and svBTC; collateral is priced with Pyth (EMA as the anchor). Audits listed: Asymptotic, MoveBit, Sherlock contest. Snapshot TVL $49.63M, chain Sui, category Lending, listed 2026-03-31.

**Token status:** No token verified. No Current token, ticker, or TGE was found in any source.

**Points / airdrop program:** Yes — **Current Points**, live as of 31 Oct 2026. Incentives currently run through a points program (exact rates not published in the sources found).

**Farm steps:**
- text: Supply USDC to Current on Sui | cost: $50, <$1 gas | time: 10m
- text: Loop SUI with Current Multiply on Sui | cost: $50, <$1 gas | time: 15m
- text: Hold position; check Current points page | cost: $0, $0 gas | time: 5m

**Sources:**
- https://www.jewelswap.io/blog/sui-lending-protocols-compared

**Confidence: medium** (points program and product mechanics come from a single independent comparison dated 31 Oct 2026 — verify on Current's own site/app before farming).

---

## 52. Saturn (`saturn`)

**⚠️ REGISTRATION DEADLINE — STILL OPEN, CLOSES 16 NOV 2026 09:00 EST (14:00 UTC / 21:00 WIB).** Checked 15 Nov 2026 ~12:17 WIB: the official registration page at claim.saturn.credit is live and accepting registrations (message signature only, no on-chain transaction, no gas). About 32h45m remain from the time of this research. Registration is for Season 1 and Season 2 participants only, opened 9 Nov 2026; it confirms eligibility and a receiving address — it is NOT a token claim, and it does not guarantee an allocation. Each Discord account (≥5 days old, verified email) can register one wallet, using the wallet that earned the points. US, UK, EU, EEA residents and OFAC-listed addresses are ineligible.

**What it is:** Saturn Credit — an on-chain Bitcoin-credit / structured-finance protocol built on Strategy's STRC platform, issuing USDat (a licensed, T-bill-backed stablecoin pegged 1:1) and sUSDat (an interest-bearing ERC-4626 vault accruing STRC yield). Snapshot TVL $154.31M, first chain Ethereum, category Stablecoin Wrapper, listed 2026-04-09.

**Token status:** Token NOT yet launched — **STRN**, TGE targeted Q4 2026 (no exact date announced). Up to 5% of total STRN supply is set aside for Season 2 participants, split by Orbital Points at a snapshot taken at TGE or on 8 Dec 2026, whichever comes first. Tokenomics and claim mechanics have not been announced.

**Points / airdrop program:** Yes — **Saturn Points**. Season 1 (Gravity Points) wrapped, Season 2 (Orbital Points) began in August 2026 and is still running; points keep accruing after registration closes, until the snapshot.

**Farm steps:**
- text: Register at claim.saturn.credit | cost: $0, sig only | time: 10m
- text: Deposit USDat into sUSDat vault on Ethereum | cost: $100, $2 gas | time: 15m
- text: Hold sUSDat; watch @saturn_credit X for TGE | cost: $0 | time: 5m

**Sources:**
- https://claim.saturn.credit/
- https://airdrops.io/saturn-credit/

**Confidence: high** (deadline and registration mechanics verified on the live official page plus two trackers; TGE date itself is still unannounced).

---

## Cross-cutting notes for the radar

- **Already-launched tokens (not launch candidates):** XRPL DEX (XRP, 2012), Reti Pooling (ALGO, 2019 — the reward asset), Plasma Saving Vaults (XPL, 2025), Manta CeDeFi (MANTA, Jan 2024). Their radar value is yield/points-adjacent, not a new TGE.
- **Confirmed live points programs:** Makina Points (Season 1 from Oct 2025), Felix Points (Season 2 from Jan 2026), Aegis Points (Season 1), Project 0 Points (live, marginfi 1:1 carry-over), Current Points (live Oct 2026), Saturn Points (Season 2, snapshot at TGE or 8 Dec 2026).
- **No verifiable program:** UltraYield Curator, vfat.io (tool, not a farm), Reti Pooling, XRPL DEX, Manta CeDeFi (points ended Jul 2024), Plasma Saving Vaults (Units program ended with the XPL sale).
- **Saturn is the time-critical item in this batch:** registration closes 16 Nov 2026 21:00 WIB — after that, unregistered Season 1/2 participants cannot claim even if they hold points.
- **Caution flags:** Makina suffered a ~$4.1M flash-loan exploit on 20 Jan 2026 (verify the affected Machine's status first); Felix's vault TVL fell from $74.4M to $51.6M in five weeks to early Nov 2026 (depositors leaving, per the risk report cited).
