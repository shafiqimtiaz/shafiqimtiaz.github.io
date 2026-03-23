import { PageShell } from '../../components/layout';
import CaseStudiesSection from './CaseStudiesSection';
import MiniProjectsSection from './MiniProjectsSection';
import PublicRepositoriesSection from './PublicRepositoriesSection';

export default function Projects() {
  return (
    <PageShell>
      <CaseStudiesSection />
      <PublicRepositoriesSection />
      <MiniProjectsSection />
    </PageShell>
  );
}
