import AdminCourse from "./AdminCourse"
import AdminNotice from "./AdminNotice"
import AdminBanner from "./Banner"
import Heading from "./Heading"

function MainBodyOfAdminHome() {
    return (
        <div className="w-full max-w-[1200px] mx-auto">
            <Heading />
            <AdminBanner />
            <AdminNotice />
            <AdminCourse />
        </div>
    );
}
export default MainBodyOfAdminHome