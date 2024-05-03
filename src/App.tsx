import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomForm from './components/CustomForm'
import {
  defaultValues,
  formSchema,
  Interests,
  FormValues,
  interestOptions
} from './utils/formSchema'
import CustomInput from './components/CustomInput'
import CustomSelect from './components/CustomSelect'
import CustomFileInput from './components/CustomFileInput'

const App = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values)
    return new Promise((resolve) => {
      setTimeout(() => {
        alert('Great Success!')
        resolve(values)
      }, 3000)
    })
  }

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting}>
      {/* First Name */}
      <CustomInput
        fieldError={errors.firstName}
        label='First Name'
        id='firstName'
        inputType='text'
        register={register}
      />

      {/* Last Name */}
      <CustomInput
        fieldError={errors.lastName}
        label='Last Name'
        id='lastName'
        inputType='text'
        register={register}
      />

      {/* Password */}
      <CustomInput
        fieldError={errors.password}
        label='Password'
        id='password'
        inputType='password'
        register={register}
      />

      {/* Confirm Password */}
      <CustomInput
        fieldError={errors.passwordConfirmation}
        label='Confirm Password'
        id='passwordConfirmation'
        inputType='password'
        register={register}
      />

      {/* Interests */}
      <CustomSelect<FormValues, Interests, true>
        isMulti
        name='interests'
        control={control}
        label='Interests (maximum 2)'
        placeholder='Select some interests'
        options={interestOptions}
        useBasicStyles
      />

      {/* Avatar */}
      <CustomFileInput
        fieldError={errors.avatar}
        label='Avatar'
        id='avatar'
        inputType='file'
        register={register}
      />
    </CustomForm>
  )
}

export default App
