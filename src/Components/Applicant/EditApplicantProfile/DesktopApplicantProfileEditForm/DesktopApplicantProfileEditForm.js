import React from 'react';
import ApplicantProfileEditForm from '../ApplicantProfileEditForm';
import LogoBanner from "../../../App/LogoBanner/LogoBanner.js"
import "./DesktopApplicantProfileEditForm.scss"

function DesktopApplicantProfileEditForm(props) {
    return (
        <div className='desktopApplicantEditForm'>
            <LogoBanner />
            <ApplicantProfileEditForm />
        </div>
    );
}

export default DesktopApplicantProfileEditForm;