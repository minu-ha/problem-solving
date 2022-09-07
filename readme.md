This is an H1
=============
Save
This is an H1
작은제목: 문서 부제목

This is an H2
-------------
Save
This is an H2
글머리: 1~6까지만 지원

# This is a H1

## This is a H2

### This is a H3

#### This is a H4

##### This is a H5

###### This is a H6

1. 첫번째
2. 두번째
3. 세번째

* 빨강
    * 녹색
        * 파랑

2.4.1. 들여쓰기

    This is a code block.

2.4.1. 코드블럭
코드블럭은 다음과 같이 2가지 방식을 사용할 수 있습니다:

코드블럭코드("```") 을 이용하는 방법

```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

Save
public class BootSpringBootApplication {
public static void main(String[] args) {
System.out.println("Hello, Honeymon");
}
}
Save
2.5. 수평선 <hr/>
아래 줄은 모두 수평선을 만든다. 마크다운 문서를 미리보기로 출력할 때 페이지 나누기 용도로 많이 사용한다.

* * *

***

*****

- - -

---------------------------------------
Save
적용예
2.6. 링크
참조링크
[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"
Save
Link: Google

외부링크
사용문법: [Title](link)
적용예: [Google](https://google.com, "google link")
Save
Link: Google

자동연결
일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

* 외부링크: <http://example.com/>
* 이메일링크: <address@example.com>
  Save
  외부링크: http://example.com/
  이메일링크: address@example.com
  2.7. 강조
  *single asterisks*
  _single underscores_
  **double asterisks**
  __double underscores__
  ~~cancelline~~
  Save
  single asterisks
  single underscores
  double asterisks
  double underscores
  cancelline
  문장 중간에 사용할 경우에는 **띄어쓰기** 를 사용하는 것이 좋다.
  문장 중간에 사용할 경우에는 띄어쓰기를 사용하는 것이 좋다.

2.8. 이미지
![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")
Save
석촌호수 러버덕 석촌호수 러버덕

사이즈 조절 기능은 없기 때문에 <img width="" height=""></img>를 이용한다.

예

<img src="/path/to/img.jpg" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
<img src="/path/to/img.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
Save
RubberDuck
RubberDuck

2.9. 줄바꿈
3칸 이상 띄어쓰기( )를 하면 줄이 바뀐다.

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.
  이렇게

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기
  이렇게
  Save
  줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다. 이렇게

줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.
이렇게

3. 마크다운 사용기
   3.1. 위지윅(WSYWIG) 에디터
   우리가 흔하게 접하는 웹에서 사용되는 에디터(네이버, 다음, 구글 등)이 대부분 위지윅 에디터에 속하며 기본적으로 HTML을 이용하여
   스타일을 적용하여 문장을 꾸미는 형태를 취하게 된다. 그래서 하루패드와 같은 마크다운 에디터의 View 영역의 내용을 복사하여 붙여넣기를
   하면 대체적으로 View영역에서 보이는 그대로 복사되는 편이다. 다만, 붙여넣기 이후에 문장들을 수정하려고 할 떄 문제가 되는데, 이는
   스타일이 포함된 태그가 수정과정에서 변형되면서 전체적인 영향을 끼치는 탓이다. 티스토리 블로그에서는 쉽지 않고... 워드프레스의 경우에는
   마크다운으로 작성된 포스트를 HTML로 변환해주는 기능을 활용하는 것이 좋다. 결론은, 복사해서 붙여넣기하면 가급적이면 본문은 수정하지
   않는 것이 좋다.

3.2. 깃헙Github, 비트버킷Bitbucket과 요비Yobi 등
최근 유행하는 협업개발플랫폼의 경우에는 마크다운을 변환하는 컨버터 기능을 기본탑재하고 있기 때문에 마크다운 문법으로 작성한 텍스트를 그대로
복사해서 붙여넣거나 업로드하는 것만으로 마크다운의 적용이 가능하다.

3.3. MS워드 적용
View 영역의 항목을 그대로 붙여넣거나 HTML 내보내기 등으로 생성한 파일을 불러오는 형태로 사용가능하다. 적용한 헤더를 워드가 읽어드리면서
목차에 적용하기 때문에 이를 활용하면 목차까지도 손쉽게 적용이 가능해진다.

4. 정리
   마크다운은 기본문법만 알고있다면 일반 텍스트편집기에서도 손쉽게 작성이 가능한 마크업언어다. 현재 다양한 도구와 플랫폼에서 지원하고 있기
   때문에 더욱 손쉽게 스타일적용된 문서를 작성할 수 있어 점점 널리 사용되고 있다.

마크다운을 이해하고 사용하면서 쉽고 빠르게 스타일문서를 작성해보세요.

저는 Dropbox 프로를 구매해서 집-랩탑-스마트폰이 각각 연동을 시켜서 사용하고 있습니다. 드랍박스에 저장된 마크다운 문서는 Dropbox
웹서비스 상에서 제공하기 때문에 웹상에서 바로 열람할 수도 있어 링크를 걸어서 다른 사람과 공유하는 형식으로 사용하고 있다.

링크 예: Markdown 설명
