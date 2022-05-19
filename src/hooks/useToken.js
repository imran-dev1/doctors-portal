import { useEffect, useState } from "react";

const useToken = (user) => {
   const [token, setToken] = useState("");
   console.log(token);
   useEffect(() => {
      const email = user?.user?.email;
      const currentUser = { email };
      if (email) {
         fetch(`http://localhost:4000/user/${email}`, {
            method: "PUT",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
         })
            .then((res) => res.json())
             .then((data) => {
               setToken(data.token);
               localStorage.setItem("accessToken", data.token);
            });
      }
   }, [user]);

   return [token];
};

export default useToken;
