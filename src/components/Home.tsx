import './css-files/Home.css'
import {Container} from 'react-bootstrap'
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="home">
            <Container className="py-5 mt-5">
                <h1 className="fs-1">Welcome!</h1>
                <p className="fs-4">Hi there, my name is Taylor! I'm from the Erie, Pennsylvania area and I'm currently interested in a Full-Stack Developer role.</p>
                <div className="home-divider"></div>
                <div className="skills">
                    <h3 className="pt-4 pb-2">Technical Skills</h3>
                    <div className="icons d-flex py-2">
                        <div className="typescript mx-3 d-flex flex-column align-items-center justify-content-center">
                            <Icon icon="logos:typescript-icon" width="40" height="40" />
                            <p className="fs-5">Typescript</p>
                        </div>
                        <div className="react mx-3 d-flex flex-column align-items-center justify-content-center">
                            <Icon icon="logos:react" width="40" height="40" />
                            <p className="fs-5">React</p>
                        </div>
                        <div className="node mx-3 d-flex flex-column align-items-center justify-content-center">
                            <Icon icon="vscode-icons:folder-type-node" width="40" height="40" />
                            <p className="fs-5">Node.js</p>
                        </div>
                        <div className="PostgreSQL mx-3 d-flex flex-column align-items-center justify-content-center">
                            <Icon icon="logos:postgresql" width="40" height="40" />
                            <p className="fs-5">PostgreSQL</p>
                        </div>
                    </div>
                    <h3 className="pt-2 pb-2">About Me</h3>
                    <p className="fs-4">I've been self-teaching myself how to code for about a year and a half, and I recently started pursuing a Bachlors in Computer Science at Western Governors University. The more I expand my development skills, the more I love programming. I love learning new things and using new development technologies. Feel free to check out my projects, and if you feel I may be a good fit for your company, please reach out!</p>
                </div>
                
            </Container>
        </div>
    )
}

export default Home;