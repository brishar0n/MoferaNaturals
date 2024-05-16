import { useNavigate } from "react-router-dom";

function CheckpointSearch(){
    const navigate = useNavigate();

    function handleAdd() {
        navigate("/addcheckpoint");
    }

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex pt-16 z-10 items-center justify-center mb-5">
                    <p className="font-bold text-primary text-3xl"> Checkpoints </p>
                </div>


                <div className="bg-white w-2/3 rounded-full z-20 mb-3">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full  p-1"  onClick={handleAdd}> Add </p>
                        <p className="w-48 rounded-full p-1 bg-tertiary text-white"> View </p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default CheckpointSearch;