import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({});
  const [nameInput, setNameInput] = useState('');
  const [netWorthInput, setNetWorthInput] = useState('');

  function handleNameChange(event) {
    setNameInput(event.target.value);
  }

  function handleNetWorthChange(event) {
    setNetWorthInput(event.target.value);
  }

  function handleSubmit() {
    if (nameInput === '' && netWorthInput === '') {
      alert('No input left behind! Please provide the input fields');
    } else {
      setPerson({
        name: nameInput,
        networth: parseFloat(netWorthInput)
      });
      setNameInput('');
      setNetWorthInput('');
    }
  }

  return (
    <div className="p-5 w-[100%] mx-auto text-center">
      <h1 className="text-3xl text-blue-500 font-bold">Product List</h1>
      <div className="w-full mt-5">
        <table className="border border-black w-[50%] mx-auto">
          <thead className="border-b-2 border-black">
            <tr>
              <th className="p-2 border-r-2 text-2xl border-black w-[50%]">Product</th>
              <th className="text-2xl">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-r-2 border-black w-[50%]">{person.name}</td>
              <td>{person.networth}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-5 text-left">
        <div className="border border-gray-400 w-[30%] mx-auto p-5">
          <div className="mb-5">
            <h1 className="font-bold text-3xl">Form</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="mr-2 text-xl font-bold">Product:</label>
            <input
              type="text"
              className="border border-gray-600 w-full p-2 rounded-md"
              id="name"
              value={nameInput}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="networth" className="mr-2 text-xl font-bold">Price:</label>
            <input
              type="number"
              className="border w-full border-gray-600 p-2 rounded-md"
              id="networth"
              value={netWorthInput}
              onChange={handleNetWorthChange}
            />
          </div>
          <div className="flex gap-2">
            <button onClick={handleSubmit} className="p-2 bg-blue-500 rounded text-white font-bold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}