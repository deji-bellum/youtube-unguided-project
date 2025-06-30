import React from 'react';

function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {/* Red play button */}
      <div className="w-8 h-6 bg-red-600 flex items-center justify-center rounded-sm">
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 16.5l6-4.5-6-4.5v9z" />
        </svg>
      </div>

      {/* YouTube Text */}
      <span className="text-xl font-bold tracking-tight">YouTube</span>
    </div>
  );
}

export default Logo;
