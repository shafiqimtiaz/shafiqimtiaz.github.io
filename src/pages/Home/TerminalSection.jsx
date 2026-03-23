import { TerminalPanel } from '../../components/ui';
import TerminalPlayback from '../../components/ui/TerminalPlayback';
import { HOME_TERMINAL_PLAYBACK } from '../../data/terminalPlayback';

export default function TerminalSection() {
  return (
    <div className="min-w-0">
      <TerminalPanel
        title="ssh root@614.514.183 > developer details"
        className="shadow-[var(--shadow-soft)]"
        bodyClassName="grid gap-0 p-5 text-[0.95rem] md:p-6"
      >
        <TerminalPlayback sessionConfig={HOME_TERMINAL_PLAYBACK} />
      </TerminalPanel>
    </div>
  );
}
