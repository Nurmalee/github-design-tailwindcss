import Header from "./components/Header"
import PageTabs from "./components/PageTabs"
import ProfileSummary from "./components/ProfileSummary"
import Repositories from "./components/Repositories"

const App = () => {
  return (
    <div>
      <Header />
      <ProfileSummary />
      <PageTabs />
      <Repositories />
      
    </div>
  )
}

export default App

