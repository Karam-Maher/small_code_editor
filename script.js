




    let cods = document.getElementById("cods");
    let bb = document.getElementById("bb");
    let bu = document.getElementById("bu");
    let result = document.getElementById("result");

        bb.onclick =()=>{
            result.innerHTML = cods.value;                 
            localStorage.setItem("RESULT" , cods.value);
                };
                
        bu.onclick =()=>{
            result.innerHTML = "";   
        };

        onload = ()=>{
        cods.value = localStorage.getItem("RESULT");
        //   result.innerHTML = cods.value;
        }                                                                                 