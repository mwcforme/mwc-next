/**
 * FunnelProgressBar — 3-step progress indicator.
 *
 * Numbered circles connected by horizontal lines.
 * Completed = orange filled + checkmark, Active = orange filled + number, Upcoming = outlined muted.
 * Mobile (<640px): hide step labels, show circles + lines only.
 */

const ORANGE = "#E8670A";
const MUTED = "#9CA3AF";
const DARK = "#2A2F52";
const WHITE = "#FFFFFF";
const OSWALD = "Oswald, 'Arial Narrow', sans-serif";

const STEPS = [
  { num: 1, label: "Your Info" },
  { num: 2, label: "Your Concern" },
  { num: 3, label: "Pick a Time" },
];

interface FunnelProgressBarProps {
  /** 1-indexed active step. Pass 4 to mark all steps completed. */
  activeStep: 1 | 2 | 3 | 4;
}

export function FunnelProgressBar({ activeStep }: FunnelProgressBarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 24px 12px",
      }}
    >
      {STEPS.map((step, i) => {
        const completed = step.num < activeStep;
        const active = step.num === activeStep;
        const upcoming = step.num > activeStep;

        const circleBg = completed || active ? ORANGE : "transparent";
        const circleBorder = upcoming ? `2px solid ${DARK}` : "none";
        const numColor = completed || active ? WHITE : MUTED;
        const labelColor = completed ? ORANGE : active ? ORANGE : MUTED;
        const labelWeight = completed || active ? 700 : 500;

        return (
          <div
            key={step.num}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < STEPS.length - 1 ? 1 : "none",
            }}
          >
            {/* Step circle + label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: circleBg,
                  border: circleBorder,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden
              >
                {completed ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7.5L5.5 10L11 4"
                      stroke={WHITE}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span
                    style={{
                      fontFamily: OSWALD,
                      fontSize: 12,
                      fontWeight: 700,
                      color: numColor,
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                )}
              </span>

              {/* Label — hidden on mobile (<640px) */}
              <span
                className="hidden sm:inline"
                style={{
                  fontFamily: OSWALD,
                  fontSize: 11,
                  fontWeight: labelWeight,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: labelColor,
                  whiteSpace: "nowrap",
                }}
                aria-current={active ? "step" : undefined}
              >
                {step.label}
              </span>
            </div>

            {/* Connecting line */}
            {i < STEPS.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  minWidth: 16,
                  margin: "0 8px",
                  background: step.num < activeStep ? ORANGE : "currentColor",
                  opacity: step.num < activeStep ? 1 : 0.2,
                  borderRadius: 1,
                }}
                aria-hidden
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
