export const Input = () => (
  <div className="w-full xl:w-9/12">
    <label htmlFor="email" className="block text-2xl font-medium font-primary leading-normal text-gray-900">
      Email
    </label>
    <div className="mt-2">
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full h-20 rounded-md border-4 border-black p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 font-secondary focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 relative text-2xl"
        placeholder="you@example.com"
      />
    </div>
  </div>
);
