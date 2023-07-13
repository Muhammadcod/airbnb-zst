import { createPortal } from "react-dom";

const ModalButton = (props) => {
  return createPortal(
    <div className="fixed bottom-24 z-20 w-full flex justify-center">
      <buttton
        className="rounded-full px-6 text-sm font-semibold py-3 bg-black text-white cursor-pointer"
        {...props}
      />
    </div>,
    document.body,
  );
};

export default ModalButton;
