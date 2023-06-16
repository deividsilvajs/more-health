import { useState } from 'react';
import { UserProvider } from '../../User/UserContext';
import Informations from './content/Informations';
import Bulking from './content/Bulking';
import Cutting from './content/Cutting';
import UpdateWeightForm from './content/UpdateWeightForm';
import { useParams } from 'react-router-dom';

function Content(props) {

    const { id } = useParams();

    const [showUpdateWeight, setShowUpdateWeight] = useState(false);

    function changeUpdateWeightFormState () {
        setShowUpdateWeight(!showUpdateWeight);
    }

    return (
        <div className='container d-flex flex-column align-items-center'>
            <UserProvider userState={props.userState}>
                <Informations showUpdateWeight={changeUpdateWeightFormState} />
                <h3>Recomendação Diária</h3>
                <Bulking />
                <Cutting />
                {showUpdateWeight ? <UpdateWeightForm id={id} hideUpdateWeight={changeUpdateWeightFormState} /> : null}
            </UserProvider>
        </div>
    );

};

export default Content;