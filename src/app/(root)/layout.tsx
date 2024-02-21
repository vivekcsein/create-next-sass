import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section id="headerLoader" className="sticky top-0 z-50">
        <Header />
      </section>
      <main className="root relative">
        <div className="root-container">
          <div className="wrapper">{children}</div>
        </div>
      </main>
      <section id="footerLoader" className="z-50">
        <Footer />
      </section>
    </>
  );
};

export default Layout;
