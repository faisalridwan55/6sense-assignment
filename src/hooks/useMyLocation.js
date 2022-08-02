import { useLocation } from "react-router-dom";

const useMyLocation = () => useLocation().pathname.replace("/", "");

export default useMyLocation;
