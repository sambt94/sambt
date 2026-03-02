// ABOUTME: Easter egg component that reveals a photo of Pablo the dog.
// ABOUTME: Click "no paps pls" to toggle the image with smooth animation.

import { useState } from 'react';

export function PabloReveal() {
  const [show, setShow] = useState(false);

  return (
    <span>
      <button
        onClick={() => setShow(!show)}
        className="text-faint text-xs underline decoration-faint/40 hover:decoration-faint cursor-pointer transition-colors duration-300"
      >
        no paps pls
      </button>
      <span
        className={`block overflow-hidden transition-all duration-500 ease-smooth ${
          show ? 'max-h-[400px] mt-sm opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <img
          src="/images/pablo.jpg"
          alt="Pablo the golden retriever"
          className="w-full rounded-lg"
        />
      </span>
    </span>
  );
}
