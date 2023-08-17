import Image from "./Image";
import { typeImage } from "../@types/@types";



  interface Props {
    mainImage: typeImage;
    property:string | undefined;
    images: typeImage[];
  }
  
const EditImage = ({mainImage , images, property}:Props) => { 




   
  
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Edit Images</h3>
        <div className="flex flex-wrap justify-center items-center gap-3">
        


  {mainImage?.url && <Image imageObject={mainImage} title="main image" property={property}/>}
   {images[0]?.url && <Image imageObject={images[0]} title="image 2" property={property}/>}
  {images[1]?.url && <Image imageObject={images[1]} title="image 3" property={property}/>}

    




            
         
        
      </div>
    </div>
    </div>
  );
};

export default EditImage;
