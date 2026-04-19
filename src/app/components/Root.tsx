import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { PAGE_TRANSITION } from "../motion/siteMotion";
import React from "react";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={PAGE_TRANSITION}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
