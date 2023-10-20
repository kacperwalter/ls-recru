import Sidebar from '../Sidebar/Sidebar'

const AppView = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default AppView