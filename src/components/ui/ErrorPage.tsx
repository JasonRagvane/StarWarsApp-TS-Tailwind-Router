import Text from "./Text";
// import {useContext, useEffect} from "react";
// import {SWContext} from "../../utils/context";

const ErrorPage = () => {

    // const {setIsError} = useContext(SWContext);

    // useEffect(() => {
    //     setIsError(true);
    // },[])
    
    return ( 
        <Text className="text-center">O-o-ops! Something went wrong.</Text>
     );
}
 
export default ErrorPage;