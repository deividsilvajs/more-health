import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Informations from './cards/Informations';
import Bulking from './cards/Bulking';
import Cutting from './cards/Cutting';
import UpdateWeightForm from './UpdateWeightForm';

function Content() {

    const { id } = useParams();

    const [showUpdateWeight, setShowUpdateWeight] = useState(false);

    function changeUpdateWeightFormState () {
        setShowUpdateWeight(!showUpdateWeight);
    }

    return (
        <div className='container d-flex flex-column align-items-center'>
                <Informations showUpdateWeight={changeUpdateWeightFormState} />
                <h3>Recomendação Diária</h3>
                <Bulking />
                <Cutting />
                {showUpdateWeight ? <UpdateWeightForm id={id} hideUpdateWeight={changeUpdateWeightFormState} /> : null}
        </div>
    );

};

export default Content;