import { Icon } from '@iconify/react';
import useSWR from "swr";
import { typeLocation } from '../@types/@types';
import { baseURL } from '../baseURL';

interface Props {
    createForm: {
      title: string;
      area: number;
      price: number;
      description: string;
      location: string;
      mainImage: { url: string };
      images: { url: string }[];
    };
    setCreateForm: React.Dispatch<
      React.SetStateAction<{
        title: string;
        area: number;
        price: number;
        description: string;
        location: string;
        mainImage: { url: string };
        images: { url: string }[];
      }>
    >;
  }

  const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
    const response = await fetch(...args);
    return response.json();
  };

const AddProperty = ({ setCreateForm, createForm }: Props) => {

    const {data , error} = useSWR<typeLocation>(`${baseURL}/location`, fetcher)


    const handleChange = (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLSelectElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        setCreateForm((prevForm) => ({
          ...prevForm,
          [e.target.name]: e.target.value,
        }));
      };
  return (
    <div
    className="">
    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
      <h3 className="font-semibold text-black dark:text-white">
        Add Land
      </h3>
    </div>
    <div>
      <div className="p-6.5">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
              Name
            </label>
            <input type="text" placeholder="Enter Name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              name="title"
          value={createForm.title}
          onChange={handleChange} />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
            Area in area<sup>2</sup>
            </label>
            <input type="number" placeholder="Enter The Area"
            name="area"
            value={createForm.area}
            onChange={handleChange}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
          </div>
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Price(Ksh) <span className="text-meta-1">*</span>
          </label>
          <input type="text"  placeholder="e.g 60000"
          name="price"
          value={createForm.price}
          onChange={handleChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
        </div>

    

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
          Location
          </label>
          <div className="relative z-20 bg-transparent dark:bg-form-input">
            <select

name="location"
onChange={handleChange}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                 <option value="">--please select--</option>
         {data?.locations && data?.locations.map(location=>(
           <option value={location._id} key={location._id}>{location.name}</option>
         
         ))}
         {error && <option value="">{error}</option>}
            </select>
            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
            <Icon icon="grommet-icons:down" className="fill-current" width="24" height="24" viewBox="0 0 24 24" />
             
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block text-black dark:text-white">
          Description
          </label>
          <textarea rows={7} placeholder="Type your Description"
           name="description"
           value={createForm.description}
           onChange={handleChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default AddProperty