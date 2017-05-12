# processing

### size( x, y )

>  스케치 사이즈를 정의



### smooth() 와 noSmooth()



# 색채

### fill() 과 noFill()

>  채색
>
>  fill( 20 ); 		  한개의 매개변수를 넣으면 모노톤
>
>  fill( 255, 0 , 0 ); 세개의 매개변수를 넣으면 RGB색상으로 색을 정의한다.



### stroke() 와 noStroke()

>  테두리 정의

### - strokeWeight()

### - strokeJoin()

-  ROUND
-  BEVEL

### - strokeCap()

*  SQUARE
*  ROUND



### beginShape()

>  새로운 도형의 시작을 알림

### vertex()

>  도형을 이루는 꼭지점들의 x와 y좌표를 한 쌍씩 정의하는 데 사용된다.

### endShape()

>  해당 함수를 호출하여 도형이 완성되었음을 알린다.

```processing
endShape(CLOSE);// 매개변수로 CLOSE를 넣으면 첫번째 점과 마지막점이 연결된다.
```



# 주석

cmd + / 로 주석을 추가 및 제거가 가능하다.