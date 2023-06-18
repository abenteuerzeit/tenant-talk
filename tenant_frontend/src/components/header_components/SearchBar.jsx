import {
    Input,
    InputGroup,
    InputRightElement
}  from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export const SearchBar = () => {
    return (
        <InputGroup w={"full"}>
            <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputRightElement>
            <Input type="text" placeholder="Search..." w={"full"} />
        </InputGroup>
    );
};
