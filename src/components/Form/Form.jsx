import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import NewsletterFeature from '../NewsletterFeatures/NewsletterFeature';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const onHandleSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const emailValue = getValues('email');
    navigate('/success', { state: { emailValue: emailValue } });
    reset();
  };

  return (
    <div>
      <main className='min-h-screen flex flex-col justify-center items-center p-12 font-[16px] bg-[#36384e]'>
        <div className='flex flex-col md:flex-row-reverse w-[375px] md:w-[1100px] h-[850px] md:h-[600px] bg-white shadow-sm shadow-gray-50 md:rounded-3xl md:p-6 md:gap-x-8'>
          <div className='image-container flex-1 h-[284px] md:h-full w-full rounded-b-2xl mb-8 md:rounded-2xl'></div>
          <div className='flex-1 w-full md:h-full px-5 md:p-5 text-[#36384e] font-medium md:rounded-2xl'>
            <h1 className='text-4xl md:text-5xl font-semibold mb-8 md:mb-9 text-dark-slate-grey'>
              Stay updated!
            </h1>
            <p className='mb-6 md:mb-7 md:text-lg'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div>
              <NewsletterFeature feature='Product discovery and building what matters' />
              <NewsletterFeature feature='Measuring to ensure updates are a success' />
              <NewsletterFeature feature='And much more!' />
            </div>
            <form
              className='mt-8 md:mt-10'
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='email'
                  className='block text-sm font-bold text-dark-slate-grey mb-2'
                >
                  Email address
                </label>
                {errors.email && (
                  <p className=' text-tomato-red text-sm font-bold mb-2'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <input
                {...register('email', {
                  required: 'Email field is empty',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
                htmlFor='email'
                name='email'
                type='text'
                placeholder='example@gmail.com'
                className={`${
                  errors.email ? 'bg-red-50 text-tomato-red' : ''
                } border border-gray-300 px-8 py-4 w-full shadow-sm rounded-lg mb-6`}
              />
              <button
                className='btn bg-dark-slate-grey text-white cursor-pointer py-4 text-center w-full shadow-md rounded-lg mb-8'
                value={'Subscribe to monthly newsletter'}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>

        <div className='mt-4 text-white text-base text-center tracking-wide font-semibold'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            className='text-tomato-red'
            target='_blank'
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='#' className='text-tomato-red cursor-not-allowed'>
            Tech Rocket
          </a>
          .
        </div>
      </main>
    </div>
  );
};

export default Form;
