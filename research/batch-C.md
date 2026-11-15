# Batch C — Token-Launch Radar Research

Researched 2026-11-15 (WIB). TVL figures are the snapshot figures supplied in the task ($151M Lagoon, $136M Curvance, $130M Galaxy Curation, $111M Tydro, $106M Valos, $101M Lofty, $93M Doppler Finance, $90M Ember, $83M Noble, $83M Keyrock), cross-checked against DefiLlama where a live page was returned. Only verified facts are stated; anything not verified is labelled **unverified**. No token, points program, APY, date, vault name or minimum was invented. FDV/TVL ratios below are computed from the cited FDV and TVL figures as of 2026-11-14/15 and are therefore point-in-time, not stable.

---

## 1. Lagoon (lagoon)

**What it is:** Lagoon Finance provides vault infrastructure for on-chain asset management: curators/asset managers deploy customisable ERC-7540 (asynchronous) vaults built on Safe and Zodiac modules, and depositors receive tokenised vault shares. It is infrastructure for other managers' funds, not a single yield product of its own.

**Token status:** No Lagoon protocol token was found in any source reviewed. Vault share tokens exist (e.g. atrUSD/atrETH receipt tokens, Kamui USDst/USDbl/USDbt), but those are per-vault ERC-20 shares, not a Lagoon governance token. Do not treat a vault share as a Lagoon token.

**Points / airdrop program:** No public points program found for Lagoon itself. Points found in search results belong to vaults built on Lagoon (e.g. Almanak Points for Almanak vaults), not to Lagoon.

**Farm steps:**
1. Open the Lagoon app, connect a wallet, and browse the public vault list to find a vault that is open to retail deposits.
2. Review the chosen vault's strategy, curator, fees, deposit asset, and withdrawal/settlement terms before depositing.
3. Deposit USDC into the Attrius atrUSD vault on Ethereum and hold the atrUSD vault shares.
4. Deposit into the Attrius atrETH vault on Ethereum and hold the atrETH vault shares for ETH-denominated yield.
5. Check whether a vault built on Lagoon runs its own points program and, if so, follow that vault's own rules for earning points.
6. [UNVERIFIED] Deposit into a DAMM Capital Lagoon vault only after confirming on the DAMM docs that the vault accepts outside investors, since some DAMM funds are whitelist-gated.

**FDV comps:**
- Morpho (MORPHO) — FDV ~$1.7–1.93B, TVL ~$6–7.5B, FDV/TVL ~0.25–0.27.
- Aave (AAVE) — FDV ~$1.6–1.72B, TVL ~$14.8B, FDV/TVL ~0.11.
- Veda / vault-infrastructure peers — named comp only, no FDV verified.

**Sources:**
- https://magicsquare.io/store/projects/lagoon-finance
- https://getblock.io/marketplace/projects/lagoon/
- https://www.digitalassetsedge.com/interviews/interview.php?interview_id=20
- https://www.attrius.capital/docs
- https://github.com/DefiLlama/DefiLlama-Adapters/pull/21020
- https://docs.dammcap.finance/integrations
- https://www.crypheat.com/c/aave (AAVE FDV)
- https://defillama.com/protocol/aave?denomination=USD (AAVE FDV/TVL)
- https://www.crypheat.com/c/morpho (MORPHO FDV)

---

## 2. Curvance (curvance)

**What it is:** Curvance is an isolated-market lending protocol live only on Monad. Users supply assets to earn interest and can use yield-bearing / productive collateral to borrow; it also runs Earn Vaults and leveraged looping flows.

**Token status:** CVE is described in Curvance docs as the planned governance token, with veCVE as its 12-month locked vote-escrow form — but the token has NOT launched. As of 26 Oct 2026 the official Monad contract registry listed no CVE token contract, the registry's `cve()` and `veCVE()` returned the zero address, and CoinGecko showed zero tickers, no price and zero circulating supply (max 420,000,069). Do not buy any token merely because it uses the ticker CVE.

**Points / airdrop program:** No live public points program found. The old testnet "Bytes" points (earn Bytes per lend/borrow/lock action on Monad testnet) and a Dec 2025 Kintsu partner-points boost are historical/closed, not a current campaign. As of Aug–Oct 2026 reviews, no CVE snapshot, eligibility checker, season or claim page existed. Lenders in main markets receive a flat incentive paid in cWMON, which is yield, not a Curvance points program.

**Farm steps:**
1. [UNVERIFIED] Supply vUSD to the Curvance vUSD/AUSD market on Monad to earn lending yield and any live Merkl incentives shown in the app.
2. [UNVERIFIED] Supply AUSD to a Curvance AUSD market on Monad and hold the position while incentives are live.
3. Supply USDC to a Curvance USDC market on Monad and hold the cToken position.
4. Borrow against supplied collateral on Curvance on Monad only while keeping the health factor above liquidation.
5. Check the official Curvance site and docs for a named CVE season or points page before depositing for any token reason.
6. Do not deposit for CVE unless Curvance publishes reward terms, since no current first-party rule confirms a CVE allocation.

**FDV comps:**
- Aave (AAVE) — FDV ~$1.6–1.72B, TVL ~$14.8B, FDV/TVL ~0.11.
- Morpho (MORPHO) — FDV ~$1.7–1.93B, TVL ~$6–7.5B, FDV/TVL ~0.25–0.27.
- Euler (EUL) — named comp only, no FDV verified.

**Sources:**
- https://boxmining.com/curvance-cve-token-airdrop-guide/
- https://airdroplet.com/airdrop/curvance
- https://10k.nyxshcon.org/risk/curvance
- https://www.swanbluechip.com/rewards/
- https://defillama.com/protocol/aave?denomination=USD
- https://www.crypheat.com/c/morpho

---

## 3. Galaxy Curation (galaxy-curation)

**What it is:** Galaxy Curation is the institutional vault-curation arm of Galaxy Digital (Nasdaq: GLXY). Galaxy's team selects which lending markets a vault may enter, sets exposure limits and monitors risk, while the underlying vaults run on Morpho (Quality and Enhanced vaults) and on Kamino on Solana (Galaxy USDC and Galaxy USDT vaults). Assets stay at the protocol level; Galaxy does not custody them.

**Token status:** No Galaxy Curation protocol token exists. GLXY is Galaxy Digital's Nasdaq-listed Class A common stock (market cap ~$6.1B per Finnhub, price ~$14.38 on 13 Nov 2026); tokenised GLXY (e.g. Superstate on Solana, Ondo GLXYon, Robinhood Chain GLXY stock token) are representations of that stock, not a Curation/governance token. Do not confuse tokenised GLXY stock with a DeFi token for this protocol.

**Points / airdrop program:** No public points program found. The product launched 16 Jul 2026 for institutions via Fireblocks Earn (2,400+ institutional clients) and expanded to Kamino on Solana on 17 Sep 2026; no points, season or airdrop was announced in the launch coverage reviewed.

**Farm steps:**
1. Deposit USDC into the Galaxy USDC vault on Kamino on Solana and hold the vault position.
2. Deposit USDT into the Galaxy USDT vault on Kamino on Solana and hold the vault position.
3. [UNVERIFIED] Deposit USDC into a Galaxy-curated Morpho vault on Ethereum via the Morpho app and hold the vault shares.
4. [UNVERIFIED] Deposit into a Galaxy Quality vault rather than an Enhanced vault when prioritising capital preservation over higher yield.
5. Check the Kamino vault page for any minimum deposit, fee or withdrawal terms before depositing, since none were published in the launch note.
6. Do not expect points from a Galaxy vault deposit, since no points program was found.

**FDV comps:**
- Morpho (MORPHO) — FDV ~$1.7–1.93B, TVL ~$6–7.5B, FDV/TVL ~0.25–0.27 (underlying vault rails).
- Steakhouse Financial / Gauntlet — named curator comps only, no token/FDV verified (both are curators, not launched tokens in the sources reviewed).
- Sentora Curator — named comp only, no FDV verified.

**Sources:**
- https://coinmarketcap.com/community/articles/6aacbf7553e31e1f2fdf9d9f/
- https://www.stocktitan.net/news/GLXY/galaxy-launches-institutional-vault-exjj0z970rk9.html
- https://cvj.ai/briefing/crypto-news/galaxy-curator-institutional-onchain-yield-via-fireblocks/
- https://capwolf.com/galaxy-stablecoin-vaults-on-kamino-explained/
- https://defillama.com/protocols/risk-curators
- https://www.galaxy.com/insights/research/tokenized-glxy?utm_campaign=Weekly%20Research%20Brief%20-%20Email&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--yK3cZU5SlSr-M_gG9tJs1ZCbV8fDt1EbYQ1sL_BpOGJLG4GxGuesSeMTSt6S3oRdAXLYXW-luBmXUdZzhKwkwcRAPew
- https://www.crypheat.com/c/morpho

---

## 4. Tydro (tydro)

**What it is:** Tydro is the native lending protocol on Ink (Kraken's OP-Stack L2), built as a white-label Aave v3 instance and launched 15 Oct 2025 with $250M+ in initial liquidity from the Ink Foundation. Users supply and borrow wETH, kBTC, USDG, USDT0 and GHO.

**Token status:** No $TYDRO token exists. The token being farmed is $INK, the Ink chain token: confirmed by the Ink Foundation with a permanent 1-billion-token hard cap, structured as an ecosystem utility token, not governance — but $INK itself had not launched as of the sources reviewed (TGE guidance was H2 2026 / late Q3 2026, a window already passed by mid-Sep 2026 with no official TGE date confirmed).

**Points / airdrop program:** Yes — Tydro Ink Points. Supplying or borrowing eligible assets on Tydro earns Ink Points proportional to activity; points accrue continuously, are calculated daily and settled weekly on Mondays across 4-week seasons, and are tracked/claimed via Merkl from the same wallet. Season 1 snapshot is complete and locked; Season 2 is live until the $INK TGE. Season 2 boosts (max 50%) favour Tydro OG users (before 30 Sep 2026), Aave OG holders (pre-2024), Ink OG users, larger deposits and kBTC holders. The 45% community/airdrop allocation figure is unconfirmed by the foundation, and no points-to-token conversion rate has been published.

**Farm steps:**
1. Bridge assets to Ink L2 using the official bridge and hold ETH on Ink for gas.
2. Supply USDT0 to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.
3. Supply wETH to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.
4. Supply kBTC to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.
5. Supply USDG or GHO to Tydro on Ink and hold the supplied position to accrue Tydro Ink Points.
6. Borrow against supplied collateral on Tydro on Ink while keeping the health factor above liquidation, and check the Tydro Ink Rewards / Merkl page weekly for accrued points.

**FDV comps:**
- Aave (AAVE) — FDV ~$1.6–1.72B, TVL ~$14.8B, FDV/TVL ~0.11.
- Morpho (MORPHO) — FDV ~$1.7–1.93B, TVL ~$6–7.5B, FDV/TVL ~0.25–0.27.
- Nado (Ink perps) — named Ink-ecosystem comp only, no token/FDV verified.

**Sources:**
- https://earlyairdrops.com/ink-airdrop-guide-ink-eligibility-kraken-drops-and-ecosystem-rewards-explained/
- https://news.todayindefi.com/p/this-new-solana-perp-dex-just-launched
- https://dropstab.com/coins/ink/activities?hash=502
- https://medium.com/@INK.onchain/ink-chain-airdrop-dashboard-ink-tge-kraken-rewards-fc4b3ae9aff0
- https://coinlaunch.space/events-contests/tydro-retrodrop/
- https://www.btcc.com/en-US/square/coincentral/1072456
- https://defillama.com/protocol/aave?denomination=USD
- https://www.crypheat.com/c/morpho

---

## 5. Valos (valos)

**What it is:** Valos is a digital-asset manager providing institutional-grade yield and secured private-credit lending. On Monad it runs a $100M+ institutional private-credit vault (launched Feb 2026 on Accountable's YieldApp, denominated in Agora AUSD), lending to market makers, prime brokers, exchanges and custodians, with borrower financial health verified on-chain via Accountable's Data Verification Network.

**Token status:** No Valos protocol token was found in any source reviewed. vUSD is a Valos private-credit receipt token (a share in the credit vault, priced ~1.05 AUSD), not a Valos governance token; do not treat vUSD as a Valos token launch.

**Points / airdrop program:** No public points program found. The vault is institutional and permissioned.

**Farm steps:**
1. [UNVERIFIED] Check the Accountable YieldApp page for the RWA Backed Lending by Valos vault, since the vault is described as permissioned and not accepting deposits from outsiders.
2. [UNVERIFIED] Supply AUSD to the Valos vUSD/AUSD market on Euler on Monad only if the market is open to retail deposits at the time of checking.
3. [UNVERIFIED] Hold vUSD received from a Valos credit position instead of selling it immediately, so the position keeps accruing credit yield.
4. Monitor the Valos vault on Accountable for any change from permissioned to open deposits before attempting a deposit.
5. Do not attempt to deposit directly into the institutional Valos vault without an invitation or eligibility check, since it is permissioned.
6. Track Monad private-credit vaults on Accountable as the indirect route, rather than assuming a Valos retail vault exists.

**FDV comps:**
- Ondo Finance (ONDO) — FDV ~$2.9–3.0B, RWA AUM ~$2.8–3.47B, FDV/AUM ~0.9–1.0.
- Huma Finance (HUMA) — named private-credit comp only; price ~$0.00679 on 15 Nov 2026, FDV not verified from the sources reviewed.
- Maple Finance (SYRUP) — named private-credit comp only, no FDV verified.

**Sources:**
- https://tradingstrategy.ai/vaults/rwa-backed-lending-by-valos
- https://defillama.com/protocol/valos
- https://alearesearch.substack.com/p/monad-credit-economy
- https://www.mexc.fm/news/736350
- https://10k.nyxshcon.org/risk/euler-v2
- https://www.crypheat.com/c/ondo-finance (ONDO FDV)
- https://defillama.com/protocol/ondo-finance (ONDO FDV/AUM)

---

## 6. Lofty (lofty)

**What it is:** Lofty is a tokenised real-estate marketplace on Algorand. Each property sits in its own Wyoming DAO LLC; membership interests are sold as Algorand Standard Asset tokens at $50 each, rent is distributed daily (around midnight UTC, net of expenses) in USDC, and holders vote on repairs, rent changes, managers and sales.

**Token status:** No Lofty platform/governance token exists in the sources reviewed. The tokens that exist are per-property LLC membership tokens ($50 each, one token = one vote, max 15% of a property per investor) — securities representing a single house, not a Lofty protocol token. There is also a Lofty dollar token (USD Lofty) used on the platform; it is not a governance token.

**Points / airdrop program:** No public points program found.

**Farm steps:**
1. Create a Lofty account, complete identity verification, and browse the property marketplace on Algorand.
2. Buy property tokens for a chosen rental property on Lofty at $50 per token and hold them to receive daily rent.
3. Collect daily rent payouts in USDC from the held property tokens.
4. Vote on property decisions such as repairs, rent changes and sales when a vote opens for a property held.
5. Sell property tokens on the Lofty secondary marketplace in USDC when exiting a property position.
6. [UNVERIFIED] Join the Lofty Ventures Syndicate only after reading its own terms, since it is a separate Delaware series LP product from the main marketplace.

**FDV comps:**
- Ondo Finance (ONDO) — FDV ~$2.9–3.0B, RWA AUM ~$2.8–3.47B, FDV/AUM ~0.9–1.0.
- RealT — named tokenised-real-estate comp only, no token/FDV verified.
- Huma Finance (HUMA) — named RWA comp only, FDV not verified.

**Sources:**
- https://algorand.pxke.me/news/articles/lofty-sells-shares-of-single-rental-properties-on-algorand-paid-daily
- https://ideausher.com/blog/real-estate-tokenization-platform-development/
- https://www.legalnodes.com/article/real-estate-tokenization
- https://altstreet.investments/reference/mechanics/fractional-ownership
- https://www.crypheat.com/c/ondo-finance

---

## 7. Doppler Finance (doppler-finance)

**What it is:** Doppler Finance is a CeDeFi yield protocol built around the XRP Ledger (XRPFi): users deposit XRP (~3.2% APR) or RLUSD (~8% APR) into Doppler Vaults, the protocol allocates funds to curated institutional strategies (arbitrage, basis trading, on-chain DeFi, RWA) via custodians Fireblocks, BitGo, Copper and Ceffu, and yield auto-compounds. It expanded to Base in 2026 with cbXRP support and plans lending.

**Token status:** Yes — token EXISTS and has launched. XDP is the native utility/governance token, announced 26 Aug 2026, TGE 28 Sep 2026, total supply 10 billion, contract 0x07b3D902783c3C12b077508c3B5c00113d1291D0 on Base. Price ~$0.017–0.019, market cap ~$17–19M on ~1B circulating, FDV ~$174–189M (CoinGecko: FDV $189,196,484; OpenSea/Zerion: FDV ~$171–174M). Genesis Airdrop was 1% of supply, 100% unlocked at TGE. This contradicts the snapshot's no-token record — the token launched after that snapshot.

**Points / airdrop program:** Yes — Doppler Points (DP), historically. Users earned 0.01 DP per $1 deposited per hour, with referral bonuses and early-depositor multipliers. Doppler Points Season 2 concluded Jul 2026, registration for the XDP Genesis Airdrop then opened, and future DP seasons were described as being prepared. No live DP season was verified as open on 15 Nov 2026.

**Farm steps:**
1. Deposit XRP into the Doppler XRP Vault on XRPL using an XRPL wallet and hold the vault position.
2. Deposit RLUSD into the Doppler RLUSD Vault on XRPL and hold the vault position.
3. Deposit cbXRP into a Doppler vault on Base and hold the vault position.
4. Hold XDP staked on Base to obtain protocol privileges such as premium vaults and priority access to new products.
5. [UNVERIFIED] Stake XDP on Base, since a secondary source reports XDP staking went live on Base on 16 Oct 2026 but no official Doppler announcement was verified in this research.
6. Check the official Doppler site for a new Doppler Points season before depositing for points, since Season 2 has concluded.

**FDV comps:**
- XDP itself — FDV ~$174–189M on TVL ~$93M, FDV/TVL ~1.9–2.0 (own-token comp, point-in-time).
- Ondo Finance (ONDO) — FDV ~$2.9–3.0B, RWA AUM ~$2.8–3.47B, FDV/AUM ~0.9–1.0.
- Huma Finance (HUMA) — named RWA/CeDeFi comp only, FDV not verified.

**Sources:**
- https://www.htx.com/tokens/xdp/
- https://www.bitrue.com/blog/what-is-doppler-finance-how-does-it-work
- https://www.coingecko.com/en/coins/doppler-finance
- https://opensea.io/token/base/0x07b3d902783c3c12b077508c3b5c00113d1291d0
- https://phantom.com/tokens/base/0x07b3d902783c3c12b077508c3b5c00113d1291d0
- https://www.cointeeth.com/news/24-projects-raised-1-1-billion-verb-raised-558-million
- https://www.crypheat.com/c/ondo-finance

---

## 8. Ember (ember)

**What it is:** Ember Protocol is a vault platform incubated by the team behind Bluefin, started on Sui and now also on several EVM chains. Depositors put an asset such as USDC into an Ember vault, receive a receipt token such as eEARN, and a specialist curator runs the strategy; returns accrue as a rising receipt-token price. Curators include Ember, Bitwise, R25, Vishwa, Bluefin, Gamma, MEV Capital, Third Eye and Neuberger Berman (via the HIGH vault).

**Token status:** No Ember protocol token was found. Ember's FAQ says vault tokens are receipts and "not the same as an Ember protocol token"; as of 12 Oct 2026 no official Ember token or points programme was found. eEARN, eSUI, eBLUE and HIGH are vault receipt tokens, not an Ember governance token.

**Points / airdrop program:** No public points program found (as of 12 Oct 2026 review).

**Farm steps:**
1. Deposit USDC into the Ember Earn vault on Sui and hold eEARN receipt tokens.
2. Deposit SUI into the Ember Sui vault on Sui and hold eSUI receipt tokens.
3. Deposit BLUE into the Bluefin Vault on Ember on Sui and hold eBLUE receipt tokens.
4. Deposit USDC into the Ember High Income vault on Sui and hold HIGH receipt tokens.
5. Deposit USDC into the Ember Y10K vault and hold the vault receipt tokens.
6. Supply eEARN as collateral on Suilend on Sui to borrow against the vault position while holding eEARN.

**FDV comps:**
- Ondo Finance (ONDO) — FDV ~$2.9–3.0B, RWA AUM ~$2.8–3.47B, FDV/AUM ~0.9–1.0.
- Huma Finance (HUMA) — named RWA comp only, FDV not verified.
- Morpho (MORPHO) — FDV ~$1.7–1.93B, TVL ~$6–7.5B, FDV/TVL ~0.25–0.27 (vault-platform comp).

**Sources:**
- https://www.jewelswap.io/blog/what-is-ember-protocol
- https://www.jewelswap.io/blog/best-yield-optimizers-sui-2026
- https://tradingstrategy.ai/vaults/protocols/ember
- https://thepaypers.com/crypto-web3-and-cbdc/news/sbi-digital-markets-and-ember-protocol-sign-mou-on-rwa-tokenisation
- https://www.crypheat.com/c/ondo-finance
- https://www.crypheat.com/c/morpho

---

## 9. Noble (noble)

**What it is:** Noble is a Cosmos app-chain purpose-built for native stablecoin and RWA issuance — the main entry point for USDC into Cosmos via IBC. Its own product is Noble Dollar (USDN), a yield-bearing stablecoin issued via the M^0 protocol and 100% backed by short-term US Treasuries, paying holders ~4.2% APY simply by holding, with no staking or locking required.

**Token status:** No Noble protocol/governance token has launched in the sources reviewed. USDN is a stablecoin, not a governance token; points are described as converting to tokens later, but no token, ticker, supply or launch date was verified. Noble has processed $22B+ in volume and issued $540M+ in stablecoins as of Jan 2026 (secondary source).

**Points / airdrop program:** Yes — Noble Points, multi-season. Season 1 is completed; Season 2 started 5 Aug 2025. Deposit USDN into the Points Vault to earn 1 point per 100 USDN per day, giving up the 4.2% yield for points, with holding-duration multipliers x1 (30–59 days), x1.25 (60–89 days), x1.5 (90–119 days) and x1.75 (120+ days); a Boosted Yield Vault instead keeps base yield plus extra yield. Additional rewards were tied to USDN TVL milestones of $10M, $50M and $100M. Whether Season 2 is still live on 15 Nov 2026 is unverified — the latest sources reviewed are from Aug 2025 / Jan 2026, so confirm live status on dollar.noble.xyz before acting.

**Farm steps:**
1. Swap USDC for USDN on Osmosis and hold USDN to earn the base Treasury yield.
2. Deposit USDN into the Noble Points Vault and hold the deposit to earn Noble Points.
3. Hold USDN in the Points Vault for at least 120 days to reach the highest holding-duration multiplier.
4. Deposit USDN into the Boosted Yield Vault on Noble and hold the deposit to earn base yield plus extra yield.
5. Bridge USDN cross-chain via Wormhole NTT to use it on a supported destination chain.
6. Check the Noble Points Vault page for current season status before depositing for points, since Season 2 live status on 15 Nov 2026 is unverified.

**FDV comps:**
- Ondo Finance (ONDO) — FDV ~$2.9–3.0B, RWA AUM ~$2.8–3.47B, FDV/AUM ~0.9–1.0.
- Ethena (ENA) — named yield-stablecoin comp only, no FDV verified.
- Level (lvlUSD) — named yield-stablecoin comp only, no token/FDV verified.

**Sources:**
- https://www.techflowpost.com/en-US/article/24536
- https://www.stablecoininsider.com/noble-dollar-review/
- https://paragraph.com/@-riley/eight-fresh-stablecoin-plays-worth-your-attention
- https://bitcoinethereumnews.com/tech/m0-and-noble-set-sights-on-tethers-136b-empire/
- https://stablecoininsider.org/noble-crypto-card/
- https://www.crypheat.com/c/ondo-finance

---

## 10. Keyrock (keyrock)

**What it is:** Keyrock is a global crypto investment group and market maker acting as a risk curator: it manages on-chain yield vaults through Morpho, choosing markets, setting risk parameters and earning curator fees, without custody of client assets. DefiLlama lists it as a Risk Curator with $83.05M TVL as of 14 Nov 2026, 90.6% on Arc and the rest on Ethereum, ranking #13 among Risk Curators.

**Token status:** No Keyrock protocol token was found in any source reviewed. kUSDC / krUSDC are Morpho vault share tokens (ERC-4626 receipts for Keyrock-curated USDC vaults), not a Keyrock token.

**Points / airdrop program:** No public points program found.

**Farm steps:**
1. Deposit USDC into the Keyrock USDC vault on Ethereum via the Morpho app and hold the kUSDC vault shares.
2. Deposit USDC into the Keyrock Prime USDC vault on Arc via Morpho and hold the krUSDC vault shares.
3. Deposit USDT into the Keyrock Prime USDT vault on Ethereum via the Morpho app and hold the vault shares.
4. Deposit RLUSD into the Keyrock RLUSD vault on Ethereum via the Morpho app and hold the vault shares.
5. Hold the Keyrock vault shares and check the Morpho vault page for any third-party rewards or DAO incentives attached to the vault.
6. Withdraw the vault shares on Morpho when exiting, subject to available market liquidity in the underlying markets.

**FDV comps:**
- Morpho (MORPHO) — FDV ~$1.7–1.93B, TVL ~$6–7.5B, FDV/TVL ~0.25–0.27 (underlying vault rails).
- Steakhouse Financial / Gauntlet — named curator comps only, no token/FDV verified.
- Galaxy Curation — named curator comp only, no token/FDV verified (see section 3).

**Sources:**
- https://DeFiLlama.com/protocol/keyrock
- https://app.morpho.org/vaults
- https://docs.mercuri.finance/earn-venues
- https://github.com/DefiLlama/DefiLlama-Adapters/pull/20817
- https://docs.byzantine.fi/documentation/asset-protection/risk-framework
- https://www.crypheat.com/c/morpho

---

## Cross-cutting notes

- Only 3 of 10 have a verified live points program: Tydro (Tydro Ink Points → $INK), Noble (Noble Points, Season 2 — live status unverified as of 15 Nov 2026), and Doppler (Doppler Points — Season 2 concluded Jul 2026, future seasons only described as prepared).
- Only 1 of 10 has a launched protocol token: Doppler Finance (XDP, TGE 28 Sep 2026). Curvance (CVE) and Tydro ($INK, via Ink not Tydro) are planned/unlaunched; Noble points are promised to convert to a token that has not launched.
- 3 of 10 are effectively non-farmable by retail as a primary vault: Valos (permissioned institutional vault), Galaxy Curation (institutional via Fireblocks, retail only via Kamino/Morpho vaults), and Lagoon (infrastructure — farm the vaults built on it, many permissioned).
- FDV/TVL anchors used: Aave ~0.11, Morpho ~0.25–0.27, Ondo ~0.9–1.0 (FDV/AUM), XDP ~1.9–2.0 (own, point-in-time 15 Nov 2026).
