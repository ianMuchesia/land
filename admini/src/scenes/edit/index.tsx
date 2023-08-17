import { useEffect, useState } from "react";
import { AddProperty, BreadCrumb, FormLoader } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { baseURL } from "../../baseURL";

import { setCloseLoader, setFormLoader } from "../../redux/loadSlice";
import axios from "axios";
import EditImage from "../../components/EditImage";

const Edit = () => {
  const { propertyID } = useParams<{ propertyID?: string }>();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.load.formLoader);

  const [createForm, setCreateForm] = useState({
    title: "",
    area: 0,
    price: 0,
    description: "",
    location: "",
    mainImage: { url: "", _id: "", public_id: "" },
    images: [{ url: "", _id: "", public_id: "" }],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setFormLoader());
        const { data } = await axios.get(`${baseURL}/properties/${propertyID}`);

        setCreateForm(data);

        dispatch(setCloseLoader());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, area, price, description, location } = createForm;

    if (!title || !area || !price || !description || !location) {
      toast.warning("please fill all the inputs");
      return;
    }

    dispatch(setFormLoader());
    try {
      await axios.patch(
        `${baseURL}/properties/${propertyID}`,
        {
          title,
          area,
          price,
          description,
          location,
        },
        { withCredentials: true }
      );
      dispatch(setCloseLoader());
      toast.success("Created successfully!");

      setTimeout(() => {
        navigate("/properties");
        setCreateForm({
          title: "",
          area: 0,
          price: 0,
          description: "",
          location: "",
          mainImage: { url: "", _id: "", public_id: "" },
          images: [{ url: "", _id: "", public_id: "" }],
        });
      }, 2000);
    } catch (error: any) {
      dispatch(setCloseLoader());
      console.log(error);

      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };

  return (
    <div>
      <BreadCrumb page={"Edit"} />
      <ToastContainer />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <AddProperty setCreateForm={setCreateForm} createForm={createForm} />
          <div className="p-6 5">
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Edit Land
            </button>
          </div>
          {loading && <FormLoader />}
        </form>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <EditImage
            mainImage={createForm?.mainImage}
            images={createForm?.images}
            property={propertyID}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
