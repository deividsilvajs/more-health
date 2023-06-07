import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Content from './components/user/Content';

function User() {

    const { id } = useParams();

    const [user, setUser] = useState({});
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/getUser/${id}`)
            .then(res => res.json())
            .then(doc => {
                setUser(doc);
                setShowContent(true);
            });
    }, [user]);

    return (
        <div>
            {showContent ? <Content userState={[user, setUser]} /> : null}
        </div>
    );

};

export default User;