const dashboard = "min-h-screen grid-col-1 lg: grid-col-3[200px_1fr_300px]bg-white dark:bg-gray-800 text-black dark:text-white font-semibold  p-2 "
function Dashboard() {
    return (
        <div className={dashboard}>
            <SideBar />
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard