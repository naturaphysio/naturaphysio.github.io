
const Stepper = () => {
    return (<div className="mainStepper">
        <div className="stepper">
            <div className="rounded transition duration-500 ease-in-ouvertures
            border-2 border h-12 w-12 flex items-center justify-center py-3">
                {/* Display number */}1
            </div>

            <div className="text-uppercase top-0 text-center mt-16 w-32 text-xs">
                {/* Display description */}
                Service
            </div>
        </div>

        <div className="flex-out border-t-2 transition duration-500 ease-in-out">
            {/* Display line */}
        </div>

    </div>)
};

export default Stepper