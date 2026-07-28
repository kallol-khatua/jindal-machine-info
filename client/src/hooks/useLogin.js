import { useMutation } from "@tanstack/react-query";
import { authApi } from "../services/authApi";

export default function useLogin() {
    return useMutation({
        mutationFn: async (credentials) => {
            console.log("Sending request:", credentials);

            const res = await authApi.login(credentials);

            console.log("Axios response:", res);

            return res.data;
        },
    });
}