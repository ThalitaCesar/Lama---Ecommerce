import { Input, SearchInput} from "./styles";
import { SearchOutlined } from '@material-ui/icons';
import React from "react";

const SearchBar = ({
  onChangeHandler,
  setSearchedString,
  searchedString,
  customPlaceholder
}) => {

  return (

      <SearchInput>
      <SearchOutlined style={{cursor: 'pointer'}}/>
            <Input placeholder={customPlaceholder}
             onChange={e => onChangeHandler(e)}
            />
      </SearchInput>
)}
export default SearchBar;