import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Alert({ alert, handleClose }) {
  if (alert && alert.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 10000);
  }
  const colors = {
    success: 'bg-green-100 border border-green-400 text-green-700',
    error: 'bg-red-100 border border-red-400 text-red-700',
    warning: 'bg-orange-100 border border-orange-400 text-orange-700',
  };

  return (
    <>
      {alert?.active && (
        <div
          className={`${
            colors[alert.type]
          } px-4 py-3 rounded sticky top-8 mb-8`}
          role="alert"
        >
          <strong className="font-bold capitalize">{alert.title}</strong>
          <span className="block sm:inline">
            {' - '}
            {alert.message}
          </span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={handleClose}
          >
            <XMarkIcon
              className="fill-current h-6 w-6 text-current"
              role="button"
            />
          </span>
        </div>
      )}
    </>
  );
}
