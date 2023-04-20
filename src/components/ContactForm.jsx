import { useForm } from 'react-hook-form';
import tw from 'twin.macro';

const underlinedInputStyle = tw`
  w-full
  font-sans
  px-2
  bg-slate-200/10
  rounded-sm
  border-0 border-b-2 border-slate-700/10
  focus:ring-0 focus:border-slate-500`;

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      css={tw`w-4/5 grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-3 bg-black/70 backdrop-blur-md rounded shadow p-6 text-secondary font-thin`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        <span>Full Name</span>
        <input
          type="text"
          css={underlinedInputStyle}
          {...register('firstName', { required: true })}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
        {errors.firstName?.type === 'required' && (
          <p role="alert">First name is required</p>
        )}
      </label>
      <label>
        <span>Email address</span>
        <input
          type="email"
          css={underlinedInputStyle}
          {...register('email', { required: 'Email Address is required' })}
          aria-invalid={errors.mail ? 'true' : 'false'}
          placeholder="email@address.com"
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      </label>

      <input
        css={tw`py-3 bg-slate-700/10 rounded hover:(bg-slate-700/50 cursor-pointer)`}
        type="submit"
      />
    </form>
  );
}
