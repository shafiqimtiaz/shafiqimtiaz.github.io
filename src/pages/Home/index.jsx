import { PageShell } from '../../components/layout';
import HeroSection from './HeroSection';
import TerminalSection from './TerminalSection';
import HistorySection from './HistorySection';
import StatsSection from './StatsSection';

export default function Home() {
  return (
    <PageShell>
      <section className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <HeroSection />
        <TerminalSection />
      </section>
      <HistorySection />
      <StatsSection />
    </PageShell>
  );
}
