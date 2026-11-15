# Token Radar — Research Batch F (board ranks 53–64)

Researched 2026-11-15 (WIB) via web search + page fetches (official docs/sites, DefiLlama, reputable secondary sources).
Rule applied: only verified facts are stated; anything not verified is labelled **unverified**.
TVL, chains, category and listed dates are the snapshot figures supplied by the parent agent (DefiLlama snapshot 2026-11-14), not re-verified here.
Capital sizing applied: all 12 protocols have TVL under $100M, so the standard plan size is **$50** per deposit step — except Neutral Trade, whose official FAQ states a $100 minimum deposit per vault (noted in its entry).
Each protocol has exactly 3 farm steps in the radar format (`- text: … | cost: … | time: …`).

---

## 53. D2 Finance (`d2-finance`) — TVL $22.6M · Hyperliquid L1 · Onchain Capital Allocator · listed 2024-07-05

**What it is:** An on-chain multi-strategy derivatives fund running actively managed, epoch-based ERC-4626 vaults (flagship HYPE++ / Alpha Strategies) on Hyperliquid, Arbitrum and Base, plus newer vaults such as d2HYPE, hXXI and Hot7. Reported +211% net since December 2023 across 33 settled epochs. No first-loss protection — all downside is borne by depositors.

**Token status:** No token verified. A HOT token is mentioned in D2's Hot7 writing as "moving to 2027", with supply, pool and release schedule explicitly unconfirmed — treat any HOT claim as unverified.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No D2 points program was found on the protocol's own pages or in any source read. Farming thesis is purely speculative tokenless exposure (plus the yield of the strategies themselves).

**Farm steps:**
- text: Deposit USDC into d2HYPE vault on Hyperliquid | cost: $50, $2 gas | time: 20m
- text: Deposit USDC into Hot7 Epoch 1 vault on Base | cost: $50, $2 gas | time: 20m
- text: Hold shares; watch D2 channels for HOT news | cost: $0, $0 gas | time: 10m

**Sources:**
- https://app.pigi.finance/featured/d2-finance-hype
- https://medium.com/@D2.Finance/hot7-epoch-1-update-farm-maxxing-on-base-7571c08b0077

**Confidence: medium** (vault lineup verified via two independent sources; no-token/no-points is absence-of-evidence plus an explicit "unconfirmed" on HOT).

---

## 54. Lulo (`lulo`) — TVL $24.5M · Solana · Yield Aggregator · listed 2024-08-17

**What it is:** A stablecoin yield app on Solana. One deposit is spread by fixed rules across lending venues (Morpho, Kamino, Maple, Pendle, Jupiter, Neutrl). Two deposit types: Protected (safer, lower yield — automatically repaid if a used protocol is hacked or runs up bad debt) and Boost (higher yield, takes losses first as the insurance pool; Boost fell ~6.4% after October 2026 losses at Neutrl). 10% fee on yield only; no deposit/withdrawal fee.

**Token status:** No token verified. No Lulo token, ticker or TGE found in any source read.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No Lulo-native points program was found. Depositors do earn the underlying venues' points as if they had deposited directly (e.g. Kamino, MarginFi points pass through), per an older Lulo guide — but that is partner points, not a Lulo program.

**Farm steps:**
- text: Deposit USDC into Lulo Protected on Solana | cost: $50, $1 gas | time: 15m
- text: Deposit USDC into Lulo Boost on Solana | cost: $50, $1 gas | time: 15m
- text: Hold deposit; check partner points in Lulo app | cost: $0, $0 gas | time: 10m

**Sources:**
- https://solanacompass.com/projects/lulo

**Confidence: medium** (Protected/Boost mechanics and venue routing verified; "no points program" is absence-of-evidence. Note: a 2024 guide cites a $100 stablecoin minimum — verify the current minimum in the app before depositing $50.)

---

## 55. August Digital (`august-digital`) — TVL $22.4M · Monad · Risk Curators · listed 2026-09-02

**What it is:** The risk-curation arm of Upshift (August Digital is Upshift's parent company). It curates Morpho V2 lending vaults, principally August USDC V2 (~$15.2M on Monad, lending USDC into the earnAUSD/USDC market) and August USPC (~$5.8M on Monad). It also curates the Upshift Clear RWA redemption vault on Ethereum (Superstate USCC).

**Token status:** No token verified. No August Digital token, ticker or TGE found in any source read.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No August-native points program was found. Note: deposits into August vaults made through Upshift may stack Upshift Points (Season 2, verified in Batch A) — that is Upshift's program, not August's, and was not re-verified here.

**Farm steps:**
- text: Deposit USDC into August USDC V2 on Monad | cost: $50, $1 gas | time: 15m
- text: Deposit USDC into August USPC vault on Monad | cost: $50, $1 gas | time: 15m
- text: Hold shares; check Upshift Points dashboard | cost: $0, $0 gas | time: 10m

**Sources:**
- https://www.upshift.finance/blog/what-is-morpho
- https://app.morpho.org/monad/vault/0xdE16452C1f8CC209D8E9b104b7F240D9A251768B

**Confidence: medium-high** (vault names, sizes and curator link verified via Morpho and Upshift's own writing; no-token/no-points is absence-of-evidence).

---

## 56. Liminal Basis (`liminal-basis`) — TVL $25.7M · Hyperliquid L1 · Basis Trading · listed 2025-07-26

**What it is:** An automated delta-neutral yield protocol on Hyperliquid that packages spot-plus-perp basis/funding trades into yield-bearing tokens: **xHYPE** (HYPE funding carry), **xLEND** (stablecoin lending across HyperLend, HypurrFi, Felix, Morpho and Hyperliquid BLP) and **limUSD** (a USD-denominated basket of the strategies, on HyperEVM). Omnichain via LayerZero; xTokens are composable in lending and yield markets.

**Token status:** No token verified. Trackers list Liminal as "no token yet, airdrop possible".

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No Liminal points program was found on the protocol's own pages or in any source read. One tracker lists Liminal as "farmable / TGE pending" with no points mechanics stated — that is speculation, not a program.

**Farm steps:**
- text: Mint limUSD with USDC on HyperEVM | cost: $50, $2 gas | time: 15m
- text: Mint xLEND with USDC on Hyperliquid | cost: $50, $2 gas | time: 15m
- text: Hold xTokens; watch Liminal channels for news | cost: $0, $0 gas | time: 10m

**Sources:**
- https://medium.com/@liminalmoney1/liminal-money-xhype-xlend-limusd-yield-guide-eea1a9d35f27
- https://oakresearch.io/en/projects/liminal

**Confidence: medium** (product lineup verified; no-token/no-points is absence-of-evidence).

---

## 57. ApeX Omni (`apex-omni`) — TVL $26.8M · Arbitrum · Derivatives · listed 2024-06-27

**What it is:** A no-KYC decentralized perps/spot exchange (perps, tokenized stocks, prediction markets, Grid Bot, Community Vaults copy trading) on Arbitrum, Ethereum, Base, BNB Chain and Mantle. Cumulative volume ~$700B, 660,000+ registered users as of October 2026.

**Token status:** **ALREADY LAUNCHED — APEX.** APEX trades live (~$0.1336, market cap ~$21M, 15 Nov 2026 per CoinGecko via a tracker). This is not a new-token launch candidate; the farmable angle is rewards on an already-live token.

**Points / airdrop program:** Ape Season 1 (69,000,000 Ape Points over 12 weeks) **ended 28 December 2025**; the official season page says "Ape Season 2 is coming soon" with no date and no stated conversion. ApeX Social Points (ASP) are still documented — earned by trading, staking APEX and referrals, redeemable for mystery boxes/prizes, not a token allocation. Staking 4.0 pays weekly APEX rewards funded by trading-fee buybacks.

**Farm steps:**
- text: Trade a small perp on ApeX Omni on Arbitrum | cost: $50, $1 gas | time: 15m
- text: Stake APEX in Staking 4.0 on ApeX Omni | cost: $50, $1 gas | time: 15m
- text: Check ApeX Social points and Season 2 news | cost: $0, $0 gas | time: 10m

**Sources:**
- https://perpdexguide.com/airdrops/
- https://perpsatlas.com/perp-dex/apex/

**Confidence: high** (APEX live status, Season 1 end date and Season 2 "coming soon" all verified against the venue's own docs via two trackers).

---

## 58. marginfi Lending (`marginfi-lending`) — TVL $27.7M · Solana · Lending · listed 2023-02-22

**What it is:** Solana's long-running borrow/lend protocol (shared pools per asset, "banks"). **Rebranded to Project 0 in September 2025** — the old app at app.marginfi.com now redirects to the Project 0 app at app.0.xyz, which runs the same marginfi lending program as a permissionless non-custodial prime broker spanning Project 0, Kamino and Jupiter Lend. Project 0 also launched yield vaults with Gamma in August 2026.

**Token status:** No token verified. No MRGN or Project 0 token, ticker or TGE date has been announced as of November 2026; any coin claiming to be MRGN/P0 is unofficial.

**Points / airdrop program:** Yes — **Project 0 Points** (live). Marginfi (mrgn) points converted 1:1 into Project 0 points at the September 2025 relaunch, but only activate with a live deposit on the Project 0 app. Under marginfi the rule was 1 point per $1 lent per day and 4 points per $1 borrowed per day; Project 0's current per-dollar rates are not published in its docs. Users active June 2024–3 August 2025 get a multiplier applied before TGE.

**Farm steps:**
- text: Lend USDC on Project 0 (ex-marginfi), Solana | cost: $50, $1 gas | time: 15m
- text: Borrow USDT against USDC on Project 0 | cost: $25 loan, $1 gas | time: 15m
- text: Hold deposit; check Project 0 points page | cost: $0, $0 gas | time: 10m

**Sources:**
- https://solanaguides.com/marginfi-airdrop-guide
- https://github.com/mrgnlabs/mrgn-ts/blob/HEAD/apps/marginfi-v2-docs/src/app/faqs/page.mdx

**Confidence: high** (rebrand, 1:1 points carry-over, live-deposit activation and no-token status all corroborated; exact current points rates unverified).

---

## 59. 3F (`3f`) — TVL $40.4M · Ethereum · Leveraged Farming · listed 2026-05-25

**What it is:** A vault protocol built on Morpho that gives one-click leveraged exposure to tokenized RWAs. Third-party liquidity providers front the extra USDC to build the full position at once; the RWA is posted on Morpho as collateral and a Morpho loan repays them. Live pools include FALCONX-5X (leveraged FalconX Credit Vault) and the 3F x Steakhouse USDC Morpho Vault. Exits unwind in reverse and can take days to weeks depending on the asset's redemption.

**Token status:** No token verified. No 3F token, ticker or TGE found in any source read; airdrop trackers list 3F among tokenless protocols.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No 3F points program was found on the protocol's own pages or in any source read.

**Farm steps:**
- text: Deposit into FALCONX-5X vault on 3F | cost: $50, $5 gas | time: 20m
- text: Deposit into 3F x Steakhouse USDC vault | cost: $50, $5 gas | time: 20m
- text: Hold vault tokens; watch 3F channels for news | cost: $0, $0 gas | time: 10m

**Sources:**
- https://DeFiLlama.com/protocol/3f
- https://defillama.com/yields/pool/d80500f6-6d24-5a58-a339-ca8c7e1c3084

**Confidence: medium** (leveraged-RWA mechanics and the two named vaults verified; no-token/no-points is absence-of-evidence).

---

## 60. Mantle Restaking (`mantle-restaking`) — TVL $31.0M · Ethereum · Liquid Restaking · listed 2024-11-13

**What it is:** mETH Protocol, Mantle's ETH liquid staking and restaking protocol. Stake ETH to mint **mETH** (value-accruing LST receipt); **cmETH** was the restaking receipt (1:1 for mETH, restaked into EigenLayer, Symbiotic and Karak). **cmETH is being wound down: new minting was disabled on 7 May 2026**, and the claim portals for past cmETH campaign rewards (Methamorphosis Seasons 1–3, EigenLayer phases, COOK Feast) **closed on 7 November 2026**. mETH staking itself continues.

**Token status:** **ALREADY LAUNCHED — COOK.** COOK is mETH Protocol's governance token, launched October 2024 (5B max supply), trading at ~$0.0019 with FDV ~$9.6M. Formal on-chain governance via COOK is not yet active. This is not a new-token launch candidate, and the restaking farm itself is closed to new minting.

**Points / airdrop program:** None live for new farmers. Methamorphosis Powder (convertible to COOK) ended with the cmETH wind-down; past portals are closed. Future AVS/Symbiotic/Karak TGEs may still pay retroactive rewards to past cmETH holders — unverified.

**Farm steps:**
- text: Stake ETH to mint mETH on Ethereum | cost: $50, $5 gas | time: 20m
- text: Bridge mETH from Ethereum to Mantle | cost: $50, $1 gas | time: 20m
- text: Hold mETH; check dashboard for COOK news | cost: $0, $0 gas | time: 10m

**Sources:**
- https://www.manltestaked.ink/mantlestaked-rundown-in-detail/
- https://app.blockworks.com/report/state-of-mantle-q4-2025

**Confidence: high** (wind-down dates, portal closure, COOK launch and price all verified across multiple sources).

---

## 61. Neutral Trade (`neutral-trade`) — TVL $21.4M · Solana · Onchain Capital Allocator · listed 2024-12-23

**What it is:** A marketplace of professionally managed, non-custodial quant-strategy vaults on Solana (market-neutral, directional, RWA and savings strategies run by KYB-verified trading firms; firms hold trading authority only and can never withdraw deposits). Flagship is **Neutral Autopilot**, a multi-strategy vault; **NT Earn** is a savings product (lending optimizer across Kamino Lending and Jupiter Lend); a **SOL Yield Vault** accepts SOL/wSOL. Backed by Solana Labs, YZi Labs, DRW Labs and others; $200M+ deposited since launch. **Minimum deposit is $100 per vault** (official FAQ) — this overrides the $50 standard size for this protocol.

**Token status:** No token verified. The official FAQ states explicitly: "Neutral Trade has no token you can buy or trade today."

**Points / airdrop program:** Yes — **NT Points** (live). Earned by depositing into vaults (TVL points, vault-specific multipliers — Autopilot ran a 2x points deposit campaign) and by referrals (10% of referees' points); standings on the leaderboard at neutral.trade/points; points also count toward VIP Club tiers (fee discounts). No token conversion has been announced. The Kamino USDC Max Yield vault curated by Neutral Trade earns 1x NT points.

**Farm steps:**
- text: Deposit USDC into Neutral Autopilot, Solana | cost: $100, $1 gas | time: 15m
- text: Deposit USDC into NT Earn on Solana | cost: $100, $1 gas | time: 15m
- text: Hold positions; check NT Points leaderboard | cost: $0, $0 gas | time: 10m

**Sources:**
- https://www.neutral.trade/faq
- https://airdrops.io/neutral-trade/

**Confidence: high** (NT Points, Autopilot, $100 minimum and no-token status all read directly from the official FAQ).

---

## 62. Zoo Finance (`zoo-finance`) — TVL $24.6M · Binance · Yield · listed 2025-02-10

**What it is:** A structured-asset protocol unlocking liquidity for locked/illiquid crypto assets via vaults: the **L-Vault** (pooled CDP — deposit assets, mint the ZUSD stablecoin plus Margin Tokens for leveraged exposure; initially iBGT and BERA), the **B-Vault** (perpetual Pendle-like PT/YT splitting for Berachain Proof-of-Liquidity incentive assets) and LNT/LVT (liquid node/vesting tokens). Raised $8M strategic in December 2025 ($10M total). Note: the snapshot lists Binance first, but Zoo's own docs place the L-Vault and B-Vault on Berachain — steps below use Berachain, where the products are documented.

**Token status:** No token verified. No Zoo Finance token, ticker or TGE found in any source read; trackers list it among tokenless protocols.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM.** No points program appears in Zoo's official docs. One Medium post (by a Zoo Finance account) describes a "Zoo Finance Points" program, but it is generic template-style content with no verifiable mechanics, dates or dashboard link — treated as unverified, not relied on.

**Farm steps:**
- text: Deposit iBGT into Zoo L-Vault on Berachain | cost: $50, $1 gas | time: 15m
- text: Deposit USDC into Zoo B-Vault on Berachain | cost: $50, $1 gas | time: 15m
- text: Hold vault receipts; watch Zoo channels | cost: $0, $0 gas | time: 10m

**Sources:**
- https://docs.zoofi.io/berachain-eco/liquidity-vault-l-vault
- https://docs.zoofi.io/berachain-eco/bribe-vault-b-vault

**Confidence: medium** (vault mechanics verified from official docs; no-token status and the points claim are absence-of-evidence / unverified respectively).

---

## 63. Origami Finance (`origami-finance`) — TVL $28.8M · Ethereum · Leveraged Farming · listed 2024-05-13

**What it is:** An automated leverage ("folding") protocol: vaults repeatedly deposit a yield-bearing token as collateral, borrow against it and re-buy the asset for multiplied exposure. Six vault collections — lovEthena (USDe/sUSDe), lovOlympus, lovInfrared, lovSky, lovStables and lovETH — on Ethereum (and Base for lovInfrared). Caution: the origami.finance domain was DNS-hijacked on 30–31 October 2026 (Step Drainer kit); the team reported no direct protocol losses and paused vault contracts as a precaution — reach the app only via official links and verify the domain.

**Token status:** No token verified. No Origami token, ticker or TGE found in any source read.

**Points / airdrop program:** Yes — **Ori Points** (live). Depositors earn Ori Points each season; **Season 3 is live now** (per a protocol summary read 15 Nov 2026; Season 1 ran from April 2024). Vaults also stack partner rewards — e.g. lov-USDe at 5x folding carries ~100x Ethena sats, lov-sUSDe ~25x sats.

**Farm steps:**
- text: Deposit USDe into lovEthena vault on Ethereum | cost: $50, $5 gas | time: 20m
- text: Deposit USDC into lovStables on Ethereum | cost: $50, $5 gas | time: 20m
- text: Hold lovTokens; check Ori Points dashboard | cost: $0, $0 gas | time: 10m

**Sources:**
- https://www.origami-finance.com/
- https://docs.origami.finance/the-second-fold-v2/deprecated-vaults/lovtendies-collection/weth-dai-long-2x-vitalik-bullterin/token-flow

**Confidence: high** (Ori Points mechanics and Season 3 status verified; lovEthena/lovStables collections verified from the protocol's own docs).

---

## 64. Firelight (`firelight`) — TVL $51.3M · Flare · Insurance · listed 2025-12-09

**What it is:** The first XRP staking protocol on Flare (incubated by Sentora). Stake **FXRP** (Flare's ERC-20 representation of XRP) into an ERC-4626 vault and receive **stXRP** 1:1. **Phase 2 went live 6 October 2026**: cover is live (first cover: Sentora's USD Protected Vault), program operators pay premiums that stream into the vault, and stakers earn protocol emissions. Staked FXRP backs cover and can be slashed; a First-Loss Buffer absorbs the first part of any claim. Unstaking takes 30–60 days (30-day cover periods). Needs a small FLR balance for gas.

**Token status:** No Firelight token verified. FLR is Flare's chain token (already launched), not Firelight's; Firelight emissions are paid in FXRP. No Firelight governance/reward token has been announced.

**Points / airdrop program:** Yes — **Firelight Points** (Phase 1). Points accrue hourly on stXRP held (including stXRP deployed in other apps), multiplied by holding time and a weighted boost. Points are not a claim on premiums, but Flare states the first protocol emissions go to early contributors in proportion to Firelight Points earned.

**Farm steps:**
- text: Mint FXRP from XRP via Flare FAssets | cost: $50, $1 gas | time: 20m
- text: Stake FXRP for stXRP on Firelight, Flare | cost: $50, $1 gas | time: 15m
- text: Hold stXRP; check Firelight Points dashboard | cost: $0, $0 gas | time: 10m

**Sources:**
- https://superapp.spendthebits.com/insights/earning-on-xrp-firelight-stxrp-points
- https://www.tradingview.com/news/chainwire:ca766ea70094b:0-firelight-is-live-backed-by-staked-fxrp-on-flare/

**Confidence: high** (Phase 2 launch date, stXRP mechanics, points accrual and slashing/unstaking terms verified across multiple sources).

---

## Cross-cutting notes for the radar

- **Already-launched tokens (not launch candidates):** ApeX Omni (**APEX**, live, ~$0.1336, ~$21M mcap) and Mantle Restaking (**COOK**, launched Oct 2024, ~$0.0019). Their radar value is rewards on live tokens, not a new TGE.
- **Confirmed live points programs:** Project 0 Points (marginfi, carried 1:1), NT Points (Neutral Trade), Ori Points Season 3 (Origami), Firelight Points (Phase 1, with Phase 2 emissions live).
- **No verifiable program:** D2 Finance, Lulo, August Digital, Liminal Basis, 3F, Zoo Finance — farming thesis there is purely speculative tokenless exposure (plus underlying yield and, for Lulo/August, pass-through partner points).
- **Closed to new farmers:** Mantle Restaking's cmETH — new minting disabled 7 May 2026, past reward portals closed 7 Nov 2026; only mETH staking remains live.
- **Minimum-deposit warnings:** Neutral Trade vaults require $100 (official FAQ) — the $50 standard size does not work there. Lulo's older guides cite a $100 stablecoin minimum — verify in-app.
- **Security caution:** Origami Finance's domain was DNS-hijacked 30–31 Oct 2026; use only official links and verify the domain before connecting a wallet.
- **Chain note:** Zoo Finance's snapshot lists Binance first, but its own docs place the L-Vault/B-Vault on Berachain; steps use Berachain.
