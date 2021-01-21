import LandingPage from "../pages/landing-page";
import VoluntaryLogin from "../pages/voluntary-login";
import VoluntaryRegister from "../pages/voluntary-register";
import VoluntaryProfile from "../pages/voluntary-profile";
import OngLogin from "../pages/ong-login";
import OngRegister from "../pages/ong-register";
import CampaignsFeed from "../pages/campaigns-feed";
import AdPage from "../pages/ad-page";
import PageNotFound from "../pages/page-not-found";
import Header from "../components/header";
import AuthHeader from "../components/auth-header";
import NotAuthorized from "../pages/not-authorized";
import {useDispatch} from 'react-redux'
import {getCurrentUser} from '../store/thunks'

import Footer from "../components/footer";
import { Switch, Route } from "react-router-dom";
import OngProfile from "../pages/ong-profile";

const Routes = () => {
  const dispatch = useDispatch()

  localStorage.hasOwnProperty("currentUserId")
  ? dispatch(getCurrentUser(localStorage.getItem("currentUserId")))
  : dispatch(getCurrentUser(""))


  const token = localStorage.getItem("authToken")
  return (
    <>
      {token ? <AuthHeader/> : <Header/>}
          <Switch>
            <Route exact path="/campaigns-feed/:city">
              <CampaignsFeed />
            </Route>
            <Route path="/campaigns-feed">
              <CampaignsFeed />
            </Route>
            <Route exact path="/campaign/:id">
              <AdPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
              <Footer />
            </Route>
            <Route exact path="/login-ong">
              <OngLogin />
            </Route>
            <Route path="/login-voluntario">
              <VoluntaryLogin />
            </Route>
            <Route path="/cadastro-ong">
              <OngRegister />
            </Route>
            <Route path="/cadastro-voluntario">
              <VoluntaryRegister />
            </Route>
            <Route path="/perfil-ong">
              {token ? <OngProfile/> : <NotAuthorized/> }
            </Route>
            <Route exact path="/perfil-voluntario">
             {token ? <VoluntaryProfile /> : <NotAuthorized/>} 
              <Footer />
            </Route>
            <Route exact path="/campaign/:id">
              <AdPage />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
    </>
  )
}

export default Routes;
