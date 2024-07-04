import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  // const { t } = useTranslation();

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            {useTranslation('aboutTitle')}
            {/* {t('aboutTitle')} */}
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              {/* {t('aboutContent1')} */}
            </p>

            <p>
              {/* {t('aboutContent2')} */}
            </p>

            <p>
              {/* {t('aboutContent3')} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
