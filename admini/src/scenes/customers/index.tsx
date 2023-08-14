import { Icon } from '@iconify/react';
import { Error, FilterCustomers,  FormLoader, Pagination } from '../../components';
import { PaginationAction, PaginationState, typeCustomers} from '../../@types/@types';
import { useReducer, useState } from 'react';
import { useGetAllCustomersQuery } from '../../redux/Api';


interface queryData {
  data: {
    nbHits: number;
    requests: typeCustomers[];
    totalRequests: number;
  };
  isLoading: boolean;
  isSuccess:boolean;
  error:any;
}

const initialState : PaginationState ={
  currentPage: 1,
}

const paginationReducer = (state:PaginationState, action:PaginationAction):PaginationState=>{
  switch(action.type){
    case "SET_CURRENT_PAGE":
      return {...state, currentPage:action.payload};
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage:state.currentPage + 1,
      }
    case "PREVIOUS_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    default:
      return state;
  }
};

const Customers
 = () => {

  const [state, dispatch] = useReducer(paginationReducer, initialState);

  const [filter, setFilter] = useState({
    requestType:"",
    search: "",
    sort:"",
  });


  const { data, isLoading, error } = useGetAllCustomersQuery<queryData>({
    requestType:filter.requestType,
    search: filter.search,
    sort:filter.sort,
    page:state.currentPage,
  }
 
  );


  

  const { currentPage } = state;

  //Pagination Logic

  let totalPages = Math.ceil(data?.totalRequests / 10);


   


  const handlePreviousPageClick = () => {
    if (currentPage === 1) return;
    dispatch({ type: "PREVIOUS_PAGE" });
  };

  const handleNextPageClick = () => {
    if (currentPage === totalPages) return;
    dispatch({ type: "NEXT_PAGE" });
  };

  const handleCurrentPageClick = (page: number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };


  //icon by RequestType
  function requestTypeIcon(request:string){
    if(request === "whatsapp"){
     return <Icon icon="logos:whatsapp-icon" />
    }else if(request=== "phone"){
     return <Icon icon="solar:phone-linear" />
    }else{
     return <Icon icon="flat-color-icons:sms" />
    }
  }
  return (
    <div
    className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {error && <Error error={error.message}/>}
     <FilterCustomers setFilter={setFilter} filter={filter}/>

    <div className="max-w-full overflow-x-auto">
    {isLoading && (
      <div className="flex items-center justify-center w-screen">
         <FormLoader/>
         </div>
        )}
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Index
            </th>
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
              Name
            </th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
            Phone
            </th>
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
            Land
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Request Type
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            View Message
            </th>
          </tr>
        </thead>
        <tbody>
      
         {data?.nbHits > 0 && data?.requests.map((
          request, index
         )=>(
          <tr key={request._id}>
          <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
            <h5 className="font-medium text-black dark:text-white">{index+1}</h5>
           
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{request.name}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{request.phone}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{request.property.title}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
            {
             requestTypeIcon(request.requestType[0])
            }
            </p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <div className="flex items-center space-x-3.5">
             
              <button className="hover:text-primary">
              <Icon icon="lucide:view" className="fill-current" width="18" height="18"/>
              
              </button>
         
            </div>
          </td>
        </tr>
        
         ))}
        </tbody>
      </table>

    </div>
    {data?.totalRequests>0 && <Pagination
            handleNextPageClick={handleNextPageClick}
            handleCurrentPageClick={handleCurrentPageClick}
            handlePreviousPageClick={handlePreviousPageClick}
            totalPages={totalPages}
            currentPage={currentPage}
            totalProperties={data.totalRequests}
          />}
  </div>
  )
}

export default Customers
