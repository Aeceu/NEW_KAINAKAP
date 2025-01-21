//? DUMMY PAGE TO SEE COMPONENTS: just slot in the one you're editing by importing them and placing them into the div:
//* IMPORTATIONS
import AccessibilityPanel from "../components/accessibility/AccessibilityPanel";
import SLC from "../utils/StylingLib";

const DesignPlayground = () => {
  return (
    <div className={`flex-grow-1 flex h-screen items-center justify-center bg-skin-pageBG p-5`}>
      <AccessibilityPanel />
    </div>
  );
};

export default DesignPlayground;
