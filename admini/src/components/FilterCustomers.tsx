import { Icon } from '@iconify/react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setFilter: Dispatch<
    SetStateAction<{
      requestType: string;
      sort: string;
     
      search: string;
    }>
  >;
  filter: {
    requestType: string;
    sort: string;
  
    search: string;
  };
}



const FilterCustomers = ({ setFilter, filter }: Props) => {



  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div
    className='flex flex-col sm:flex-row items-center justify-between py-5 gap-5'>
<div className="flex  flex-col sm:flex-row  items-center gap-4 justify-center">
<div>
                    <label className="mb-1 block font-medium text-sm text-black dark:text-white">
                     Filter By Location
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                   
                      <select
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                        name="requestType" id="" onChange={handleChange}>
                           <option value="">--please select--</option>
                           <option value="phone">Phone</option>
                           <option value="sms">Messages</option>
                           <option value="whatsapp">whatsApp</option>
         
                      </select>
                      <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <Icon icon="teenyicons:down-outline" width="24" height="24"/>
                     
                      </span>
                    </div>
                  </div>


<div>
                    <label className="mb-1 block font-medium text-sm text-black dark:text-white">
                     Sort By Name
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                      <Icon icon="ep:sort" width="20" height="20" />
                      
                      </span>
                      <select
                                name="sort"
                                onChange={handleChange}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                         <option value="">--sort--</option>
          <option value="name">Name (Asc)</option>
          <option value="-name">Name (Desc)</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <Icon icon="teenyicons:down-outline" width="24" height="24"/>
                     
                      </span>
                    </div>
                  </div>

</div>
<div className="relative">
          <span className="absolute top-1/2 left-0 -translate-y-1/2">
           
            <Icon icon="iconamoon:search-thin" className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="20" height="20" />
          </span>

          <input type="text" placeholder="Type to search..."
          name="search"
          onChange={handleChange}
          value={filter.search}
            className="w-full bg-transparent pr-4 pl-9 focus:outline-none" />
        </div>
    </div>
  )
}

export default FilterCustomers