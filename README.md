# spring_vue_test

## SpringBoot&amp;vueの構築テスト

## 参照先
ソースを活用させていただいたプロジェクト：
https://github.com/ksby/ksbysample-boot-miscellaneous/tree/master/gradle-multiprj-vuejs-springboot

参照先のブログ：
https://ksby.hatenablog.com/entry/2019/05/06/090800

## sampleの概要

フロントはvueで記述されています。  
クリックを押すと、axiosにより、
Javaで設定したcode と　valueのサンプルデータを得ます。

- サンプルデータの設定場所：backend-app\src\main\java\sample\app\backendapp\controller\SampleController.java

## 環境構築(Docker)

### 注意点
「gradlew bootrun」にて、毎回行われるgradleのビルドは少々時間がかかります。(1~2分ほど)

### 手順
git cloneしたディレクトリに移動する

- docker-compose build
- docker-compose up

上記が成功すると、下記がそれぞれ立ち上がります。
- localhost:8080にSpringBootにより生成されたファイル
※ボタンをクリックすると、axiosによりjavaで設定されたサンプルデータを読み込みます。
- localhost:8081にnpmによりvueで生成されたファイル  
※現状の設定では、ボタンをクリックするとエラーとなります。

SpringBootの実行に成功すると、Dockerのログに下記画像のような大きく表示されたSpringの文字を確認できます。

![6e8c603f2e0f3d0c9937e727d651658c](https://user-images.githubusercontent.com/49136742/67176699-1f159500-f406-11e9-92da-3f41681d6559.png)


### 実際の開発・デバック手順の想定

#### Java(SpringBoot)側

- 【Springboot上でJavaのソース修正の確認方法】
    - spring_vue_test_appコンテナに入る  
    ※docker exec -it spring_vue_test_app bash
    - ./gradlew compileJavaを入力
    - SpringBootプロジェクト(localhost:8080)に、数秒でコンパイルしたソースが反映  
※この方法だと、npm buildは行っていないため、フロントの変更は反映されません。  
よって、手早くJava側の変更箇所だけ確認したい場合行う方法となります。

- 【Springboot上でJavaのソース修正&vueのソース修正の確認方法】
    - spring_vue_test_appコンテナに入る
    ※docker exec -it spring_vue_test_app bash
    - ./gradlew buildを入力
    - SpringBootプロジェクト(localhost:8080)に、1分程でJava&vueのコンパイルしたソースが反映


#### フロント側
- 【vueのソース修正の反映方法】
    - localhost:8081(npm run serveで生成)に自動反映  
基本的にfrontend-app内で、通常通りのvueでの開発を行い、ホットリロードで確認しながら実装を進めていく事が出来ます。




