function submitForm()
{
	 var validator = $("#myForm").validate(
	{
  		rules: {                   
   				name: "required",
   				email: "required",
			   contactnumber: "required",
			   city: "required",
   			   desc: "required"  
     		},  
     			errorElement: "span" ,                              
     			messages: {
      			name: " Enter Name",
      			email: " Enter Email",
      			contactnumber: " Enter Contact No",
      			city: " Enter City",
      			desc: " Enter Description"
     		}
 	});
 	
	 if(validator.form())
	 { // validation perform
  		$('form#myForm').attr({action: 'mycontroller'});   
  		$('form#myForm').submit();
 	}
}
