import LeftBar from './components/main/LeftBar';
import Content from './components/main/Content';

function Main() {
    return (
        <div className='d-flex'>
            <LeftBar />
            <Content />
        </div>
    );
};

export default Main;