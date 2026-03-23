import { PageShell } from '../../components/layout';
import ProfileSection from './ProfileSection';
import TechStackSection from './TechStackSection';
import TimelineSection from './TimelineSection';

export default function About() {
  return (
    <PageShell>
      <div className="grid-pattern-panel pointer-events-none fixed inset-0 -z-10 opacity-[0.08]"></div>
      <ProfileSection />
      <TechStackSection />
      <TimelineSection />
    </PageShell>
  );
}
