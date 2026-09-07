const KEYWORDS = [
  'Pentest & Red Team',
  'Active Directory',
  'Proxmox',
  'NFC / RFID',
  'SDR & Radio',
  'Réponse à incident',
  'Agents IA autonomes',
  'DMZ & SFTP',
  'YOLOv8',
  'LLM locaux',
  'Docker',
  'VLAN',
];

/** Bande défilante, purement décorative : dupliquée et masquée aux lecteurs d'écran. */
export default function Marquee() {
  return (
    <div className="border-y border-night-border bg-night-deep/60 py-4">
      <div className="marquee-mask overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-10">
              {KEYWORDS.map((word) => (
                <li
                  key={word}
                  className="flex shrink-0 items-center gap-10 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint"
                >
                  {word}
                  <span className="text-accent">◆</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
