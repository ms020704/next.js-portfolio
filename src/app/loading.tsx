export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
      <p className="ml-4 text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  )
}
