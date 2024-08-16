import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Textarea,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { User, Mail } from "lucide-react";
import Modaluse from "../components/ui/Tooltipuse";

const Contact = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMessageError, setMessageError] = useState(false);
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const regex = /^[a-zA-Z]*$/;
    const value = e.target.value;
    setInput(value);
    setIsError(value.trim() === "" || value.length <= 6 || !regex.test(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setEmail(value);
    setEmailError(value.trim() === "" || !regex.test(value));
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageError(value.trim() === "" || value.length < 10);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      isError ||
      emailError ||
      isMessageError ||
      !input ||
      !email ||
      !message
    ) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields correctly.",
        icon: "error",
        customClass: {
          popup: "bg-black text-white",
          confirmButton: "bg-red-500 hover:bg-red-900 text-white",
          title: "text-2xl font-bold",
          content: "text-lg",
        },
      });
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "a3a4a0e0-d942-4323-8515-f1c803ba15d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success || data.length !== 0) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Email is successfully sent.",
        icon: "success",
        customClass: {
          popup: "bg-black text-white",
          confirmButton: "bg-green-500 hover:bg-green-900 text-white",
          title: "text-2xl font-bold",
          content: "text-lg",
        },
      });
      event.target.reset();
      setInput("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col max-w-[500px] gap-y-20 items-center justify-center mt-20 mx-auto">
      <p className="text-text font-open text-2xl sm:mr-6 mr-15">
        Contact Me Through The Email
      </p>
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={isError} mb={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <User className="text-white mt-2" />
            </InputLeftElement>
            <Input
              id="name"
              type="text"
              placeholder="Enter your Full Name"
              _placeholder={{ color: "white" }}
              size="lg"
              className="text-text"
              value={input}
              onChange={handleInputChange}
              width="450px"
              name="name"
            />
          </InputGroup>
          {isError && (
            <FormErrorMessage>
              Name is required at least 2 characters long or contain only
              letters.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl mt={4} isInvalid={emailError} mb={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Mail className="text-white mt-[50px]" />
            </InputLeftElement>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              _placeholder={{ color: "white" }}
              size="lg"
              className="text-text mt-5"
              value={email}
              onChange={handleEmailChange}
              width="450px"
              name="email"
            />
          </InputGroup>
          {emailError && (
            <FormErrorMessage>
              Email is required and must be valid.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt={10} isInvalid={isMessageError}>
          <Textarea
            id="message"
            placeholder="Enter what you want to say to me"
            _placeholder={{ color: "white" }}
            size="lg"
            value={message}
            onChange={handleMessageChange}
            height="200px"
            className="text-text"
            name="message"
          />
          {isMessageError && (
            <FormErrorMessage>
              Message is required and must be at least 10 characters long.
            </FormErrorMessage>
          )}
        </FormControl>

        <div className="mt-10 flex">
          <Button
            type="submit"
            leftIcon={<Mail />}
            colorScheme="green"
            variant="solid"
            isDisabled={
              isError ||
              emailError ||
              isMessageError ||
              !input ||
              !email ||
              !message
            }
            className="ml-[350px]"
          >
            Send
          </Button>
        </div>
      </form>
      <Modaluse className="flex justify-left mt-20" />
    </div>
  );
};

export default Contact;
