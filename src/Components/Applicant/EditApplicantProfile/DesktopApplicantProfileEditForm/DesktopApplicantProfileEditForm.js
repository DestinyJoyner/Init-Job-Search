import React from 'react';
import ApplicantProfileEditForm from '../ApplicantProfileEditForm';
import "./DesktopApplicantProfileEditForm.scss"

function DesktopApplicantProfileEditForm(props) {
    return (
        <div className='desktopApplicantEditForm'>
            <h1>Edit Desktop</h1>
            <ApplicantProfileEditForm />
        </div>
    );
}

export default DesktopApplicantProfileEditForm;