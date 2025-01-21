import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Reddit Sans", "sans-serif"],
      display: ["Aclonica", "sans-serif"],
    },

    extend: {
      colors: {
        ros50: "#fff1f2",
        ros200: "#fecdd3",
        ros300: "#fda4af",
        ros500: "#f43f5e",
        ros700: "#be123c",
        ros950: "#4c0519",
        org50: "#fff7ed",
        org200: "#fed7aa",
        org300: "#fdba74",
        org500: "#f97316",
        org700: "#c2410c",
        org950: "#431407",
        grn50: "#f0fdf4",
        grn200: "#bbf7d0",
        grn300: "#86efac",
        grn500: "#22c55e",
        grn700: "#15803d",
        grn950: "#052e16",
        sky50: "#f0f9ff",
        sky200: "#bae6fd",
        sky300: "#7dd3fc",
        sky500: "#0ea5e9",
        sky700: "#0369a1",
        sky950: "#082f49",
        fch50: "#fdf4ff",
        fch200: "#f5d0fe",
        fch300: "#f0abfc",
        fch500: "#d946ef",
        fch700: "#a21caf",
        fch950: "#4a044e",
        gry50: "#f8fafc",
        gry200: "#e2e8f0",
        gry300: "#cbd5e1",
        gry500: "#64748b",
        gry700: "#334155",
        gry950: "#020617",
      },

      textColor : {
        skin : {
          base: 'var(--color-text-base)',
          baseHov: 'var(--color-text-base-hover)',
          baseAct: 'var(--color-text-base-active)',
          baseChk: 'var(--color-text-base-checked)',
          mute: 'var(--color-text-muted)',
          prim: 'var(--color-text-primary)',
          invr: 'var(--color-text-inverted)',
          invrHov: 'var(--color-text-inverted-hover)',
          invrAct: 'var(--color-text-inverted-active)',
          invrChk: 'var(--color-text-inverted-checked)'
        }
      },

      backgroundColor : {
        skin : {
          pageBG:'var(--color-page-bg)',
          pnlBG: 'var(--color-panel-bg)',
          pnlAltBG: 'var(--color-panel-bg-alt)',
          btnBG: 'var(--color-btn-bg)',
          btnBGhov: 'var(--color-btn-bg-hover)',
          btnBGact: 'var(--color-btn-bg-active)',
          chkBGckd: 'var(--color-cbox-bg-checked)',
        }
      },

      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-20px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      animation: {
        shake: "shake 0.2s ease-in-out",
      },
    },
  },

  safelist: [
    // Add dynamic classes here
    {
      pattern: /(bg|text)-(ros|org|grn|sky|fch|gry)(50|100|200|300|500|700|950)/,
      variants: ['hover', 'active', 'data-[state=checked]'],
    },
    {
      pattern: /(bg|text)-(gray)-(50|100|200|300|500|700|950)/,
      variants: ['hover', 'active', 'data-[state=checked]'],
    },
    {
      pattern: /(bg|text)-(white|black)/,
      variants: ['hover', 'active', 'data-[state=checked]'],
    },
    // Add more patterns as needed
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  plugins: [daisyui],
};
