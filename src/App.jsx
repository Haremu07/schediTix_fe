import ErrorPage from "./components/errorpage/ErrorPage"
import SignIn from "./pages/auth/signIn/SignIn"
import SignUp from "./pages/auth/signUp/SignUp"
import EmailVerification from "./pages/auth/emailVerification/EmailVerification"
import First from "./routes/First"
import Private from "./routes/Private"
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword"
// import Verify from "./pages/auth/emailVerification/Verify"
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
import ProfileSetting from "./components/profileSetting/ProfileSetting"
import TicketSales from "./pages/ticketSales/TicketSales"
import ManageEventDetails from "./pages/manageEventDetails/ManageEventDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AttendeDashBorad from "./components/Layout/AttendeDashBorad"
import UpcomingEvent from "./pages/upcomingEvent/UpcomingEvent"
import PastEvent from "./pages/pastEvent/PastEvent"
import  EventFavorite  from "./pages/eventFavorite/EventFavorite"
import AttendeeLogout from "./pages/attendeeLogout/AttendeeLogout"
import CheckInAs from "./pages/checkInAs/CheckInAs"
import EventplannerDashboard from "./components/Layout/EventplannerDashboard"
import EditEvent from "./pages/manageEvent/EditEvent"
import Logout from "./pages/auth/logout/Logout"
import UpcomingEventDetails from "./pages/upcomingEvent/UpcomingEventDetails"
import ViewEvent from "./pages/manageEvent/ViewEvent"
import TicketPurchaced from "./pages/eventFavorite/TicketPurchaced"
import PurchaseDetails from "./pages/eventFavorite/PurchaseDetails"
import CheckIn from "./pages/checkInAttendee/CheckIn"
import ViewEventAttendee from "./pages/checkInAttendee/ViewEventAttendee"
import Brief from "./pages/auth/emailVerification/Brief"
import PaymentVerify from "./pages/paaymentVerify/PaymentVerify"


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
          path: "event-details/:eventId" ,
          errorElement: <ErrorPage/>,
          element: <EventDetails/>
        },
        {
          path: "favorite" ,
          errorElement: <ErrorPage/>,
          element: <Favorite/>
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
          element: <AttendeDashBorad/>,
          children:[
            {
              path:"dashboard/upcoming-events",
              errorElement: <ErrorPage/>,
              element: <UpcomingEvent/>
            },
             {
            path: "dashboard/ticket-purchace" ,
            errorElement: <ErrorPage/>,
            element: <TicketPurchaced/>
          }, 
            {
              path:"dashboard/upcoming-event-details/:id",
              errorElement: <ErrorPage/>,
              element: <UpcomingEventDetails/>
            },
            {
              path:"dashboard/purchase-details/:eventId",
              errorElement: <ErrorPage/>,
              element: <PurchaseDetails/>
            },
            {
              path:"dashboard/past-events",
              errorElement: <ErrorPage/>,
              element: <PastEvent/>
            },
            {
              path:"dashboard/ticket-purchased",
              errorElement: <ErrorPage/>,
              element: <UserTicketPurchase/>
            },
            {
              path:"dashboard/event-favorite",
              errorElement: <ErrorPage/>,
              element: <EventFavorite/>
            },
            {
              path: "dashboard/profile" ,
              errorElement: <ErrorPage/>,
              element: <ProfileSetting/>
            },
            {
              path: "dashboard/logout" ,
              errorElement: <ErrorPage/>,
              element: <Logout/>
            },
            {
              path: "dashboard/user-ticket-purchace" ,
              errorElement: <ErrorPage/>,
              element: <UserTicketPurchase/>
            },
            {
              path:"dashboard/logout-attendee",
              errorElement: <ErrorPage/>,
              element: <AttendeeLogout/>
            },
          ]
        },
        {
            
          element: <EventplannerDashboard/>,
          children:[
            {
              path: "/dashboard/create-event" ,
              errorElement: <ErrorPage/>,
              element: <CreateEvent/>,
                
            },
            {
              path: "/dashboard/view-event-attendee" ,
              errorElement: <ErrorPage/>,
              element: <ViewEventAttendee/>,
            },
            {
              path: "/dashboard/view-event" ,
              errorElement: <ErrorPage/>,
              element: <ViewEvent/>,
            },
            {
              path: "/dashboard/check-in/:id" ,
              errorElement: <ErrorPage/>,
              element: <CheckIn/>,
            },
            {
              path: "dashboard/profile" ,
              errorElement: <ErrorPage/>,
              element: <ProfileSetting/>
            },
            {
              path: "dashboard/overview" ,
              errorElement: <ErrorPage/>,
              element: <Overview/>
            },
            {
              path: "dashboard/checkin" ,
              errorElement: <ErrorPage/>,
              element: <CheckInAttendee/>
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
            {
              path: "dashboard/manage-event" ,
              errorElement: <ErrorPage/>,
              element: <ManageEvent/>
            },
            {
              path: "dashboard/edit-event" ,
              errorElement: <ErrorPage/>,
              element: <EditEvent/>
            },
            {
              path: "dashboard/manage-event-details" ,
              errorElement: <ErrorPage/>,
              element: <ManageEventDetails/>
            },
            {
              path: "dashboard/payout-details" ,
              errorElement: <ErrorPage/>,
              element: <PayOutDetails/>
            },
            {
              path: "dashboard/logout" ,
              errorElement: <ErrorPage/>,
              element: <Logout/>
            },
          ]
        },
      ]
    },
      {
        path: "login" ,
        errorElement: <ErrorPage/>,
        element: <SignIn/>
      },
      {
        path:"payment-verify/:reference?",
        errorElement: <ErrorPage/>,
        element: <PaymentVerify/>
      },
      {
        path: "brief" ,
        errorElement: <ErrorPage/>,
        element: <Brief/>
      },
      {
        path: "register" ,
        errorElement: <ErrorPage/>,
        element: <SignUp/>
      },
      {
        path: "email-verification/:token" ,
        errorElement: <ErrorPage/>,
        element: <EmailVerification/>
      },
      {
        path: "forget-password" ,
        errorElement: <ErrorPage/>,
        element: <ForgetPassword/>
      },
      // {
      //   path: "verify" ,
      //   errorElement: <ErrorPage/>,
      //   element: <Verify/>
      // },
      {
        path: "checkin-as" ,
        errorElement: <ErrorPage/>,
        element: <CheckInAs/>
      },
      {
        path: "reset-password/:token" ,
        errorElement: <ErrorPage/>,
        element: <ResetPassword/>
      },
      {
        path: "password-reset-successFull" ,
        errorElement: <ErrorPage/>,
        element: <PasswordResetSuccessfull/>
      },
     


     
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App