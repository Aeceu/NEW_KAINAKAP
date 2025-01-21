import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import speechObject from "../../utils/speechObject";
import CSL from "../../utils/ConsistentSizingLib";
import { useAccessibility } from "../../context/AccessibilityContext";
import { useCallback, useEffect, useState } from "react";

const AccessibilityPanel = () => {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const { isHovered, isFocused, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur, speakItem } = speechObject();
  const { theme, setTheme, color, setColor, size, setSize, narration, setNarration } = useAccessibility();
  
  var classData = [
    'bg-skin-pnlAltBG text-skin-base outline outline-1 hover:bg-skin-btnBGhov hover:text-skin-invrHov active:bg-skin-btnBGact active:text-skin-invrAct transition hover:outline-5 flex h-12 w-12 items-center justify-center rounded-2xl', // DIALOG TRIGGER
    '', // DIALOG OVERLAY
    '', // DIALOG CONTENT BOX
    `font-display text-4xl text-skin-prim`, // TEXT LABELS
    `bg-skin-pnlBG text-skin-invr hover:bg-skin-btnBGhov hover:text-skin-invrHov active:bg-skin-btnBGact active:text-skin-invrAct data-[state=unchecked]:text-skin-base data-[state=checked]:bg-skin-chkBGckd data-[state=checked]:text-skin-invrChk transition p-${CSL(2,0)} w-50 rounded-2xl`, // RADIO GROUP ITEM
  ]

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  }
  
  const handleKeyPress = useCallback((event) => {
    if (event.key === ' ' && !['INPUT', 'TEXTAREA'].includes(event.target.tagName) && !event.target.isContentEditable) {
      event.preventDefault();
      toggleOpen();
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keyup', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [handleKeyPress]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleNarration = (newNarrPref) => {
    setNarration(newNarrPref);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const changeSize = (newSize) => {
    setSize(newSize);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={classData[0]} onMouseEnter={() => handleMouseEnter("Accessibility Features")} onMouseLeave={handleMouseLeave}>
          <span className="material-symbols-rounded text-3xl text-skin-prim">
            accessibility
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-skin-pageBG/50 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content onOpenAutoFocus={(event) => { event.preventDefault(); descriptionRef.current.focus(); speakItem("Accessibility Features: Here, you can change settings to better accomodate your user experience."); }}
        className='bg-skin-pnlAltBG fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-2xl bg- p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-auto z-50'>
          <Dialog.Title className={classData[3]} onMouseEnter={() => handleMouseEnter("Accessibility Features")} onMouseLeave={handleMouseLeave} >
            <span className="material-symbols-rounded text-3.5xl mb--5 mr-2">
              accessibility
            </span>
            Accessibility Features
          </Dialog.Title>

          <Dialog.Description className="mb-5 font-sans text-[15px] leading-normal text-skin-base" onMouseEnter={() => handleMouseEnter("Here, you can change settings to better accomodate your user experience. You can toggle this menu by tapping Spacebar.")} onMouseLeave={handleMouseLeave}>
            Here, you can change settings to better accomodate your user experience. You can toggle this menu by tapping Spacebar.
          </Dialog.Description>

          <label className={`font-display text-2xl text-skin-prim`} htmlFor="name" onMouseEnter={() => handleMouseEnter("Visual Theme Preference")} onMouseLeave={handleMouseLeave}>
            Visual Theme Preference:
          </label>

          <RadioGroup.Root
            className="flex flex-row gap-2.5"
            defaultValue={theme}
            aria-label="Visual Theme"
            onValueChange={(value) => toggleTheme(value)}
          >
            <RadioGroup.Item
              className={classData[4]}
              value="light"
              id="c1"
              onMouseEnter={() => handleMouseEnter("Light Mode")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Light Mode")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans"><span className="material-symbols-rounded">light_mode</span>Light Mode</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="dark"
              id="c2"
              onMouseEnter={() => handleMouseEnter("Dark Mode")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Dark Mode")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans"><span className="material-symbols-rounded">dark_mode</span>Dark Mode</label>
            </RadioGroup.Item>
          </RadioGroup.Root>


          <label className={`font-display text-2xl mt-2 text-skin-prim`} htmlFor="name" onMouseEnter={() => handleMouseEnter("Color Preference")} onMouseLeave={handleMouseLeave}>
            Color Preference:
          </label>
          <RadioGroup.Root
            className="flex flex-row gap-2.5"
            defaultValue={color}
            aria-label="Color Palette Settings"
            onValueChange={(value) => changeColor(value)}
          >
            <RadioGroup.Item
              className={classData[4]}
              value="r"
              id="c1"
              onMouseEnter={() => handleMouseEnter("Rose")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Rose")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="bg-ros500 flex p-2 rounded-xl">Rose</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="o"
              id="c2"
              onMouseEnter={() => handleMouseEnter("Orange")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Orange")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="bg-org500 flex p-2 rounded-xl">Orange</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="g"
              id="c3"
              onMouseEnter={() => handleMouseEnter("Green")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Green")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="bg-grn500 flex p-2 rounded-xl">Green</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="s"
              id="c4"
              onMouseEnter={() => handleMouseEnter("Sky")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Sky")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="bg-sky500 flex p-2 rounded-xl">Sky</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="f"
              id="c5"
              onMouseEnter={() => handleMouseEnter("Fuschia")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Fuschia")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="bg-fch500 flex p-2 rounded-xl">Fuschia</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="n"
              id="c6"
              onMouseEnter={() => handleMouseEnter("Slate")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Slate")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="bg-gry500 flex p-2 rounded-xl">Slate</label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <label className={`font-display text-2xl mt-2 text-skin-prim`} htmlFor="name" onMouseEnter={() => handleMouseEnter("Button Hitbox")} onMouseLeave={handleMouseLeave}>
            Button Hitbox:
          </label>
          <RadioGroup.Root
            className="flex flex-row gap-2.5"
            defaultValue={size}
            aria-label="Sizing Settings"
            onValueChange={(value) => changeSize(value)}
          >
            <RadioGroup.Item
              className={classData[4]}
              value="small"
              id="s1"
              onMouseEnter={() => handleMouseEnter("Small Size")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Small Size")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans">Small</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="normal"
              id="s2"
              onMouseEnter={() => handleMouseEnter("Normal Size")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Normal Size")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans">Normal</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="large"
              id="s3"
              onMouseEnter={() => handleMouseEnter("Large Size")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Large Size")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans">Large</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value="x-large"
              id="s4"
              onMouseEnter={() => handleMouseEnter("Very Large Size")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Very Large Size")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans">Very Large</label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <label className={`font-display text-2xl mt-2 text-skin-prim`} htmlFor="name" onMouseEnter={() => handleMouseEnter("Text-to-Speech")} onMouseLeave={handleMouseLeave}>
            Text-To-Speech:
          </label>
          <RadioGroup.Root
            className="flex flex-row gap-2.5"
            defaultValue={narration}
            aria-label="Narration"
            onValueChange={(value) => toggleNarration(value)}
          >
            <RadioGroup.Item
              className={classData[4]}
              value='false'
              id="c1"
              onMouseEnter={() => handleMouseEnter("Narration Off")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Narration Off")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans">OFF</label>
            </RadioGroup.Item>
            <RadioGroup.Item
              className={classData[4]}
              value='true'
              id="c2"
              onMouseEnter={() => handleMouseEnter("Narration On")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Narration On")} onBlur={handleBlur}
            >
              <RadioGroup.Indicator className="bg-black w-5 h-5" />
              <label className="flex gap-2 p-2 rounded-xl font-sans">ON</label>
            </RadioGroup.Item>
          </RadioGroup.Root>



          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
              onMouseEnter={() => handleMouseEnter("Close Dialog")} onMouseLeave={handleMouseLeave} onFocus={() => handleFocus("Close Dialog")} onBlur={handleBlur}
            >
              <span className="material-symbols-rounded">close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AccessibilityPanel;
