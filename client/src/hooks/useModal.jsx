import { useState } from "react";

const useModal = () => {
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive((prev) => !prev)
    }

    return [
        isActive,
        toggle
    ]
}

export default useModal;
