import { useContext } from "react";
import AlertContext from "../context/AlertContext";

const useAlertContext = () => useContext(AlertContext);

export default useAlertContext;
