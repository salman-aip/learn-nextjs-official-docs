"use client"; // Error components must be Client Components

export default function Error({ error, reset }) {
  return (
    <div className="bg-hite w-[600px] text-center">
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
