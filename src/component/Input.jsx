import React, { useState } from 'react'

const Input = ({handleChange ,handleSubmit , text}) => {
    const [checked , setChecked] = useState()

    // const handleCheck = (e) => {
    //     if
    // }
    
    return (
        <>
            <select name="" id="">
                <option value="">All</option>
                <option value="">Checked</option>
                <option value="">unChecked</option>
            </select>

            <form onSubmit={handleSubmit}>
                <div className="input-div">
                    <div className='input'>
                        <input 
                        type="text" 
                        placeholder='add text'
                        value={text}
                        onChange={e => handleChange(e.target.value)}
                        />

                        <button>+</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Input