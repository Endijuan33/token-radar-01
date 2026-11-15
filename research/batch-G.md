# Token Radar — Research Batch G

Researched 2026-11-15 (WIB) via web search + page fetches (official docs/sites, DefiLlama, reputable secondary sources).
Rule applied: only verified facts are stated; anything not verified is labelled **unverified**.
TVL figures are the snapshot figures supplied by the parent agent (snapshot as of 14 Nov 2026), not re-verified here.
Capital sizing applied per task brief: TVL >= $1B -> $150, >= $100M -> $100, else $50. Only Hive clears $100M in this batch.
Each protocol gets exactly 3 farm steps in the form `- text: <action> | cost: ... | time: ...`, each line kept at 85 characters or fewer.

---

## 1. Mystic Finance Lending (`mystic-finance-lending`)

**What it is:** The front-end for Morpho modular lending on Flare (launched Feb 2026), with deployments also on Citrea and Plume. FXRP holders can earn yield in curated vaults and borrow against their position without selling. First vaults were curated by Clearstar and Carpathian, backed by USDT0, FLR and FXRP. Snapshot TVL $30.2M; chains Flare, Citrea, Plume Mainnet; category Lending; listed 2025-04-09.

**Token status:** No token verified. No Mystic token, ticker, or TGE was found in any source. It is a lending front-end/curator layer on top of Morpho, not a token-issuing protocol.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM** — no Mystic-native points program is published on the protocol's own pages as of 15 Nov 2026. Third-party points do accrue through the ecosystem: Firelight awards Firelight Points for deploying stXRP in supported protocols, including via Morpho/Mystic on Flare, and Spectra stXRP PTs (maturing 26 Nov) are accepted as collateral on Mystic for borrowing FXRP.

**Farm steps:**
- text: Supply FXRP to a Morpho vault on Flare | cost: $50, $1 gas | time: 10m
- text: Borrow FXRP against stXRP PT collateral | cost: $0, $1 gas | time: 10m
- text: Hold vault shares; check Firelight points | cost: $0 | time: 5m

**Sources:**
- https://paragraph.com/@spectra/q3-2026
- https://www.trendbullet.in/articles/citrea-ctusd-counted-twice.html

**Confidence: medium** (Morpho-front-end role and PT-collateral borrowing verified; no-token/no-points is absence-of-evidence).

---

## 2. Zircuit Staking (`zircuit-staking`)

**What it is:** The staking/pre-deposit program of Zircuit, a fully EVM-compatible zk-rollup on Ethereum. Users deposit native ETH or LST/LRT tokens (weETH, ezETH, rswETH, rsETH and others) and earn staking + restaking yield plus Zircuit Points. Snapshot TVL $44.4M; chains Ethereum, Zircuit; category Farm; listed 2024-03-04.

**Token status:** **ALREADY LAUNCHED — ZRC.** ZRC launched 25 Nov 2024 (CoinGecko), total supply 10B, ~7.08B in circulation as of 14 Nov 2026. Season 1 airdrop (7% of supply, snapshot 7 Jul 2024, ~262,200 addresses) and Season 2 (3%, snapshot 20 Nov 2024) are both complete and claimable; 8.55% remains reserved for future airdrops and rewards. This is not a new-token farm — the remaining upside is future distributions from the reserved allocation.

**Points / airdrop program:** Yes — **Zircuit Points, Season 3** (per CoinGecko and airdrops.io): Season 3 shifts focus to L2 staking and active liquidity on the Zircuit mainnet. Depositing LRT/LST earns 1x points vs 0.5x for native ETH; depositing ZRC in L2 staking earns a 3x booster.

**Farm steps:**
- text: Stake ZRC in the Liquidity Hub on Zircuit | cost: $50, $2 gas | time: 15m
- text: Deposit weETH into L2 staking on Zircuit | cost: $50, $2 gas | time: 15m
- text: Hold staked ZRC; check Season 3 points | cost: $0 | time: 5m

**Sources:**
- https://www.coingecko.com/learn/how-to-earn-zircuit-points-for-a-potential-airdrop
- https://boxmining.com/zircuit-zrc-token-airdrop-guide/

**Confidence: high** (ZRC launch, both snapshots, and Season 3 corroborated across sources).

---

## 3. Y10K Capital (`y10k-capital`)

**What it is:** The onchain asset-management arm of Yield Network, with risk operations by RockawayX. It deploys anchor capital into curated lending vaults and structured pre-deposit campaigns — e.g. the Y10k AUSD Vault on Monad (Morpho) and the PYUSD vault on Sei (with Feather, RockawayX as curator). Snapshot TVL $28.3M; chains Ethereum, Monad, Sei; category Risk Curators; listed 2026-07-15.

**Token status:** No token verified. No Y10K token, ticker, or TGE was found in any source.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM** — Y10K explicitly runs structured pre-deposits instead of points: Yield Network's own case study states its Citrea pre-deposit "closed without a single point" and that pre-deposits are replacing points programs as its default go-to-market. Vault depositors earn lending yield plus, where applicable, weekly Merkl incentive distributions (e.g. the Sei PYUSD program).

**Farm steps:**
- text: Deposit AUSD in Y10k AUSD Vault on Monad | cost: $50, $2 gas | time: 15m
- text: Deposit PYUSD in Y10k vault on Sei | cost: $50, $2 gas | time: 15m
- text: Hold y10kAUSD; watch Yield Network posts | cost: $0 | time: 5m

**Sources:**
- https://www.yieldnetwork.io/blog/sei-morpho-lending-book-case-study
- https://www.yieldnetwork.io/blog/citrea-case-study

**Confidence: medium-high** (vault lineup and no-points stance verified from Yield Network's own writing; no-token is absence-of-evidence).

---

## 4. Anemoy Capital (`anemoy-capital`)

**What it is:** A Web3-native asset manager (a division of Centrifuge) that manages tokenized funds: the Janus Henderson Anemoy Treasury Fund (JTRSY, T-bills, launched 5 Aug 2024) and the Janus Henderson Anemoy AAA CLO Fund (JAAA). Funds are BVI professional funds under Anemoy Capital SPC Ltd. Snapshot TVL $27.9M; chains Ethereum, Base, Celo; category RWA; listed 2024-12-09.

**Token status:** No Anemoy governance token exists. The products are fund shares: JTRSY (permissioned, $500K minimum, professional investors only) and freely transferable DeFi wrappers deJTRSY / deJAAA issued by Centrifuge on Base, Ethereum, Celo and others.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM** — no Anemoy points program is published anywhere found. The retail route is the deRWA wrappers, which earn the underlying fund yield (deJTRSY ~3.55% native yield) and can be used as DeFi collateral (e.g. deJAAA in Templar lending on Stellar).

**Farm steps:**
- text: Buy deJTRSY wrapper tokens on Ethereum | cost: $50, $2 gas | time: 15m
- text: Supply deJAAA as collateral on Templar | cost: $0, $1 gas | time: 10m
- text: Hold fund tokens; check Centrifuge app | cost: $0 | time: 5m

**Sources:**
- https://defillama.com/rwa/asset/deJTRSY
- https://on-chain-finance.com/instruments/yield-board/

**Confidence: medium-high** (fund structure, $500K minimum and wrappers verified; no-token/no-points is absence-of-evidence).

---

## 5. Agni Finance (`agni-finance`)

**What it is:** A high-capital-efficiency AMM-based DEX and launchpad on Mantle Network (Uniswap V3 fork), with concentrated-liquidity pools — e.g. mETH/WETH, USDe/USDT and USDT0/USDC pairs — and 220 trading pairs as of 13 Nov 2026. Snapshot TVL $15.1M; chain Mantle; category Dexs; listed 2023-07-21.

**Token status:** AGNI token status **unverified in this pass**: official Agni Medium posts (Sep 2026) describe taking eligible pool rewards as locked AGNI for a bonus, which implies an AGNI reward token exists, but no live market price or listing was verified — do not treat AGNI as a confirmed liquid token. No TGE date was verified.

**Points / airdrop program:** Yes, per official Agni posts — **Agni Finance Points / liquidity rewards**: LPs in eligible pools earn pool rewards, with an advertised bonus for taking eligible earnings as locked AGNI. No campaign-wide closing date is specified; terms (eligible pools, bonus size, lock terms) live in the app's Liquidity, Rewards and Lock pages. Points do not guarantee tokens or a fixed conversion.

**Farm steps:**
- text: Add mETH/WETH liquidity on Agni, Mantle | cost: $50, $1 gas | time: 15m
- text: Swap USDC for WMNT on Agni DEX | cost: $10, $1 gas | time: 5m
- text: Take rewards as locked AGNI for bonus | cost: $0, $1 gas | time: 5m

**Sources:**
- https://medium.com/@agnidex_labs/agni-finance-earn-rewards-apy-dashboard-5735cb446f7a
- https://medium.com/@agnidex_project/agni-finance-points-%EF%B8%8F-program-guide-and-dashboard-9ddf9c560d72

**Confidence: low-medium** (points/rewards program described in official-account posts; AGNI launch status and bonus terms not verified from a market source — re-check the app before depositing).

---

## 6. Hive Protocol (`hive-protocol`)

**What it is:** The BTC staking protocol of B² Network (BSquared), a modular Bitcoin L2 using zk-proof rollups. Tagline: "Stake BTC, safeguard B², and receive $B2 Tokens." Snapshot TVL $198.8M; chain BSquared; category Chain; listed 2024-05-03.

**Token status:** **ALREADY LAUNCHED — B2 (the chain token, not a Hive token).** Hive issues no token of its own; it distributes B2, the native token of B² Network. B2 trades live (~$0.4182, ~67.35M circulating of 210M max as of 12 Nov 2026) and serves as gas plus sequencer-staking token. Hive is therefore a yield farm on an already-launched chain token, not a new-token launch candidate. Note the DefiLlama category is Chain, not a standalone app: Hive is B²'s staking layer.

**Points / airdrop program:** No Hive points program found. Rewards are B2 emissions: staking BTC in Hive earns B2 proportional to staked BTC, and B2 holders can stake/delegate to sequencers for a share of transaction fees. Unstaking takes ~24 hours.

**Farm steps:**
- text: Stake BTC in Hive Protocol on B² Network | cost: $100, $2 gas | time: 15m
- text: Delegate B2 to a sequencer on B² Hub | cost: $0, $1 gas | time: 10m
- text: Hold staked BTC; claim B2 rewards | cost: $0 | time: 5m

**Sources:**
- https://www.kucoin.com/nl/price/B2
- https://getblock.io/marketplace/projects/bsquared/

**Confidence: high** (B2 live price/supply and Hive mechanics corroborated across sources).

---

## 7. Avant avETH (`avant-aveth`)

**What it is:** The ETH product family of Avant Protocol, a delta-neutral yield platform (built on Avalanche, cross-chain via Chainlink CCIP and LayerZero). avETH is backed 1:1 by ETH; staking it gives savETH (senior tranche, ~5.07%) while avETHx is the leveraged junior tranche (~7.75%, 8.50x leverage, launched 18 Sep 2025). Snapshot TVL $23.9M; chain Ethereum; category Onchain Capital Allocator; listed 2025-10-24.

**Token status:** AVANT governance token **not launched as of 30 Oct 2026** (Capital Layer research: "a token with no market yet: the TGE date is 'to be announced'"). The mid-September 2026 TGE date cited by older sources did not materialise. The only guaranteed liquidity is the protocol's own buyback at a fixed $0.025 per AVANT (implying $25M FDV), with buyback registration open until 16 Nov 2026 23:59 UTC — i.e. closing the day after this research.

**Points / airdrop program:** Season 1 points accrual **ended 15 May 2026**; allocations were converted into AVANT claimable around TGE, with a Season 1 allocation preview live in the app. No new points season was verified as of 15 Nov 2026 — new deposits today earn yield only, not points.

**Farm steps:**
- text: Mint avETH with ETH on Ethereum | cost: $50, $2 gas | time: 15m
- text: Stake avETH for savETH senior yield | cost: $0, $2 gas | time: 10m
- text: Hold savETH; watch for AVANT TGE date | cost: $0 | time: 5m

**Sources:**
- https://www.capital-layer.fund/en/research/inbox-2026-10-30-1226-e5ed7c1e/
- https://www.bitrue.com/blog/what-is-avant-protocol

**Confidence: medium-high** (Season 1 end, TGE TBA status and $0.025 buyback verified from a 30 Oct 2026 research note; TGE could still slip further).

---

## 8. NUVA (`nuva`)

**What it is:** An Ethereum-based RWA marketplace co-incubated by Animoca Brands and Nuva Labs (formerly Provenance Blockchain Labs), launched 13 May 2026, bringing Figure Technologies' Provenance-originated credit onchain. Users deposit USDC and receive ERC-20 vault tokens. Three vaults: HOME (nvHOME, US residential loans incl. HELOCs, ~7% target yield, $1 USDC minimum, no lockup), nvPRIME (home-equity-backed short-term financing) and nvYLDS (Figure's SEC-registered yield-bearing stablecoin YLDS, ~4% target). Snapshot TVL $15.9M; chains Provenance, Ethereum; category Yield; listed 2026-07-07.

**Token status:** $NUVA token **not launched** — no TGE date set. Planned fixed supply 1B, majority intended for community distribution; staking the token (sNUVA) is designed to unlock revenue sharing, boosted yields and governance. No market price exists.

**Points / airdrop program:** Yes — **NUVA Points**, earned from vault deposits, referrals, DEX liquidity, DeFi participation and social tasks; points determine future $NUVA airdrop allocations and may qualify holders for an ICO allocation. Caveat: trackers report **Points Season 0 ended 30 Sep 2026** and no new earning campaign is documented beyond the concluded Genesis Pass — re-check the official points page before depositing for points.

**Farm steps:**
- text: Deposit USDC into HOME vault on Ethereum | cost: $50, $2 gas | time: 15m
- text: Deposit USDC into nvYLDS vault on Ethereum | cost: $50, $2 gas | time: 15m
- text: Hold nv tokens; check NUVA Points page | cost: $0 | time: 5m

**Sources:**
- https://airdropalert.com/airdrops/nuva-finance/
- https://dropstab.com/coins/nuva-finance

**Confidence: medium** (vaults, points mechanics and 1B supply corroborated; current-season status after Season 0 is unverified).

---

## 9. Decibel (`decibel`)

**What it is:** A fully on-chain perps and spot exchange on Aptos, incubated by Aptos Labs (mainnet late Feb 2026, after a pre-deposit round of $58M+). Order book and clearinghouse live on-chain; up to 40–50x leverage across crypto, equity, ETF, index and commodity markets; USDC-only collateral (USDC bridged from Ethereum, Arbitrum, Base, Solana, Sui or Aptos). Snapshot TVL $29.3M; chain Aptos; category Derivatives; listed 2026-02-26.

**Token status:** No token yet. **DCBL is planned** — the site says Decibel "will launch a token", the roadmap lists "Decibel token launch expected" under Q4 2026 and beyond, with no date. No DCBL contract is published; any DCBL token, claim page or presale today is unofficial. usDCBL is a separate in-protocol stablecoin (issued by Bridge, a Stripe company) with no secondary market.

**Points / airdrop program:** Yes — **Amps, Season 1** (live since mainnet, no published end date). Amps accrue daily from four pools: trading (scored on activity, moderate leverage and longer holds score best), streaks, DLP vault deposits (scale with amount and duration; 72-hour lockup) and referrals (10% of referees' Amps; code only available after $25K all-time volume). Docs: "Amps are a primary input Decibel uses when evaluating token distribution at TGE" — but terms promise nothing and formulas are deliberately undisclosed. US and Ontario residents are barred.

**Farm steps:**
- text: Deposit USDC into DLP vault on Aptos | cost: $50, $1 gas | time: 10m
- text: Open a small perp trade on Decibel | cost: $10, $1 gas | time: 10m
- text: Hold DLP shares; check Amps dashboard | cost: $0 | time: 5m

**Sources:**
- https://99airdrops.com/airdrops/decibel/
- https://hyperzono.com/exchanges/decibel/

**Confidence: high** (Amps Season 1 mechanics and DCBL-planned status verified against Decibel's own docs via the guide, page fetched 15 Nov 2026).

---

## 10. Gamma Research (`gamma-research`)

**What it is:** An institutional risk-management and strategy-curation firm for on-chain vaults. Its only tracked product is the **earnAUSD** vault on Monad, built on Upshift infrastructure: deposit AUSD (Agora's dollar stablecoin), receive earnAUSD receipt tokens, Gamma allocates across Monad DeFi strategies. Launched 24 Nov 2025 with a $25M deposit cap; ~$21.7M TVL; 4-day withdrawal period; 10% performance fee. A looping variant (earnAUSD Looping Vault) routes earnAUSD through Morpho and Curvance. Snapshot TVL $21.7M; chain Monad; category Risk Curators; listed 2026-09-03.

**Token status:** No token verified. No Gamma Research token, ticker, or TGE was found in any source; the DefiLlama adapter lists no token address.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM** — no Gamma-native points program exists. Indirect exposure exists: the vault runs on Upshift (which has its own Upshift Points Season 2) and pays additional AUSD/wMON incentives via Merkl, but earnAUSD's eligibility for Upshift Points was not verified in this pass — do not assume it.

**Farm steps:**
- text: Deposit AUSD into earnAUSD on Monad | cost: $50, $2 gas | time: 15m
- text: Deposit AUSD into earnAUSD Looping Vault | cost: $50, $2 gas | time: 15m
- text: Hold earnAUSD; claim Merkl incentives | cost: $0 | time: 5m

**Sources:**
- https://www.upshift.finance/blog/earning-stablecoin-yield-on-monad-with-earnausd
- https://app.upshift.finance/vaults/monad/earnausd

**Confidence: medium-high** (vault, curator role and looping variant verified from Upshift's own pages; no-token/no-points is absence-of-evidence).

---

## 11. Templar Lending (`templar-lending`)

**What it is:** A lending protocol on Stellar (Soroban) that lets users borrow stablecoins against tokenized real-world assets — the first Stellar venue to accept RWA collateral (launched 1 Apr 2026). Collateral includes Centrifuge's deJAAA (AAA CLOs) and deJTRSY (T-bills) plus Etherfuse's CETES and USTRY, priced by RedStone SEP-40 feeds; loans up to ~95% LTV against deJAAA. On 9 Nov 2026 it also launched **Precept**, an institutional lending protocol (XLM/USDC, deJAAA/USDC, Gami earnUSDC/USDC markets). Snapshot TVL $27.2M; chains Stellar, Ethereum, Bitcoin, Near, Zcash, Ripple, Solana, Flare, Doge, Cardano, Litecoin; category Lending; listed 2025-08-12.

**Token status:** No token verified. No Templar token, ticker, or TGE was found in any source.

**Points / airdrop program:** **NO VERIFIABLE PROGRAM** — no Templar points program is published on the protocol's own pages as of 15 Nov 2026.

**Farm steps:**
- text: Supply USDC to deJAAA/USDC on Stellar | cost: $50, $1 gas | time: 10m
- text: Borrow USDC against deJTRSY on Stellar | cost: $0, $1 gas | time: 10m
- text: Hold positions; watch Precept markets | cost: $0 | time: 5m

**Sources:**
- https://www.redstone.finance/blog/from-issuance-to-markets-pricing-rwas-on-stellar/
- https://cryptobriefing.com/stellar-rwas-top-4-billion-defi-low/

**Confidence: medium** (RWA-collateral markets and Precept launch verified; no-token/no-points is absence-of-evidence).

---

## 12. Theo Network thBill (`theo-network-thbill`)

**What it is:** Theo Network's tokenized-Treasury product: **thBILL** is a basket of institutional-grade tokenized US Treasury-bill funds (Wellington's ULTRA via Standard Chartered's Libeara, plus Fidelity International's FILQ), launched July 2025. Theo's current flagship is **thUSD**, a yield-bearing stablecoin earning from hedged gold/silver leasing, alongside thGOLD and thSLVR. Snapshot TVL $11.8M; chains Stable, Ethereum, Arbitrum, Base, Monad, Solana; category RWA; listed 2025-09-10.

**Token status:** No Theo token announced. No THEO token, TGE date or tokenomics has been confirmed as of Oct–Nov 2026 (a separate project, Autheo's THEO, already trades — do not confuse the two).

**Points / airdrop program:** Yes — **thUSD Points Program** (open since 25 Jun 2026). Important: the **thBILL points season ended 19 Jun 2026** — holding thBILL no longer earns points. The live program pays points for holding thUSD, staking it for sthUSD, and depositing into thUSD vaults — Core (3 months), Core+ (6 months) and Boost (6 months, through Morpho) — with referral boosts (10%). No token or conversion has been announced; sthUSD withdrawals go through a redemption queue averaging ~2 weeks.

**Farm steps:**
- text: Hold thUSD from the Theo app on Ethereum | cost: $50, $2 gas | time: 15m
- text: Deposit thUSD into Boost vault, Morpho | cost: $0, $2 gas | time: 10m
- text: Hold sthUSD; check Theo rewards page | cost: $0 | time: 5m

**Sources:**
- https://usethebitcoin.com/airdrop/theo-airdrop-guide/
- https://tokenradar.ai/tokens/theo

**Confidence: high** (thBILL points end-date, thUSD program mechanics and no-token status verified; thUSD page fetched 15 Nov 2026).

---

## Cross-cutting notes for the radar

- **Already-launched tokens (not launch candidates):** Zircuit ZRC (TGE 25 Nov 2024; Seasons 1–2 snapshots done, Season 3 live) and Hive's reward token B2 (B² Network native token, trading ~$0.42). Their radar value is yield/future-distribution-adjacent, not a new TGE.
- **Confirmed live points programs:** Decibel Amps Season 1 (DCBL planned, Q4 2026+), NUVA Points (Season 0 ended 30 Sep 2026 — current season unverified), Theo thUSD Points (thBILL season ended 19 Jun 2026), Agni Points/liquidity rewards (AGNI launch status unverified).
- **No verifiable program:** Mystic Finance, Y10K Capital, Anemoy Capital, Gamma Research, Templar Lending — farming thesis there is purely speculative tokenless exposure (plus third-party incentives: Firelight Points via Mystic, Merkl incentives via Y10K/Gamma vaults, fund yield via Anemoy wrappers).
- **Closed/ended points seasons — do not farm for points:** Avant Season 1 (ended 15 May 2026; AVANT TGE still TBA as of 30 Oct 2026; $0.025 buyback registration closes 16 Nov 2026), Theo thBILL (ended 19 Jun 2026), NUVA Season 0 (ended 30 Sep 2026), Zircuit Seasons 1–2 (snapshots Jul/Nov 2024).
- **Access warnings:** Anemoy's JTRSY is professional-only ($500K minimum) — retail exposure is only via deJTRSY/deJAAA wrappers. Decibel bars US and Ontario residents. Theo sthUSD withdrawals average ~2 weeks in a queue. Gamma's earnAUSD has a 4-day withdrawal period. Agni's locked-AGNI bonus restricts access to rewards — check lock terms in the app first.
- **Curator double-counting warning:** Mystic, Y10K and Gamma TVL sits on top of Morpho/Upshift infrastructure — their TVL is not standalone protocol TVL, so FDV/TVL ratios computed off Morpho are only rough anchors. No FDV comps computed in this batch (all 12 are sub-$200M TVL with no verified token to price against).
