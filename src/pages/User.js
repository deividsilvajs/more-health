import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Content from './components/user/Content';
import User from './components/user/User';

function Page() {

    const { id } = useParams();

    const [user, setUser] = useState({});
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/getUser/${id}`)
            .then(res => res.json())
            .then(doc => {
                const user = new User(doc);
                setUser(user);
                setShowContent(true);
            });
    }, [user, id]);

    return (
        <div>
            {showContent ? <Content userState={[user, setUser]} /> : null}
        </div>
    );

};

export default Page;