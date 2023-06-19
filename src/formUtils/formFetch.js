import { defaultButton } from './icons-buttons';

export const formFetch = (res, navigate, button, setShowLoader) => {

    if (res.status === 200) {
        res.text().then(id => navigate(`/userPage/${id}`));
    } else {
        setTimeout(() => {
            res.text().then(text => {
                alert(text);
                defaultButton(button, setShowLoader);
            });
        }, 500);
    }

}