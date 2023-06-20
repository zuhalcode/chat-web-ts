import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";
import { ChangeEvent, forwardRef, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

type Props = {
  id?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PasswordField = forwardRef<HTMLInputElement, Props>(
  ({ id, onChange, ...rest }, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) inputRef.current.focus({ preventScroll: true });
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
    };

    return (
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id="password"
            ref={mergeRef}
            name="password"
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            required
            {...rest}
            onChange={handleOnChange}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
