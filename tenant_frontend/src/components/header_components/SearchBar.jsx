// This script fetches data from the Random User Generator API when the SearchBar component is first mounted, stores this data in a state variable, and uses it to populate the list in the autocomplete component. The key oid is generated from the index in the array for each item.

// Import required components and hooks from React, Chakra-UI, and Choc-UI
import { InputGroup, InputRightElement, Avatar, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import React, { useState, useEffect } from "react";

// Define SearchBar functional component
export const SearchBar = () => {
    // Create a state variable 'people' with setter 'setPeople' and initialize it as an empty array
    const [people, setPeople] = useState([]);

    // useEffect hook to perform side effect (fetch data) when component is mounted
    useEffect(() => {
        // Fetch 30 random users from the API
        fetch('https://randomuser.me/api/?results=30')
        // Convert the response to JSON
        .then(res => res.json())
        // Set the 'people' state to the 'results' array from the fetched data
        .then(data => setPeople(data.results))
        // Catch and log any errors
        .catch(err => console.error(err));
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        // Input group for the search bar
        <InputGroup w={"full"}>
            <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputRightElement>
            <AutoComplete rollNavigation>
                <AutoCompleteInput
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    name="searchInputField"
                />
                <AutoCompleteList>
                    { // Map each person in the 'people' array to an AutoCompleteItem component
                      people.map((person, oid) => {
                        // Combine the first and last name to get the full name
                        const name = `${person.name.first} ${person.name.last}`;
                        return (
                            <AutoCompleteItem
                                key={`option-${oid}`}
                                value={name}
                                textTransform="capitalize"
                                align="center"
                            >
                                <Avatar
                                    size="sm"
                                    name={name}
                                    src={person.picture.medium} // Use the medium-sized picture from the data
                                />
                                <Text ml="4">{name}</Text>
                            </AutoCompleteItem>
                        );
                    })}
                </AutoCompleteList>
            </AutoComplete>
        </InputGroup>
    );
};
