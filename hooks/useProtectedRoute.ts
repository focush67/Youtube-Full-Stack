import { getCurrentChannelState, getCurrentUserState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface UseProtectedRouteProps {
  checkChannel?: boolean;
}
export const useProtectedRoute = ({
  checkChannel = true,
}: UseProtectedRouteProps = {}) => {
  const currentUser = useSelector(getCurrentUserState);
  const currentChannel = useSelector(getCurrentChannelState);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser || (checkChannel && !currentChannel)) {
      router.push("/");
    }
  }, [checkChannel, router, currentChannel, currentUser]);
};
