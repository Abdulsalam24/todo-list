import React from 'react'

const Input = ({handleChange ,handleSubmit , text}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-div">
                <input 
                type="text" 
                placeholder='add text'
                value={text}
                onChange={e => handleChange(e.target.value)}
                />

                <button>Add</button>
            </div>
        </form>
    )
}

export default Input