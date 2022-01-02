export function ValidateForm(inputForm){
 let error={};

 if(!inputForm.name){
     error.name= 'A name is required'
 }
 else if(inputForm.name.lenght >30 || inputForm.name.lenght < 3){
     error.name= 'The dogs name must contain 3 to 30 characters'
 }

 if(!inputForm.life_spanMin){
     error.life_spanMin= 'The minimum years of life of the dog are required';
 }
 else if(inputForm.life_spanMin < 1 || inputForm.life_spanMin > 99){
     error.life_spanMin='The minimum years of life of the dog must contain 1 to 2 digits'
 }
 else if(inputForm.life_spanMin > inputForm.life_spanMax){
     error.life_spanMin='The minimum life span of the dog cannot be greater than the maximum'
 }


 if(!inputForm.life_spanMax){
     error.life_spanMax='The maximum years of life of the dog are required'
 }
 else if(inputForm.life_spanMax < inputForm.life_spanMin){
     error.life_spanMax= 'The maximum life span of the dog cannot be less than the minimum'
 }
 else if(inputForm.life_spanMin > 9 && inputForm.life_spanMax < 10){
     error.life_spanMax= 'The maximum life span of the dog cannot be less than the minimum'
    }

 if(!inputForm.heightMin){
     error.heightMin='The minimum height of the breed is required'
 }
 else if(inputForm.heightMin < 10 || inputForm.heightMin > 99){
     error.heightMin= 'The minimum height of the dog must contain at least 2 digits'
 }
 else if(inputForm.heightMin > inputForm.heightMax){
     error.heightMin='The minimum height of the breed cannot be greater than the maximum height'
 }

 if(!inputForm.heightMax){
    error.heightMax='The maximum height of the breed is required'
}
else if(inputForm.heightMax < 10 || inputForm.heightMax > 999){
    error.heightMax= 'The maximum height of the dog must contain 2 to 3 digits'
}
else if(inputForm.heightMin > inputForm.heightMax){
    error.heightMin='The maximum height of the breed cannot be less than the minimum height'
}

if(!inputForm.weightMin){
    error.weightMin= 'The minimum weight of the dog is required'
}
else if(inputForm.weightMin < 1 || inputForm.weightMin > 99){
    error.weightMin= 'The minimum weight of the dog must contain a maximum of 2 digits';
}
else if(inputForm.weightMin > inputForm.weightMax){
    error.weightMin= 'The minimum weight of the dog cannot be greater than the maximum weight';
}

if(!inputForm.weightMax){
    error.weightMax= 'The maximum weight of the dog is required'
}
else if(inputForm.weightMax < 1 || inputForm.weightMax > 99){
    error.weightMin= 'The maximum weight of the dog must contain a maximum of 2 digits';
}
else if(inputForm.weightMin > inputForm.weightMax){
    error.weightMax='The maximum weight of the dog cannot be less than the minimum weight';
}
else if(inputForm.weightMin > 9 && inputForm.weightMax < 10){
    error.weightMax= 'The maximum weight of the dog cannot be less than the minimum weight'
}

return error;
}
