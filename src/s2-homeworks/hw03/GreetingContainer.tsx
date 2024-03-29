import React, {ChangeEvent, FocusEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

export const pureAddUser = (name: string, setError: (e: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if (name === '') {
        setError('Ошибка! Введите имя!')
    } else {
        setError('')
        addUserCallback(name)
        setName('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (e: string) => void) => { // если имя пустое - показать ошибку
    if (name === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string) => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser(e.currentTarget.value)
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: string) => { // need to fix any
        setName(e) // need to fix
        error && setError('')
    }
    const addUser = (name: string) => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = (name: string) => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
   // need to fix

    const lastUserName = [...users].pop()// need to fix
    const lastUserName2 = lastUserName?.name// need to fix
    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName2}
        />
    )
}

export default GreetingContainer
