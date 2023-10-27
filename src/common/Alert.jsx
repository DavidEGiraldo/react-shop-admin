import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Alert({ alert, handleClose }) {
  if (alert && alert.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 10000);
  }
  const colors =
    alert.type === 'success'
      ? 'bg-green-100 border-green-400 text-green-700'
      : 'bg-red-100 border border-red-400 text-red-700';

  return (
    <>
      {alert?.active && (
        <div
          className={`${colors} px-4 py-3 rounded relative mb-8`}
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
