import React, {useId} from 'react'

// options will give us an array and we have to loop on it

function Select({options, label, className="", ...props}, ref) {
  
    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=""></label>}
            <select 
                {...props} 
                id={id} 
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {/* Since there is a chance that options doesn't contain any value we and if we loop
                in that situation our app will crash so to prevent that we'll use Optional Chaining to loop
                options by using ? -> In Optional Chaining if options do not have any value looping will 
                not take place */}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)