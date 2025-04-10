import ErrorPage from "./components/errorpage/ErrorPage"
import SignIn from "./pages/auth/signIn/SignIn"
import SignUp from "./pages/auth/signUp/SignUp"
import EmailVerification from "./pages/auth/emailVerification/EmailVerification"
import First from "./routes/First"
import Private from "./routes/Private"
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword"
import Verify from "./pages/auth/verify/Verify"
import ResetPassword from "./pages/resetPassword/ResetPassword"
import PasswordResetSuccessfull from "./pages/passwordResetSuccessfull/PasswordResetSuccessfull"
import LandingPage from "./pages/landing/LandingPage"
import EventCategories from "./pages/eventCategories/EventCategories"
import ExploreCategories from "./pages/exploreCategories/ExploreCategories"
import EventDetails from "./pages/eventDetails/EventDetails"
import Favorite from "./pages/favorite/Favorite"
import UserTicketPurchase from "./pages/userTicketPurchase/UserTicketPurchase"
import TicketDetails from "./pages/ticketDetails/TicketDetails"
import TicketDetailsAfterPurchase from "./pages/ticketDetailsAfterPurchase/TicketDetailsAfterPurchase"
import CheckInAttendee from "./pages/checkInAttendee/CheckInAttendee"
import CreateEvent from "./pages/createEvent/CreateEvent"
import ManageEvent from "./pages/manageEvent/ManageEvent"
import Overview from "./pages/overviewOrganizer/Overview"
import PayOutDetails from "./pages/payoutDetails/PayOutDetails"
import ProfileSetting from "./pages/profileSetting/ProfileSetting"
import TicketSales from "./pages/ticketSales/TicketSales"
import ManageEventDetails from "./pages/manageEventDetails/ManageEventDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AttendeDashBorad from "./components/Layout/AttendeDashBorad"
import UpcomingEvent from "./pages/UpcomingEvent/UpcomingEvent"
import PastEvent from "./pages/pastEvent/PastEvent"
import  EventFavorite  from "./pages/eventFavorite/EventFavorite"
import AttendeeLogout from "./pages/attendeeLogout/AttendeeLogout"

const App = () => {

  const routes = createBrowserRouter([
    {
      element: <First />,
      children: [
        {
          path: "/" ,
          errorElement: <ErrorPage/>,
          element: <LandingPage/>
        }, 
        {
          path: "event-categories" ,
          errorElement: <ErrorPage/>,
          element: <EventCategories/>
        },
        {
          path: "explore-category" ,
          errorElement: <ErrorPage/>,
          element: <ExploreCategories/>
        },
        {
          path: "event-details" ,
          errorElement: <ErrorPage/>,
          element: <EventDetails/>
        },
        {
          path: "favorite" ,
          errorElement: <ErrorPage/>,
          element: <Favorite/>
        },
        {
          path: "user-ticket-purchace" ,
          errorElement: <ErrorPage/>,
          element: <UserTicketPurchase/>
        },
        {
          path: "user-ticket-details" ,
          errorElement: <ErrorPage/>,
          element: <TicketDetails/>
        },
        {
          path: "ticket-details-after-purchase" ,
          errorElement: <ErrorPage/>,
          element: <TicketDetailsAfterPurchase/>
        },
        {
          path: "*" ,
          errorElement: <ErrorPage/>,
          element: <LandingPage/>
        }, 
      ],
    },
    {
      element: <Private/>,
      children: [
        {
          path: "dashboard/checkin" ,
          errorElement: <ErrorPage/>,
          element: <CheckInAttendee/>
        },
        {
          path: "dashboard/crete-event" ,
          errorElement: <ErrorPage/>,
          element: <CreateEvent/>
        },
        {
          path: "dashboard/manage-event" ,
          errorElement: <ErrorPage/>,
          element: <ManageEvent/>
        },
        {
          path: "dashboard/manage-event-details" ,
          errorElement: <ErrorPage/>,
          element: <ManageEventDetails/>
        },
        {
          path: "dashboard/overview" ,
          errorElement: <ErrorPage/>,
          element: <Overview/>
        },
        {
          path: "dashboard/payout-details" ,
          errorElement: <ErrorPage/>,
          element: <PayOutDetails/>
        },
        {
          path: "dashboard/profile" ,
          errorElement: <ErrorPage/>,
          element: <ProfileSetting/>
        },
        {
          path: "dashboard/ticket-sales" ,
          errorElement: <ErrorPage/>,
          element: <TicketSales/>
        },
      ]
    },
      {
        path: "login" ,
        errorElement: <ErrorPage/>,
        element: <SignIn/>
      },
      {
        path: "register" ,
        errorElement: <ErrorPage/>,
        element: <SignUp/>
      },
      {
        path: "email-verification" ,
        errorElement: <ErrorPage/>,
        element: <EmailVerification/>
      },
      {
        path: "forget-password" ,
        errorElement: <ErrorPage/>,
        element: <ForgetPassword/>
      },
      {
        path: "verify" ,
        errorElement: <ErrorPage/>,
        element: <Verify/>
      },
      {
        path: "reset-password" ,
        errorElement: <ErrorPage/>,
        element: <ResetPassword/>
      },
      {
        path: "password-reset-successFull" ,
        errorElement: <ErrorPage/>,
        element: <PasswordResetSuccessfull/>
      },

      {
        element: <AttendeDashBorad/>,
        children:[
          {
            path:"dashBoard/upcoming-events",
            errorElement: <ErrorPage/>,
            element: <UpcomingEvent/>
          },
          {
            path:"dashBoard/past-events",
            errorElement: <ErrorPage/>,
            element: <PastEvent/>
          },
       
          {
            path:"dashBoard/event-favorite",
            errorElement: <ErrorPage/>,
            element: <EventFavorite/>
          },
          {
            path:"dashBoard/logout-attendee",
            errorElement: <ErrorPage/>,
            element: <AttendeeLogout/>
          },
        ]
      }
     
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App