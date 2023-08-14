import { Icon } from '@iconify/react';
import useSWR from 'swr';
import { baseURL } from '../../baseURL';
import { Error } from '../../components';
import { Link } from 'react-router-dom';

interface typeCount{
  totalRequests:number;
  totalProperties:number;
  totalAdmini:number;
  uniqueCustomerCount:number;

}

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args);
  return response.json();
};


const Dashboard = () => {
  const {data , error, isValidating} = useSWR<typeCount>(`${baseURL}/count`, fetcher)




  
  return (
    <div className="">
      {error && <Error error={error.message}/>}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
    {/* <!-- Card Item Start --> */}
    <div
      className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
      <Icon icon="lucide:table-properties" className="fill-primary dark:fill-white" width="22" height="16" />
      
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
           {data?.totalProperties}
          </h4>
          {isValidating && <h4>Loading...</h4>}
          <span className="text-sm font-medium">Total Properties</span>
        </div>

        <Link to="/properties" className="flex items-center gap-1 text-sm font-medium text-meta-3 cursor-pointer">
          Visit
          <Icon icon="ph:eye-thin" className="fill-meta-3" width="10" height="11" />
     
        </Link>
      </div>
    </div>
    {/* <!-- Card Item End -->

    <!-- Card Item Start --> */}
    <div
      className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
      <Icon icon="icon-park-solid:pull-requests"  className="fill-primary dark:fill-white" width="20" height="22"/>
        
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.totalRequests }
          </h4>
          {isValidating && <h4>Loading...</h4>}
          <span className="text-sm font-medium">Total Requests</span>
        </div>

        <Link to="/customers" className="flex items-center gap-1 text-sm font-medium text-meta-3">
        Visit
          <Icon icon="ph:eye-thin" className="fill-meta-3" width="10" height="11" />
        </Link>
      </div>
    </div>
    {/* <!-- Card Item End -->

    <!-- Card Item Start --> */}
    <div
      className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
      <Icon icon="arcticons:sbb-cint-customer-app" className="fill-primary dark:fill-white" width="22" height="22" />
     
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.uniqueCustomerCount}
          </h4>
          {isValidating && <h4>Loading...</h4>}
          <span className="text-sm font-medium">Total Customers</span>
        </div>

        <Link to="/customers" className="flex items-center gap-1 text-sm font-medium text-meta-3">
        Visit
          <Icon icon="ph:eye-thin" className="fill-meta-3" width="10" height="11" />
        </Link>
      </div>
    </div>
    {/* <!-- Card Item End -->

    <!-- Card Item Start --> */}
    <div
      className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
      <Icon icon="clarity:administrator-line" className="fill-primary dark:fill-white" width="22" height="18"/>
      
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
         {data?.totalAdmini}
          </h4>
          {isValidating && <h4>Loading...</h4>}
          <span className="text-sm font-medium">Total Profiles</span>
        </div>

        <Link to="/profile" className="flex items-center gap-1 text-sm font-medium text-meta-5">
        Visit
          <Icon icon="ph:eye-thin" className="fill-meta-3" width="10" height="11" />
        </Link>
      </div>
    </div>
    {/* <!-- Card Item End --> */}
  </div>
  </div>
  )
}

export default Dashboard