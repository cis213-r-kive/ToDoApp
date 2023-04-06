import React from 'react';

function FilterForm() {
    // code goes here
    return (
        <div>
            <header className='pro-form2'>
                <form>
                    <input type="text" placeholder="Search Item..." className="form2-input"></input>
                    <button id="btnFilter">FILTER</button>
                </form>
            </header>
        </div>
    );
}

export default FilterForm;