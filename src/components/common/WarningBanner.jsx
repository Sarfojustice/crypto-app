import React from 'react';

export default function WarningBanner() {
  return (
    <div className="w-full bg-yellow-100 border-b border-yellow-200 py-3 px-5 text-center">
      <p className="text-[14px] font-medium text-yellow-800">
        <strong>Notice:</strong> This is a student project for educational purposes and is not affiliated with, endorsed by, or representative of Coinbase.
      </p>
    </div>
  );
}
