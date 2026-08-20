import { IconCart, IconChart, IconChat, IconMail, IconWhatsapp } from "./icons";

const NODES = [
  { icon: IconWhatsapp, x: 46, y: 96, delay: "0s" },
  { icon: IconChat, x: 176, y: 40, delay: "0.6s" },
  { icon: IconCart, x: 304, y: 40, delay: "1.2s" },
  { icon: IconChart, x: 434, y: 96, delay: "1.8s" },
  { icon: IconMail, x: 46, y: 240, delay: "2.4s" },
];

export default function FenixBotIllustration() {
  return (
    <svg
      viewBox="0 0 480 460"
      className="h-full w-full"
      role="img"
      aria-label="Agente de IA conectado a WhatsApp, chat, ventas, analitica y correo"
    >
      <defs>
        <linearGradient id="botBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#000c60" />
          <stop offset="55%" stopColor="#3b0786" />
          <stop offset="100%" stopColor="#8001a6" />
        </linearGradient>
        <radialGradient id="glowNode" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#1d1d1d" />
          <stop offset="100%" stopColor="#121212" />
        </radialGradient>
      </defs>

      {NODES.map(({ x, y }, i) => (
        <path
          key={`line-${i}`}
          className="dashed-line"
          d={`M240,205 Q${(240 + x) / 2},${(140 + y) / 2 - 20} ${x},${y + 30}`}
        />
      ))}

      {NODES.map(({ icon: Icon, x, y, delay }, i) => (
        <g key={`node-${i}`} style={{ animation: `float 4s ease-in-out ${delay} infinite` }}>
          <circle cx={x} cy={y} r="30" fill="url(#glowNode)" stroke="rgba(255,255,255,0.12)" />
          <foreignObject x={x - 12} y={y - 12} width="24" height="24">
            <Icon className="h-6 w-6 text-purple" />
          </foreignObject>
        </g>
      ))}

      <g transform="translate(240,260)">
        <rect x="-70" y="-40" width="140" height="150" rx="45" fill="url(#botBody)" />
        <rect x="-58" y="-95" width="116" height="95" rx="42" fill="url(#botBody)" />

        <rect x="-6" y="-118" width="12" height="26" rx="6" fill="url(#botBody)" />
        <circle cx="0" cy="-124" r="9" fill="#8001a6" />

        <rect x="-49" y="-78" width="98" height="60" rx="26" fill="#040404" />
        <circle cx="-20" cy="-48" r="6" fill="#fff" />
        <circle cx="20" cy="-48" r="6" fill="#fff" />
        <path d="M-16,-30 Q0,-18 16,-30" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />

        <path d="M-58,-70 q-16,0 -16,18 v14 q0,16 14,18" stroke="#040404" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M58,-70 q16,0 16,18 v14 q0,16 -14,18" stroke="#040404" strokeWidth="10" fill="none" strokeLinecap="round" />

        <circle cx="0" cy="30" r="16" fill="#040404" />
        <path d="M-8,30 l5,5 10,-11" stroke="#8001a6" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
