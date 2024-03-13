import React from 'react';
import Card from './Card';

function CardContainer() {
  return (
    <div className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto'>
            <h2 className="text-5xl font-bold text-center text-white py-4 mb-12 rounded-lg shadow-lg bg-gradient-to-r from-[#172e1b] to-[#042541]">Choose Your Plan</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <Card type='Basic Plan' price='21' first='Essential analytics tools' second='Limited data exports' third='Basic email support' fourth='Few saved reports' fifth='Simple data visualization' />
                <Card type='Standard Plan' price='49' first='Advanced analytics tools' second='More data exports' third='Priority email support' fourth='Increased saved reports' fifth='Enhanced data visualization' />
                <Card type='Premium Plan' price='107' first='Full advanced analytics' second='Unlimited data exports' third='Dedicated account manager' fourth='Unlimited saved reports' fifth='Advanced data visualization' />
            </div>
        </div>
    </div>
  );
}

export default CardContainer;
