import useMyLocation from "./useMyLocation";

const usePrintedLocation = () => {
  const location = useMyLocation();

  return location.charAt(0).toUpperCase() + location.slice(1) || "Teams";
};

export default usePrintedLocation;
