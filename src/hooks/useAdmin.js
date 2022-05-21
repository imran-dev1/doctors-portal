import { useEffect, useState } from "react";

const useAdmin = (user) => {
   const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:4000/admin/${email}`)
              .then((response) => response.json())
              .then((json) => console.log(json));
        }
   }, [user]);
   return [admin];
};

export default useAdmin;
