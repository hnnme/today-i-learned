 /* 
            ============================
             sort()
             배열의 요소를 순서대로 정렬
             배열의 요소를 모두 문자열로 간주하고 알파벳순으로 요소를 정렬
             숫자는 정렬하려면 잘안됨, 다른방법을 찾아야됨. 문자열로 간주하기 때문.
            ============================
            */

            // the array to be sorted
            var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

            console.log('first-list:',list);

            // temporary array holds objects with position and sort-value
            var mapped = list.map(function(el, i) {
            return { index: i, value: el.toLowerCase() };
            })

            // sorting the mapped array containing the reduced values
            mapped.sort(function(a, b) {
            return +(a.value > b.value) || +(a.value === b.value) - 1;
            });

            // container for the resulting order
            var result = mapped.map(function(el){
            return list[el.index];
            });

            console.log('last-list:',result);