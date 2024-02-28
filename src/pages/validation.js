export default function Validation(values){
    const errors ={}


    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === ""){
        errors.name="Please enter your Name";
    }

    if(values.email === ""){
        errors.email="Please enter your Email";
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Email is not correct";
    }

    if(values.message === ""){
        errors.message="Please enter your Message";
    }

    return errors;

}