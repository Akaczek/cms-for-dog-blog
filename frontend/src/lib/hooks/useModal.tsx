import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return [
    isOpen,
    toggle
  ] as const;
};

export default useModal;