import { NavMobile } from "@/components/layout/mobile-nav";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import SquareLines from "@/components/square-lines/square-lines";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SquareLines />
      <div className="flex min-h-screen flex-col">
        <NavMobile />
        <NavBar scroll={true} />
        <main className="flex-1">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
