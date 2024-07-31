import { useForm } from 'react-hook-form'
import './styles.css'

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log('onSubmit:', data)

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>First Name</label>
        <input {...register('firstName', { required: true, maxLength: 15 })}
          placeholder={errors.firstName?.type === 'required' && '入力必須です'} />
        {errors.firstName?.type === 'maxLength' && <p>15文字以内で入力してください</p>}

        <label>Last Name</label>
        <input {...register('lastName', { required: true, maxLength: 15 })}
          placeholder={errors.lastName?.type === 'required' && '入力必須です'} />
        {errors.lastName?.type === 'maxLength' && <p>15文字以内で入力してください</p>}

        <label>Nick Name</label>
        <input {...register('nickName')} />

        <label>Email</label>
        <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)/ })}
          placeholder={errors.email?.type === 'required' && '入力必須です'} />
        {errors.email?.type === 'pattern' && <p>正しいメールアドレスの形式で入力してください</p>}

        <label>Age</label>
        <input {...register('age')} />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
