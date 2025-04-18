export default function UserDisplay({ onPress, tasks, onDelete }) {
  if (!onPress) return null;

  return (
    <section
      className="bg-gradient-to-br from-[#10204b]/60 to-[#025c89]/60 p-6 mt-20 rounded-3xl shadow-xl
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mx-auto"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className="bg-white text-black p-5 rounded-xl shadow-md
          hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
          relative"
        >
          <h2 className="font-bold text-lg mb-1">{task.title}</h2>
          <p className="text-gray-700 mb-2">{task.description}</p>
          <p className="text-sm text-gray-500">{task.date}</p>

          <button
            onClick={() => onDelete(index)}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded-full"
          >
            ✕
          </button>
        </div>
      ))}
    </section>
  );
}
