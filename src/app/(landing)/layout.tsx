import { FormModalProvider } from "@/components/FormModalProvider";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormModalProvider>{children}</FormModalProvider>;
}
