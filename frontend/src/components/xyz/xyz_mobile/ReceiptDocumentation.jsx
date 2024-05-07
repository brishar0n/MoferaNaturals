import '../../../style/xyz/xyz_mobile/ReceiptDocumentation.css';
import { GoChevronLeft } from "react-icons/go";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from 'react'; 
import PartyDetailsSection from './PartyDetailsSection';
import HandoverDetails from './HandoverDetailsSection';
import ConfirmationSection from './ConfirmationSection';
import SignatureModal from './SignatureModal';
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

function ReceiptDocumentation() {
    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
    }); 

    const navigate = useNavigate();

    const [isDateVisible, setIsDateVisible] = useState(false);
    const [isPartyVisible, setIsPartyVisible] = useState(false);
    const [isHandoverVisible, setIsHandoverVisible] = useState(false);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

    const [GHname, setGHname] = useState("");
    const [XYZname, setXYZname] = useState("");
    const [packageID, setPackageID] = useState("");
    const [totalPackage, setTotalPackage] = useState("");
    const [weight, setWeight] = useState("");
    const [centra, setCentra] = useState("");
    const [description, setDescription] = useState("");

    const [isOpenFirst, setIsOpenFirst] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);
    const [signFirst,setSignFirst] = useState()
    const [urlFirst,setUrlFirst] = useState()
    const [signSecond,setSignSecond] = useState()
    const [urlSecond, setUrlSecond] = useState()

    async function handleBack() {
        navigate(`/receptionpackage`);
    }
    
    function toggleDateDetails(e) {
        e.preventDefault();
        setIsDateVisible(!isDateVisible);
    };

    function togglePartyDetails(e) {
        e.preventDefault();
        setIsPartyVisible(!isPartyVisible);
    };

    function toggleHandoverDetails(e) {
        e.preventDefault();
        setIsHandoverVisible(!isHandoverVisible);
    };

    function toggleConfirmationDetails(e) {
        e.preventDefault();
        setIsConfirmationVisible(!isConfirmationVisible);
    }

    function handleClearFirst() {
        if (signFirst) {
            signFirst.clear()
        }
        setUrlFirst('')
    }

    function handleGenerateFirst() {
        setUrlFirst(signFirst.getTrimmedCanvas().toDataURL('image1/png'))
    }

    function handleClearSecond() {
        if (signSecond) {
            signSecond.clear()
        }
        setUrlSecond('')
    }

    function handleGenerateSecond() {
        setUrlSecond(signSecond.getTrimmedCanvas().toDataURL('image2/png'))
    }

    const toggleModalFirst = () => {
        setIsOpenFirst(!isOpenFirst);
    };

    const toggleModalSecond = () => {
        setIsOpenSecond(!isOpenSecond);
    };
        
    function handleValueChange(newValue) {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 

    function handleSubmit(e) {
        e.preventDefault();

        if (
            GHname === "" ||
            XYZname === "" ||
            packageID === "" ||
            totalPackage === "" ||
            weight === "" ||
            centra === "" ||
            description === ""
        ) {
            let errorMessage = "Please fill in the following fields:\n";
            if (GHname === "") errorMessage += "- GHname\n";
            if (XYZname === "") errorMessage += "- XYZname\n";
            if (packageID === "") errorMessage += "- packageID\n";
            if (totalPackage === "") errorMessage += "- totalPackage\n";
            if (weight === "") errorMessage += "- weight\n";
            if (centra === "") errorMessage += "- centra\n";
            if (description === "") errorMessage += "- description\n";
    
            alert(errorMessage);
            return;
        }

        setGHname("");
        setXYZname("");
        setPackageID("");
        setTotalPackage("");
        setWeight("");
        setCentra("");
        setDescription("");
    }

    return (
        <div className=''>
            <div className="flex items-center justify-center flex-col relative p-5">
                <button className='absolute bg-primary p-2 rounded-full left-5 text-white top-8' onClick={handleBack}>
                    <GoChevronLeft className='w-6 h-6 button'/>
                </button>
               
                <div>
                    <p className='text-3xl primary font-bold mb-1 w-4/5 mx-auto text-size'>Reception Documentation</p>
                </div>
            </div>

            <form action="">
                <div className='flex w-4/5 flex-col mx-auto relative jost primary'>
                    
                    <button onClick={toggleDateDetails} className="bg-secondary my-3 montserrat rounded-2xl flex items-center justify-between w-full p-4 font-semibold text-white gap-3">
                        {isDateVisible ? 
                            <>
                                <span>Hide Details </span>
                                <GrSubtractCircle />
                            </>
                            : 
                            <>
                                <span>Date of Handover: </span>
                                <GrAddCircle />
                            </>
                            }
                    </button>

                    <button onClick={togglePartyDetails} className="bg-secondary mb-3 montserrat rounded-2xl flex items-center justify-between w-full p-4 font-semibold text-white gap-3">
                        {isPartyVisible ? 
                            <>
                                <span>Hide Details </span>
                                <GrSubtractCircle />
                            </>
                            : 
                            <>
                                <span>Parties Involved: </span>
                                <GrAddCircle />
                            </>
                            }
                    </button>

                    <button onClick={toggleHandoverDetails} className="bg-secondary mb-3 montserrat rounded-2xl flex items-center justify-between w-full p-4 font-semibold text-white gap-3">
                        {isHandoverVisible ? 
                            <>
                                <span>Hide Details </span>
                                <GrSubtractCircle />
                            </>
                            : 
                            <>
                                <span>Handover Details: </span>
                                <GrAddCircle />
                            </>
                            }
                    </button>

                    <button onClick={toggleConfirmationDetails} className="bg-secondary mb-3 montserrat rounded-2xl flex items-center justify-between w-full p-4 font-semibold text-white gap-3">
                        {isConfirmationVisible ? 
                            <>
                                <span>Hide Details </span>
                                <GrSubtractCircle />
                            </>
                            : 
                            <>
                                <span>Confirmation: </span>
                                <GrAddCircle />
                            </>
                            }
                    </button>

                    {isDateVisible && (
                        <>
                            <div className='mt-5 flex justify-center items-center'>
                                <p className='mr-5 font-semibold'>Date: </p>
                                <Datepicker inputClassName='border-b bg-transparent border-primary py-1 w-full text-sm placeholder:text-primary' containerClassName='relative text-primary' toggleClassName='absolute h-full right-0 px-1 text-secondary' primaryColor={"primary"} useRange={false} asSingle={true} value={value} onChange={handleValueChange} classNames="border-b border-gray-200 text-primary"/>
                            </div>

                            <hr class="w-full h-0.5 mt-8 bg-tertiary border-0" />
                        </>
                    )}
                    
                    {isPartyVisible && (
                        <>
                            <div className='mt-8 flex items-start flex-col gap-1'>
                                <p className='font-semibold'>Parties Involved: </p>
                                <PartyDetailsSection 
                                    GHname={GHname} 
                                    XYZname={XYZname} 
                                    setGHname={setGHname} 
                                    setXYZname={setXYZname} 
                                />
                            </div>

                            <hr class="w-full h-0.5 mt-8 bg-tertiary border-0" />
                        </>
                    )}
                    
                    {isHandoverVisible && (
                        <>
                            <div className='mt-8 flex items-start flex-col gap-1'>
                                <p className='font-semibold'>Handover Details: </p>
                                <HandoverDetails 
                                    packageID={packageID}
                                    totalPackage={totalPackage}
                                    weight={weight}
                                    centra={centra}
                                    description={description}
                                    setPackageID={setPackageID}
                                    setTotalPackage={setTotalPackage}
                                    setWeight={setWeight}
                                    setCentra={setCentra}
                                    setDescription={setDescription}
                                />
                            </div>

                            <hr class="w-full h-0.5 mt-8 bg-tertiary border-0" />

                        </>
                    )}
                    
                    {isConfirmationVisible && (
                        <>
                            <div className='mt-8 flex items-start flex-col gap-1 text-left relative'>
                                <p className='font-semibold'>Confirmation: </p>
                                <ConfirmationSection />
                            </div>

                            <hr class="w-full h-0.5 mt-8 bg-tertiary border-0" />
                        </>
                    )}

                    <div className='flex mt-8'>
                        <div className='flex-1 items-start flex-col gap-1 text-left'>
                            <p className='font-semibold'>Received by (Second Party): </p>

                            {/* <!-- Modal toggle --> */}
                            <button onClick={toggleModalFirst} data-modal-target="static-modal" data-modal-toggle="static-modal" class="text-white bg-secondary hover:bg-primary font-medium text-sm px-5 py-2.5 text-center mt-3 rounded-2xl w-3/4" type="button">
                            Digital Signature
                            </button>

                            <SignatureModal
                                isOpen={isOpenFirst}
                                toggleModal={toggleModalFirst}
                                handleClear={handleClearFirst}
                                handleGenerate={handleGenerateFirst}
                                setSign={setSignFirst}
                                name={XYZname}
                                savedSignature={urlFirst}
                            />

                            <p className='font-medium my-3'>Name: {XYZname} </p>
                        </div>

                        <div className='flex-1 items-end flex-col gap-1 text-right'>
                            <p className='font-semibold'>Delivered by (First Party): </p>

                            {/* <!-- Modal toggle --> */}
                            <button onClick={toggleModalSecond} data-modal-target="static-modal" data-modal-toggle="static-modal" class="text-white bg-secondary hover:bg-primary font-medium text-sm px-5 py-2.5 text-center mt-3 rounded-2xl w-3/4" type="button">
                            Digital Signature
                            </button>

                            <SignatureModal
                                isOpen={isOpenSecond}
                                toggleModal={toggleModalSecond}
                                handleClear={handleClearSecond}
                                handleGenerate={handleGenerateSecond}
                                setSign={setSignSecond}
                                name={GHname}
                                savedSignature={urlSecond}
                            />

                            <p className='font-medium my-3'>Name: {GHname} </p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center relative w-full gap-6 mt-5'>
                        <div className=''>
                            <button type="submit" className='bg-secondary text-white rounded-3xl px-10 py-2 font-semibold hover:bg-primary' onClick={handleSubmit}>Save</button>
                        </div>
                        <div className='pb-10'>
                            <button type="submit" className='bg-secondary text-white rounded-3xl px-10 py-2 font-semibold hover:bg-primary'>Download as PDF</button>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>

        
    )
}

export default ReceiptDocumentation;