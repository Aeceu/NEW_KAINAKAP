//* CONSISTENT COLOR LIBRARY FOR KAINAKAP UI COMPONENTS. AVOID THE GUESSWORK!
import { useAccessibility } from "../context/AccessibilityContext";

//* CODE: (VISUAL THEME) + (COLOR) + (SHADE)
//* VISUAL THEMES: l = light mode, d = dark mode
//* COLORS: r = rose, o = orange, g = green, s = sky, f = fuschia, n = neutral/slate + b = background (gray shades), t = text
//* SHADES: a = 50, b = 200, c = 300, d = 500, e = 700, f = 950

const SHD = {
  "r" : {
    "a" : "#fff1f2",
    "b" : "#fecdd3",
    "c" : "#fda4af",
    "d" : "#f43f5e",
    "e" : "#be123c",
    "f" : "#4c0519"
  },
  "o" : {
    "a" : "#fff7ed",
    "b" : "#fed7aa",
    "c" : "#fdba74",
    "d" : "#f97316",
    "e" : "#c2410c",
    "f" : "#431407"
  },
  "g" : {
    "a" : "#f0fdf4",
    "b" : "#bbf7d0",
    "c" : "#86efac",
    "d" : "#22c55e",
    "e" : "#15803d",
    "f" : "#052e16"
  },
  "s" : {
    "a" : "#f0f9ff",
    "b" : "#bae6fd",
    "c" : "#7dd3fc",
    "d" : "#0ea5e9",
    "e" : "#0369a1",
    "f" : "#082f49"
  },
  "f" : {
    "a" : "#fdf4ff",
    "b" : "#f5d0fe",
    "c" : "#f0abfc",
    "d" : "#d946ef",
    "e" : "#a21caf",
    "f" : "#4a044e"
  },
  "n" : {
    "a" : "#f8fafc",
    "b" : "#e2e8f0",
    "c" : "#cbd5e1",
    "d" : "#64748b",
    "e" : "#334155",
    "f" : "#020617"
  },
  "b": {
    "l": {
      "m": "white",
      "p": "gray-100"
    },
    "d": {
      "m": "gray-900",
      "p": "gray-800"
    }
  },
  "t" : {
    "l": {
      "m" : "black",
      "h" : "gray-300"
    } ,
    "d": {
      "m" : "white",
      "h" : "gray-700"
    }
  }
};

export function ConvShd(letter, variant){
  return SHD[letter][variant];
}

function CCL(State, Type) {
  const { theme, color } = useAccessibility();

  // Log current values for debugging
  /* console.log(`Type: ${Type}, State: ${State}, Theme: ${theme}, Color: ${color}`); */

  const clrKey = color;
  const themeKey = theme === "light" ? "l" : "d";

  // Ensure keys exist before accessing
  if (!clrKey || !SHD[clrKey]) {
    console.error(`Invalid color key: ${clrKey}`);
    return "";
  }

  if (State === 0) { // NORMAL
    if (Type === 1) {
      return theme === "light" ? SHD['b'][themeKey]['m'] : SHD['b'][themeKey]['m']; // BACKGROUND l: white / d: grey-900  => CCL(0,1)
    } else if (Type === 2) {
      return theme === "light" ? SHD['b'][themeKey]['p'] : SHD['b'][themeKey]['p']; // PANEL BG l: grey-100 / d: grey-800  => CCL(0,2)
    } else if (Type === 3) {
      return theme === "light" ? SHD['t'][themeKey]['m'] : SHD['t'][themeKey]['m']; // TEXT CLR m: BLACK / d: WHITE => CCL(0,3)
    } else if (Type === 4) {
      return theme === "light" ? SHD[clrKey]['f'] : SHD[clrKey]['a']; // TEXT MILD CLR l: shd-950 / d: shd-50 => CCL(0,4)
    } else {
      return SHD[clrKey]['d']; // BTN BG OR PRIMARY TEXT shd-500 => CCL(0,5)
    }
  } else if (State === 1) { // HOVER
    if (Type === 1) {
      return theme === "light" ? SHD[clrKey]['e'] : SHD[clrKey]['c']; // PANEL HVR BG l: shd-700 / d: shd-300  => CCL(1,1)
    } else {
      return theme === "light" ? SHD['t'][themeKey]['h'] : SHD['t'][themeKey]['h']; // TEXT HVR CLR l: shd-300 / d: shd-700  => CCL(1,2)
    }
  } else if (State === 2) { // ACTIVE
    if (Type === 1) {
      return theme === "light" ? SHD[clrKey]['f'] : SHD[clrKey]['b']; // PANEL ACT BG l: shd-950 / d: shd-200  => CCL(2,1)
    } else {
      return theme === "light" ? SHD[clrKey]['c'] : SHD[clrKey]['d']; // TEXT ACT CLR l: shd-300 / d: shd-300  => CCL(2,2)
    }
  } else if (State === 3) { // CHECKED 
    if (Type === 1) {
      return SHD[clrKey]['d']; // PANEL CHK BG shd-500 => CCL(3,1)
    } else {
      return theme === "light" ? SHD['t'][themeKey]['m'] : SHD['t'][themeKey]['m']; // TEXT CHK BG shd-500 => CCL(3,2)
    }
  }  else if (State === -1) { // OVERRIDES
    if (Type === 1) {
      return SHD[clrKey]['d']; // PRIMARY shd-500 => CCL(-1,1)
    } else if (Type === 2) {
      return "black"; // BLACK => CCL(-1,2)
    } else if (Type === 3) {
      return "white"; // WHITE => CCL(-1,3)
    } else if (Type === 4) {
      return SHD[clrKey]['a']; // LIGHTEST shd-50 => CCL(-1,4)
    } else if (Type === 5) {
      return SHD[clrKey]['b']; // LIGHT shd-200 => CCL(-1,5)
    } else if (Type === 6) {
      return SHD[clrKey]['c']; // MILD shd-300 => CCL(-1,6)
    } else if (Type === 7) {
      return SHD[clrKey]['e']; // DARK shd-700 => CCL(-1,7)
    } else if (Type === 8) {
      return SHD[clrKey]['f']; // DARKEST shd-950 => CCL(-1,8)
    }
  }

  // Fallback
  console.error(`Unhandled Type: ${Type} or State: ${State}`);
  return "";
}

export default CCL;