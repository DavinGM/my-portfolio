export default function LoadingScreen({ stage }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">

      {/* Logo */}
      <h1 className="text-4xl font-bold text-indigo-600 animate-pulse">
        NLFTs
      </h1>

      {/* Spinner */}
      <div className="mt-6 w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin" />

      {/* Text */}
      {stage === 1 && (
        <p className="mt-3 text-gray-500 tracking-wide">
          Preparing your experience...
        </p>
      )}

      {stage === 2 && (
        <p className="mt-3 text-gray-500 tracking-wide">
          Sedang Mengkompilasi Seeder...
        </p>
      )}
    </div>
  );
}
