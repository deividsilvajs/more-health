// import { useContext } from 'react';
// import { UserContext } from './UserContext';

function Cutting() {

    // const [user] = useContext(UserContext);

    return (
        <div className='card w-75 p-4 my-3 text-bg-danger'>
            <div className='card-header d-flex justify-content-between'>
                <h4>Perda de Gordura</h4>
            </div>
            <div className='card-body d-flex justify-content-between'>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Carboidrato</h5>
                    <h5></h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Proteína</h5>
                    <h5></h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Gordura</h5>
                    <h5></h5>
                </div>
            </div>
        </div>
    );

};

export default Cutting;