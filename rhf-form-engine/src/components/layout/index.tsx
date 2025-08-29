import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh]  flex flex-col">
      <Header />
      <main className="flex-1 p-2 min-h-0 overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
