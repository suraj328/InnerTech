$(document).ready(()=>{

    $('#form-appointment').on('submit',(e)=>{
        e.preventDefault();
        var email = $('#email').val();
        var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var name = $('#fullname').val();
        var space =  /\s+/g;
        var cnumber = $('#cnumber').val();
        var address = $('#address').val();
        var age = $('#age').val();
        var radio = $('input[name="gender"]');
        var gender;
        var doctor = $('#doctorOption');
        var doctorVal;
        var date = $('#apointement-date').val();
        var dateSeperate =  date.split('-');
        var dd,mm,year;
        var time = $('#apointement-time').val();
        var timesep = time.split(':');
        console.log(timesep)
        var hr,min,tz;
        var isValid;
        var er = 'text-danger';
        var warn = 'text-warning';
        // doctor selection
        if(parseInt(doctor.val()) == 0){
            isValid =  false;
        }else{
            doctorVal =  doctor.val();
            
        }
        
        // Time
        if(timesep.length == 2)
        {
            isValid = true;
            min = timesep[1];
            if(timesep[0]>12)
            {
                tz = 'PM';
                switch (parseInt(timesep[0])) {
                    case 13:
                        hr = 1;
                        break;
                    case 14:
                        hr = 2;
                        break;
                    case 15:
                        hr = 3;
                        break;
                    case 16:
                        hr = 4;
                        break;
                    case 17:
                        hr = 5;
                        break;
                    case 18:
                        hr = 6;
                        break;
                    case 19:
                        hr = 7;
                        break;
                    case 20:
                        hr = 8;
                        break;
                    case 21:
                        hr = 9;
                        break;
                    case 22:
                        hr = 10;
                        break;
                    case 23:
                        hr = 11;
                        break;
                    case 00:
                        hr = 12;
                        break;
                    
                    default:
                        break;
                }
                
            }else{
                
                hr = timesep[0];
                tz = 'AM';
                isValid = true;
            }
        }else{
            isValid = false;
        }
        // email
        if(email.trim() == '')
        {
            isValid= false;
        }else if(email.match(emailRegx))
        {
            
            isValid  = true;
        }else{
            isValid = false;
        }
        
        
        // name
        if(name.trim() == ' ')
        {
            isValid =  false;
        }else if(name.length < 6){
            isValid = false ;
        }else if(!(name.match(space))){
            isValid = false;
        }
        // number
        if(cnumber.trim() == ''){
            isValid =  false;
        }
        if(cnumber.length <10)
        {
            isValid =  false;
        }else if(cnumber % 1 != 0){
            isValid =  false;
        }
        // age
        if(age.trim() == '')
        {
            isValid = false;
        }else if(age % 1 != 0)
        {
            isValid =  false;
        }else if(parseInt(age) < 10){
            isValid =  false;
        }
        
        if(address.trim()=="")
        {
            isValid =  false;
        }else if(address.length < 4){
            isValid =  false;
        }
        // gender
        if (radio[0].checked)
        {
            gender = 1;
            
        }else if(radio[1].checked)
        {
            gender =  2;
            
        }else if(radio[2].checked)
        {
            gender =  3;
        }else{
            isValid = false;

        }
        //date 
        if(dateSeperate.length == 3)
        {
            yy = dateSeperate[0];
            mm = dateSeperate[1];
            dd = dateSeperate[2];
            
            
            if(yy != '')
            {
                
            }else if(mm != '')
            {
                

            }else if(dd != '')
            {
                

            }else{
                isValid = false;
            }
            
        }else{
            isValid = false;
        }
        // submit
        if (isValid)
        {
            alert('dfghjkl');
        }

    });
});