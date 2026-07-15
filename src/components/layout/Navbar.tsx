"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

type Menu =
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };

const menus: Menu[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Tentang",
    href: "/tentang",
  },
  {
    title: "BPRI",
    children: [
      {
        title: "Struktur",
        href: "/struktur",
      },
      {
        title: "Satuan Kerja",
        href: "/satuan-kerja",
      },
      {
        title: "Mekanisme",
        href: "/mekanisme",
      },
    ],
  },
  {
    title: "Dokumen",
    href: "/dokumen",
  },
  {
    title: "Kontak",
    href: "/kontak",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bpriOpen, setBpriOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="w-70 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="BPRI IKASA"
            >
              <Image
                src="/images/bpri-logo-nobg.png"
                alt="BPRI IKASA"
                width={60}
                height={60}
                priority
                className="shrink-0"
              />

              <div className="-space-y-1">
                <h1 className="text-lg font-bold tracking-tight text-slate-900">
                  BPRI
                </h1>

                <p className="text-xs font-medium text-slate-500">
                  Badan Percepatan Revitalisasi IKASA
                </p>
              </div>
            </Link>
          </div>

          {/* Menu */}

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {menus.map((menu) => {
                // Dropdown
                if ("children" in menu) {
                  const active = menu.children.some(
                    (item) => pathname === item.href,
                  );

                  return (
                    <li key={menu.title} className="group relative">
                      <button
                        className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                          active
                            ? "text-red-700"
                            : "text-slate-600 hover:text-red-700"
                        }`}
                      >
                        {menu.title}

                        <ChevronDown
                          size={16}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      </button>

                      {/* Dropdown */}
                      <div className="invisible absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        {menu.children.map((item) => {
                          const childActive = pathname === item.href;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block rounded-xl px-4 py-3 text-sm transition ${
                                childActive
                                  ? "bg-red-50 font-medium text-red-700"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-red-700"
                              }`}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  );
                }

                // Menu biasa
                const active = pathname === menu.href;

                return (
                  <li key={menu.href}>
                    <Link
                      href={menu.href}
                      className={`group relative flex items-center px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                        active
                          ? "text-red-700"
                          : "text-slate-600 hover:text-red-700"
                      }`}
                    >
                      {menu.title}

                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-red-700 transition-all duration-300 ${
                          active
                            ? "w-6 opacity-100"
                            : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}

          <div className="hidden w-70 shrink-0 justify-end lg:flex">
            <Link
              href="https://its.id/m/JARINGASPIRASIIKASA"
              className="inline-flex items-center gap-2 rounded-full border border-red-600 px-4 py-2.5 text-sm font-semibold text-red-700 transition-all duration-300 hover:bg-red-700 hover:text-white hover:shadow-md"
            >
              Isi Angket
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>
      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Container>
          <div className="space-y-2 py-5">
            {menus.map((menu) => {
              // Dropdown
              if ("children" in menu) {
                return (
                  <div key={menu.title}>
                    <button
                      onClick={() => setBpriOpen(!bpriOpen)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {menu.title}

                      <ChevronDown
                        className={`transition-transform ${
                          bpriOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        bpriOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 mt-2 space-y-1 border-l border-slate-200 pl-4">
                        {menu.children.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-lg px-3 py-2 ${
                              pathname === item.href
                                ? "bg-red-50 font-medium text-red-700"
                                : "text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-3 py-3 font-medium ${
                    pathname === menu.href
                      ? "bg-red-50 text-red-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {menu.title}
                </Link>
              );
            })}

            <Link
              href="https://its.id/m/JARINGASPIRASIIKASA"
              className="mt-4 block rounded-full bg-red-700 px-5 py-3 text-center font-semibold text-white"
            >
              Isi Angket
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
