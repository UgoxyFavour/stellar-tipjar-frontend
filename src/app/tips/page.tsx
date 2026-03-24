import { WalletConnector } from "@/components/WalletConnector";

export default function TipsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-ink">Send a Tip</h1>
        <p className="mt-2 max-w-2xl text-ink/75">
          This is a placeholder flow. The final experience will connect your wallet, create a tip
          intent via API, and submit a Stellar transaction.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-[color:var(--surface)] p-6 shadow-card sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Wallet Connection Placeholder</h2>
        <p className="mt-2 text-sm text-ink/70">
          Connect button currently uses local state only. Replace with real wallet provider logic in
          <code className="mx-1 rounded bg-ink/5 px-1.5 py-0.5 text-xs">src/hooks/useWallet.ts</code>.
        </p>
        <div className="mt-4">
          <WalletConnector />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label htmlFor="tips-username" className="text-sm font-medium text-ink">
            Creator Username
            <input
              id="tips-username"
              disabled
              placeholder="alice"
              aria-label="Creator username (coming soon)"
              className="mt-1 w-full rounded-xl border border-ink/20 bg-white px-3 py-2 text-sm text-ink/70"
            />
          </label>
          <label htmlFor="tips-amount" className="text-sm font-medium text-ink">
            Amount
            <input
              id="tips-amount"
              disabled
              placeholder="10"
              aria-label="Tip amount (coming soon)"
              className="mt-1 w-full rounded-xl border border-ink/20 bg-white px-3 py-2 text-sm text-ink/70"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
