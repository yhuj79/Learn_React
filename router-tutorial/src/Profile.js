import { useParams } from 'react-router-dom';

const data = {
    paramData1: {
        name: 'React',
        description:
            '리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.',
    },
    paramData2: {
        name: 'Node.js',
        description:
            'Node.js는 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.',
    },
};
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div style={{ padding: '30px' }}>
            <h1>Profile.js</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p style={{ width: '80%' }}>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;