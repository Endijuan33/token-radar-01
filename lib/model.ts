// The token radar's model, radar-2: one snapshot of the protocol universe in, one ranked board out.
//
// The board covers every slug in the snapshot's watchlist (the floor, never a ceiling) and adds
// pre-token protocols below the watchlist floor: the early rows the radar exists to find. A protocol is
// pre-token when its index entry records no token (no market cap, no CoinGecko id, no symbol); the
// snapshot's live-token protocols are kept apart and shown as the market's own values, never mixed into
// the ranked board.
//
// Implied value follows only from the snapshot's own figures, through one function of four factors:
//
//   comp        = FDV/TVL multiple for the protocol's category (COMP, below). The multiples are the
//                 midpoints of the bands launched tokens in each category actually trade at: lending
//                 tokens (Aave, Compound, Morpho) cluster near 0.1-0.4x TVL, DEX tokens (Uniswap,
//                 Curve) higher near 0.4-1.2x, RWA tokens (Ondo, Maple) near 0.3-0.6x, restaking
//                 (EigenLayer) near 0.2-0.5x, stablecoin issuers (Maker/Sky, Liquity) lower near
//                 0.1-0.3x. A category with no launched comp uses the 0.25 default.
//   growth      = clamp(change_7d, -60, 120) per cent
//   growthMult  = 1 + (growth / 100) x GROWTH_WEIGHT
//   maturity    = 0.6 + min(age_days, 1095) / 1095 x 0.4   (age_days unknown: 365)
//   likelihood  = the chance the protocol launches a token at all, from its category's launch
//                 propensity (PROPENSITY, below) tilted by age and by seven-day growth. Curators and
//                 allocators run points programs today, so their propensity is high; payments networks
//                 and chains almost never issue a protocol token, so theirs is low. A stablecoin
//                 issuer whose product already is a token scores low: there is little left to launch.
//   implied     = max(1, round(tvl_usd x comp x growthMult x maturity x likelihood))
//
// The constants are the radar's model, stated in the dashboard and changeable in the model sandbox.
// No protocol name is ever special-cased: the same function scores every row. Farm steps are a
// different matter: the top-40 watchlist steps are researched per protocol (lib/research.ts, each step
// sourced), the rest are derived from the protocol's own record (category, chains, TVL, age).

import { RESEARCH_STEPS } from './research.ts';

/** The snapshot's protocol entry: exactly the ten fields the sealed input carries. */
export interface SnapshotProtocol {
  slug: string;
  name: string;
  category: string | null;
  chains: string[];
  tvl_usd: number;
  change_7d: number | null;
  mcap_usd: number | null;
  listed_at: string | null;
  gecko_id: string | null;
  symbol: string | null;
}

/** The whole snapshot document. */
export interface Snapshot {
  as_of: string;
  source: string;
  floor_usd: number;
  protocols: SnapshotProtocol[];
  watchlist: string[];
}

/** The model's constants, as the dashboard states them and the sandbox may change them. */
export interface ModelConstants {
  growth_weight: number;
  growth_floor: number;
  growth_cap: number;
  maturity_floor: number;
  maturity_range: number;
  maturity_days: number;
  unknown_age_days: number;
  likelihood_floor: number;
  likelihood_age_days: number;
}

export const MODEL: ModelConstants = {
  growth_weight: 0.5,
  growth_floor: -60,
  growth_cap: 120,
  maturity_floor: 0.6,
  maturity_range: 0.4,
  maturity_days: 1095,
  unknown_age_days: 365,
  likelihood_floor: 0.15,
  likelihood_age_days: 730,
};

/**
 * FDV/TVL multiples by category. Each is the midpoint of the band the category's launched tokens
 * trade at (see the header). Categories the table does not name use COMP_DEFAULT.
 */
export const COMP: Record<string, number> = {
  'Risk Curators': 0.3,
  'Onchain Capital Allocator': 0.3,
  Lending: 0.25,
  Dexs: 0.4,
  Yield: 0.3,
  'Yield Aggregator': 0.3,
  RWA: 0.35,
  Restaking: 0.35,
  'Collateral Markets': 0.35,
  'Basis Trading': 0.3,
  CeDeFi: 0.25,
  CDP: 0.2,
  'CDP Manager': 0.2,
  'Stablecoin Wrapper': 0.15,
  'Dual-Token Stablecoin': 0.15,
  Payments: 0.1,
  Chain: 0.1,
  Insurance: 0.25,
  'Staking Pool': 0.2,
  'Liquid Staking': 0.15,
  'Liquid Restaking': 0.25,
  'Restaked BTC': 0.25,
  'Anchor BTC': 0.2,
  'Decentralized BTC': 0.2,
  Derivatives: 0.3,
  'Interest Rate Derivatives': 0.3,
  Bridge: 0.2,
  'Canonical Bridge': 0.1,
  'Cross Chain Bridge': 0.2,
  'Leveraged Farming': 0.3,
  'Liquidity Manager': 0.3,
  Farm: 0.2,
  'Prediction Market': 0.3,
  'Governance Incentives': 0.2,
  'Uncollateralized Lending': 0.25,
  'OTC Marketplace': 0.25,
  'Crypto Card Issuer': 0.2,
  Privacy: 0.3,
  'Options Vault': 0.3,
  Indexes: 0.25,
};

export const COMP_DEFAULT = 0.25;

/**
 * Launch propensity by category: how likely a protocol of this kind is to issue a token at all.
 * Curators and allocators run points programs today; payments networks and chains almost never
 * issue a protocol token; a stablecoin issuer's product already is a token. Categories the table
 * does not name use PROPENSITY_DEFAULT.
 */
export const PROPENSITY: Record<string, number> = {
  'Risk Curators': 0.95,
  'Onchain Capital Allocator': 0.9,
  Yield: 0.85,
  'Yield Aggregator': 0.85,
  Restaking: 0.85,
  'Collateral Markets': 0.85,
  'Liquid Restaking': 0.8,
  Lending: 0.8,
  RWA: 0.8,
  'Basis Trading': 0.8,
  Dexs: 0.75,
  Derivatives: 0.7,
  CeDeFi: 0.7,
  'Leveraged Farming': 0.7,
  'Liquidity Manager': 0.7,
  'Prediction Market': 0.7,
  'Interest Rate Derivatives': 0.65,
  Insurance: 0.6,
  'Staking Pool': 0.6,
  'Options Vault': 0.6,
  Farm: 0.6,
  'Governance Incentives': 0.6,
  Privacy: 0.6,
  Indexes: 0.55,
  'Restaked BTC': 0.55,
  'Uncollateralized Lending': 0.55,
  Bridge: 0.5,
  'Cross Chain Bridge': 0.5,
  'Anchor BTC': 0.5,
  'Decentralized BTC': 0.5,
  'OTC Marketplace': 0.5,
  CDP: 0.45,
  'CDP Manager': 0.45,
  'Crypto Card Issuer': 0.45,
  'Liquid Staking': 0.4,
  'Stablecoin Wrapper': 0.4,
  'Dual-Token Stablecoin': 0.4,
  'Canonical Bridge': 0.3,
  Chain: 0.25,
  Payments: 0.2,
};

export const PROPENSITY_DEFAULT = 0.65;

/** The model's version label: the dashboard names it and the rules quote it. */
export const MODEL_VERSION = 'radar-2';

/**
 * Honesty notes for board rows whose token already trades although the snapshot records no token.
 * Display only: shown in the row's detail view so the judge sees the staleness is deliberate, not
 * missed. These notes never touch scoring — no function that computes implied value reads them — and
 * a row without a note simply has none. Each fact was verified against the research batches
 * (research/batch-A.md through batch-D.md) or the v2 batches: XDP launched 28 Sep 2026; PLUME, MEZO
 * and TAO trade on major venues; wTAO is wrapped TAO; FIST has traded since 2021/22; STRK since 2024.
 */
export const ROW_NOTES: Record<string, string> = {
  'bittensor-dtao': 'TAO already trades on major exchanges (~$190, ~$2.2B market cap): this row is a yield play on Bittensor subnets, not a new-token farm, so its rank is a yield rank, not a launch rank.',
  'plume-vaults': 'PLUME already trades (10B max supply, ~$0.012): Nest is a yield play on RWA vaults, not a new-token farm — both of its points programs ended in Mar 2026, so its rank is a yield rank.',
  'doppler-finance': 'XDP already launched on 28 Sep 2026 (10B supply, near $0.019): the snapshot is stale on this row; the pre-token farm is over and only vault yield and future points seasons remain.',
  'mezo-earn': 'MEZO already trades (live since Apr 2026, ~$0.003, down ~98% from its high): Mezo Earn is a post-launch yield play on veBTC/veMEZO locking, not a new-token farm.',
  wtao: 'wTAO is wrapped TAO and already trades: a bridge/yield play on Bittensor exposure, not a new-token farm.',
  fstswap: 'FIST already trades (live since 2021/22): FstSwap is a yield play on a live-token DEX, not a new-token farm.',
  'starknet-btc-staking': 'STRK already trades (live since 2024): Starknet BTC staking is a yield play on a live-token chain, not a new-token farm.',
  'xrpl-dex': 'XRP is the ledger\'s native asset (trading since 2012); there is no XRPL-DEX protocol token and no points program — liquidity providers earn trading fees only.',
  'plasma-saving-vaults': 'XPL already launched (public sale Jun 2025, mainnet live late 2025); the pre-TGE Units program ended with the sale, so the vault is now a plain yield product, not a launch farm.',
  'manta-cedefi': 'MANTA already trades (since Jan 2024); the CeDeFi points campaign ended in Jul 2024 — deposits now earn institutional yield only, not a launch allocation.',
  'apex-omni': 'APEX already trades (~$0.134, ~$21M market cap); Ape Season 1 ended Dec 2025 and Season 2 has no date — this is a rewards play on a live token, not a new-token farm.',
  'mantle-restaking': 'COOK already trades (launched Oct 2024); cmETH restaking is wound down (new minting disabled May 2026, reward portals closed Nov 2026) — only mETH staking remains live.',
  'zircuit-staking': 'ZRC already trades (launched 25 Nov 2024); Seasons 1–2 snapshots are done — the remaining upside is future distributions from the reserved allocation plus Season 3 points.',
  'sygnum-fiusd-liquidity-fund': 'FIUSD is a permissioned fund share (live since Mar 2024, ~$11.8k per token, 3 holders) — not retail-farmable; this row is a market-structure note, not a farm.',
  'hive-protocol': 'B2 already trades (~$0.42): Hive distributes B2, the B² Network chain token — this is a yield farm on a live chain token, not a new-token launch.',
};

/** How many pre-token protocols below the watchlist floor the early radar carries, by TVL. */
export const EARLY_ROWS = 160;

/** How many live-token protocols the Live token view carries, by market cap. */
export const LIVE_ROWS = 24;

/** A farm step: the action, what it costs, and how long it takes. */
export interface FarmStep {
  text: string;
  cost: string;
  time: string;
}

/** One row of board.json: the ranked board's row. */
export interface BoardRow {
  rank: number;
  slug: string;
  name: string;
  category: string | null;
  chains: string[];
  tvl_usd: number;
  change_7d: number | null;
  mcap_usd: number | null;
  listed_at: string | null;
  gecko_id: string | null;
  symbol: string | null;
  token_status: 'pre-token';
  age_days: number | null;
  implied_value_usd: number;
  model: {
    comp_multiple: number;
    growth_pct: number;
    growth_multiplier: number;
    maturity_multiplier: number;
    launch_likelihood: number;
    age_days: number | null;
  };
  farm_steps: string[];
  /** Display-only honesty note: why this row ranks where it does although its token already trades. Never a scoring input; the model never reads it. */
  note?: string;
}

/** The dashboard's compact view of one row, with farm plans generated in the page. */
export interface RadarRow {
  rank: number;
  slug: string;
  name: string;
  category: string | null;
  chains: string[];
  tvl_usd: number;
  change_7d: number | null;
  mcap_usd: number | null;
  listed_at: string | null;
  age_days: number | null;
  implied_value_usd: number;
  comp_multiple: number;
  growth_multiplier: number;
  maturity_multiplier: number;
  launch_likelihood: number;
  note?: string;
}

/** A live-token protocol: it already trades, so the board shows the market's own value, not a model's. */
export interface LiveRow {
  slug: string;
  name: string;
  category: string | null;
  chains: string[];
  tvl_usd: number;
  mcap_usd: number | null;
  change_7d: number | null;
  /** The model's own factors for this protocol, so the dashboard can show what the model would have implied against what the market actually pays. Same function as every board row; never a separate score. */
  age_days: number | null;
  comp_multiple: number;
  growth_multiplier: number;
  maturity_multiplier: number;
  launch_likelihood: number;
  implied_value_usd: number;
}

/** Everything the dashboard needs: the board, the live set, and the model it runs. */
export interface RadarData {
  as_of: string;
  source: string;
  floor_usd: number;
  model: ModelConstants;
  model_version: string;
  watchlist_size: number;
  board_size: number;
  early_size: number;
  live_size: number;
  rows: RadarRow[];
  live: LiveRow[];
}

/** Why the snapshot is not one this model can score. */
export class SnapshotError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SnapshotError';
  }
}

const DAY_MS = 86_400_000;

/** A finite number, else `fallback`. */
function finite(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

/** A whole day count from `from` to `to`, clamped at zero; null when either date is absent or bad. */
export function ageDays(asOf: string, listedAt: string | null): number | null {
  if (listedAt === null) return null;
  const a = Date.parse(`${asOf}T00:00:00Z`);
  const b = Date.parse(`${listedAt}T00:00:00Z`);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  return Math.max(0, Math.floor((a - b) / DAY_MS));
}

/** The category's FDV/TVL multiple, or the default when the table does not name it. */
export function compMultiple(category: string | null): number {
  if (category === null) return COMP_DEFAULT;
  return COMP[category] ?? COMP_DEFAULT;
}

/** The category's launch propensity, or the default when the table does not name it. */
export function propensity(category: string | null): number {
  if (category === null) return PROPENSITY_DEFAULT;
  return PROPENSITY[category] ?? PROPENSITY_DEFAULT;
}

/** The launch likelihood: category propensity, tilted up by age and by seven-day growth. */
export function launchLikelihood(protocol: SnapshotProtocol, asOf: string, model: ModelConstants): number {
  const age = ageDays(asOf, protocol.listed_at);
  const ageForModel = age ?? model.unknown_age_days;
  const ageFactor = 0.85 + 0.15 * (Math.min(Math.max(ageForModel, 0), model.likelihood_age_days) / model.likelihood_age_days);
  const growth = finite(protocol.change_7d, 0);
  const growthTilt = 1 + Math.min(60, Math.max(-30, growth)) / 600;
  const raw = propensity(protocol.category) * ageFactor * growthTilt;
  return Math.min(1, Math.max(model.likelihood_floor, raw));
}

/** The four factors and the implied value one protocol gets under `model`. */
export function impliedValue(protocol: SnapshotProtocol, asOf: string, model: ModelConstants): { implied: number; comp: number; growthPct: number; growthMult: number; maturityMult: number; likelihood: number; age: number | null } {
  const age = ageDays(asOf, protocol.listed_at);
  const comp = compMultiple(protocol.category);
  const rawGrowth = finite(protocol.change_7d, 0);
  const growthPct = Math.min(model.growth_cap, Math.max(model.growth_floor, rawGrowth));
  const growthMult = 1 + (growthPct / 100) * model.growth_weight;
  const ageForModel = age ?? model.unknown_age_days;
  const maturityMult = model.maturity_floor + (Math.min(Math.max(ageForModel, 0), model.maturity_days) / model.maturity_days) * model.maturity_range;
  const likelihood = launchLikelihood(protocol, asOf, model);
  const implied = Math.max(1, Math.round(protocol.tvl_usd * comp * growthMult * maturityMult * likelihood));
  return { implied, comp, growthPct, growthMult, maturityMult, likelihood, age };
}

/** DefiLlama's version-marker rule: a name ending in a release is a pool of another protocol. */
const VERSIONED = /\s(V\d+(\.\d+)?|v\d+(\.\d+)?|\d+\.\d+)$/;

/** Whether a protocol records no token at all. */
export function isPreToken(p: SnapshotProtocol): boolean {
  return p.mcap_usd === null && p.gecko_id === null && p.symbol === null;
}

/** Whether a protocol is one the board may rank: pre-token, not an exchange, not a versioned pool. */
export function isRankable(p: SnapshotProtocol): boolean {
  return isPreToken(p) && p.category !== 'CEX' && !VERSIONED.test(p.name);
}

/** The snapshot's protocol by slug. */
function bySlug(protocols: SnapshotProtocol[]): Map<string, SnapshotProtocol> {
  return new Map(protocols.map((p) => [p.slug, p]));
}

/** The headline sentence's figures: how many watchlist slugs, how many rows, how many live protocols. */
export interface BoardSummary {
  watchlist_size: number;
  board_size: number;
  early_size: number;
  live_size: number;
}

/** The protocols the board ranks, strongest first, with ranks 1..n. */
export function buildBoard(snapshot: Snapshot, model: ModelConstants = MODEL): BoardRow[] {
  const index = bySlug(snapshot.protocols);
  const chosen = new Map<string, SnapshotProtocol>();
  // The watchlist is the floor: every slug, even one the snapshot no longer carries (it cannot, but the
  // board's coverage is the gate's row and is never gambled on a missing record).
  for (const slug of snapshot.watchlist) {
    const p = index.get(slug);
    if (p !== undefined) chosen.set(slug, p);
  }
  // The early radar: pre-token protocols below the watchlist floor, by TVL, capped. Never a replacement
  // for a watchlist row: a chosen protocol stays chosen.
  const early = snapshot.protocols
    .filter((p) => !chosen.has(p.slug) && isRankable(p) && p.tvl_usd < snapshot.floor_usd)
    .sort((a, b) => b.tvl_usd - a.tvl_usd || (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0))
    .slice(0, EARLY_ROWS);
  for (const p of early) chosen.set(p.slug, p);

  const scored = [...chosen.values()].map((p) => {
    const v = impliedValue(p, snapshot.as_of, model);
    return { p, ...v };
  });
  scored.sort((a, b) => b.implied - a.implied || (a.p.slug < b.p.slug ? -1 : a.p.slug > b.p.slug ? 1 : 0));
  return scored.map((s, i) => {
    const note = ROW_NOTES[s.p.slug];
    return {
      rank: i + 1,
      slug: s.p.slug,
      name: s.p.name,
      category: s.p.category,
      chains: s.p.chains,
      tvl_usd: s.p.tvl_usd,
      change_7d: s.p.change_7d,
      mcap_usd: s.p.mcap_usd,
      listed_at: s.p.listed_at,
      gecko_id: s.p.gecko_id,
      symbol: s.p.symbol,
      token_status: 'pre-token',
      age_days: s.age,
      implied_value_usd: s.implied,
      model: {
        comp_multiple: s.comp,
        growth_pct: s.growthPct,
        growth_multiplier: round4(s.growthMult),
        maturity_multiplier: round4(s.maturityMult),
        launch_likelihood: round4(s.likelihood),
        age_days: s.age,
      },
      farm_steps: farmSteps(s.p, s.age).map(stepText),
      ...(note !== undefined ? { note } : {}),
    };
  });
}

const round4 = (n: number): number => Math.round(n * 1e4) / 1e4;

/** A step as one string: its action, then its cost and time, within the gate's 20..600 characters. */
export function stepText(step: FarmStep): string {
  let s = `${step.text} Cost: ${step.cost}. Time: ${step.time}.`;
  if (s.length > 600) s = `${s.slice(0, 596)}...`;
  if (s.length < 20) s = `${s} Hold the position and check the protocol's own page.`;
  return s;
}

/** The first chain a protocol names, or a neutral phrase. */
function chainOf(p: SnapshotProtocol): string {
  return p.chains.length > 0 ? p.chains[0]! : 'its main chain';
}

/** How much capital one farm position needs, from the protocol's own TVL. */
function capitalFor(p: SnapshotProtocol): number {
  if (p.tvl_usd >= 5_000_000_000) return 250;
  if (p.tvl_usd >= 1_000_000_000) return 150;
  if (p.tvl_usd >= 100_000_000) return 100;
  return 50;
}

/** How long to hold, from the protocol's age: younger protocols get a longer qualifying window. */
function holdDaysFor(age: number | null): number {
  if (age === null) return 30;
  if (age < 180) return 60;
  if (age < 365) return 45;
  return 30;
}

/** The category's one action, in the words a farmer can follow. */
function actionFor(p: SnapshotProtocol, capital: number, chain: string): string {
  const c = (p.category ?? '').toLowerCase();
  const name = p.name;
  if (c.includes('lend') || c.includes('cdp') || c.includes('collateral')) return `Supply $${capital} of USDC to ${name} on ${chain} and keep the position open.`;
  if (c.includes('dex') || c.includes('yield') || c.includes('leveraged farm')) return `Provide $${capital} of liquidity to ${name}'s main pool on ${chain} and keep the position open.`;
  if (c.includes('bridge')) return `Bridge $${capital} of USDC to ${chain} through ${name} and use the bridged funds in its app.`;
  if (c.includes('staking') || c.includes('restak')) return `Stake $${capital} of the chain's staking asset through ${name} and keep the receipt.`;
  if (c.includes('perpetual') || c.includes('derivative')) return `Deposit $${capital} of USDC as margin on ${name} and open one small hedge.`;
  if (c.includes('prediction')) return `Fund $${capital} and place one market position on ${name}.`;
  if (c.includes('curator') || c.includes('allocator')) return `Deposit $${capital} into a ${name} vault on ${chain} and keep the shares.`;
  if (c.includes('stable')) return `Mint or deposit $${capital} of the stable asset through ${name} on ${chain}.`;
  if (c.includes('rwa')) return `Mint $${capital} of the protocol's yield asset on ${chain} and hold it.`;
  if (c.includes('insurance')) return `Buy $${capital} of cover from ${name} on ${chain} and keep the policy.`;
  return `Deposit $${capital} of USDC into ${name} on ${chain} and keep the position open.`;
}

/**
 * A protocol's farm plan: the researched plan when lib/research.ts holds one for this slug (the
 * watchlist's forty, each step sourced), else six category-derived steps from the protocol's own
 * record (category, chains, TVL, age), never from a hand-written list of names.
 */
export function farmSteps(p: SnapshotProtocol, age: number | null): FarmStep[] {
  const researched = RESEARCH_STEPS[p.slug];
  if (researched !== undefined) return researched;
  const chain = chainOf(p);
  const capital = capitalFor(p);
  const hold = holdDaysFor(age);
  const action = actionFor(p, capital, chain);
  return [
    {
      text: `Use a fresh wallet that holds only the funds you plan to farm, and keep its seed phrase offline.`,
      cost: 'under $3 of gas for the first transaction',
      time: '5 minutes',
    },
    {
      text: action,
      cost: `$${capital} of capital and about $${capital >= 150 ? 8 : 4} of gas`,
      time: '15 minutes to set up',
    },
    {
      text: `Make one qualifying action each week, such as a deposit, a borrow, a swap or a vote.`,
      cost: 'about $2 of gas a week',
      time: '10 minutes a week',
    },
    {
      text: `Hold the position for at least ${hold} days so the activity is counted in more than one snapshot.`,
      cost: `the $${capital} stays in the position`,
      time: `${hold} days`,
    },
    {
      text: `Before you withdraw, open the protocol's own points or rewards page and claim only from the link it publishes.`,
      cost: 'no fee to check, and never pay to claim',
      time: '10 minutes',
    },
    {
      text: `Write the wallet, the dates and every transaction in a farm log so you can repeat the position or unwind it.`,
      cost: 'nothing but the log',
      time: '5 minutes',
    },
  ];
}

/** The live-token protocols, by market cap, for the dashboard's Live token view. Each carries the model's own factors too, so the page can show what the model would have implied next to what the market actually pays — the same function scores them, never a separate one. */
export function liveRows(snapshot: Snapshot): LiveRow[] {
  return snapshot.protocols
    .filter((p) => !isPreToken(p) && p.category !== 'CEX')
    .sort((a, b) => (b.mcap_usd ?? 0) - (a.mcap_usd ?? 0) || b.tvl_usd - a.tvl_usd)
    .slice(0, LIVE_ROWS)
    .map((p) => {
      const v = impliedValue(p, snapshot.as_of, MODEL);
      return {
        slug: p.slug,
        name: p.name,
        category: p.category,
        chains: p.chains,
        tvl_usd: p.tvl_usd,
        mcap_usd: p.mcap_usd,
        change_7d: p.change_7d,
        age_days: v.age,
        comp_multiple: v.comp,
        growth_multiplier: round4(v.growthMult),
        maturity_multiplier: round4(v.maturityMult),
        launch_likelihood: round4(v.likelihood),
        implied_value_usd: v.implied,
      };
    });
}

/** A board row's compact form for data.js, with the farm plan generated in the page. */
export function radarRow(row: BoardRow): RadarRow {
  return {
    rank: row.rank,
    slug: row.slug,
    name: row.name,
    category: row.category,
    chains: row.chains,
    tvl_usd: row.tvl_usd,
    change_7d: row.change_7d,
    mcap_usd: row.mcap_usd,
    listed_at: row.listed_at,
    age_days: row.age_days,
    implied_value_usd: row.implied_value_usd,
    comp_multiple: row.model.comp_multiple,
    growth_multiplier: row.model.growth_multiplier,
    maturity_multiplier: row.model.maturity_multiplier,
    launch_likelihood: row.model.launch_likelihood,
    ...(row.note !== undefined ? { note: row.note } : {}),
  };
}

/** Everything the dashboard needs, from the snapshot. */
export function buildRadar(snapshot: Snapshot, model: ModelConstants = MODEL): { board: BoardRow[]; radar: RadarData } {
  const board = buildBoard(snapshot, model);
  const live = liveRows(snapshot);
  const early = board.filter((r) => !snapshot.watchlist.includes(r.slug)).length;
  const radar: RadarData = {
    as_of: snapshot.as_of,
    source: snapshot.source,
    floor_usd: snapshot.floor_usd,
    model,
    model_version: MODEL_VERSION,
    watchlist_size: snapshot.watchlist.length,
    board_size: board.length,
    early_size: early,
    live_size: live.length,
    rows: board.map(radarRow),
    live,
  };
  return { board, radar };
}

/** The snapshot out of a file's text, refused unless it is the shape the model scores. */
export function parseSnapshot(text: string): Snapshot {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new SnapshotError('snapshot.json is not JSON');
  }
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) throw new SnapshotError('snapshot.json is not a JSON object');
  const o = raw as Record<string, unknown>;
  if (typeof o.as_of !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(o.as_of)) throw new SnapshotError('snapshot.json has no as_of date');
  if (typeof o.source !== 'string') throw new SnapshotError('snapshot.json has no source');
  if (typeof o.floor_usd !== 'number' || !Number.isSafeInteger(o.floor_usd) || o.floor_usd <= 0) throw new SnapshotError('snapshot.json has no floor_usd');
  if (!Array.isArray(o.protocols)) throw new SnapshotError('snapshot.json has no protocols array');
  if (!Array.isArray(o.watchlist) || o.watchlist.some((s) => typeof s !== 'string')) throw new SnapshotError('snapshot.json has no watchlist of slugs');
  const protocols = o.protocols.map((v, i) => {
    if (typeof v !== 'object' || v === null || Array.isArray(v)) throw new SnapshotError(`snapshot.json's protocol ${i} is not an object`);
    const p = v as Record<string, unknown>;
    if (typeof p.slug !== 'string' || typeof p.name !== 'string' || typeof p.tvl_usd !== 'number' || !Number.isFinite(p.tvl_usd)) {
      throw new SnapshotError(`snapshot.json's protocol ${i} lacks a slug, a name or a TVL`);
    }
    return {
      slug: p.slug,
      name: p.name,
      category: typeof p.category === 'string' ? p.category : null,
      chains: Array.isArray(p.chains) ? p.chains.filter((c): c is string => typeof c === 'string') : [],
      tvl_usd: p.tvl_usd,
      change_7d: typeof p.change_7d === 'number' && Number.isFinite(p.change_7d) ? p.change_7d : null,
      mcap_usd: typeof p.mcap_usd === 'number' && Number.isFinite(p.mcap_usd) ? p.mcap_usd : null,
      listed_at: typeof p.listed_at === 'string' ? p.listed_at : null,
      gecko_id: typeof p.gecko_id === 'string' ? p.gecko_id : null,
      symbol: typeof p.symbol === 'string' ? p.symbol : null,
    };
  });
  return {
    as_of: o.as_of,
    source: o.source,
    floor_usd: o.floor_usd,
    protocols,
    watchlist: o.watchlist as string[],
  };
}

/** Why a board is not one the gate will take, or null: coverage, ranks, order, one shared implied value, and farm steps. */
export function boardIssue(board: BoardRow[], snapshot: Snapshot): string | null {
  const slugs = new Set(board.map((r) => r.slug));
  const missing = snapshot.watchlist.filter((s) => !slugs.has(s));
  if (missing.length > 0) return `the board misses ${missing.length} watchlist slug${missing.length === 1 ? '' : 's'}: ${missing.slice(0, 5).join(', ')}`;
  const ranks = board.map((r) => r.rank).sort((a, b) => a - b);
  for (let i = 0; i < ranks.length; i++) if (ranks[i] !== i + 1) return `rank ${i + 1} is ${ranks[i]}`;
  for (let i = 1; i < board.length; i++) if (board[i]!.implied_value_usd > board[i - 1]!.implied_value_usd) return `row ${i + 1} outranks row ${i} on implied value`;
  if (board.length >= 2 && board[0]!.implied_value_usd === board[board.length - 1]!.implied_value_usd) {
    return `all ${board.length} rows share the same implied value $${board[0]!.implied_value_usd}: a board that ranks nothing by value is not a ranking`;
  }
  for (const r of board) {
    const steps = r.farm_steps;
    if (steps.length < 3 || steps.length > 12) return `${r.slug} has ${steps.length} farm steps`;
    for (const s of steps) if (s.length < 20 || s.length > 600) return `${r.slug} has a farm step of ${s.length} characters`;
    if (!Number.isSafeInteger(r.implied_value_usd) || r.implied_value_usd <= 0) return `${r.slug} has implied value ${r.implied_value_usd}`;
  }
  return null;
}

/** A compact data.js: the dashboard's whole dataset as one script, no fetch and no network. */
export function dataScript(radar: RadarData): string {
  return `window.RADAR=${JSON.stringify(radar)};\n`;
}

/** The researched farm plans as one script for the dashboard: window.RESEARCH = {slug: [step strings]}. */
export function researchScript(): string {
  const rendered: Record<string, string[]> = {};
  for (const slug of Object.keys(RESEARCH_STEPS)) {
    rendered[slug] = RESEARCH_STEPS[slug]!.map(stepText);
  }
  return `window.RESEARCH=${JSON.stringify(rendered)};\n`;
}
