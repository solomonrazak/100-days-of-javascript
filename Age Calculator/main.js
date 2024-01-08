const calculate = document.getElementById('calculate')

// create a function thats going to calcute the age when the date is inputed or selected.

function calculateAge(e){
    e.preventDefault()
    const date = document.getElementById('date').value;
    const dob = new Date(date);

    // Clear any previous error message
    document.getElementById('error').innerText = '';

    //calculate the time month difference from current date in time
    if (date === null || date === ""){
        document.getElementById('error').innerText = 'Please input your date of birth!';
        return false;
        
    }
    else{
        document.getElementById('error').innerText = '';
        // calculate the month difference from the current date of birth.
        var month_diff = Date.now() - dob.getTime(); 

           //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);

           
    //extract year from date      
    var year = age_dt.getUTCFullYear();
    //now calculate the age of the user  
    var age = Math.abs(year - 1970); 
    

    //display the calcualted age
    return document.getElementById('agehere').innerHTML = `Your are ${age} years old.`
    
    }

}

calculate.addEventListener('click', calculateAge);