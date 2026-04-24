"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

interface EmailPrefs {
  tipReceived: boolean;
  milestones: boolean;
  weeklySummary: boolean;
  email: string;
}

export function EmailPreferences() {
  const [prefs, setPrefs] = useState<EmailPrefs>({
    tipReceived: true,
    milestones: true,
    weeklySummary: true,
    email: "",
  });
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const toggle = (key: keyof Omit<EmailPrefs, "email">) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/email/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prefs),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const rows: { key: keyof Omit<EmailPrefs, "email">; label: string; desc: string }[] = [
    { key: "tipReceived", label: "Tip received", desc: "Notify me when I receive a tip" },
    { key: "milestones", label: "Milestones", desc: "Notify me when I hit earning milestones" },
    { key: "weeklySummary", label: "Weekly summary", desc: "Send a weekly earnings digest" },
  ];

  return (
    <form onSubmit={handleSave} className="space-y-6 rounded-2xl border border-ink/10 bg-surface p-6">
      <h2 className="text-xl font-bold text-ink">Email Notifications</h2>

      <div>
        <label className="mb-1 block text-sm font-medium text-ink/80">Email address</label>
        <input
          type="email"
          required
          value={prefs.email}
          onChange={(e) => setPrefs((p) => ({ ...p, email: e.target.value }))}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-ink/20 bg-surface px-4 py-2 text-sm focus:border-wave focus:outline-none focus:ring-2 focus:ring-wave/20"
        />
      </div>

      <div className="space-y-3">
        {rows.map(({ key, label, desc }) => (
          <label key={key} className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-ink/10 p-4 hover:bg-ink/5">
            <div>
              <p className="font-medium text-ink">{label}</p>
              <p className="text-sm text-ink/60">{desc}</p>
            </div>
            <input
              type="checkbox"
              checked={prefs[key]}
              onChange={() => toggle(key)}
              className="h-5 w-5 accent-wave"
            />
          </label>
        ))}
      </div>

      <Button type="submit" disabled={saving} className="w-full">
        {saving ? "Saving…" : saved ? "Saved ✓" : "Save preferences"}
      </Button>
    </form>
  );
}
