import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import classNames from 'classnames';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';

import Button from './components/Button';
import { EMAIL_REGEX, PHONE_REGEX } from './constants';
import ProgressBar from './components/ProgressBar';
import Address from './components/Sections/Address';
import InputSection from './components/Sections/Input';
import Summary from './components/Sections/Summary/Summary';

const H1_CLASSES =
  'text-3xl font-raleway font-extrabold tracking-tight text-finfrog-grey-200 max-w-sm mb-24';

const SPAN_CLASSES = 'text-finfrog-blue-300';

function App() {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
    },
  });

  const {
    watch,
    formState: { errors, isValid },
  } = methods;

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
      <div className='flex min-h-full flex-1 justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
          <div className='bg-gradient-to-b from-finfrog-orange to-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
            <form
              className='flex flex-col space-y-10'
              onSubmit={methods.handleSubmit((data: FieldValues) =>
                console.info(data)
              )}
            >
              <div
                className={classNames(
                  'flex items-center w-full',
                  currentStep < 6 && 'justify-center'
                )}
              >
                {currentStep > 1 && (
                  <ArrowLeftIcon
                    className='text-finfrog-grey-200 h-8 w-8 cursor-pointer'
                    onClick={handlePrevious}
                  />
                )}
                {currentStep < 6 && (
                  <div className='flex justify-center w-full'>
                    <ProgressBar completed={(currentStep / 6) * 100} />
                  </div>
                )}
              </div>
              <div className='flex flex-col space-y-5'>
                {currentStep === 1 && (
                  <InputSection
                    name='firstname'
                    placeholder='Prénom'
                    error={errors.firstname}
                  >
                    <h1 className={H1_CLASSES}>
                      Pour commencer, quel est votre{' '}
                      <span className={SPAN_CLASSES}>prénom</span> ?
                    </h1>
                  </InputSection>
                )}
                {currentStep === 2 && (
                  <InputSection
                    name='lastname'
                    placeholder='Nom'
                    error={errors.lastname}
                  >
                    <h1 className={H1_CLASSES}>
                      Merci {watch('firstname')}, quel est votre{' '}
                      <span className={SPAN_CLASSES}>nom de famille</span> ?
                    </h1>
                  </InputSection>
                )}
                {currentStep === 3 && (
                  <InputSection
                    name='email'
                    placeholder='Email'
                    pattern={{
                      pattern: {
                        value: EMAIL_REGEX,
                        message: 'Email invalide',
                      },
                    }}
                    error={errors.email}
                  >
                    <h1 className={H1_CLASSES}>
                      Quelle est votre adresse{' '}
                      <span className={SPAN_CLASSES}>email</span> ?
                    </h1>
                  </InputSection>
                )}
                {currentStep === 4 && (
                  <InputSection
                    name='phone'
                    type='tel'
                    placeholder='Numéro de téléphone'
                    pattern={{
                      pattern: {
                        value: PHONE_REGEX,
                        message: 'Numéro de téléphone invalide',
                      },
                    }}
                    error={errors.phone}
                  >
                    <h1 className={H1_CLASSES}>
                      Quelle est votre{' '}
                      <span className={SPAN_CLASSES}>numéro de téléphone</span>{' '}
                      ?
                    </h1>
                  </InputSection>
                )}
                {currentStep === 5 && (
                  <Address
                    name='address'
                    placeholder='Adresse'
                    error={errors.address}
                  >
                    <h1 className={H1_CLASSES}>
                      Super ! Quelle est votre{' '}
                      <span className={SPAN_CLASSES}>adresse de résidence</span>{' '}
                      ?
                    </h1>
                  </Address>
                )}
                {currentStep === 6 && (
                  <Summary>
                    <h1 className={classNames(H1_CLASSES, '!mb-12')}>
                      Informations <br />{' '}
                      <span className={SPAN_CLASSES}>personnelles</span>
                    </h1>
                  </Summary>
                )}
                {currentStep < 6 && (
                  <div className='flex justify-end'>
                    <Button
                      type='button'
                      className='w-36'
                      onClick={handleNext}
                      disabled={!isValid}
                    >
                      Continuer
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
