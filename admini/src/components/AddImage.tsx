import { typeImage } from "../@types/@types";

interface Props {
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
    mainImage: typeImage;
    images: typeImage[];
  }

const AddImage = ({ mainImage, setCreateForm, images }: Props) => {

    const handleMainFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setCreateForm((prevForm) => {
            return {
              ...prevForm,
              mainImage: { ...prevForm.mainImage, url: reader.result as string },
            };
          });
        };
       
        reader.readAsDataURL(file as Blob);
      };

      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setCreateForm((prevForm) => {
            const updatedImages = prevForm.images.filter((img) => img.url !== "");
            return {
            ...prevForm,
            images: [ { url: reader.result as string },...updatedImages],
          }});
        };
        reader.readAsDataURL(file as Blob);
      };
     
  return (
    <div
                className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    File upload
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block font-medium text-sm text-black dark:text-white">
                      Attach Main Image
                    </label>
                    <input type="file"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter dark:file:bg-white/30 dark:file:text-white file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:focus:border-primary"
                      
                      name="file"
                      
                      onChange={handleMainFileChange}/>
                  </div>

                  
                </div>


                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block font-medium text-sm text-black dark:text-white">
                      Attach Image 2
                    </label>
                    <input type="file"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter dark:file:bg-white/30 dark:file:text-white file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:focus:border-primary"
                      name="file"
              
              onChange={handleFileChange} />
                  </div>

                  
                </div>


                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block font-medium text-sm text-black dark:text-white">
                      Attach Image 3
                    </label>
                    <input type="file"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter dark:file:bg-white/30 dark:file:text-white file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:focus:border-primary"
                      name="file"
              
              onChange={handleFileChange} />
                  </div>

                  
                </div>
              </div>
  )
}

export default AddImage