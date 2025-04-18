export default function UserInput({ onChangeing, clickCheack, data }) {
  const inputStyle =
    "bg-white/90 mb-3 px-4 py-2 text-base md:text-lg text-black rounded-md w-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#639e95] transition";

  return (
    <section
      className="bg-gradient-to-br from-[#1e293b] to-[#475569] 
    w-[90%] max-w-xl p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-lg text-white
    flex flex-col items-center justify-center space-y-3 md:space-y-4"
    >
      <h1 className="text-xl md:text-2xl font-bold mb-1 font-serif text-center">
        Create New Task
      </h1>

      <input
        onChange={onChangeing}
        type="text"
        placeholder="Title"
        value={data.title}
        name="title"
        className={inputStyle}
      />

      <input
        onChange={onChangeing}
        type="text"
        placeholder="Description"
        value={data.description}
        name="description"
        className={inputStyle}
      />

      <input
        onChange={onChangeing}
        type="date"
        value={data.date}
        name="date"
        className={inputStyle}
      />

      <button
        onClick={clickCheack}
        className="bg-[#141414] text-white rounded-full px-5 py-2 mt-2 text-sm md:text-lg font-semibold tracking-wide
        hover:bg-[#455d7d] hover:scale-105 transition"
      >
        Create
      </button>
    </section>
  );
}
