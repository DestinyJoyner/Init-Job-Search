import React from 'react';
import SkillsComponent from '../../../Job/SkillsComponent';
import { team, desktopAboutInitTech } from '../AboutData';
import logo from "../../../../Assets/LOGO.png"
import "./DesktopAboutPage.scss"


function DesktopAboutPage(props) {
    return (
        <div className='desktopAboutPage'>
            
            <section className='desktopAboutPage_header init-card '>
                <img src={logo} alt="init-logo" />
                <span>Your first tech opportunity awaits.... </span>
            </section>
            
            <section className='desktopAboutPage_init'>
                <div className='desktopAboutPage_init_left'>
                    <h2>About inIT</h2>
                    <p>
                    {team[2]["bio"]}
                    </p>
                </div>

<hr/>
                <div className='desktopAboutPage_init_right'>
                    <div className='desktopAboutPage_init_right_content'>
                        <h3>{desktopAboutInitTech["fe"].header}</h3>
                        <p>{desktopAboutInitTech["fe"].subheader}</p>
                        <SkillsComponent 
          justList={true} 
          skillsArr={desktopAboutInitTech["fe"].icons} 
          />
                    </div>

                    <div className='desktopAboutPage_init_right_content'>
                        <h3>{desktopAboutInitTech["be"].header}</h3>
                        <p>{desktopAboutInitTech["be"].subheader}</p>
                        <SkillsComponent 
          justList={true} 
          skillsArr={desktopAboutInitTech["be"].icons} 
          />
                    </div>

                    <div className='desktopAboutPage_init_right_content'>
                        <h3>{desktopAboutInitTech["fe"].header}</h3>
                        <p>{desktopAboutInitTech["fe"].subheader}</p>
                        
                    </div>
                </div>
            </section>

            <section className='desktopAboutPage_developer'>

            </section>

            
        </div>
    );
}

export default DesktopAboutPage;