import PropTypes from "prop-types"; 

// to handle the boolean value we are using ternery operator 
function Student(props){
    return (
    <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>student : {props.isStudent ? "yes" : "no"}</p> 
        </div>
    );
}

// proptypes 
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

// default props 
Student.defaultProps = {
    name : "Guest", 
    age : 10, 
    isStudent : false,
}

export default Student;