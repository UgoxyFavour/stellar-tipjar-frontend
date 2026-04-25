import React, { ReactNode } from 'react';

export interface FormFieldProps {
  label?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      {label && (
        <label className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all pointer-events-none">
          {label}
        </label>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
