import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './FormContact.css'

export const FormContact = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Pole jest wymagane!'),
    email: yup.string().email().required('Pole jest wymagane!'),
    text: yup.string().required('Pole jest wymagane!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type='text'
        placeholder='Imię i Nazwisko...'
        {...register('name')}
      />
      <p>{errors?.name?.message}</p>
      <input
        type='text'
        placeholder='Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <textarea
        
        placeholder='Wiadomość...'
        {...register('text')}
      />
      <p>{errors.text?.message}</p>

      <input
        type='submit'
        value='Wyślij wiadomość'
      />
    </form>
  )
}
