const SearchResults = ({ data })=> {
    
        if (!data || !data.length) return null;

        const resultList = data.map(({_id, name})=>{
            const {_id, name } = item;
            const delay = '${idx + 1}00ms';
            return(
                <li key={_id} style={{ '--delay': delay }}>
                <span>{name}</span>
                </li>
            );
             } );
        return(
            <div className='search-results'>
                <ul>{resultList}</ul>
            </div>
    );
        
};

export default SearchResults;