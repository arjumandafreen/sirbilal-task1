import NavbarLi from '@/app/components/NavbarLi';

const Country = () => {
  return (
    <div className='m-4 text-center mb-2'>
      <h1 className='text-white text-2xl border-2 p-2 bg-purple-400 m-4'>List Of Countries</h1>
      <NavbarLi href="/country/pakistan" name='Pakistan'/>
      <NavbarLi href="/country/brazil" name='Brazil'/>
      <NavbarLi href="/country/canada" name='Canada'/>
     
      <NavbarLi href="/country/turkey" name='Turkey'/>
      <NavbarLi href="/country/japan" name='Japan'/> 
    </div>
  );
};

export default Country;


