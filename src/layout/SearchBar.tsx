import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import "../styles/searchBar.css";

const SearchBar = () => {
    const [search, setSearch] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (!search) {
+            event.preventDefault();
        }
    }

    return (
        <search id="search">
            <Form onSubmit={handleSubmit} action="./busqueda" >
                <div id="form-search">
                    <input
                        id="search-bar"
                        autoComplete='off'
                        aria-label="search products"
                        name="q"
                        value={search}
                        placeholder="Buscar productos..."
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    {
                        search && (
                            <button id='reset-button' onClick={() => setSearch("")} className='button-search' type="button">
                                <ClearIcon />
                            </button>
                        )
                    }
                    <button id='search-button' className='button-search' type="submit">
                        <SearchIcon />
                    </button>
                </div>
            </Form>
        </search>
    )
}

export default SearchBar