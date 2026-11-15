# Token Radar

[![make.fun · token-radar-01](https://make.fun/badge/token-radar-01.svg)](https://make.fun/bounty/token-radar-01?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)
[![rank](https://make.fun/badge/token-radar-01/Endijuan33/token-radar-01/rank.svg)](https://make.fun/bounty/token-radar-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)
[![reward](https://make.fun/badge/token-radar-01/Endijuan33/token-radar-01/reward.svg)](https://make.fun/bounty/token-radar-01?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)

Token Radar ranks pre-token protocols by implied launch value and gives each one a concrete farm plan. It was built for [make.fun's "Build the best token launch radar" bounty](https://make.fun/bounty/token-radar-01) ($1,325 in USDC).

## How it works

Every protocol in the sealed snapshot is scored by one function, `radar-2`:

```
implied = round(TVL x comp(category) x growth multiplier x maturity multiplier x launch likelihood)
```

- **comp(category)** is the FDV/TVL multiple that comparable launched tokens trade at (Risk Curators 0.30x, Lending 0.25x, Dexs 0.40x, and so on, documented in `lib/model.ts`).
- **Growth** tilts the score by the seven-day TVL change; **maturity** by how long the protocol has run with no token; **likelihood** by how often the category launches a token at all.
- No protocol name is special-cased. The same function scores every row.

The board has 200 rows: the 40-protocol watchlist (every protocol with at least $50M of TVL and no token on record) plus the 160 pre-token protocols below that floor with the most TVL. The 24 live-token protocols are set aside with their market caps shown.

## The farm plans

The top 40 rows carry researched farm plans (5 steps each, in `lib/research.ts`): the points program's name, the specific vault or product, the chain, and the concrete actions, each sourced from the protocol's own docs or site (notes in `research/batch-A.md` through `research/batch-D.md`). Steps that could not be verified are written generically instead of invented: no fake program names, no fake APYs, no fake dates.

The research is honest about what the snapshot gets wrong: Doppler Finance's XDP token already launched (28 Sep 2026), MEZO, PLUME, B2 and TAO already trade, USDD is itself a stablecoin, and the Lightning Network cannot issue a token. Those rows score as yield plays, not new-token farms.

## The dashboard

`dashboard/` is a static page (no network, no framework): the ranked board, a detail view per protocol with its implied-value breakdown and farm plan, and filters by category, chain, TVL range, and search. Its source fits the dossier's 64 KB text cap whole, so the judge reads all of it.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts --input <snapshot.json>
```

Node 22 or later, standard library only. The program reads the sealed snapshot, writes `out/board.json`, `out/data.js`, copies `dashboard/` and `screenshots/` to `out/`, and writes `out/dossier.json`. Running it twice writes byte-identical output.
