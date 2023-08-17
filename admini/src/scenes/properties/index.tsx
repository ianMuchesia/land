import { Icon } from '@iconify/react';
import { DeleteModal, Error, FilterProperties, FormLoader, Pagination } from '../../components';
import { PaginationAction, PaginationState, typeProperties } from '../../@types/@types';
import { useReducer, useState } from 'react';
import { useGetAllPropertiesQuery } from '../../redux/Api';
import { Link } from 'react-router-dom';


interface queryData {
  data: {
    nbHits: number;
    properties: typeProperties[];
    totalProperties: number;
  };
  isLoading: boolean;
  isSuccess:boolean;
  error:{
    message:string;
  }
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

const Properties
 = () => {

  const [state, dispatch] = useReducer(paginationReducer, initialState);

  const [ openModal , setOpenModal] = useState(false)

  const [selectedProperty, setSelectedProperty] =
  useState<null | typeProperties>(null);


  const handleDeleteClick = (property: typeProperties) => {
    setSelectedProperty(property);

    if (selectedProperty !== null) {
      setOpenModal(true);
    }
  };
  const [filter, setFilter] = useState({
    location: "",
    sort: "",
    price_min: 50000,
    price_max: "",
    size_max: "",
    size_min: "",
    search: "",
  });


  const { data, isLoading, isSuccess, error } = useGetAllPropertiesQuery<queryData>({
    location: filter.location,
    sort: filter.sort,
    numericFilters: `area<=${filter.size_max},price>=${filter.price_min}`,
    search: filter.search,
    page:state.currentPage,
  }
 
  );

  const { currentPage } = state;

  //Pagination Logic

  let totalPages = Math.ceil(data?.totalProperties / 8);


   


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

  return (
    <div
    className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {error && <Error error={error.message}/>}
     <FilterProperties setFilter={setFilter} filter={filter}/>

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
            Area (m)<sup>2</sup>
            </th>
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
            Price
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Status
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Action
            </th>
          </tr>
        </thead>
        <tbody>
      
         {data?.nbHits > 0 && data?.properties.map((
          property, index
         )=>(
          <tr key={property?._id}>
          <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
            <h5 className="font-medium text-black dark:text-white">{index+1}</h5>
           
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{property?.title}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{property?.area}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{property?.price}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
            Soon!
            </p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <div className="flex items-center space-x-3.5">
             
              <Link to={`/properties/${property?._id}`} className="hover:text-primary">
              <Icon icon="fluent:edit-16-regular" className="fill-current" width="18" height="18"/>
              
              </Link>
              <button className="hover:text-primary" onClick={()=>handleDeleteClick(property)}>
              <Icon icon="openmoji:delete" className="fill-current" width="18" height="18" />
              
              </button>
            </div>
          </td>
        </tr>
        
         ))}
        </tbody>
      </table>

    </div>
    {data?.totalProperties>0 && <Pagination
            handleNextPageClick={handleNextPageClick}
            handleCurrentPageClick={handleCurrentPageClick}
            handlePreviousPageClick={handlePreviousPageClick}
            totalPages={totalPages}
            currentPage={currentPage}
            totalProperties={data.totalProperties}
          />}
         {openModal && <DeleteModal property={selectedProperty} setOpenModal={setOpenModal}/>}
  </div>
  )
}

export default Properties
