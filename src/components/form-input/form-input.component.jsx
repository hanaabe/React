import './form-input.styles.scss';
const FormInput =({lable,...otherProps}) =>{

    return(
<div className="group">
<input className="form-input" {...otherProps}/>
    {lable &&(

    
    <lable className ={`${otherProps.value.length? 'shrink':''}form-input-label`}>
        {lable}
    
    </lable>
    )}

   
</div>
    );
}
export default FormInput;