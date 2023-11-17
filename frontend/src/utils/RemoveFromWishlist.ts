import { useRemoveItemFromWishlistMutation } from "@/redux/services/Api";
import { toast } from "react-toastify";


export const handleRemoveFromWishlist = async (propertyID: string, user: boolean) => {
  if (!user) {
    return;
  }

  const [ removeFromWishlist] = useRemoveItemFromWishlistMutation()

  try {
    const data = await removeFromWishlist(propertyID).unwrap();
    console.log(data);

    if (!data.success) {
      toast.error(data.msg);
    } else {
      toast.success("Removed from wishlist");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
}