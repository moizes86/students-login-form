import React from 'react';
import MyLinks from '../my-links/my-links';

const SignupConfirmationMessage = ()=> {
    return(
        <div className="signup-confirmation-message">
            <h5 className="mb-4">Thanks!</h5>
            <MyLinks signupInner="Add Another Student" displayStudentsInner='Review Students' />
        </div>
    )
}

export default SignupConfirmationMessage;