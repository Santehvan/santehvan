import Dashboard from "@/components/admin-components/Dashboard"
import { getDashboardData } from "@/lib/actions/order.actions";

const Page = async () => {
<<<<<<< HEAD
    const dashboardData = await getDashboardData();

    return (
        <section className="w-full px-10 py-20 h-screen overflow-hidden"> 
            <h1 className="w-full text-heading1-bold drop-shadow-text-blue max-[440px]:text-center">Dashboard</h1>
            <Dashboard stringifiedData={JSON.stringify(dashboardData)}/>
=======
    // const dashboardData = await getDashboardData();

    return (
        <section className="w-full px-10 py-20 h-screen overflow-hidden"> 
            {/* <h1 className="w-full text-heading1-bold drop-shadow-text-blue max-[440px]:text-center">Dashboard</h1>
            <Dashboard stringifiedData={JSON.stringify(dashboardData)}/> */}
>>>>>>> 63aa9f7aaae0476d7938d71af8b7cda34a96ebf0
        </section>
    )
}

<<<<<<< HEAD
export default Page;
=======
export default Page;
>>>>>>> 63aa9f7aaae0476d7938d71af8b7cda34a96ebf0
