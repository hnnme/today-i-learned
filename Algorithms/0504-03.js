function solution(s)
{
	var txtArray = s.split('');
    var check = 0;
    for( var i=0, j=txtArray.length; i<j; i++){

        if(check){
            if(txtArray[0] == txtArray[1]){
                txtArray.splice(0,2);
            }
        }else if(txtArray[i] == txtArray[i+1]){
            txtArray.splice(i,2);
            check = 1;
        }
        if(!txtArray.length){ return 1;}
    }
    return txtArray ? 0 : 1;
}
