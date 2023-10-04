import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailsContext from "../../Context/UserDetailsContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailsContext);

  const { mutate } = useMutation({
    // use to post/put request to backend
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email),
  });

  useEffect(() => {
    // const getTokenAndRegister = async () => {
    //     const res = await getAccessTokenWithPopup({
    //       authorizationParams: {
    //         audience: "http://localhost:8000",
    //         scope: "openid profile email",
    //       },
    //     })

    //     localStorage.setItem("access_token", res);
  
    //     setUserDetails((prev) => ({ ...prev, token: res }));
        // mutate(res);
        // };

    isAuthenticated && mutate();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
