import React from 'react';
import Icon from '../Icon/Icon';

const Button = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex gap-1 justify-center items-center py-1.5 pr-4 pl-3 w-full text-white rounded-md border-2 border-solid shadow-sm bg-white bg-opacity-30 border-white border-opacity-30 min-h-[32px]"
  >
    <Icon  name={icon}   size="lg" />
    <span className="self-stretch pb-0.5 my-auto">{text}</span>
  </button>
);

export default Button;