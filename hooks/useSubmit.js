import {useState} from "react";
import { useAlertContext } from "../context/alertContext";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const { onOpen } = useAlertContext(); 
  const submit = async (url, data) => {
    const seccessMessage = `Thanks for your submission ${data.firstName}, we will get back to you shortly!`
    const random = Math.random();
    onOpen('loading', 'Your submission is in progress.')
    try {
      await wait(2000);
      if (random < 0) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: seccessMessage,
      })
      onOpen('success', seccessMessage)
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
      onOpen('error', 'Something went wrong, please try again later!')
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
