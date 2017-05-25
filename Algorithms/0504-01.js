function solution(n)
{
    n = n.toString().split('');
    var sum = 0;
    for(var i=0,j=n.length; i<j; i++){
        sum += parseInt(n[i]);
    }
    var answer = sum;

	return answer;
}
