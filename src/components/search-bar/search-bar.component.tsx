import { ChangeEventHandler } from "react";
import "./search-bar.style.css"


type SearchBarProp = {
   classname:string;
   placeholder: string;
   onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBar= ({ onChangeHandler, placeholder,classname } : SearchBarProp)=>{

      return (
         <input
            type="search"
            className={`search-box ${classname}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
         />
      );
}

export default SearchBar