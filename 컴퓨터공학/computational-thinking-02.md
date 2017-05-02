# Day02



## 알고리즘

* 문제해결을 위한 절차/방법
* 어떠한 문제를 해결하기 위한 여러 동작들의 모음



어렵지 않아요~

목이 말라서 물을 먹고 싶다 도 문제에 봉착한것!

이 문제를 해결하려면 정수기로 가서 컵을 들고 물을 컵에 넣어 마신다이고 이것이  알고리즘



문제를 모르는 것도 문제가 될 수 있음

문제를 정의를 하는것도 중요



## 자료구조

* 자료를 효율적으로 이용할 수 있는 방법론
* 데이터를 구조적으로 표현하는 방식



자료구조라는것은~

보조 기억장치, 하드디스크에 어떻게 효율적으로 데이터를 집어넣을수 있을까 하는 것



실생활에서 어떻게 데이터들을 분류할것인가

예) 도서관 책을 어떻게 정리되게 할것인가, 주제별, 작가별, 가나다별, 사이즈



##### 알고리즘 과 자료구조는 환상의 궁합!!



변수를 만든다든지 클래스를 만든다지 하는것들은 메모리에 올라가게 될것이다.



* 원시구조
  * 정수, 실수, 문자 ---
* 선형구조
  * 배열, 연결 리스트, 스택, 큐, 덱
* 비선형 구조



* 물리적 구조
* 추상적 구조



## 배열

|  0   |  1   |  2   |  3   |  4   |
| :--: | :--: | :--: | :--: | :--: |
| data | data | data |      |      |



한번 크기가 정해지면 변화가 안됨

배열은 불변크기의 자료들의 모음

배열의 장점은 속도가 빠르다. 어디에 있든지 찾을 수 있다.

단점은 한번 크기가 정해지면 바꿔지지 않음



### 연결 리스트

* 단순 연결 리스트 - 시작과 끝이 정해져 있음

  ![단순 연결 리스트](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Single_linked_list.png/800px-Single_linked_list.png)

* 이중 연결 리스트

  ![이중 연결 리스트](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Doubly_linked_list.png/800px-Doubly_linked_list.png)

* 원형 연결 리스트 - 시작과 끝이 정해져 있지 않음

![원형 연결 리스트](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Circurlar_linked_list.png/800px-Circurlar_linked_list.png)



데이터마다의 공간주소값을 갖게 된다.

그리고 그 공간에 다음 친구의 주소값을 갖고 있어서 너의 다음 친구는 누구냐하고 물으면 그 주소값을 갖고 찾아가게 된다. 각자의 상황에 따라 사용하면 된다. 이외에도 더 있다.

하늘색 부분이 자신의 다음 주소값을 갖게 되는 부분



## 스택 (Stack)

후입선출

![스택](http://www.tipssoft.com/data/cheditor/1101/4_copy3.jpg)

![스택](http://www.tipssoft.com/data/cheditor/1101/path2.jpg)

삽입 = push

삭제 = pop



실생활 스택 구조

만원지하철, 김치, 함수호출

웹브라우저에서 뒤로가기



## 큐(Queue)

선입선출

![큐](https://cdn.namuwikiusercontent.com/c9/c9cb17ac86baee99d660d35de6b31d8bfc7889a104ad232c7a4c90902f25913f.png?e=1487306880&k=NTJBiQRa60Qj2dTve509Sg)



출저

[나무위키]: http://namu.wiki



## 덱(Dequeue)

큐와 스택이 합쳐진것

double queue

![dequeue](https://cdn.namuwikiusercontent.com/0a/0a985ca4d999fa7455d5d67904651df586f82615dcaff72e906df83b1e65197a.jpg?e=1496508210&k=5fwzrnxxCG61_MgAOHcpGw)

일반적인 큐는 뒤에서만 삽입이 이루어지고 앞에서만 인출이 가능한 데 비해, 데크는 양쪽에서 모두 삽입/인출이 가능하다. 



## 트리(Tree)

![트리](http://www.teach-ict.com/as_as_computing/ocr/H447/F453/3_3_5/data_structures/miniweb/images/tree.jpg)

[출저]: http://www.teach-ict.com/

탐색을 용이하게 위해서 사용

이진탐색  

선형구조



## 그래프(Graph)

시작점을 알수 없고 위계질서가 없음

실생활의 예) 네비게이션, 빅데이터, 소셜 미디어(친구의 친구 검색, 공통관계), 드라마(인물의 관계도)





## 트리 vs 그래프



이게 어디에 사용 할것인지 생각해 보자.

질문이 이렇게 나올 수 있어요.

이런 이런 거를 하려면 어떤 자료구조를 사용해서 풀어야 될까요? 



## 알고리즘

* 일을 처리하는 순서/방법
* 대표적 알고리즘 - 정렬, 탐색, 재귀 등



1. 정렬 알고리즘

   정렬 알고리즘 비교 영상 

   http://panthema.net/2013/sound-of-sorting/



### 1.1 선택 정렬(Selection sort)

제일 작은 애를 가지고 와서 정렬하고 다른애들을 훓어서 작은애를 골라서 갖다놓고

### 1.2 버블 정렬(bubble sort)

양옆을 비교하면서 큰애는 옆으로 가를 반복하면서 뒤로 보내고 보내고 하는 것

버블처럼 일렁일렁이면서 정렬을 한다고 해서 버블 정렬

![선택 정렬](http://postfiles14.naver.net/20140128_189/justant_1390843233899PVdNi_GIF/Bubble-sort-example-300px.gif?type=w2)

### 1.3 삽입 정렬(Instertion Sort)

![삽입정렬](http://postfiles16.naver.net/20140128_79/justant_1390840986016KUtCN_GIF/Insertion-sort-example-300px.gif?type=w2)



![삽입](https://upload.wikimedia.org/wikipedia/commons/e/ea/Insertion_sort_001.PNG)



### 1.4 병합 정렬(Merge Sort)

merge sort

영역을 나눠서 비교 정렬

### 1.5 퀵 정렬 (Quick Sort)

**퀵 정렬**(Quicksort)은 [찰스 앤터니 리처드 호어](https://ko.wikipedia.org/wiki/%EC%B0%B0%EC%8A%A4_%EC%95%A4%ED%84%B0%EB%8B%88_%EB%A6%AC%EC%B2%98%EB%93%9C_%ED%98%B8%EC%96%B4)가 개발한 [정렬 알고리즘](https://ko.wikipedia.org/wiki/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)이다. 다른 원소와의 비교만으로 정렬을 수행하는 [비교 정렬](https://ko.wikipedia.org/wiki/%EB%B9%84%EA%B5%90_%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)에 속한다.

퀵 정렬은 *n*개의 데이터를 정렬할 때, 최악의 경우에는 [**O**](https://ko.wikipedia.org/wiki/%EB%8C%80%EB%AC%B8%EC%9E%90_O_%ED%91%9C%EA%B8%B0%EB%B2%95)(*n*2)번의 비교를 수행하고, 평균적으로 **O**(*n* [log](https://ko.wikipedia.org/wiki/%EB%A1%9C%EA%B7%B8) *n*)번의 비교를 수행한다. (출저: 위키백과)

![퀵정렬](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

퀵 정렬의 심각한 오류는 중간 값을 잘 못잡았거나 극단적이 값이 있을때 오류발생.

기준을 잡을때도 알고리즘으로 따로 사용하게 된다.



알고리즘은 데이터의 유형에 따라 그때 그때 다른 정렬을 사용하면 된다.



## 시간복잡도

input -> Output 이 될 때 까지 걸리는 시간

input -> ALGORITHM -> output



* 알고리즘이 실행되는데 소요되는 시간분석


* 점근 표기법
  * 대문자 오 표기법  -최악 
  * 오메가 표기법 - 최선
  * 세타 표기법 - 평균

대문자 오 표기법을 사용. 아무리 못해도 이정도는 나오겠다 해서 사용



**덧+ 공간 복잡도라는 것도 있음. 덩치가 큰경우에는 이것도 생각해 봐야한다.**

시간복잡도를 끌어올리기 위해서 공간을 너무 많이 사용한다던가 하는 상관관계가 있다.





![시간복잡도](http://blog.carlesmateo.com/wp-content/uploads/2015/05/blog-carlesmateo-com-big-o-of-array-sorting-algorithms.png)

## 탐색 알고리즘의 시간 복잡도

* 선형 탐색 - O(n)

* 이진 탐색 - O(logn)

  ​

![](http://www.juanmacias.me/wp-content/uploads/2015/09/data_structure_operations.png)



# 소프트 웨어 공학

* 요구 공학
* 아키텍처
* 개발 방법론
* 테스팅
* 프로세스
* 형상 관리
* 프로젝트 관리
* 유지 보수



## 소프트웨어 개발 생명 주기 모델

* Software Development Life Cycle Model


* 소프트웨어를 어떻게 개발할 것인가에 대한 전체적인 흐름
* 주먹구구식, 폭포수, 프로토타이핑, 나선형



### 폭포수

![폭포수](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/350px-Waterfall_model.svg.png)



### 프로토타이핑 모델

![프로토타이핑](http://pds16.egloos.com/pds/201001/11/07/d0057007_4b4b1a73d7d77.jpg)

시간이 오래 걸림 , 중간 중간 평가해야되고 communication 비용이 많이 됩니다..



### 나선형 모델

![나선형 모델](http://cfile8.uf.tistory.com/image/2539E340540FD67205DA03)



## 소프트웨어 개발 방법론

* 소프트웨어를 생산하는데 필요한 반복적인 과정들을 정리한 것
* 구조적 프로그래밍, 객체지향, 고속 개발 방법론, 익스트림 프로그래밍(Agile), 스크럼(Agile), UP ...



**덧. 어떤 이야기를 할때 아무것도 모르는 사람들에게 설명하듯 해보자!**



## 애자일 개발 프로세스

애자일이라고 하면 어떻게 하면 효율적으로 빠르게 좋은 코드를 만들어 낼수 있을까 하며 생각한 방법론 덩어리들을 칭한다고 할 수 있다.



## UML

* 통합 모델링 언어
* Unified Modeling Language
* 표준화된 범용 모델링 언어
* 객체 지향 소프트웨어 집약 시스템을 개발할 때 산출물을 명세화, 시각화, 문서화 할때 사용



## TDD

* 테스트 주도 개발
* Test-driven development
* 매우 짧게 개발 사이클을 반복하는 소프트웨어 개발 프로세스



1. 결함을 점검하는 자동화된 테스트 케이스를 작성
2. 케이스를 통과하기 위한 최소한의 양의 코드를 생성
3. 새 코드를 표준에 맞도록 리팩토링



## PDD

* 계획 기반 개발
* Plan-driven development
* 계획을 세우고 그 계획을 실천하는데에 많은 시간과 노력을 할애하는 개발 방법



## 형상관리

* SW개발 및 유지보수 과정에서 발생하는 소스코드, 문서, 인터페이스 등 각종 결과물에 대해 형상을 만들고, 이들 형상에 대한 변경을 체계적으로 



## 버전관리

* 형상관리의 일부
* 일반적인 소프트웨어 소스 코드만의 형상을 관리하는 것
* SVN(subbersion), Git, Mercurial,, CVS ...







------

[**학습링크**] 

* - 자료구조
    - https://goo.gl/f8O7Vo , https://goo.gl/H1CKb0
  - 알고리즘
    -  https://goo.gl/GRz6tA , https://goo.gl/qdkZIF
  - 시간복잡도 
    -  http://goo.gl/jQi2OF , http://goo.gl/rszprb , http://goo.gl/BmisjF , https://goo.gl/7XWPZc
  - 자바스크립트 관련 
    - 데이터타입( https://goo.gl/ZxhaVG )
    - 자료구조 ( https://goo.gl/czMYE8 )
  - 미닉스의 작은 이야기들 (http://minix.tistory.com/)



[ 숙제 ]

* HTTP HTTPS는 무엇이며 그 차이는?
* 국내에 공인인증서가 생긴 배경과 그 위험성은?
* 엑티브 X란?





