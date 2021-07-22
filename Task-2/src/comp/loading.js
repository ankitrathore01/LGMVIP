import Loader from "react-loader-spinner";
import '../mainfile/styles.css';

const LoaderComp = ()=>{
    return(
        <div className='app'>
            <Loader
            type="Oval"
            color="#2876b6"
            style={{ marginLeft: '270px' }}
            height={70}
            width={70}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp;
