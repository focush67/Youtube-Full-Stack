import { CurrentChannelContext } from "@/contexts/CurrentChannelContext";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

interface UseProtectedRouteProps{
    checkChannel?: boolean;
}
export const useProtectedRoute = ({checkChannel = true}:UseProtectedRouteProps = {}) => {
    const currentUser = useContext(CurrentUserContext);
    const currentChannel = useContext(CurrentChannelContext);
    const router = useRouter();

    useEffect(() => {
        if(!currentUser || (checkChannel && !currentChannel)){
            router.push("/");
        }
    },[checkChannel,router,currentChannel,currentUser])
}