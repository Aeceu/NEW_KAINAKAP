//* CONSISTENT SIZING LIBRARY FOR KAINAKAP UI COMPONENTS. AVOID THE GUESSWORK!
import { useAccessibility } from "../context/AccessibilityContext";

//* REGULARIZED SIZE MAP
const RGSZ = {
  "small" : "s",
  "normal" : "n",
  "large" : "l",
  "x-large" : "xl"
}

//* SIZING BY CODE
const SZCD = {
  "h1" : {
    "s" : "2xl",
    "n" : "3xl",
    "l" : "4xl",
    "xl": "5xl"
  },
  "h2" : {
    "s" : "xl",
    "n" : "2xl",
    "l" : "3xl",
    "xl": "4xl"
  },
  "h3" : {
    "s" : "md",
    "n" : "l",
    "l" : "xl",
    "xl": "2xl"
  },
  "p" : {
    "s" : "sm",
    "n" : "md",
    "l" : "l",
    "xl": "xl"
  }
}

//* PADDING BY CODE
const PDCD = {
  "s" : "1",
  "n" : "2",
  "l" : "3",
  "xl" : "4"
}

function CSL(Type, Variant){
  const { size } = useAccessibility();

  const sizeKey = RGSZ[size];

  if (Type === 1){ // FETCH SIZE
    if (Variant === 1){
      return SZCD['h1'][sizeKey];
    } else if (Variant === 2){
      return SZCD['h2'][sizeKey];
    } else if (Variant === 3){
      return SZCD['h3'][sizeKey];
    } else if (Variant === 4){
      return SZCD['p'][sizeKey];
    }
  } else if (Type === 2){
    return PDCD[sizeKey];
  } else {
    console.error(`FUNCTION OUT OF BOUNDS. Size: ${sizeKey} | Type ${Type} | Variant ${Variant}`)
  }
  
}

export default CSL;