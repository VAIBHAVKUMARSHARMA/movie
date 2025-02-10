import Loading from "./Loading";

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center ">
            <img className="h-[50%] object-cover" src={Loading} alt="not found" />
            <h1>not found</h1>
        </div>
    );
};

export default NotFound;
