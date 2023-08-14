import "./loader.css"
const FormLoader = () => {
    return (
      <div className="loader-container">
          <div
      className={`left-0 top-0  flex  items-center justify-center 
       
       bg-white`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
        <h3>Loading...</h3>
      </div>
    );
  };
  
  export default FormLoader;
  