//* CONSISTENT STYLING LIBRARY FOR KAINAKAP UI COMPONENTS. USE TO BUILD COMPLETE STRINGS FOR STYLING.
import CCL from "./ConsistentColorLib";
import CSL from "./ConsistentSizingLib";

const BASE_STYLES = {
  1: "background-color: ",
  2: "color: ",
  3: "outline-color: ",
};

const STATE_STYLES = {
  0: "",
  1: "&:hover: ",
  2: "&:active: ",
  3: "&[data-state='checked']:",
  4: "&:checked: ",
};

// EXAMPLE:
// (1, 3, 2, 2) = &[data-state='checked'] background-color: CCL(2, 2);

function SLC(base, state, colorState, colorVariant) {
  const value = `${STATE_STYLES[state]}${BASE_STYLES[base]}${CCL(colorState, colorVariant)}`;
  return value;
}

export default SLC;

//! OLD
/* import CCL from "./ConsistentColorLib";
import CSL from "./ConsistentSizingLib";

const BSC = {
  1: "bg-", 2: "text-", 3: "outline-"
}

const STS = {
  0:"", 1: "hover:", 2: "active:", 3: "data-[state=checked]:", 4:"checked:" 
}

// EXAMPLE:
// (1,3,2,2) = data-[state=checked]:bg-CCL(2,2)

function SLC(Base, State, ColorState, ColorVariant){
  const value = `${STS[State]}${BSC[Base]}${CCL(ColorState, ColorVariant)}`;
  return (value);
};

export default SLC; */