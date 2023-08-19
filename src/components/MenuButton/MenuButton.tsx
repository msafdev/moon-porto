// Assets
import "./MenuButton.css";

function MenuButton({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col">
      {/* Button */}
      <div className="w-[32px] h-[32px] flex justify-around flex-col rotate-180">
        <div
          className={`h-[4px] w-full bg-[#eaeaea] rounded-xl ${
            !isOpen ? "is-OpenFirst" : "is-ClosedFirst"
          }`}
        />
        <div
          className={`h-[4px] w-full bg-[#eaeaea] rounded-xl ${
            !isOpen ? "is-OpenSecond" : "is-ClosedSecond"
          }`}
        />
        <div
          className={`h-[4px] w-full bg-[#eaeaea] rounded-xl ${
            !isOpen ? "is-OpenThird" : "is-ClosedThird"
          }`}
        />
      </div>
    </div>
  );
}
export default MenuButton;
