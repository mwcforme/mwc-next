"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

/* ── Context ── */
interface FormModalCtx {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const Ctx = createContext<FormModalCtx>({
  open: () => {},
  close: () => {},
  isOpen: false,
});

export const useFormModal = () => useContext(Ctx);

/* ── Modal ── */
function FormModal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    contentRef.current?.focus();
  }, []);

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Book your visit"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(11, 16, 41, 0.60)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: 16,
      }}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          maxHeight: "calc(100dvh - 32px)",
          overflowY: "auto",
          overflowX: "hidden",
          outline: "none",
          background: "#fff",
          borderRadius: 16,
          padding: "28px 24px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close form"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 10,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "none",
            background: "#F3F4F6",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={16} strokeWidth={2.5} color="#374151" />
        </button>

        {/* Form with light theme */}
        <LeadForm formId="modal-form" source="next-modal" dark={false} />
      </div>
    </div>
  );
}

/* ── Provider ── */
export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ctx.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false), isOpen }}
    >
      {children}
      {isOpen && <FormModal onClose={() => setIsOpen(false)} />}
    </Ctx.Provider>
  );
}
