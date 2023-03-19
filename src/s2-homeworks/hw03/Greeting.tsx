import React, {ChangeEvent, KeyboardEvent,FocusEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string)=>void // need to fix any
    addUser: (name: string)=>void // need to fix any
    onBlur: any // need to fix any
    onEnter: any // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass =  error ? s.errorInput : s.input  // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={(event:ChangeEvent<HTMLInputElement>)=>setNameCallback(event.currentTarget.value)}
                        className={inputClass}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>)=>onEnter(e)}
                        onBlur={(e:FocusEvent<HTMLInputElement>)=>onBlur(name)}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={()=>addUser(name)}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
