import { FC, useState } from 'react'
import { IUserData } from '../types/types'
import RadioGroup from '../components/RadioGroup.tsx/RadioGroup'
import { AuthOption, authOptions } from './constants'
import { ButtonType } from '../components/constants'
import Button from '../components/Button'
import RegistrationForm from '../blocks/RegistrationForm'

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const defaultValues: IUserData = {
    email: '',
    password: '',
    phoneNumber: '',
    lastName: '',
    firstName: '',
    nickname: '',
    description: '',
    position: ''
  }
  const handleRadioChange = (value: string) => {
    return value === AuthOption.SIGNIN ? setIsLogin(true) : setIsLogin(false)
  }
  const handleLoginForm = () => {
    setIsLogin(true)
  }
  return (
    <div className="mt-2 flex flex-col justify-center items-center text-white">
      <div className="flex mb-2 gap-2">
        <RadioGroup
          name="auth"
          options={authOptions}
          defaultValue={AuthOption.SIGNIN}
          onChange={handleRadioChange}
        />
      </div>
      <RegistrationForm
        isLogin={isLogin}
        defaultValues={defaultValues}
        setIsLogin={handleLoginForm}
      >
        <div className="w-22">
          <Button type={ButtonType.SUBMIT} text="Submit" />
        </div>
      </RegistrationForm>
    </div>
  )
}
export default Auth
