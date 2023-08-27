var myarr = ["jasmine", "hamza","Jasmine","hany", "joe", "Jane"]
for (i = 0; i <= myarr.length; i++) {
    if(myarr[i].startsWith("J")==true||myarr[i].startsWith("j")==true){
        console.log("Goodbye "+myarr[i]);
    }
    else{
       console.log("Hello "+myarr[i]);

    }

}
