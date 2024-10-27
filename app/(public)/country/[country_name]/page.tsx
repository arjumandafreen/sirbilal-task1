import { CountryDetails } from "@/types/types";
import Link from "next/link";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryDetails[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241 million",
    },
    {
      name: "Brazil",
      capital: "Brasília",
      population: "213 million",
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: "38 million",
    },
    
    {
      name: "Turkey",
      capital: "Ankara",
      population: "86.6 million",
    },
    {
      name: "Japan",
      capital: "Tokyo",
      population: "126 million",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl">Country Not Found!</h1>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center"> 
      <div className="text-center m-10 bg-pink-200 rounded-lg p-4">
        <h1 className="text-black text-xl m-4">Name: {country.name}</h1> 
        <h1 className="text-black text-xl m-4">Population: {country.population}</h1>
        <h1 className="text-black text-xl m-4">Capital: {country.capital}</h1> 
        <Link href="/country" className="m-2 p-3 bg-pink-600 rounded-md text-base">Back to Country List</Link>
      </div>
    </div>
  );
};

export default CountryName;
