import React from "react";
import { FormEvent } from "react";

export default function Form() {
  function submitNewInvestment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  }
  function splitNumber (event:any){
    const amount = parseInt((event.target.value ? event.target.value : "0").replace(/,/g, ''));
    event.target.value = amount.toLocaleString();
  };
  return (
    <form onSubmit={submitNewInvestment}>
      <div className="mb-5">
        <label htmlFor="provider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Provider
        </label>
        <select id="provider" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="" required>
          <option value="" disabled hidden>
            Select Provider
          </option>
          <option value="1">Gotrade</option>
          <option value="2">Bibit</option>
          <option value="3">Tokocrypto</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">IDR</div>
          <input type="text" id="amount" onChange={splitNumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="0" required />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Note
        </label>
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note"></textarea>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        + Add
      </button>
    </form>
  );
}
