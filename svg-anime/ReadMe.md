参考サイト
https://ics.media/entry/15970/


# hamberger
svgとcssでハンバーガーメニューのアニメーションを実装

svgを使う必要はあるか？cssだけでbefore,afterコンテンツでもハンバーガーは作れる。
でも直感的にsvgの記述のほうが三本線の記述はわかりやすい。

# iine
svgとcss(jqueryでクラス付与)
いいねのハート(svg画像)クリックからハート爆発、ぽよんと着地するアニメーション

これをsvg,cssだけでつくるのは実務的には非効率？謎
adobe animateで作ってしまったほうが楽？その場合クリック⇒動作のしくみはどのようにするのだろうか

# vivus-map
vivus.jsとsnap.svg.jsを利用。
svgのイラスト(街)と地図をゼロから描画するアニメーション。
vivus.jsはスクロール発火もやってくれるそう。
描画をごりごり書かかなくてすむ。まるっとおまかせできるから楽そう。
vivusで描画、snap.svgは地図描画後にピンを下ろす動作を担っている。


# vivus-simple
参考サイト
https://liginc.co.jp/394561
vivusの設定についてはligの記事サンプルがわかりやすかった。

# vivus-simple-OneByOne
参考サイト：同上
パスの描画順の確認。特にonebyoneのオプションでsvgファイルに記述したパスの順に描画されること。
