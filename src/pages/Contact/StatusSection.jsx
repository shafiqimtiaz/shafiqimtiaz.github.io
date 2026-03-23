import { externalNodes, systemStatus, infoColumns } from '../../data/links';
import { useEffect, useMemo, useRef, useState } from 'react';

export function ExternalNodeSection() {
  return (
    <>
      <div className="grid gap-6">
        <div className="relative overflow-hidden border border-[rgba(73,72,71,0.24)] bg-[var(--theme-surface-low)] p-6 shadow-[var(--shadow-soft)]">
          <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-[0.8rem] font-bold tracking-[0.18em] text-[var(--theme-text)] uppercase">
              EXTERNAL_NODES
            </h2>

            <div className="mt-5 grid gap-3">
              {externalNodes.map((node) => (
                <a
                  key={node.label}
                  className="group relative flex items-center justify-between gap-4 overflow-hidden border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface)] px-4 py-4 transition-all duration-200 hover:-translate-y-px hover:border-[var(--theme-primary)]"
                  href={node.href}
                  target={node.href.startsWith('http') ? '_blank' : undefined}
                  rel={node.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      {node.icon}
                    </span>
                    <span
                      className={`font-headline text-[0.72rem] font-bold tracking-[0.18em] uppercase ${node.accent || 'text-[var(--theme-primary)]'}`}
                    >
                      {node.label}
                    </span>
                  </div>
                  <span
                    className="material-symbols-outlined text-[var(--theme-primary)] transition-colors group-hover:text-[var(--theme-secondary)]"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function StatusSection() {
  const [liveSystemStatus, setLiveSystemStatus] = useState(systemStatus);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLiveSystemStatus((prev) =>
        prev.map((item) => {
          if (item.label === 'RESPONSE_LATENCY') {
            const latency = Math.floor(Math.random() * 12) + 12; // 12..23
            return {
              ...item,
              value: `< ${latency}_HOURS`,
            };
          }
          if (item.label === 'AVAILABILITY') {
            // Keep online status but animate a subtle phase change
            return {
              ...item,
              value: 'ONLINE [OPEN]',
              accent: 'text-[var(--theme-primary)]',
            };
          }
          return item;
        }),
      );
    }, 3000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden border border-[rgba(73,72,71,0.24)] bg-[var(--theme-surface-low)] p-6 shadow-[var(--shadow-soft)]">
      <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
      <div className="relative z-10">
        <h2 className="font-headline text-[0.8rem] font-bold tracking-[0.18em] text-[var(--theme-text)] uppercase">
          SYSTEM_STATUS
        </h2>
        <div className="mt-5 grid gap-4">
          {liveSystemStatus.map((item) => {
            const valueRender =
              item.label === 'AVAILABILITY' ? (
                <span className="inline-flex items-center gap-2">
                  <span>ONLINE</span>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-[var(--theme-text-muted)]">OPEN</span>
                </span>
              ) : (
                item.value
              );

            return (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 border-b border-[rgba(73,72,71,0.2)] pb-3 last:border-b-0 last:pb-0"
              >
                <span className="font-headline text-[0.68rem] tracking-[0.18em] text-[var(--theme-text-muted)] uppercase">
                  {item.label}
                </span>
                <span
                  className={`font-headline text-[0.72rem] font-bold tracking-[0.16em] uppercase ${item.accent}`}
                >
                  {valueRender}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const parts = [];

  if (days) parts.push(`${days}d`);
  parts.push(`${String(hours).padStart(2, '0')}h`);
  parts.push(`${String(minutes).padStart(2, '0')}m`);
  parts.push(`${String(seconds).padStart(2, '0')}s`);

  return parts.join(' ');
}

function formatUtc(date) {
  return date.toISOString().replace('T', ' ').replace(/\.\d+Z$/, ' UTC');
}

export function InfoColumnsSection() {
  const startAtRef = useRef(Date.now());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timerId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timerId);
  }, []);

  const systemClockLines = useMemo(() => {
    const duration = Date.now() - startAtRef.current;
    return [`UTC_ZULU: ${formatUtc(now)}`, `UPTIME: ${formatDuration(duration)}`];
  }, [now]);

  return (
    <div className="relative overflow-hidden border border-[rgba(73,72,71,0.24)] bg-[var(--theme-surface-low)] p-6 shadow-[var(--shadow-soft)]">
      <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="relative z-10">
        <h2 className="font-headline text-[0.8rem] font-bold tracking-[0.18em] text-[var(--theme-text)] uppercase">
          SYSTEM_INFO
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infoColumns.map((col) => {
            const lines = col.heading === 'SYSTEM_CLOCK' ? systemClockLines : col.lines;
            return (
              <div key={col.heading} className="space-y-1">
                <p className="font-headline text-[0.68rem] tracking-[0.18em] text-[var(--theme-text-muted)] uppercase">
                  {col.heading}
                </p>
                {lines.map((line) => (
                  <p key={line} className="font-mono text-sm text-[var(--theme-text)]">
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
